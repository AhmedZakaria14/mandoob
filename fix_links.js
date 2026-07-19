const fs = require('fs');
let content = fs.readFileSync('data/blogs.ts', 'utf8');

// Replace all <a href="/blog/..." with <a target="_blank" rel="noopener noreferrer" href="/blog/..."
// But avoid replacing if it already has target="_blank"
content = content.replace(/<a([^>]*)href="\/blog\/([^"]+)"([^>]*)>/g, (match, p1, p2, p3) => {
    if (match.includes('target="_blank"')) return match;
    return `<a target="_blank" rel="noopener noreferrer"${p1}href="/blog/${p2}"${p3}>`;
});

fs.writeFileSync('data/blogs.ts', content);
console.log('Done!');
