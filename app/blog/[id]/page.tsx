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
    title: `${post.title} | طلب وعروض 2024`,
    description: `تعرف على تفاصيل وعروض ${post.title}. نوفر تركيب وتأسيس إنترنت منزلي فائق السرعة عبر مندوب مبيعات زين. اتصل الآن 0596620358 للاستفسار.`,
    keywords: [post.title.replace(/ /g, ', '), 'زين', 'انترنت زين', 'تأسيس زين', '5G زين', 'ألياف زين'],
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
        {/* Article and Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": post.title,
                "description": `تفاصيل وعروض ${post.title} لتأسيس إنترنت زين المنزلي الفائق.`,
                "image": post.imageUrl,
                "author": {
                  "@type": "Organization",
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
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": postUrl
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "الرئيسية",
                    "item": process.env.APP_URL || 'https://example.com'
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": post.title,
                    "item": postUrl
                  }
                ]
              }
            ])
          }}
        />

        <div className="container mx-auto px-4 max-w-4xl bg-white border border-gray-200 rounded-2xl p-6 md:p-12 shadow-md relative z-10">
          <nav className="mb-8 text-gray-500 text-sm bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-2">
            <Link href="/" className="hover:text-brand-primary font-bold transition-colors">الرئيسية</Link> <span className="text-gray-300">/</span> <span className="text-black font-semibold">{post.title}</span>
          </nav>
          
          <h1 className="text-3xl md:text-5xl font-black text-brand-primary mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="mb-10 text-lg leading-relaxed text-gray-600 space-y-6 font-cairo">
            {id === '5' ? (
              <>
                <p className="text-[#444] text-xl font-bold">
                  نقدم لكم خدمة <strong className="text-brand-secondary">تأسيس وتركيب 5G زين الرياض</strong> بأعلى سرعات الإنترنت المنزلي. 
                  هل تبحث عن تغطية ممتازة واتصال لا ينقطع في منزلك؟ تواصل مع موظف زين المعتمد الآن.
                </p>
                
                <h2 className="text-3xl font-bold text-brand-secondary mt-12 mb-6 border-r-[4px] border-brand-primary pr-4 bg-gray-50 py-2">
                  مميزات باقات 5G من زين في الرياض
                </h2>
                <ul className="list-disc list-inside space-y-4 mb-6 p-6 rounded-xl border border-gray-100 bg-white shadow-sm text-[#444] font-semibold">
                  <li className="marker:text-brand-primary">سرعات تحميل ورفع عالية جداً ومناسبة لكافة الاحتياجات.</li>
                  <li className="marker:text-brand-primary">تركيب المودم مجاناً وتفعيل الشريحة في نفس اليوم.</li>
                  <li className="marker:text-brand-primary">تغطية شاملة لجميع أحياء مدينة الرياض.</li>
                  <li className="marker:text-brand-primary">باقات إنترنت لا محدود بأسعار تنافسية.</li>
                </ul>

                <h2 className="text-3xl font-bold text-brand-secondary mt-12 mb-6 border-r-[4px] border-brand-primary pr-4 bg-gray-50 py-2">
                  الأسعار والعروض الحالية
                </h2>
                <p>
                  يتم تحديث عروضنا باستمرار لتناسب الجميع. تواصل معنا للحصول على قائمة مبسطة بأحدث العروض مع باقات الهدايا المجانية وأجهزة الراوتر المرفقة للخدمة.
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
              </>
            ) : (
              <>
                <p className="text-[#444] text-xl font-bold">
                  أهلاً بك في صفحة <strong className="text-brand-secondary">{post.title}</strong> حيث نوفر أفضل العروض والخدمات بأعلى معايير الجودة 
                  لمشتركي زين الكرام. إذا كنت تبحث عن إنترنت منزلي يمتاز بالسرعة والاستقرار، فأنت في المكان الصحيح.
                </p>

                <h2 className="text-3xl font-bold text-brand-secondary mt-12 mb-6 border-r-[4px] border-brand-primary pr-4 bg-gray-50 py-2">
                  مزايا الخدمة المتاحة
                </h2>
                <p>
                  نحن نهتم بتقديم أحدث باقات الإنترنت المنزلية في هذه المنطقة بأقصى سرعة وأفضل سعر.
                  الاعتمادية والسرعة الفائقة هما أساس الخدمة التي نوفرها لكم من مكاننا في السعودية.
                </p>

                {isFiber && (
                  <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl my-8">
                    <h3 className="font-bold text-blue-700 mb-3 text-xl flex items-center gap-2"><span className="text-2xl">⚡</span> لماذا الألياف البصرية (فايبر)؟</h3>
                    <p className="text-blue-900 font-medium">توفر تقنية الألياف البصرية استقراراً تاماً وسرعات لا تتأثر بالطقس أو التغطية اللاسلكية. مثالية للبيوت الكبيرة ومحبي الألعاب التنافسية لكون الـ Ping منخفض جداً.</p>
                  </div>
                )}

                {is5G && (
                  <div className="bg-green-50 border border-brand-light p-6 rounded-xl my-8">
                    <h3 className="font-bold text-brand-secondary mb-3 text-xl flex items-center gap-2"><span className="text-2xl">🚀</span> مميزات شبكة 5G</h3>
                    <p className="text-gray-700 font-medium">يتميز الجيل الخامس من زين بسرعة التركيب حيث لا يتطلب حفريات أو تمديدات معقدة. التغطية واسعة والسرعة تكفي لتحميل أضخم الملفات ومشاهدة البثوث بدقة 4K.</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6 my-10">
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
                  <p className="text-xl mb-4 font-bold text-black">لطلب {post.title} وتحديد موعد التركيب المجاني</p>
                  <a href="tel:0596620358" className="text-3xl font-black text-brand-primary hover:text-brand-light transition" dir="ltr">
                    059 662 0358
                  </a>
                </div>
              </>
            )}

            <div className="mt-12 text-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
               <Image 
                 src={post.imageUrl}
                 alt={`${post.title} - عروض انترنت زين المميزة`} 
                 className="mx-auto rounded-xl shadow-lg h-auto w-full object-cover max-h-[400px]" 
                 width={800}
                 height={400}
                 loading="lazy" 
               />
               <p className="text-sm text-gray-500 mt-4 font-bold">ملصق توضيحي لخدمة {post.title} من زين</p>
            </div>
            
            <div className="mt-16 border-t border-gray-200 pt-10 text-center flex flex-col items-center">
               <h3 className="text-2xl font-bold mb-6 text-brand-secondary">هل تحتاج للمساعدة فوراً ومباشرة؟</h3>
               <a href="https://wa.me/966596620358" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full shadow-md hover:shadow-xl transition-all p-2">
                  <Image src="/assets/img/callus2.png" alt="اتصل بنا الآن 0596620358" width={80} height={80} className="h-20 hover:scale-105 transition-transform" loading="lazy" />
               </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
