import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

// The base APP_URL can be used for canonical links
const baseUrl = 'https://www.xn-----ctdcm0aqck5plajre8a.com';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6366f1',
};

export const metadata: Metadata = {
  title: {
    default: 'عروض 5G وألياف بصرية - انترنت زين المنزلي',
    template: '%s | انترنت زين 5G وألياف'
  },
  description: 'اكتشف أفضل عروض الإنترنت المنزلي 5G والألياف البصرية (الفايبر) من زين السعودية. تأسيس مجاني، تركيب سريع، وباقات إنترنت لا محدود بأسعار تنافسية. تواصل معنا الآن: 0596620358',
  keywords: ['زين', 'انترنت منزلي', '5G', 'ألياف بصرية', 'فايبر', 'عروض زين', 'تركيب انترنت', 'مندوب زين', 'تأسيس زين', 'ألياف زين', 'راوتر زين', 'السعودية', 'الرياض', 'إنترنت لا محدود'],
  authors: [{ name: 'موظف مبيعات زين' }],
  creator: 'مبيعات زين',
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: baseUrl,
    siteName: 'انترنت زين 5G وألياف بصرية',
    title: 'عروض 5G وألياف بصرية - انترنت زين المنزلي',
    description: 'أفضل عروض الإنترنت المنزلي 5G والألياف البصرية من زين السعودية. تأسيس مجاني وتركيب سريع.',
    images: [
      {
        url: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279049/1_s3knrl.png',
        width: 1200,
        height: 630,
        alt: 'عروض انترنت زين 5G والألياف البصرية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'عروض 5G وألياف بصرية - انترنت زين المنزلي',
    description: 'أفضل عروض الإنترنت المنزلي 5G والألياف البصرية من زين السعودية. تأسيس سريع.',
    images: ['https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279049/1_s3knrl.png'],
  },
  verification: {
    google: 'ouC8vyCaESBN7B_uxCo_DA4UMFWaKkROWa-o1G1Cvpc',
  },
  icons: {
    icon: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777280053/fav_ecujni.png',
    shortcut: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777280053/fav_ecujni.png',
    apple: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777280053/fav_ecujni.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL(baseUrl),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="bg-brand-gray text-[#444] font-sans antialiased" suppressHydrationWarning>
        <Script id="gtm-script" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TF6WR9DF');
          `}
        </Script>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PJXCF87RQQ" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PJXCF87RQQ');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
