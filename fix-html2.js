const fs = require('fs');
const cheerio = require('cheerio');

let content = fs.readFileSync('data/blogs.ts', 'utf8');
const articleRegex = /id:\s*(\d+),[\s\S]*?content:\s*`([\s\S]*?)`/g;

content = content.replace(articleRegex, (match, id, html) => {
    // We can process all articles actually to ensure consistency, but let's just do 8 to 39 again.
    // However, if we process 8 to 39, we want to make sure it's 100% consistent with 1-7.
    // 1-7 don't have .toc, their structure is manual.
    // So let's just do it for 8 to 39.
    if (parseInt(id) < 8) return match;

    const $ = cheerio.load(html, null, false);
    
    // First, generic replacements
    $('h2').each((i, el) => {
        $(el).removeAttr('style');
        $(el).attr('class', 'text-3xl font-black text-brand-secondary mt-12 mb-6 border-r-[5px] border-brand-primary pr-5 bg-gray-50 py-3 rounded-l-xl shadow-sm');
    });

    $('h3').each((i, el) => {
        if (!$(el).text().includes('مقالات مختارة لك') && !$(el).text().includes('جدول محتويات المقال') && !$(el).text().includes('محتويات المقال')) {
            $(el).removeAttr('style');
            $(el).attr('class', 'text-2xl font-bold text-brand-secondary mt-8 mb-4');
        }
    });

    $('p').each((i, el) => {
        $(el).removeAttr('style');
        $(el).attr('class', 'text-gray-700 leading-relaxed mb-4');
    });

    $('ul').each((i, el) => {
        // if not related articles
        if ($(el).has('li > a:contains("دليلك الشامل")').length === 0) {
            $(el).removeAttr('style');
            $(el).attr('class', 'list-disc list-inside space-y-2 text-gray-700 mb-6');
            $(el).find('li').each((j, li) => {
                $(li).removeAttr('style');
            });
        }
    });

    $('a').each((i, el) => {
        if ($(el).text().includes('دليلك الشامل')) return;
        
        $(el).removeAttr('style');
        
        // If it's a heading link in the TOC
        if ($(el).attr('href') && $(el).attr('href').startsWith('#')) {
            $(el).attr('class', 'hover:underline');
        } else {
            $(el).attr('class', 'text-brand-primary font-bold underline hover:text-brand-secondary');
            if ($(el).attr('href') && $(el).attr('href').startsWith('/blog')) {
                $(el).attr('target', '_blank');
                $(el).attr('rel', 'noopener noreferrer');
            }
        }
    });

    // Now fix the TOC div specifically
    // Look for the div that contains 'محتويات المقال' or 'جدول محتويات المقال'
    const $toc = $('div').filter(function() {
        return $(this).text().includes('محتويات المقال') && $(this).children('h3').length > 0;
    });

    if ($toc.length > 0) {
        $toc.removeAttr('style');
        $toc.attr('class', 'bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8 shadow-sm');
        
        const $tocH3 = $toc.find('h3');
        $tocH3.text('جدول محتويات المقال');
        $tocH3.attr('class', 'text-xl font-black text-brand-secondary mb-4');

        const $tocUl = $toc.find('ul');
        $tocUl.attr('class', 'space-y-2 text-brand-primary font-bold list-disc list-inside');
    }

    $('strong, b').each((i, el) => {
        $(el).removeAttr('style');
    });

    let newHtml = $.html();
    return match.replace(html, newHtml);
});

fs.writeFileSync('data/blogs.ts', content);
console.log('Fixed HTML structures pass 2.');
