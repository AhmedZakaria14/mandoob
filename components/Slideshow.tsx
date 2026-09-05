'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

import { homeImages } from '@/data/images';

export function Slideshow({ images = homeImages }: { images?: typeof homeImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500); // 4.5 seconds delay
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[420px] md:h-[600px] flex items-center justify-center bg-gray-50/50 rounded-2xl shadow-md border border-gray-100 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-contain pb-14"
            priority={currentIndex === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Pagination indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 z-10 p-2 bg-black/40 rounded-full backdrop-blur-sm">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className="p-2 focus:outline-none"
            aria-label={`عرض الصورة رقم ${idx + 1}`}
          >
            <div 
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-brand-primary w-6' : 'bg-white/60 w-2.5 hover:bg-white'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
