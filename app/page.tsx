import { packages } from '@/data/packages';
import { blogPosts } from '@/data/blogs';
import { Header, Footer } from '@/components/LayoutComponents';
import { Slideshow } from '@/components/Slideshow';
import { FAQSection } from '@/components/FAQ';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تأسيس وتركيب إنترنت زين | عروض 5G والألياف البصرية',
  description: 'احصل على أفضل خدمات وعروض زين لإنترنت 5G والألياف البصرية. تأسيس سريع، مودم مجاني، وباقات مميزة لتغطية شاملة في كافة أحياء الرياض والمملكة. اتصل بمندوب زين.',
  alternates: {
    canonical: process.env.APP_URL ? `${process.env.APP_URL}/` : '/',
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Schema.org for Local Business / Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "تأسيس وتركيب إنترنت 5G وألياف بصرية",
              "provider": {
                "@type": "Organization",
                "name": "مبيعات زين 5G وألياف",
                "telephone": "+966596620358",
                "image": `https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279051/logo_qeuexm.png`
              },
              "areaServed": "المملكة العربية السعودية",
              "description": "خدمات تأسيس وتركيب إنترنت زين 5G والألياف البصرية للمنازل في مدينة الرياض وكافة أنحاء السعودية بأفضل العروض لتجربة تصفح أسرع.",
              "url": process.env.APP_URL || 'https://example.com'
            })
          }}
        />

        {/* Hero Section with Slideshow */}
        <section className="bg-brand-gray pt-10 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-right space-y-6">
              <h1 className="text-4xl md:text-[58px] font-bold text-[#444] mb-6 leading-tight">
                إنترنت <span className="text-brand-primary font-black">زين 5G</span> المنزلي
              </h1>
              <p className="text-lg md:text-2xl text-gray-500 mb-10 leading-relaxed font-sans">
                أفضل عروض 5G والألياف البصرية المتطورة مع تأسيس وتركيب مجاني في كافة أحياء المملكة عبر مندوبنا المعتمد.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <a 
                  href="https://wa.me/966596620358" 
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
            </div>
            
            <div className="md:w-1/2 w-full mt-10 md:mt-0">
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
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {packages.map((pkg) => (
                <div key={pkg.id} className={`bg-[#f3f3f3] bg-gradient-to-b from-white/15 to-transparent rounded-[30px] p-6 sm:p-10 transition-all duration-500 hover:scale-105 border-t-4 text-center group relative z-10 border-x border-b mx-auto w-full max-w-[400px] ${pkg.isPopular ? 'border-brand-primary shadow-[4px_4px_0_0_#95c11f] md:shadow-[7px_7px_0_0_#95c11f] hover:shadow-[7px_7px_0_0_#c4eb5c] border-gray-200 hover:bg-white' : 'border-gray-400 shadow-[4px_4px_0_0_#d1d5db] md:shadow-[7px_7px_0_0_#d1d5db] hover:shadow-[7px_7px_0_0_#9ca3af] border-gray-200 hover:bg-white'}`}>
                  {pkg.isPopular && (
                    <div className="absolute top-4 -right-8 overflow-hidden bg-brand-primary text-white text-center -rotate-45 shadow-sm px-8 py-1 origin-center border border-gray-100 font-bold block text-sm sm:text-base">
                      الأكثر طلباً
                    </div>
                  )}
                  <h3 className="font-bold text-xl sm:text-2xl text-[#262626] mb-2">{pkg.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 min-h-[40px]">{pkg.subtitle}</p>
                  
                  <h4 className="text-brand-secondary mb-6 flex flex-row-reverse justify-center items-baseline border-b border-gray-200 pb-6">
                    <span className="text-lg sm:text-xl pt-8 text-[#191b8a]">{pkg.currency}/{pkg.period}</span>
                    <span className="font-black text-[50px] sm:text-[70px] px-2 leading-none text-[#191b8a]">{pkg.price}</span>
                  </h4>
                  
                  <ul className="text-right text-gray-500 space-y-0 mb-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative">
                     <span className="absolute -top-3 right-4 bg-brand-light text-brand-primary font-bold px-2 py-0.5 rounded text-xs">أبرز المميزات</span>
                    {pkg.highlights.map((hlt, idx) => (
                      <li key={idx} className="flex items-center gap-3 font-bold text-black border-b border-gray-100 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0">
                        <span className="text-brand-primary shrink-0 text-xl font-sans">✓</span> 
                        {hlt}
                      </li>
                    ))}
                  </ul>

                  <ul className="text-right text-sm text-gray-400 space-y-2 mb-8 px-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                         <span className="shrink-0 mt-0.5 text-xs text-brand-secondary">✦</span>
                         <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href="https://wa.me/966596620358" target="_blank" rel="noopener noreferrer" className={`inline-block px-8 py-4 rounded-full font-bold transition-all shadow-sm w-full ${pkg.isPopular ? 'bg-brand-primary text-white hover:bg-brand-secondary' : 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white bg-white'}`}>
                    أطلب الآن
                  </a>
                  <p className="text-[10px] text-gray-400 mt-4 leading-tight">{pkg.terms_and_conditions}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section id="coverage" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center pb-12">
              <h2 className="text-3xl font-bold mb-4 relative inline-block text-[#333]">
                تغطية أحياء الرياض
                <span className="block w-1/2 h-1 bg-brand-primary mx-auto mt-2"></span>
              </h2>
              <p className="text-gray-500 text-lg">أحدث المقالات والتغطيات في بمناطق الرياض المختلفة.</p>
            </div>
            
            {/* Mobile: Horizontal Scroll (CSS Snap), Desktop: Grid */}
            <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 hide-scrollbar">
              {blogPosts.map((post) => (
                <div key={post.id} className="min-w-[85vw] sm:min-w-[300px] md:min-w-0 snap-start shrink-0">
                  <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden group flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                    <Link href={`/blog/${post.slug}`} className="block relative">
                      {/* Featured image with styled number badge */}
                      <div className="relative h-[200px] w-full overflow-hidden bg-gray-100">
                        <Image 
                          src={post.imageUrl}
                          alt={`تغطية وخدمات زين في ${post.title.replace('موظف 5G زين ', '').replace('موظف ألياف زين ', '').replace('عروض ألياف بصرية فى ', '')} - إنترنت 5G وألياف بصرية`} 
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Styled Article Number Overlay */}
                        <div className="absolute top-0 right-0 bg-brand-primary text-white font-bold text-2xl px-4 py-2 rounded-bl-xl shadow-md flex items-center justify-center z-10 border-b-2 border-l-2 border-white/20 backdrop-blur-sm shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                          {post.id}
                        </div>
                      </div>
                    </Link>
                    <div className="p-5 flex flex-col flex-grow relative">
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-bold text-[#333] mb-3 leading-snug hover:text-brand-primary transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                        تعرف على أفضل باقات وتغطية 5G والألياف البصرية في {post.title.replace('موظف 5G زين ', '').replace('موظف ألياف زين ', '').replace('عروض ألياف بصرية فى ', '')} وأهم المزايا والأسعار.
                      </p>
                      <div className="text-left mt-auto border-t border-gray-100 pt-3">
                        <Link href={`/blog/${post.slug}`} className="inline-block text-brand-primary font-bold hover:text-brand-secondary transition-colors text-sm items-center gap-1">
                          المزيد..
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
