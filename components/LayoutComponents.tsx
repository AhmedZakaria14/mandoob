'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279051/logo_qeuexm.png" 
              alt="شعار زين 5G وألياف بصرية" 
              width={200}
              height={100}
              className="h-16 md:h-20 w-auto drop-shadow-md py-1" 
              loading="eager" 
            />
          </Link>
          
          {/* Desktop Right Side Links */}
          <div className="hidden md:flex gap-6 z-10 flex-1 justify-end">
             <a href="#gallery" className="font-bold hover:text-brand-primary transition text-lg">أعمال التركيب</a>
             <a href="#blog" className="font-bold hover:text-brand-primary transition text-lg">المدونة</a>
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
                src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1777279051/logo_qeuexm.png" 
                alt="شعار زين" 
                width={80}
                height={40}
                className="h-12 w-auto" 
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
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-primary hover:bg-white/5 rounded-lg p-3 transition flex items-center gap-3">
                الخدمات
              </a>
              <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-primary hover:bg-white/5 rounded-lg p-3 transition flex items-center gap-3">
                أعمال التركيب
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
                 href="https://wa.me/966596620358" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="bg-[#18d26e] hover:bg-[#15b960] w-full py-3 rounded-full font-bold flex items-center justify-center gap-2 transition text-white shadow-lg border-2 border-white"
               >
                 <Phone size={20} />
                 <span>تواصل واتساب</span>
               </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button (.callBottom equivalent) */}
      <a 
        href="https://wa.me/966596620358" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 z-[55] w-14 h-14 bg-[#18d26e] rounded-full shadow-[0_3px_6px_rgba(0,0,0,0.3)] flex items-center justify-center text-white md:hover:scale-110 transition-transform duration-300 group"
        aria-label="تواصل معنا عبر واتساب"
      >
        <Phone size={28} />
        <span className="absolute left-16 bg-gray-800 text-[#ececec] px-3 py-1 rounded hidden md:group-hover:block text-sm whitespace-nowrap shadow-md">
          تواصل معنا!
        </span>
      </a>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-primary text-white pt-16">
      <div className="bg-brand-gray py-12 text-center text-[#444] mb-8 shadow-inner">
        <div className="container mx-auto px-4 max-w-2xl">
          <h4 className="text-2xl font-bold text-brand-primary mb-6">احصل على استشارة لتغطية حيك</h4>
          <div className="bg-white p-2 rounded-full shadow-md flex">
            <input type="text" placeholder="اكتب موقعك للتحقق من التغطية..." className="flex-1 px-4 outline-none rounded-r-full" />
            <a href="https://wa.me/966596620358" target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white hover:bg-brand-light transition px-6 py-3 rounded-full font-bold shadow-md">تحقق الآن</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-right mb-12">
        <div className="bg-white text-[#5e5e5e] p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-brand-primary uppercase">تواصل معنا</h3>
          <p className="mb-4">اتصل بنا الآن للحصول على أفضل عروض 5G والألياف البصرية المتطورة، نوفر لك راوتر مجاني مع التركيب.</p>
          <a href="tel:0596620358" className="text-brand-primary font-bold text-3xl block" dir="ltr">0596620358</a>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-4 border-b-2 border-brand-light pb-2 inline-block">الأقسام والمدونة</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-brand-secondary transition flex items-center gap-2 justify-center md:justify-start py-1 md:py-0"><span>›</span> الرئيسية</Link></li>
            <li><a href="#services" className="hover:text-brand-secondary transition flex items-center gap-2 justify-center md:justify-start py-1 md:py-0"><span>›</span> الخدمات</a></li>
            <li><a href="#blog" className="hover:text-brand-secondary transition flex items-center gap-2 justify-center md:justify-start py-1 md:py-0 font-bold"><span>›</span> المدونة</a></li>
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
      
      <div className="bg-brand-secondary py-6 text-center text-sm border-t border-gray-700">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} جميع الحقوق محفوظة لمحرك إنترنت زين.</p>
          <div className="flex gap-2">
            <a href="https://wa.me/966596620358" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-brand-primary transition">
              <Phone size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
