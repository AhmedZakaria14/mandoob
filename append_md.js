const fs = require('fs');
const { marked } = require('marked');

// We have new_articles.md, new_articles_2.md, new_articles_4.md
const files = ['new_articles.md', 'new_articles_2.md', 'new_articles_4.md'];

let newBlogs = [];
let currentId = 28; // Since 27 is the max currently

files.forEach(file => {
  if (fs.existsSync(file)) {
    const text = fs.readFileSync(file, 'utf8');
    const articles = text.split('وصف الميتا:').filter(a => a.trim() !== '');
    
    articles.forEach(articleText => {
      const lines = articleText.split('\n');
      let metaDesc = lines[0].trim();
      
      let title = "";
      let mdContent = "";
      
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (line.startsWith('# ')) {
          title = line.replace('# ', '').trim();
        } else if (title) { // after title
          mdContent += line + '\n';
        }
      }
      
      if (title && mdContent) {
        // Convert to HTML
        let htmlContent = marked.parse(mdContent);
        
        // Add a simple TOC
        const headings = [...htmlContent.matchAll(/<h2(.*?)>(.*?)<\/h2>/g)];
        if (headings.length > 0) {
          let tocHTML = `<div class="toc" style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px;"><h3>محتويات المقال</h3><ul>`;
          headings.forEach((h, index) => {
            const id = `heading-${index}`;
            htmlContent = htmlContent.replace(h[0], `<h2 id="${id}"${h[1]}>${h[2]}</h2>`);
            // remove tags from text
            const textContent = h[2].replace(/<[^>]*>?/gm, '');
            tocHTML += `<li><a href="#${id}" style="color: #007bff; text-decoration: none;">${textContent}</a></li>`;
          });
          tocHTML += `</ul></div>`;
          
          htmlContent = tocHTML + htmlContent;
        }

        // Add a call to action if missing
        if (!htmlContent.includes('0596620358') && !htmlContent.includes('اتصل بنا')) {
           htmlContent += `<h2>اطلب خدمتك الآن</h2>
           <p>للتواصل وطلب خدمة زين، يرجى الاتصال على المندوب المعتمد: 0596620358</p>`;
        }

        htmlContent += `\n<a href="tel:0596620358" class="call-btn">
    <div style="background: #25D366; color: white; padding: 15px 30px; border-radius: 50px; font-size: 1.5rem; font-weight: bold; text-align: center; display: inline-block;">
    اتصل بنا الآن 0596620358
    </div>
</a>`;

        newBlogs.push({
          id: currentId++,
          slug: String(currentId - 1),
          title: title,
          seoTitle: title,
          seoDescription: metaDesc,
          keywords: ['عروض زين', 'مندوب زين', 'راوتر 5g', 'انترنت منزلي'],
          imageUrl: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279248/%D9%85%D9%86%D8%AF%D9%88%D8%A8_%D8%B4%D8%B1%D9%83%D8%A9_%D8%B2%D9%8A%D9%86_%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6_nppqfj.png',
          content: htmlContent,
          date: '2026-07-19'
        });
      }
    });
  }
});

console.log(`Parsed ${newBlogs.length} new articles.`);

// Now we need to append them to data/blogs.ts
const blogsFile = 'data/blogs.ts';
let blogsContent = fs.readFileSync(blogsFile, 'utf8');

// Find the end of the array
const arrayEndIndex = blogsContent.lastIndexOf('];');

if (arrayEndIndex !== -1) {
  let appendString = "";
  
  newBlogs.forEach(b => {
    
    // Add internal links randomly to some previous articles
    const linkId = Math.floor(Math.random() * 25) + 1; 
    const linkText = "تعرف أيضا على عروض زين المميزة";
    b.content += `\n<h3>روابط ذات صلة</h3><p><a href="/${linkId}">${linkText}</a></p>`;

    appendString += `  {
    id: ${b.id},
    slug: '${b.slug}',
    title: \`${b.title.replace(/`/g, '\\`')}\`,
    seoTitle: \`${(b.seoTitle || b.title).replace(/`/g, '\\`')}\`,
    seoDescription: \`${(b.seoDescription || '').replace(/`/g, '\\`')}\`,
    keywords: [${(b.keywords || []).map(k => `'${k.replace(/'/g, "\\'")}'`).join(', ')}],
    imageUrl: '${b.imageUrl || ''}',
    content: \`${(b.content || '').replace(/`/g, '\\`')}\`,
    date: '${b.date || ''}'
  },
`;
  });
  
  const finalContent = blogsContent.substring(0, arrayEndIndex) + appendString + "];";
  fs.writeFileSync(blogsFile, finalContent, 'utf8');
  console.log("Successfully appended new articles to data/blogs.ts");
} else {
  console.log("Could not find end of array in data/blogs.ts");
}
