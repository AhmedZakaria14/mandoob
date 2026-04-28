import { blogPosts } from '@/data/blogs';
import { Header, Footer } from '@/components/LayoutComponents';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

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
    title: `${post.title} | دليل عروض وباقات زين السعودية`,
    description: `اقرأ تفاصيل: ${post.title}. تصفح أحدث عروض وباقات الإنترنت المنزلي 5G والألياف البصرية من زين في السعودية. تأسيس فوري وبدون رسوم إضافية.`,
    keywords: [post.title, post.title.split(' ').join(', '), 'زين السعودية', 'انترنت 5G المنزلي', 'باقات زين', 'ألياف بصرية', 'الألياف زين', 'مندوب مبيعات زين', 'الرياض'],
    openGraph: {
      title: `${post.title} | عروض 5G وألياف زين`,
      description: `تعرف على تفاصيل وعروض ${post.title}. تأسيس مجاني وراوتر مجاني.`,
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
              "@type": "BlogPosting",
              "headline": post.title,
              "description": `تفاصيل وعروض ${post.title} لتأسيس إنترنت زين المنزلي الفائق.`,
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
              {id === '5' ? (
                <>
                  <p className="text-[#444] text-xl font-bold">
                    نقدم لكم خدمة <strong className="text-brand-secondary">تأسيس وتركيب 5G زين الرياض</strong> بأعلى سرعات الإنترنت المنزلي. 
                    هل تبحث عن تغطية ممتازة واتصال لا ينقطع في منزلك؟ تواصل مع موظف زين المعتمد الآن.
                  </p>
                  
                  <h2 id="features" className="text-3xl font-bold text-brand-secondary mt-12 mb-6 border-r-[4px] border-brand-primary pr-4 bg-gray-50 py-2">
                    مميزات باقات 5G من زين في الرياض
                  </h2>
                  <ul className="list-disc list-inside space-y-4 mb-6 p-6 rounded-xl border border-gray-100 bg-white shadow-sm text-[#444] font-semibold">
                    <li className="marker:text-brand-primary">سرعات تحميل ورفع عالية جداً ومناسبة لكافة الاحتياجات.</li>
                    <li className="marker:text-brand-primary">تركيب المودم مجاناً وتفعيل الشريحة في نفس اليوم.</li>
                    <li className="marker:text-brand-primary">تغطية شاملة لجميع أحياء مدينة الرياض.</li>
                    <li className="marker:text-brand-primary">باقات إنترنت لا محدود بأسعار تنافسية.</li>
                  </ul>

                  <h3 id="pricing" className="text-2xl font-bold text-brand-secondary mt-10 mb-4 border-r-[3px] border-brand-light pr-3">
                    الأسعار والعروض الحالية
                  </h3>
                  <p>
                    يتم تحديث عروضنا باستمرار لتناسب الجميع. تواصل معنا للحصول على قائمة مبسطة بأحدث العروض مع باقات الهدايا المجانية وأجهزة الراوتر المرفقة للخدمة.
                    بإمكانك الاطلاع أيضاً على مقال <Link href="/blog/4" className="text-brand-primary font-bold hover:underline">أسعار 5G زين 2024</Link> والمقارنة بين خطط الاشتراك المختلفة لضمان حصولك على الباقة الأنسب لاستخدامك.
                  </p>

                  <div className="my-10 text-center bg-gradient-to-b from-brand-gray to-white p-10 rounded-[30px] border border-gray-200 shadow-[7px_7px_0_0_#95c11f]">
                     <h3 className="text-2xl font-bold mb-6 text-[#242423]">تواصل مباشر لتفعيل الخدمة:</h3>
                     <a 
                       href="https://wa.me/966596620358" 
                       className="bg-[#18d26e] hover:bg-[#15b960] px-8 py-4 rounded-full text-white font-bold inline-flex items-center gap-3 text-xl transition-all shadow-[0_5px_15px_rgba(24,210,110,0.4)] hover:scale-105"
                     >
                      <span>طلب تأسيس عبر واتساب (0596620358)</span>
                     </a>
                  </div>

                  <h3 id="coverage" className="text-2xl font-bold text-brand-secondary mt-10 mb-4 border-r-[3px] border-brand-light pr-3">
                    مناطق التغطية لخدماتنا
                  </h3>
                  <p>
                    نفخر بتقديم الدعم الكامل لجميع أحياء مدينة الرياض. يمكنك الاستعلام عن التغطية الدقيقة عبر تزويدنا بموقعك ليتسنى لنا إرسال فني متخصص. المرجع الرسمي للتغطية هو <a href="https://sa.zain.com/" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-bold hover:underline">موقع زين الإلكتروني</a>.
                  </p>

                  {/* Internal Linking / Related Articles */}
                  <div className="mt-12 bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-brand-secondary mb-4 border-r-[3px] border-brand-primary pr-3">
                      تغطيات ومقالات أخرى قد تهمك
                    </h3>
                    <ul className="space-y-3">
                      {blogPosts
                        .filter(p => p.id !== post.id && p.title.includes('الرياض'))
                        .slice(0, 3)
                        .map(relatedPost => (
                          <li key={relatedPost.id} className="flex items-center gap-2">
                            <span className="text-brand-primary">«</span>
                            <Link href={`/blog/${relatedPost.slug}`} className="text-[#444] font-medium hover:text-brand-primary hover:underline transition-colors">
                              اقرأ المزيد عن {relatedPost.title} وخدمات التأسيس المجاني
                            </Link>
                          </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-[#444] text-xl font-bold mt-6">
                    أهلاً بك في صفحة <strong className="text-brand-secondary">{post.title}</strong> حيث نوفر أفضل العروض والخدمات بأعلى معايير الجودة 
                    لمشتركي زين الكرام. إذا كنت تبحث عن إنترنت منزلي يمتاز بالسرعة والاستقرار، فأنت في المكان الصحيح.
                  </p>

                  <h2 id="benefits" className="text-3xl font-bold text-brand-secondary mt-12 mb-6 border-r-[4px] border-brand-primary pr-4 bg-gray-50 py-2">
                    مزايا الخدمة المتاحة
                  </h2>
                  <p>
                    نحن نهتم بتقديم أحدث باقات الإنترنت المنزلية في هذه المنطقة بأقصى سرعة وأفضل سعر.
                    الاعتمادية والسرعة الفائقة هما أساس الخدمة التي نوفرها لكم من مكاننا في السعودية. لمزيد من التفاصيل الأساسية راجع <a href="https://sa.zain.com/" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-bold hover:underline">بوابة زين الرسمية</a>.
                    كما ننصحك بالاطلاع على أحدث الخطط عبر مقالنا حول <Link href={`/blog/${is5G ? '4' : '27'}`} className="text-brand-primary font-bold hover:underline">{is5G ? 'أسعار 5G زين 2024' : 'فوائد الترقية إلى باقة ألياف بصرية بسرعة 1000 ميجابت'}</Link> لتأخذ فكرة شاملة عن الخدمات.
                  </p>

                  {isFiber && (
                    <div id="fiber-tech" className="bg-blue-50 border border-blue-100 p-6 rounded-xl my-8 scroll-mt-20">
                      <h3 className="font-bold text-blue-700 mb-3 text-xl flex items-center gap-2"><span className="text-2xl">⚡</span> لماذا الألياف البصرية (فايبر)؟</h3>
                      <p className="text-blue-900 font-medium">توفر تقنية الألياف البصرية استقراراً تاماً وسرعات لا تتأثر بالطقس أو التغطية اللاسلكية. مثالية للبيوت الكبيرة ومحبي الألعاب التنافسية لكون الـ Ping منخفض جداً.</p>
                    </div>
                  )}

                  {is5G && (
                    <div id="5g-tech" className="bg-green-50 border border-brand-light p-6 rounded-xl my-8 scroll-mt-20">
                      <h3 className="font-bold text-brand-secondary mb-3 text-xl flex items-center gap-2"><span className="text-2xl">🚀</span> مميزات شبكة 5G</h3>
                      <p className="text-gray-700 font-medium">يتميز الجيل الخامس من زين بسرعة التركيب حيث لا يتطلب حفريات أو تمديدات معقدة. التغطية واسعة والسرعة تكفي لتحميل أضخم الملفات ومشاهدة البثوث بدقة 4K.</p>
                    </div>
                  )}

                  <h3 id="service-steps" className="text-2xl font-bold text-brand-secondary mt-10 mb-4 border-r-[3px] border-brand-light pr-3">
                    خطوات التأسيس
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                     <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-brand-primary hover:shadow-md transition-all">
                        <h4 className="font-bold text-black mb-3 text-xl">تأسيس فوري</h4>
                        <p className="text-gray-500 font-medium">يقوم مندوبنا بالتواصل معك والوصول لعنوانك في أسرع وقت مع معدات التركيب لبدء التغطية.</p>
                     </div>
                     <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-brand-primary hover:shadow-md transition-all">
                        <h4 className="font-bold text-black mb-3 text-xl">خيارات متعددة</h4>
                        <p className="text-gray-500 font-medium">باقات متنوعة تناسب الاستخدام الشخصي والعائلي وأوقات الجيمنج بلا أية حدود.</p>
                     </div>
                  </div>

                  <div className="my-10 p-10 bg-brand-gray border border-gray-200 rounded-[20px] text-center shadow-inner">
                     <p className="text-xl mb-4 font-bold text-black">لطلب الخدمة وتحديد موعد التركيب المجاني</p>
                     <a href="tel:0596620358" className="text-3xl font-black text-brand-primary hover:text-brand-light transition" dir="ltr">
                       059 662 0358
                     </a>
                  </div>
                  
                  {/* Internal Linking / Related Articles */}
                  <div className="mt-12 bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-brand-secondary mb-4 border-r-[3px] border-brand-primary pr-3">
                      مقالات وعروض ذات صلة
                    </h3>
                    <ul className="space-y-3">
                      {blogPosts
                        .filter(p => p.id !== post.id && p.title.includes(is5G ? '5G' : 'ألياف'))
                        .slice(0, 3)
                        .map(relatedPost => (
                          <li key={relatedPost.id} className="flex items-center gap-2">
                            <span className="text-brand-primary">«</span>
                            <Link href={`/blog/${relatedPost.slug}`} className="text-[#444] font-medium hover:text-brand-primary hover:underline transition-colors">
                              تعرف على {relatedPost.title} وتفاصيل العروض المتاحة
                            </Link>
                          </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
              
              <div className="mt-16 border-t border-gray-200 pt-10 text-center flex flex-col items-center">
                 <h3 className="text-2xl font-bold mb-6 text-brand-secondary">هل تحتاج للمساعدة فوراً ومباشرة؟</h3>
                 <a href="https://wa.me/966596620358" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full shadow-md hover:shadow-xl transition-all p-2 flex items-center justify-center">
                    <Image src="/assets/img/callus2.png" alt={`أيقونة الواتساب للتواصل مع موظف زين المعتمد لطلب خدمة ${post.title}`} width={80} height={80} className="hover:scale-105 transition-transform" loading="lazy" />
                 </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
