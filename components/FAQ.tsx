'use client';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "كيف يمكنني طلب تأسيس إنترنت 5G أو ألياف بصرية من زين؟",
    answer: "يمكنك بسهولة طلب التأسيس والتركيب عبر التواصل المباشر مع موظف مبيعات زين المعتمد على الرقم 0596620358 (اتصال أو واتساب). سيقوم الموظف باختيار الباقة الأنسب ورفع الطلب في النظام فوراً لضمان سرعة التركيب."
  },
  {
    question: "هل التركيب والتأسيس مجاني؟",
    answer: "نعم، التأسيس وتركيب المودم مجاني تماماً لجميع باقات المفوتر الخاصة بالإنترنت المنزلي (5G والألياف البصرية)."
  },
  {
    question: "ما هي سرعة باقات زين 5G ومقارنتها بالألياف البصرية؟",
    answer: "نقدم سرعات فائقة تصل إلى 1000 ميجابت/ثانية (1 جيجابت) في باقات الألياف البصرية مع استقرار تام. أما باقات الـ 5G فتوفر سرعات عالية غير محدودة تعتمد على جودة التغطية في موقعك، وهي خيار ممتاز وسريع التركيب."
  },
  {
    question: "هل يوجد التزام (عقد) على الباقات المنزلية؟",
    answer: "نعم، معظم الباقات المفوترة لإنترنت المنزل تشمل التزام لمدة 12 أو 18 أو 24 شهراً لضمان تقديم الجهاز (الراوتر) والتأسيس مجاناً. يمكنك الاستفسار عن تفاصيل كل باقة عند التواصل."
  },
  {
    question: "هل يمكنني نقل خدمة الألياف البصرية إذا انتقلت لمنزل آخر؟",
    answer: "بالتأكيد، توفر زين خدمة نقل خط الألياف البصرية لمنزلك الجديد في حال كانت التغطية متوفرة فيه."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-brand-gray border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-primary uppercase relative inline-block pb-5 mx-auto flex flex-col items-center">
          <span>الأسئلة الشائعة</span>
          <span className="absolute bottom-0 w-10 h-[3px] bg-brand-primary"></span>
          <span className="absolute bottom-[1px] w-[120px] h-[1px] bg-gray-300"></span>
        </h2>
        <p className="text-center text-gray-500 mb-12">كل ما تحتاج معرفته عن خدمات وتركيب إنترنت زين</p>
        
        <div className="space-y-4 shadow-sm bg-white p-6 rounded-xl border border-gray-100">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-b border-gray-100 overflow-hidden transition-all duration-300 last:border-b-0`}
            >
              <button
                className="w-full text-right px-4 py-4 flex justify-between items-center focus:outline-none hover:text-brand-primary transition-colors group"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-brand-primary' : 'text-[#444] group-hover:text-brand-primary'}`}>{faq.question}</h3>
                <span className={`text-brand-primary text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <div 
                className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] pb-6 pt-2 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
              >
                <p className="text-gray-500 leading-relaxed font-cairo">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
