const fs = require('fs');
const content = fs.readFileSync('data/blogs.ts', 'utf8');

const posts = content.split('id: ');

console.log("\n\nArticle 35 (new):");
console.log(posts.find(p => p.startsWith('35,')).substring(0, 1500));
