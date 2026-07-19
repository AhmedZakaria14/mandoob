const fs = require('fs');
const cheerio = require('cheerio');

let content = fs.readFileSync('data/blogs.ts', 'utf8');

// Regex to find each article
const articleRegex = /id:\s*(\d+),[\s\S]*?content:\s*`([\s\S]*?)`/g;

content = content.replace(articleRegex, (match, id, html) => {
    // Only process articles 8 to 39
    if (parseInt(id) < 8) return match;

    const $ = cheerio.load(html, null, false);
    
    // 1. Table of Contents
    const $toc = $('.toc');
    if ($toc.length > 0) {
        $toc.removeAttr('style');
        $toc.attr('class', 'bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8 shadow-sm');
        
        const $tocH3 = $toc.find('h3');
        $tocH3.removeAttr('style');
        $tocH3.text('جدول محتويات المقال');
        $tocH3.attr('class', 'text-xl font-black text-brand-secondary mb-4');

        const $tocUl = $toc.find('ul');
        $tocUl.removeAttr('style');
        $tocUl.attr('class', 'space-y-2 text-brand-primary font-bold list-disc list-inside');

        $toc.find('a').each((i, el) => {
            $(el).removeAttr('style');
            $(el).attr('class', 'hover:underline');
        });
    }

    // 2. Headings
    $('h2').each((i, el) => {
        $(el).removeAttr('style');
        $(el).attr('class', 'text-3xl font-black text-brand-secondary mt-12 mb-6 border-r-[5px] border-brand-primary pr-5 bg-gray-50 py-3 rounded-l-xl shadow-sm');
    });

    $('h3:not(.toc h3):not(:contains("مقالات مختارة لك"))').each((i, el) => {
        $(el).removeAttr('style');
        $(el).attr('class', 'text-2xl font-bold text-brand-secondary mt-8 mb-4');
    });

    // 3. Paragraphs
    $('p').each((i, el) => {
        $(el).removeAttr('style');
        $(el).attr('class', 'text-gray-700 leading-relaxed mb-4');
    });

    // 4. Lists (excluding TOC and related articles)
    $('ul:not(.toc ul):not(:has(li > a:contains("دليلك الشامل")))').each((i, el) => {
        $(el).removeAttr('style');
        $(el).attr('class', 'list-disc list-inside space-y-2 text-gray-700 mb-6');
        
        // Let's check if the ul has a list-style-type inline, remove it.
        $(el).find('li').each((j, li) => {
            $(li).removeAttr('style');
        });
    });

    // 5. Internal Links inside paragraphs or lists
    $('a').each((i, el) => {
        // If it's a TOC link, skip
        if ($(el).parents('.toc').length > 0) return;
        // If it's a related article link, skip
        if ($(el).text().includes('دليلك الشامل')) return;
        
        $(el).removeAttr('style');
        $(el).attr('class', 'text-brand-primary font-bold underline hover:text-brand-secondary');
        // Make sure target blank is preserved or added if it goes to /blog
        if ($(el).attr('href') && $(el).attr('href').startsWith('/blog')) {
            $(el).attr('target', '_blank');
            $(el).attr('rel', 'noopener noreferrer');
        }
    });
    
    // Also, some new articles might have strong/b tags with inline styles, remove them
    $('strong, b').each((i, el) => {
        $(el).removeAttr('style');
    });

    let newHtml = $.html();
    
    // return the match with replaced html
    return match.replace(html, newHtml);
});

fs.writeFileSync('data/blogs.ts', content);
console.log('Fixed HTML structures.');
