const fs = require('fs');

let fileContent = fs.readFileSync('data/blogs.ts', 'utf8');

// We will parse out all articles to get their titles and slugs.
const articleRegex = /id:\s*(\d+),\s*slug:\s*'([^']+)',\s*title:\s*`([^`]+)`/g;
let match;
let articles = [];
while ((match = articleRegex.exec(fileContent)) !== null) {
    articles.push({
        id: parseInt(match[1]),
        slug: match[2],
        title: match[3]
    });
}

console.log(`Found ${articles.length} articles.`);

// Now we append a Related Articles HTML block to the end of each `content: \`...\`` block.
// But we should pick 5 different random/pseudo-random articles for each.

const contentRegex = /content:\s*`([\s\S]*?)`/g;

let articleIndex = 0;
fileContent = fileContent.replace(contentRegex, (fullMatch, contentStr) => {
    
    // Check if we already have a related articles section to avoid duplicating
    if (contentStr.includes('مقالات مختارة لك')) {
        articleIndex++;
        return fullMatch;
    }

    // Pick 5 articles that are NOT the current one.
    // To make it pseudo-random but deterministic, use the index.
    let related = [];
    for (let i = 1; i <= 6; i++) {
        let idx = (articleIndex + i * 7) % articles.length;
        if (idx !== articleIndex && related.length < 5) {
            related.push(articles[idx]);
        }
    }
    
    let relatedLinksHTML = related.map(a => 
        `<li><a href="/blog/${a.slug}" target="_blank" rel="noopener noreferrer" class="text-brand-primary font-bold hover:underline">» دليلك الشامل: ${a.title}</a></li>`
    ).join('\n    ');

    let relatedSection = `
<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-12 mb-8 shadow-sm">
  <h3 class="text-2xl font-black text-brand-secondary mb-4 border-r-[4px] border-brand-primary pr-4">مقالات مختارة لك (روابط تهمك)</h3>
  <ul class="space-y-3">
    ${relatedLinksHTML}
  </ul>
</div>`;

    articleIndex++;
    return `content: \`${contentStr}\n${relatedSection}\``;
});

fs.writeFileSync('data/blogs.ts', fileContent);
console.log('Related links section added to content.');
