const fs = require('fs');
const content = fs.readFileSync('data/blogs.ts', 'utf8');

const posts = content.split('id: ');

const p35 = posts.find(p => p.startsWith('35,'));
console.log(p35.substring(p35.length - 1500));
