const fs = require('fs');

let content = fs.readFileSync('data/blogs.ts', 'utf8');

// Regex for title and seoTitle
const titleRegex = /title:\s*`([^`]+)`/g;
const seoTitleRegex = /seoTitle:\s*`([^`]+)`/g;

content = content.replace(titleRegex, (match, title) => {
    if (!title.includes('0596620358') && !title.includes('0575010603')) {
        return `title: \`${title} | 0596620358\``;
    }
    return match;
});

content = content.replace(seoTitleRegex, (match, title) => {
    if (!title.includes('0596620358') && !title.includes('0575010603')) {
        return `seoTitle: \`${title} | 0596620358\``;
    }
    return match;
});

fs.writeFileSync('data/blogs.ts', content);
console.log('Titles updated.');
