import React from 'react';
import { packages } from '@/data/packages';
import { blogPosts } from '@/data/blogs';
import { Header, Footer } from '@/components/LayoutComponents';
import { Slideshow } from '@/components/Slideshow';
import { BookingForm } from '@/components/BookingForm';
import { FAQSection } from '@/components/FAQ';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تأسيس وتركيب إنترنت زين | عروض 5G والألياف البصرية',
  description: 'احصل على أفضل خدمات وعروض زين لإنترنت 5G والألياف البصرية. تأسيس سريع، مودم مجاني، وباقات مميزة لتغطية شاملة في كافة أحياء الرياض والمملكة. اتصل بمندوب زين.',
  alternates: {
    canonical: 'https://www.xn-----ctdcm0aqck5plajre8a.com/',
  }
};

export default function Home() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": "https://www.xn-----ctdcm0aqck5plajre8a.com/"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        {/* Schema.org for Local Business / Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "تأسيس وتركيب إنترنت 5G وألياف بصرية",
              "name": "مبيعات زين 5G وألياف",
              "provider": {
                "@type": "Organization",
                "name": "مبيعات زين 5G وألياف",
                "telephone": "+966596620358",
                "image": `https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279051/logo_qeuexm.png`
              },
              "areaServed": "المملكة العربية السعودية",
              "description": "خدمات تأسيس وتركيب إنترنت زين 5G والألياف البصرية للمنازل في مدينة الرياض وكافة أنحاء السعودية بأفضل العروض لتجربة تصفح أسرع.",
              "url": process.env.APP_URL || 'https://example.com',
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "باقات زين المتاحة",
                "itemListElement": packages.map((pkg, idx) => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": pkg.title,
                    "description": pkg.subtitle
                  },
                  "price": pkg.price,
                  "priceCurrency": "SAR",
                  "url": process.env.APP_URL || 'https://example.com'
                }))
              }
            })
          }}
        />

        {/* Hero Section with Slideshow and Booking Form */}
        <section className="bg-brand-gray pt-10 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 text-center lg:text-right space-y-6 flex flex-col justify-center">
              <h1 className="text-4xl md:text-[58px] font-bold text-[#444] mb-6 leading-tight">
                إنترنت <span className="text-brand-primary font-black">زين 5G</span> المنزلي
              </h1>
              <p className="text-lg md:text-2xl text-gray-500 mb-8 leading-relaxed font-sans">
                أفضل عروض 5G والألياف البصرية المتطورة مع تأسيس وتركيب مجاني في كافة أحياء المملكة عبر مندوبنا المعتمد.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a 
                  href="https://wa.me/966596620358?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%B9%D8%B1%D9%88%D8%B6%20%D8%B2%D9%8A%D9%86" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-primary hover:bg-[#85ad1b] text-white px-8 py-4 rounded-full font-bold text-xl inline-flex items-center justify-center gap-2 transition shadow-[0_10px_20px_rgba(149,193,31,0.3)] w-full sm:w-auto"
                >
                  <span>طلب عبر الواتساب</span>
                </a>
                <a 
                  href="tel:0596620358" 
                  className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-4 rounded-full font-bold text-xl inline-flex items-center justify-center transition shadow-sm bg-white/50 backdrop-blur-sm w-full sm:w-auto"
                >
                  <span dir="ltr">0596620358</span>
                </a>
              </div>
              
              <div className="hidden lg:block mt-12 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <Slideshow />
              </div>
            </div>
            
            <div className="lg:col-span-5 w-full mt-10 lg:mt-0 relative">
              <BookingForm />
            </div>

            <div className="lg:hidden col-span-1 mt-10 w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <Slideshow />
            </div>

          </div>
        </section>
        {/* Services Section (.icon-box Style) */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center pb-12">
              <h2 className="text-3xl font-bold text-brand-primary uppercase mb-5 relative inline-block pb-5">
                خدماتنا المميزة
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[3px] bg-brand-primary"></span>
                <span className="absolute bottom-[1px] left-1/2 -translate-x-1/2 w-[120px] h-[1px] bg-gray-300"></span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-12 rounded shadow-[0px_0_25px_0_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 group">
                <div className="text-6xl mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-300 origin-bottom">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-[#444] transition-colors hover:text-brand-primary cursor-pointer w-fit">
                  إنترنت 5G منزلي
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  احصل على راوتر الجيل الخامس 5G لسرعات إنترنت غير مسبوقة. تغطية ممتازة لجميع أرجاء المنزل ومناسبة للألعاب والبث بدقة 4K بدون تقطيع.
                </p>
              </div>
              
              <div className="bg-white p-12 rounded shadow-[0px_0_25px_0_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 group">
                 <div className="text-6xl mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-300 origin-bottom">⚡</div>
                 <h3 className="text-2xl font-bold mb-4 text-[#444] transition-colors hover:text-brand-primary cursor-pointer w-fit">
                   ألياف بصرية (فايبر)
                 </h3>
                 <p className="text-gray-500 leading-relaxed">
                   استقرار تام وسرعات مطابقة مع باقات الألياف البصرية. الخيار الأمثل للمنازل الذكية والعائلات ذات الاستهلاك العالي.
                 </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing equivalent section (.priceBox Style) */}
        <section className="py-20 bg-brand-gray border-t border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="text-center pb-12">
              <h2 className="text-3xl font-bold text-brand-primary uppercase mb-5 relative inline-block pb-5">
                باقات الإنترنت المتاحة
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[3px] bg-brand-primary"></span>
                <span className="absolute bottom-[1px] left-1/2 -translate-x-1/2 w-[120px] h-[1px] bg-gray-300"></span>
              </h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
              {packages.map((pkg) => (
                <div key={pkg.id} className={`flex-1 min-w-[300px] max-w-[400px] bg-[#f3f3f3] bg-gradient-to-b from-white/15 to-transparent rounded-[30px] p-6 sm:p-10 transition-all duration-500 hover:scale-105 border-t-4 text-center group relative z-10 border-x border-b ${pkg.isPopular ? 'border-brand-primary shadow-[4px_4px_0_0_#95c11f] md:shadow-[7px_7px_0_0_#95c11f] hover:shadow-[7px_7px_0_0_#c4eb5c] border-gray-200 hover:bg-white' : 'border-gray-400 shadow-[4px_4px_0_0_#d1d5db] md:shadow-[7px_7px_0_0_#d1d5db] hover:shadow-[7px_7px_0_0_#9ca3af] border-gray-200 hover:bg-white'}`}>
                  {pkg.isPopular && (
                    <div className="absolute top-4 -right-8 overflow-hidden bg-brand-primary text-white text-center -rotate-45 shadow-sm px-8 py-1 origin-center border border-gray-100 font-bold block text-sm sm:text-base">
                      الأكثر طلباً
                    </div>
                  )}
                  <h3 className="font-bold text-xl sm:text-2xl text-[#262626] mb-2">{pkg.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 min-h-[40px]">{pkg.subtitle}</p>
                  
                  <h4 className="text-brand-secondary mb-6 flex flex-row-reverse justify-center items-baseline border-b border-gray-200 pb-6">
                    <span className="text-lg sm:text-xl pt-8 text-[#191b8a] flex items-center justify-center gap-1">
                      <span>/{pkg.period}</span>
                      <svg viewBox="0 0 1086 1114" className="w-5 h-5 fill-current shrink-0 -mb-1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M699.62 1113.02c-20.06 44.48-33.32 92.75-38.4 143.37l424.51-90.24c20.06-44.47 33.31-92.75 38.4-143.37zM1085.73 895.8c20.06-44.47 33.32-92.75 38.4-143.37l-330.68 70.33v-135.2l292.27-62.11c20.06-44.47 33.32-92.75 38.4-143.37l-330.68 70.27V66.13c-50.67 28.45-95.67 66.32-132.25 110.99v403.35l-132.25 28.11V0c-50.67 28.44-95.67 66.32-132.25 110.99v525.69l-295.91 62.88c-20.06 44.47-33.33 92.75-38.42 143.37l334.33-71.05v170.26l-358.3 76.14c-20.06 44.47-33.32 92.75-38.4 143.37l375.04-79.7c30.53-6.35 56.77-24.4 73.83-49.24l68.78-101.97c7.14-10.55 11.3-23.27 11.3-36.97V743.77l132.25-28.11v270.4l424.53-90.28Z"></path>
                      </svg>
                    </span>
                    <span className="font-black text-[50px] sm:text-[70px] px-2 leading-none text-[#191b8a]">{pkg.price}</span>
                  </h4>
                  
                  <ul className="text-right text-gray-500 space-y-0 mb-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative">
                     <span className="absolute -top-3 right-4 bg-brand-light text-brand-primary font-bold px-2 py-0.5 rounded text-xs">أبرز المميزات</span>
                    {pkg.highlights.map((hlt, idx) => (
                      <li key={idx} className="flex items-center gap-3 font-bold text-black border-b border-gray-100 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0">
                        <span className="text-brand-primary shrink-0 text-xl font-sans">✓</span> 
                        <span className="flex-1">
                          {hlt.split("ر.س").map((part, partIdx, arr) => (
                            <React.Fragment key={partIdx}>
                              {part}
                              {partIdx < arr.length - 1 && (
                                <svg viewBox="0 0 1086 1114" className="w-4 h-4 fill-current inline-block mx-1 mb-1 shadow-sm opacity-90" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M699.62 1113.02c-20.06 44.48-33.32 92.75-38.4 143.37l424.51-90.24c20.06-44.47 33.31-92.75 38.4-143.37zM1085.73 895.8c20.06-44.47 33.32-92.75 38.4-143.37l-330.68 70.33v-135.2l292.27-62.11c20.06-44.47 33.32-92.75 38.4-143.37l-330.68 70.27V66.13c-50.67 28.45-95.67 66.32-132.25 110.99v403.35l-132.25 28.11V0c-50.67 28.44-95.67 66.32-132.25 110.99v525.69l-295.91 62.88c-20.06 44.47-33.33 92.75-38.42 143.37l334.33-71.05v170.26l-358.3 76.14c-20.06 44.47-33.32 92.75-38.4 143.37l375.04-79.7c30.53-6.35 56.77-24.4 73.83-49.24l68.78-101.97c7.14-10.55 11.3-23.27 11.3-36.97V743.77l132.25-28.11v270.4l424.53-90.28Z"></path>
                                </svg>
                              )}
                            </React.Fragment>
                          ))}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <ul className="text-right text-sm text-gray-400 space-y-2 mb-8 px-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                         <span className="shrink-0 mt-0.5 text-xs text-brand-secondary">✦</span>
                         <span>
                           {feature.split("ر.س").map((part, partIdx, arr) => (
                             <React.Fragment key={partIdx}>
                               {part}
                               {partIdx < arr.length - 1 && (
                                 <svg viewBox="0 0 1086 1114" className="w-3 h-3 fill-current inline-block mx-0.5 mb-0.5 shadow-sm opacity-90" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M699.62 1113.02c-20.06 44.48-33.32 92.75-38.4 143.37l424.51-90.24c20.06-44.47 33.31-92.75 38.4-143.37zM1085.73 895.8c20.06-44.47 33.32-92.75 38.4-143.37l-330.68 70.33v-135.2l292.27-62.11c20.06-44.47 33.32-92.75 38.4-143.37l-330.68 70.27V66.13c-50.67 28.45-95.67 66.32-132.25 110.99v403.35l-132.25 28.11V0c-50.67 28.44-95.67 66.32-132.25 110.99v525.69l-295.91 62.88c-20.06 44.47-33.33 92.75-38.42 143.37l334.33-71.05v170.26l-358.3 76.14c-20.06 44.47-33.32 92.75-38.4 143.37l375.04-79.7c30.53-6.35 56.77-24.4 73.83-49.24l68.78-101.97c7.14-10.55 11.3-23.27 11.3-36.97V743.77l132.25-28.11v270.4l424.53-90.28Z"></path>
                                 </svg>
                               )}
                             </React.Fragment>
                           ))}
                         </span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href={`https://wa.me/966596620358?text=${encodeURIComponent('السلام عليكم، أريد الاشتراك في باقة ' + pkg.title)}`} target="_blank" rel="noopener noreferrer" className={`inline-block px-8 py-4 rounded-full font-bold transition-all shadow-sm w-full ${pkg.isPopular ? 'bg-brand-primary text-white hover:bg-brand-secondary' : 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white bg-white'}`}>
                    أطلب الآن
                  </a>
                  <p className="text-[10px] text-gray-400 mt-4 leading-tight">{pkg.terms_and_conditions}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Gallery Section */}
        <section id="gallery" className="py-20 bg-white border-t border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="text-center pb-12">
              <h2 className="text-3xl font-bold text-[#333] mb-4 relative inline-block">
                معرض أعمالنا في التركيبات والتأسيس
                <span className="block w-1/2 h-1 bg-brand-primary mx-auto mt-2"></span>
              </h2>
              <p className="text-gray-500 text-lg">جانب من أعمال تركيب بوكسات الألياف البصرية وتأسيس شبكات زين فايبر بأعلى معايير الجودة.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777461697/zain_fiber_rdqmd6.jpg", alt: "تركيب بوكسات ألياف بصرية لشركة زين فايبر" },
                { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777461698/WhatsApp_Image_2026-04-28_at_2.57.08_PM_z4ytos.jpg", alt: "تأسيس وإنشاء شبكات الألياف البصرية وزين فايبر" },
                { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777461697/WhatsApp_Image_2026-04-28_at_2.57.08_PM_2_ztdosg.jpg", alt: "تمديد كابلات وتجهيز بوكسات الألياف البصرية زين" },
                { src: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777461697/WhatsApp_Image_2026-04-28_at_2.57.08_PM_1_luo5ux.jpg", alt: "مندوب وموظف تركيب الألياف البصرية فايبر من زين" }
              ].map((img, idx) => (
                <div key={idx} className="relative h-[250px] md:h-[300px] w-full rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image 
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-bold text-sm leading-tight drop-shadow-md">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts & SEO Section */}
        <section id="blog" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center pb-12">
              <h2 className="text-3xl font-bold mb-4 relative inline-block text-[#333]">
                المدونة وعروض زين فايبر
                <span className="block w-1/2 h-1 bg-brand-primary mx-auto mt-2"></span>
              </h2>
              <p className="text-gray-500 text-lg">أحدث المقالات والمعلومات لتأسيس إنترنت زين 5G والألياف البصرية.</p>
            </div>
            
            {/* Featured Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
              {blogPosts.map((post) => (
                <div key={post.id} className="w-full h-full">
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden group flex flex-col h-full md:hover:shadow-xl transition-shadow duration-300">
                    <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="block relative">
                      <div className="relative h-[220px] w-full overflow-hidden bg-gray-100">
                        <Image 
                          src={post.imageUrl}
                          alt={`${post.title} - عروض وباقات زين للإنترنت المنزلي 5G والألياف البصرية`} 
                          fill
                          className="object-cover transition-transform duration-500 md:group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-0 right-0 bg-brand-primary text-white font-bold text-xl px-4 py-2 rounded-bl-xl shadow-md z-10 border-b border-l border-white/20">
                          مقال حصري
                        </div>
                      </div>
                    </Link>
                    <div className="p-6 flex flex-col flex-grow relative">
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-bold text-[#333] mb-3 leading-snug md:hover:text-brand-primary transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                        تعرف على أحدث عروض وباقات الإنترنت المنزلي من شركة زين، شاملة تفاصيل التأسيس المجاني والراوتر بدون رسوم، والتغطية الشاملة للجيل الخامس 5G والألياف البصرية.
                      </p>
                      <div className="text-left mt-auto border-t border-gray-100 pt-4">
                        <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-brand-primary font-bold hover:text-brand-secondary transition-colors text-sm">
                          اقرأ المزيد <span className="mr-1 text-lg leading-none">←</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Keyword-Rich SEO Content */}
            <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <h3 className="text-2xl font-black text-brand-secondary mb-6 flex items-center gap-3">
                <span className="text-brand-primary">✦</span> الدليل الشامل لخدمات زين 5G والألياف البصرية (زين فايبر)
              </h3>
              
              <div className="prose prose-lg text-gray-600 font-medium leading-loose space-y-6">
                <p>
                  يُعد البحث عن <strong className="text-brand-primary">أفضل إنترنت منزلي</strong> خطوة حاسمة للتمتع بتجربة تصفح سلسة، وهنا تبرز <strong className="text-brand-secondary">عروض زين 5G</strong> وخدمات <strong className="text-brand-secondary">زين فايبر (الألياف البصرية)</strong> كأفضل الحلول في السوق السعودي. نوفر لك <strong className="text-[#333]">تأسيس وتركيب إنترنت 5G مجاني</strong> بالكامل مع <strong className="text-brand-primary">راوتر مجاني</strong> عند الاشتراك في إحدى <strong className="text-[#333]">باقات زين المفتوحة واللامحدودة</strong>.
                </p>
                <p>
                  من خلال التواصل المباشر مع <strong className="text-brand-secondary">مندوب مبيعات زين</strong> أو <strong className="text-[#333]">موظف زين المعتمد</strong>، يمكنك طلب <strong className="text-brand-primary">تأسيس الألياف البصرية</strong> لمنزلك بأعلى معايير الجودة المتمثلة في سرعات تصل إلى <strong className="text-brand-secondary">1000 ميجابت (1 جيجا)</strong> والتي توفر تجربة خيالية في الألعاب (Gaming) والبث بدقة 4K بدون أي انقطاع. نحن نوفر <strong className="text-[#333]">تركيب بوكسات ألياف بصرية</strong> و <strong className="text-brand-primary">تمديد كابلات فايبر</strong> في أسرع وقت بواسطة فريق <strong className="text-[#333]">مندوب زين الفني</strong> المتميز.
                </p>
                <p>
                  سواء كنت تتواجد في الرياض، جدة، الدمام، أو أي مدينة أخرى تتطلع إلى <strong className="text-[#333]">اشتراك زين فايبر</strong>، فإننا نغطي أفضل الأحياء والمناطق لضمان استقرار الشبكة. 
                  تشمل كلمات البحث الشائعة للوصول لخدماتنا: <strong className="text-gray-400 font-normal">الإنترنت المنزلي من زين، نت مفتوح وسرعة لامحدودة، باقة زين 5G المفتوحة ٢٩٩، اشتراك شاهد مجاني ومقوي شبكة، تغطية الألياف البصرية، ارقام مناديب زين، فني تركيب راوتر زين، تفعيل زين 5G المنزلية، باقة 300 ميجابت بلس، باقة 500 بريميوم، أرخص نت منزلي لامحدود، تأسيس خط فايبر، رقم موظف زين للنت</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

      </main>
      
      <Footer />
    </div>
  );
}
