import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'عروض سلام فايبر و 5G | تأسيس إنترنت سلام في السعودية',
  description: 'تعرف على أفضل باقات إنترنت سلام فايبر و 5G المنزلية في السعودية، سرعات عالية وتأسيس مجاني. أرقام مناديب سلام واشتراك فوري للتواصل: 0508348048.',
  keywords: 'سلام فايبر, انترنت سلام 5G, عروض سلام للانترنت, تغطية سلام, اشتراك سلام فايبر, باقات سلام فايبر, نت سلام منزلي, تأسيس سلام، أرخص إنترنت منزلي السعودية, الرياض, جدة',
  openGraph: {
    title: 'عروض وباقات سلام فايبر و 5G | إنترنت منزلي سريع',
    description: 'احصل على أرخص وأسرع إنترنت منزلي من سلام فايبر و 5G في السعودية. راوتر مجاني، سرعات تصل لـ 1000 ميجا. اطلب التأسيس الآن عبر 0508348048.',
    url: 'https://zein-vzcdefwnllokbnpr7ixyvf.europe-west2.run.app/salam',
    siteName: 'تأسيس إنترنت وتركيب فايبر 5G',
    images: [
      {
        url: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780879636/%D8%B4%D8%B1%D9%83%D8%A9_%D8%B3%D9%84%D8%A7%D9%85_%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84_%D9%84%D9%88%D8%AC%D9%88_korawo.png',
        width: 1200,
        height: 630,
        alt: 'شعار سلام فايبر و 5G',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'عروض سلام فايبر و 5G | تأسيس إنترنت سلام في السعودية',
    description: 'أسرع إنترنت منزلي من سلام فايبر و 5G في السعودية. راوتر مجاني، سرعات تصل لـ 1000 ميجا.',
    images: ['https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780879636/%D8%B4%D8%B1%D9%83%D8%A9_%D8%B3%D9%84%D8%A7%D9%85_%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84_%D9%84%D9%88%D8%AC%D9%88_korawo.png'],
  },
  alternates: {
    canonical: 'https://zein-vzcdefwnllokbnpr7ixyvf.europe-west2.run.app/salam',
  },
  icons: {
    icon: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780879636/%D8%B4%D8%B1%D9%83%D8%A9_%D8%B3%D9%84%D8%A7%D9%85_%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84_%D9%84%D9%88%D8%AC%D9%88_korawo.png',
    shortcut: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780879636/%D8%B4%D8%B1%D9%83%D8%A9_%D8%B3%D9%84%D8%A7%D9%85_%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84_%D9%84%D9%88%D8%AC%D9%88_korawo.png',
    apple: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780879636/%D8%B4%D8%B1%D9%83%D8%A9_%D8%B3%D9%84%D8%A7%D9%85_%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84_%D9%84%D9%88%D8%AC%D9%88_korawo.png',
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
              "name": "تأسيس إنترنت وتركيب فايبر 5G",
              "telephone": "0508348048",
              "logo": {
                 "@type": "ImageObject",
                 "url": "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780879636/%D8%B4%D8%B1%D9%83%D8%A9_%D8%B3%D9%84%D8%A7%D9%85_%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84_%D9%84%D9%88%D8%AC%D9%88_korawo.png"
              }
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
