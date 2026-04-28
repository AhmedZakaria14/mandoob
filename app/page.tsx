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

        {/* Blog Posts Grid System (.gambar style) */}
        <section id="coverage" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center pb-12">
              <h2 className="text-3xl font-bold text-brand-primary uppercase mb-5 relative inline-block pb-5">
                التغطية والمناطق
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[3px] bg-brand-primary"></span>
                <span className="absolute bottom-[1px] left-1/2 -translate-x-1/2 w-[120px] h-[1px] bg-gray-300"></span>
              </h2>
              <p className="text-gray-500 text-lg">اختر منطقتك للتعرف على أحدث عروض زين وتدفق الفنيين لدينا.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1470px] mx-auto">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="block">
                  <div className="relative bg-white overflow-hidden rounded-[10px] group transition-all duration-300 hover:shadow-[1px_1px_40px_rgba(0,0,0,0.12)] h-[300px] border border-gray-200">
                    <div className="h-[200px] overflow-hidden bg-black transition-all duration-500 group-hover:h-[123px] relative">
                      <Image 
                        src={post.imageUrl}
                        alt={post.title} 
                        width={400}
                        height={200}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-125 group-hover:opacity-75"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 relative bg-white h-full z-10">
                      <div className="absolute -top-4 right-4 bg-brand-primary text-white text-[13px] font-bold px-3 py-1 rounded-b-xl shadow-md">
                        عرض
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#262626] mb-3 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-[#666c74] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 leading-relaxed">
                        متاح الآن التأسيس الفوري والتركيب المجاني...
                      </p>
                    </div>
                  </div>
                </Link>
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
