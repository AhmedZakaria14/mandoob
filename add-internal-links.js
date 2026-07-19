const fs = require('fs');

let fileContent = fs.readFileSync('data/blogs.ts', 'utf8');

// We need to parse out the articles. Since it's a TS file with a complex structure, we can do some regex matching, but it might be brittle.
// Let's use a simpler approach: we have 39 articles.
// I will create a mapping of keywords to slugs.

const keywordMapping = [
    { text: "مندوب زين", slug: "1" },
    { text: "باقات انترنت منزلي", slug: "2" },
    { text: "عروض زين", slug: "3" },
    { text: "زين فايبر", slug: "4" },
    { text: "راوتر زين", slug: "5" },
    { text: "5G والفايبر", slug: "6" },
    { text: "الإنترنت المفتوح", slug: "7" },
    { text: "ألياف زين الملقا", slug: "8" },
    { text: "ألياف زين السعادة", slug: "9" },
    { text: "ألياف بصرية فى النسيم الغربي", slug: "13" },
    { text: "ألياف بصرية فى ظهرات لبن", slug: "14" },
    { text: "ألياف بصرية فى طويق", slug: "15" },
    { text: "إنترنت 5G في الشفا", slug: "19" },
    { text: "تغطية زين 5G", slug: "22" },
    { text: "تركيب زين فايبر", slug: "23" },
    { text: "تأسيس انترنت زين", slug: "24" },
    { text: "أفضل باقات زين", slug: "25" },
    { text: "باقات زين المفتوحة", slug: "31" },
    { text: "تقنية 5G", slug: "32" },
    { text: "الالياف البصرية", slug: "33" },
    { text: "سرعة الانترنت", slug: "34" },
    { text: "مودم زين", slug: "35" },
    { text: "خدمة العملاء زين", slug: "38" }
];

// In the `content: \`...\`` blocks, we will replace the first occurrence of these keywords with a link.
// To avoid breaking HTML, we only replace text that is NOT inside an HTML tag.

const contentRegex = /content:\s*`([\s\S]*?)`/g;

fileContent = fileContent.replace(contentRegex, (match, contentStr) => {
    let newContentStr = contentStr;
    
    // For each keyword, replace the first occurrence (that isn't already inside an <a> tag)
    keywordMapping.forEach(kw => {
        // Regex to find the keyword not inside <...>. 
        // A simple way is to use a replacer function that checks context, or a regex that looks ahead.
        // (?![^<]*>) ensures we are not inside a tag.
        // (?<!<a[^>]*>.*) is too complex for JS regex without variable length lookbehind.
        
        // Instead, let's split by '<a' and '</a>', and only replace in the outside parts.
        let parts = newContentStr.split(/(<a[\s\S]*?<\/a>|<[^>]+>)/g);
        let replaced = false;
        
        for (let i = 0; i < parts.length; i++) {
            if (replaced) break;
            
            // Skip HTML tags and anchor tags
            if (parts[i].startsWith('<')) continue;
            
            let keywordRegex = new RegExp(`(${kw.text})`, 'i');
            if (keywordRegex.test(parts[i])) {
                parts[i] = parts[i].replace(keywordRegex, `<a href="/blog/${kw.slug}" target="_blank" rel="noopener noreferrer" class="text-brand-primary font-bold underline hover:text-brand-secondary">$1</a>`);
                replaced = true;
            }
        }
        
        newContentStr = parts.join('');
    });
    
    return `content: \`${newContentStr}\``;
});

fs.writeFileSync('data/blogs.ts', fileContent);
console.log('Internal links added to content.');
