const fs = require('fs');
const content = fs.readFileSync('data/blogs.ts', 'utf8');

const regex = /id:\s*(\d+),\s*slug:\s*'([^']+)',\s*title:\s*`([^`]+)`,\s*seoTitle.*?\s*imageUrl:[^,]+,\s*content:\s*`([\s\S]*?)`/g;

let match;
let count = 0;
while ((match = regex.exec(content)) !== null) {
  count++;
  if (match[1] == "1" || match[1] == "25") {
    console.log(`\n\n--- ARTICLE ID ${match[1]} ---`);
    console.log(match[4].substring(0, 800));
  }
}
