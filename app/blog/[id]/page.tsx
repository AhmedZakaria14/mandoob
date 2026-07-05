import { blogPosts } from '@/data/blogs';
import { Header, Footer } from '@/components/LayoutComponents';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';

// Generate static parameters for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find(p => p.slug === id);
  if (!post) {
    return { title: 'الصفحة غير موجودة' };
  }

  return {
    title: post.seoTitle || `${post.title} | دليل عروض وباقات زين السعودية`,
    description: post.seoDescription || `اقرأ تفاصيل: ${post.title}. تصفح أحدث عروض وباقات الإنترنت المنزلي 5G والألياف البصرية من زين في السعودية. تأسيس فوري وبدون رسوم إضافية.`,
    keywords: post.keywords || [post.title, post.title.split(' ').join(', '), 'زين السعودية', 'انترنت 5G المنزلي', 'باقات زين', 'ألياف بصرية', 'الألياف زين', 'مندوب مبيعات زين', 'الرياض'],
    openGraph: {
      title: post.seoTitle || `${post.title} | عروض 5G وألياف زين`,
      description: post.seoDescription || `تعرف على تفاصيل وعروض ${post.title}. تأسيس مجاني وراوتر مجاني.`,
      type: 'article',
      url: process.env.APP_URL ? `${process.env.APP_URL}/blog/${id}` : `/blog/${id}`,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: process.env.APP_URL ? `${process.env.APP_URL}/blog/${id}` : `/blog/${id}`,
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find(p => p.slug === id);
  
  if (!post) {
    notFound();
  }

  const postUrl = process.env.APP_URL ? `${process.env.APP_URL}/blog/${id}` : `https://example.com/blog/${id}`;
  const isFiber = post.title.includes('ألياف') || post.title.includes('فايبر');
  const is5G = post.title.includes('5G');

  // Define specific content for blog 5, and general template for others
  return (
    <div className="flex flex-col min-h-screen bg-brand-gray">
      <Header />
      <main className="flex-grow py-12 relative">
        <div className="absolute top-0 left-0 w-full h-[300px] bg-brand-primary opacity-10 pointer-events-none"></div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "الرئيسية",
                  "item": "https://www.xn-----ctdcm0aqck5plajre8a.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "المدونة",
                  "item": "https://www.xn-----ctdcm0aqck5plajre8a.com/#blog"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": post.title,
                  "item": `https://www.xn-----ctdcm0aqck5plajre8a.com/blog/${id}`
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.seoTitle || post.title,
              "description": post.seoDescription || `تفاصيل وعروض ${post.title} لتأسيس إنترنت زين المنزلي الفائق.`,
              "image": post.imageUrl,
              "author": {
                "@type": "Person",
                "name": "موظف مبيعات زين"
              },
              "publisher": {
                "@type": "Organization",
                "name": "زين 5G وألياف بصرية",
                "logo": {
                   "@type": "ImageObject",
                   "url": `https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279051/logo_qeuexm.png`
                }
              },
              "datePublished": new Date().toISOString().split('T')[0],
              "dateModified": new Date().toISOString().split('T')[0],
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": postUrl
              }
            })
          }}
        />

        <div className="container mx-auto px-4 max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-md relative z-10 overflow-hidden">
          {/* Full-width header image with number overlay */}
          <div className="relative h-[300px] md:h-[400px] w-full bg-gray-100">
            <Image 
              src={post.imageUrl}
              alt={`تغطية وعروض ${post.title} لخدمات الإنترنت المنزلي 5G والألياف البصرية`} 
              fill
              className="object-cover"
              loading="lazy" 
            />
            {/* Styled Article Number Overlay */}
            <div className="absolute top-0 right-0 bg-brand-primary text-white font-bold text-4xl px-8 py-4 rounded-bl-3xl shadow-lg flex items-center justify-center z-10 border-b-4 border-l-4 border-white/20 backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.4)]">
              {post.id}
            </div>
            {/* Title Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 md:p-12">
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight drop-shadow-lg">
                {post.title}
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-12">
            <nav className="mb-8 text-gray-500 text-sm bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-2">
              <Link href="/" className="hover:text-brand-primary font-bold transition-colors">الرئيسية</Link> <span className="text-gray-300">/</span> <span className="text-black font-semibold">{post.title}</span>
            </nav>

            <div className="mb-10 text-lg leading-relaxed text-gray-600 space-y-6 font-cairo">
                  <div className="prose prose-lg max-w-none text-gray-700 font-medium leading-loose space-y-6">
                    {post.content ? (
                      <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    ) : (
                      <>
                        <p className="text-xl font-bold text-brand-secondary mb-6 leading-relaxed">
                          هل تبحث عن <strong className="text-brand-primary">أفضل 5G والألياف البصرية</strong> الشاملة؟ أنت في المكان الصحيح! نوفر لك من خلال صفحة <strong className="text-black">{post.title}</strong> أحدث وأقوى <strong className="text-brand-primary">عروض زين للإنترنت المنزلي اللامحدود</strong>. استمتع بتجربة إنترنت تفوق الخيال مع <strong className="text-black">تأسيس مجاني</strong> بالكامل والحصول على <strong className="text-brand-primary">راوتر زين 5G أو فايبر مجاناً</strong> بمجرد اشتراكك.
                        </p>

                        <h2 id="discover" className="text-3xl font-black text-brand-secondary mt-12 mb-6 border-r-[5px] border-brand-primary pr-5 bg-gray-50 py-3 rounded-l-xl shadow-sm">
                          تفاصيل عروض زين فايبر و 5G المتاحة
                        </h2>
                        
                        <p>
                          تقدم <strong className="text-brand-primary">شركة زين السعودية</strong> مجموعة من الباقات المتطورة المصممة خصيصاً لتلبي احتياجات كل بيت. سواء كنت مهتماً باشتراك <strong className="text-black">باقة زين 5G المنزلية</strong> التي لا تتطلب أي حفريات أو تمديدات، أو كنت تفضل <strong className="text-black">الألياف البصرية (فايبر)</strong> من أجل استقرار البينج (Ping) في الألعاب التنافسية (Gaming)، لدينا الحل الأمثل لك وبأسعار تنافسية تبدأ من <strong className="text-brand-primary">289 ريال</strong>. 
                          للمزيد حول الباقات، تفضل بزيارة مقال <Link href="/blog/4" className="text-brand-secondary font-bold hover:underline">أسعار 5G زين 2026</Link>.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-10">
                           <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-primary hover:shadow-lg transition-all">
                              <h3 className="font-black text-brand-secondary mb-4 text-2xl flex items-center gap-3"><span className="text-3xl">🚀</span> باقات 5G المنزلية</h3>
                              <ul className="space-y-3 text-gray-600 font-semibold marker:text-brand-primary list-disc list-inside">
                                <li>سرعات تحميل ورفع هائلة دون انقطاع.</li>
                                <li><strong className="text-black">تأسيس فوري</strong> وراوتر مجاني يُسلم في نفس اليوم.</li>
                                <li>تغطية شاملة وقوية بفضل أبراج زين الحديثة.</li>
                                <li>مثالية للمشاهدة بدقة 4K والبث المباشر.</li>
                              </ul>
                           </div>
                           
                           <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100 hover:border-blue-500 hover:shadow-lg transition-all">
                              <h3 className="font-black text-blue-900 mb-4 text-2xl flex items-center gap-3"><span className="text-3xl">⚡</span> شبكات الألياف البصرية</h3>
                              <ul className="space-y-3 text-gray-600 font-semibold marker:text-blue-500 list-disc list-inside">
                                <li>سرعات خيالية تصل إلى <strong className="text-black">1000 ميجابت (1 جيجا)</strong>.</li>
                                <li>بينج (Ping) منخفض جداً لعشاق الألعاب.</li>
                                <li>تمديد وبوكسات فايبر بـ <strong className="text-black">مجاناً بالكامل</strong>.</li>
                                <li>استقرار وثبات في أسوأ الظروف الجوية.</li>
                              </ul>
                           </div>
                        </div>

                        <h3 id="order" className="text-2xl font-black text-brand-secondary mt-12 mb-4 border-r-[4px] border-brand-light pr-4">
                          كيفية الاشتراك والتأسيس؟
                        </h3>
                        <p>
                          الأمر بسيط جداً! كل ما عليك فعله هو طلب الخدمة من خلال <strong className="text-black">مندوب مبيعات زين</strong> المعتمد. سيقوم فريقنا بالتحقق من التغطية في منطقتك، ثم إرسال <strong className="text-brand-primary">موظف أو فني تركيب زين</strong> لتوصيل الراوتر أو تمديد خطوط الألياف البصرية مجاناً. لا توجد رسوم خفية، والمودم يأتي ضمن الباقة.
                        </p>
                      </>
                    )}

                    {/* SEO Keywords Highlighted naturally */}
                    <div className="bg-brand-gray p-6 rounded-xl text-sm text-gray-500 mt-8 mb-10 leading-relaxed border border-gray-200">
                      <strong>كلمات ذات صلة:</strong> أرقام موظف زين 5G، مندوب ألياف زين، اشتراك نت منزلي لامحدود، عروض فايبر زين، تركيب بوكسات فايبر مجاناً، راوتر 5G مجاني، أفضل باقة انترنت منزلي للألعاب، ارخص نت زين، تأسيس انترنت زين، تغطية 5G، سرعة 1000 ميجا.
                    </div>

                    <div className="my-12 p-10 bg-gradient-to-l from-brand-primary to-[#85b018] rounded-[30px] text-center shadow-xl text-white transform hover:scale-[1.02] transition-transform">
                       <h3 className="text-2xl mb-4 font-bold drop-shadow-md">بادر بالاشتراك الآن واحصل على عرضك الحصري</h3>
                       <p className="mb-8 text-white/90 text-lg font-medium">تواصل معنا عبر رقم التواصل المباشر أدناه لتحديد موعد التأسيس الفوري.</p>
                       <a href="tel:0596620358" className="inline-block bg-white text-brand-primary text-3xl font-black px-10 py-4 rounded-full hover:bg-gray-50 transition drop-shadow-lg" dir="ltr">
                         059 662 0358
                       </a>
                    </div>
                  </div>
                  
                  {/* Internal Linking / Related Articles */}
                  <div className="mt-12 bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-brand-secondary mb-4 border-r-[3px] border-brand-primary pr-3">
                      باقات وعروض حصرية قد تهمك
                    </h3>
                    <ul className="space-y-3">
                      {blogPosts
                        .filter(p => [4, 5, 27].includes(p.id))
                        .map(relatedPost => (
                          <li key={relatedPost.id} className="flex items-center gap-2">
                            <span className="text-brand-primary">«</span>
                            <Link href={`/blog/${relatedPost.slug}`} className="text-[#444] font-medium hover:text-brand-primary hover:underline transition-colors">
                              دليلك الشامل حول {relatedPost.title}
                            </Link>
                          </li>
                      ))}
                    </ul>
                  </div>
              
              <div className="mt-16 border-t border-gray-200 pt-10 text-center flex flex-col items-center">
                 <h3 className="text-2xl font-bold mb-6 text-brand-secondary">هل تحتاج للمساعدة فوراً ومباشرة؟</h3>
                 <a 
                   href="https://wa.me/966596620358" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="bg-[#25D366] text-white font-bold text-2xl px-10 py-5 rounded-full shadow-[0_8px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_25px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-4 w-full max-w-sm mb-6 group"
                 >
                    <MessageCircle size={36} className="group-hover:animate-bounce" />
                    <span dir="ltr" className="tracking-wide">059 662 0358</span>
                 </a>
                 <p className="text-gray-500 font-medium">مستعدون للرد على استفساراتكم وتلبية طلباتكم في أي وقت.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
