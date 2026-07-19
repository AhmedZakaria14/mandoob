const fs = require('fs');
let content = fs.readFileSync('data/blogs.ts', 'utf8');

// replace href="/\d+" with href="/blog/$1"
content = content.replace(/href="\/(\d+)"/g, 'href="/blog/$1"');
content = content.replace(/href="(\d+)"/g, 'href="/blog/$1"');

fs.writeFileSync('data/blogs.ts', content);
console.log('Fixed bad links.');
