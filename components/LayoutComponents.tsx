'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isSalam = pathname === '/salam';
  const displayPhone = isSalam ? "0508348048" : "0596620358";
  const whatsappPhone = isSalam ? "966508348048" : "966596620358";

  const logoSrc = isSalam 
    ? "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780879636/%D8%B4%D8%B1%D9%83%D8%A9_%D8%B3%D9%84%D8%A7%D9%85_%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84_%D9%84%D9%88%D8%AC%D9%88_korawo.png"
    : "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279051/logo_qeuexm.png";
  const logoAlt = isSalam ? "شعار سلام موبايل" : "شعار زين 5G وألياف بصرية";

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="bg-brand-secondary text-white py-3 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)] sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center relative">
          
          {/* Mobile Menu Toggle (Right side in RTL) */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)} 
            className="md:hidden text-white hover:text-brand-primary transition z-10"
            aria-label="افتح القائمة"
          >
            <Menu size={32} />
          </button>

          {/* Desktop Left Side Links (Right side in LTR flow, Left side in RTL flow) */}
          <div className="hidden md:flex gap-6 z-10 flex-1">
            <Link href="/" className="font-bold hover:text-brand-primary transition text-lg">الرئيسية</Link>
            <a href="#services" className="font-bold hover:text-brand-primary transition text-lg">الخدمات</a>
          </div>

          {/* Centered Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
            <Image 
              src={logoSrc} 
              alt={logoAlt} 
              width={200}
              height={100}
              className={`h-16 md:h-24 w-auto object-contain drop-shadow-md py-1`} 
              priority
              loading="eager" 
            />
          </Link>
          
          {/* Desktop Right Side Links */}
          <div className="hidden md:flex gap-6 z-10 flex-1 justify-end">
             <a href="/#gallery" className="font-bold hover:text-brand-primary transition text-lg">أعمال التركيب</a>
             <a href="/#blog" className="font-bold hover:text-brand-primary transition text-lg">المدونة</a>
             <Link href="/salam" className="font-bold hover:text-brand-primary transition text-lg text-green-600">سلام فايبر و 5G</Link>
             <Link href="/blog/5" className="font-bold hover:text-brand-primary transition text-lg text-brand-primary">عروض التأسيس</Link>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-brand-secondary shadow-2xl p-6 flex flex-col border-l border-brand-primary transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            <div className="flex justify-between items-center mb-10 border-b border-gray-700 pb-4">
              <Image 
                src={logoSrc} 
                alt={logoAlt} 
                width={120}
                height={60}
                className={`h-12 w-auto object-contain`} 
              />
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-gray-400 hover:text-white transition bg-gray-800 p-2 rounded-full"
                aria-label="إغلاق القائمة"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-2 text-lg font-bold text-white">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-primary hover:bg-white/5 rounded-lg p-3 transition flex items-center gap-3">
                الرئيسية
              </Link>
              <a href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-primary hover:bg-white/5 rounded-lg p-3 transition flex items-center gap-3">
                الخدمات
              </a>
              <a href="/#gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-primary hover:bg-white/5 rounded-lg p-3 transition flex items-center gap-3">
                أعمال التركيب
              </a>
              <a href="/#blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-primary hover:bg-white/5 rounded-lg p-3 transition flex items-center gap-3">
                المدونة
              </a>
              <Link href="/salam" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-primary hover:bg-white/5 rounded-lg p-3 transition flex items-center gap-3 text-green-500">
                عروض سلام فايبر و 5G
              </Link>
              <Link href="/blog/5" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-primary hover:bg-white/5 rounded-lg p-3 transition flex items-center gap-3">
                عروض موضفين الرياض
              </Link>
            </nav>

            <div className="mt-auto pt-6 border-t border-gray-700">
               <a 
                 href={`https://wa.me/${whatsappPhone}`} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="bg-[#18d26e] hover:bg-[#15b960] w-full py-3 rounded-full font-bold flex items-center justify-center gap-2 transition text-white shadow-lg border-2 border-white"
               >
                 <MessageCircle size={20} />
                 <span>تواصل واتساب</span>
               </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 left-5 z-[55] flex flex-col gap-4">
        {/* Floating Call Button */}
        <a 
          href={`tel:${displayPhone}`}
          className="w-14 h-14 bg-brand-primary rounded-full shadow-[0_3px_6px_rgba(0,0,0,0.3)] flex items-center justify-center text-white md:hover:scale-110 transition-transform duration-300 group relative"
          aria-label="اتصل بنا الآن"
        >
          <Phone size={28} />
          <span className="absolute left-16 bg-gray-800 text-white px-3 py-1 rounded hidden md:group-hover:block text-sm whitespace-nowrap shadow-md">
            اتصل بنا الآن!
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <a 
          href={`https://wa.me/${whatsappPhone}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#18d26e] rounded-full shadow-[0_3px_6px_rgba(0,0,0,0.3)] flex items-center justify-center text-white md:hover:scale-110 transition-transform duration-300 group relative"
          aria-label="تواصل معنا عبر واتساب"
        >
          <MessageCircle size={28} />
          <span className="absolute left-16 bg-gray-800 text-white px-3 py-1 rounded hidden md:group-hover:block text-sm whitespace-nowrap shadow-md">
            تواصل واتساب
          </span>
        </a>
      </div>
    </>
  );
}

export function Footer() {
  const pathname = usePathname();
  const isSalam = pathname === '/salam';
  const displayPhone = isSalam ? "0508348048" : "0596620358";
  const whatsappPhone = isSalam ? "966508348048" : "966596620358";

  return (
    <footer className="bg-brand-primary text-white pt-16">
      <div className="bg-brand-gray py-12 text-center text-[#444] mb-8 shadow-inner">
        <div className="container mx-auto px-4 max-w-2xl">
          <h4 className="text-2xl font-bold text-brand-primary mb-6">احصل على استشارة لتغطية حيك</h4>
          <div className="bg-white p-2 rounded-full shadow-md flex">
            <input type="text" placeholder="اكتب موقعك للتحقق من التغطية..." className="flex-1 px-4 outline-none rounded-r-full" />
            <a href={`https://wa.me/${whatsappPhone}`} target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white hover:bg-brand-light transition px-6 py-3 rounded-full font-bold shadow-md">تحقق الآن</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-right mb-12">
        <div className="bg-white text-[#5e5e5e] p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-brand-primary uppercase">تواصل معنا</h3>
          <p className="mb-4">اتصل بنا الآن للحصول على أفضل عروض 5G والألياف البصرية المتطورة، نوفر لك راوتر مجاني مع التركيب.</p>
          <a href={`tel:${displayPhone}`} className="text-brand-primary font-bold text-3xl block" dir="ltr">{displayPhone}</a>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-4 border-b-2 border-brand-light pb-2 inline-block">الأقسام والمدونة</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-brand-secondary transition flex items-center gap-2 justify-center md:justify-start py-1 md:py-0"><span>›</span> الرئيسية</Link></li>
            <li><a href="/#services" className="hover:text-brand-secondary transition flex items-center gap-2 justify-center md:justify-start py-1 md:py-0"><span>›</span> الخدمات</a></li>
            <li><a href="/#blog" className="hover:text-brand-secondary transition flex items-center gap-2 justify-center md:justify-start py-1 md:py-0 font-bold"><span>›</span> المدونة</a></li>
            <li><Link href="/salam" className="hover:text-brand-secondary transition flex items-center gap-2 justify-center md:justify-start py-1 md:py-0 font-bold text-green-500"><span>›</span> سلام فايبر و 5G </Link></li>
            <li><Link href="/blog/5" className="hover:text-brand-secondary transition flex items-center gap-2 justify-center md:justify-start py-1 md:py-0 text-brand-light"><span>›</span> عروض التأسيس الحصرية</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-4 border-b-2 border-brand-light pb-2 inline-block">خدماتنا الرئيسية</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 justify-center md:justify-start py-1 md:py-0"><span>›</span> تأسيس إنترنت 5G منزلي</li>
            <li className="flex items-center gap-2 justify-center md:justify-start py-1 md:py-0"><span>›</span> تركيب ألياف بصرية (فايبر)</li>
            <li className="flex items-center gap-2 justify-center md:justify-start py-1 md:py-0"><span>›</span> ترقية الباقات والسرعات</li>
            <li className="flex items-center gap-2 justify-center md:justify-start py-1 md:py-0"><span>›</span> دعم فني واستفسار مجاني</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-brand-secondary py-8 text-center text-sm border-t border-gray-700">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} جميع الحقوق محفوظة لمحرك إنترنت زين.</p>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-2 group">
              <span className="text-gray-400">تم التصميم والتطوير بواسطة</span>
              <a 
                href="https://NasharHub.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative overflow-hidden group/link px-4 py-1.5 rounded-lg bg-gradient-to-r from-brand-primary/10 to-brand-primary/5 border border-brand-primary/20 hover:border-brand-primary/50 transition-all duration-300 shadow-sm"
              >
                <span className="relative z-10 font-bold text-brand-primary group-hover/link:text-brand-secondary transition-colors duration-300">NasharHub.com</span>
                <span className="absolute inset-0 bg-brand-primary/5 translate-y-full group-hover/link:translate-y-0 transition-transform duration-300"></span>
              </a>
            </div>

            <div className="flex gap-3">
              <a href={`https://wa.me/${whatsappPhone}`} className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-primary hover:border-brand-primary transition-all duration-300">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
