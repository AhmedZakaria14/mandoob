import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'عروض سلام فايبر و 5G | تأسيس إنترنت سلام في السعودية',
  description: 'تعرف على أفضل باقات إنترنت سلام فايبر و 5G المنزلية في السعودية، سرعات عالية تصل إلى 1000 ميجابت وعروض حصرية، راوتر وتأسيس مجاني. أرقام مناديب سلام واشتراك فوري.',
  keywords: 'سلام فايبر, انترنت سلام 5G, عروض سلام للانترنت, تغطية سلام, اشتراك سلام فايبر, باقات سلام فايبر, نت سلام منزلي, تأسيس سلام، أرخص إنترنت منزلي السعودية, الرياض, جدة',
  openGraph: {
    title: 'عروض وباقات سلام فايبر و 5G | إنترنت منزلي سريع',
    description: 'احصل على أرخص وأسرع إنترنت منزلي من سلام فايبر و 5G في السعودية. راوتر مجاني، سرعات تصل لـ 1000 ميجا. اطلب التأسيس الآن.',
    url: 'https://zein-vzcdefwnllokbnpr7ixyvf.europe-west2.run.app/salam',
    siteName: 'تأسيس إنترنت وتركيب فايبر 5G',
    images: [
      {
        url: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780876904/WhatsApp_Image_2026-06-08_at_2.17.07_AM_3_jkenru.jpg',
        width: 1200,
        height: 630,
        alt: 'عروض باقات سلام فايبر و 5G المنزلي',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'عروض سلام فايبر و 5G | تأسيس إنترنت سلام في السعودية',
    description: 'أسرع إنترنت منزلي من سلام فايبر و 5G في السعودية. راوتر مجاني، سرعات تصل لـ 1000 ميجا.',
    images: ['https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780876904/WhatsApp_Image_2026-06-08_at_2.17.07_AM_3_jkenru.jpg'],
  },
  alternates: {
    canonical: 'https://zein-vzcdefwnllokbnpr7ixyvf.europe-west2.run.app/salam',
  },
};

export default function SalamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "عروض سلام فايبر و 5G | تأسيس إنترنت سلام في السعودية",
            "description": "استمتع بأفضل باقات إنترنت سلام فايبر و 5G المنزلية في السعودية، سرعات عالية تصل إلى 1000 ميجابت وعروض حصرية، راوتر وتأسيس مجاني.",
            "url": "https://zein-vzcdefwnllokbnpr7ixyvf.europe-west2.run.app/salam",
            "publisher": {
              "@type": "Organization",
              "name": "تأسيس إنترنت وتركيب فايبر 5G"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "SAR",
              "lowPrice": "174",
              "highPrice": "300",
              "offerCount": "6"
            }
          })
        }}
      />
      {children}
    </>
  );
}
