'use client';

import React, { useState } from 'react';
import { Send, MapPin, Smartphone, User, Wifi } from 'lucide-react';

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '5G',
    location: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `السلام عليكم، أريد طلب تأسيس إنترنت جديد.
الاسم: ${formData.name}
الجوال: ${formData.phone}
الخدمة المطلوبة: ${formData.service}
الحي/المدينة: ${formData.location}
جايكم من إعلان سناب شات.`;
    
    const whatsappUrl = `https://wa.me/966596620358?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-6 md:p-8 relative overflow-hidden border-t-8 border-brand-primary">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl -translate-y-10 translate-x-10"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-6">
          <div className="inline-block bg-yellow-100 text-yellow-800 text-sm font-bold px-3 py-1 rounded-full mb-3">
            🔥 عرض خاص ومحدود
          </div>
          <h2 className="text-2xl font-black text-[#444] mb-2">اطلب الخدمة الآن</h2>
          <p className="text-gray-500 text-sm">تأسيس مجاني وراوتر مجاني، املأ بياناتك وسنتواصل معك فوراً</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
              <User size={18} />
            </div>
            <input 
              type="text" 
              name="name"
              required
              placeholder="الاسم الكريم" 
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl py-3 pr-10 pl-4 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all font-medium"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
              <Smartphone size={18} />
            </div>
            <input 
              type="tel" 
              name="phone"
              required
              dir="rtl"
              placeholder="رقم الجوال (مثال: 05xxxxxxxxx)" 
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl py-3 pr-10 pl-4 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all font-medium"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
              <Wifi size={18} />
            </div>
            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl py-3 pr-10 pl-4 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all font-medium appearance-none"
            >
              <option value="5G">إنترنت زين 5G منزلي</option>
              <option value="فايبر (ألياف بصرية)">إنترنت زين فايبر (ألياف بصرية)</option>
            </select>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
              <MapPin size={18} />
            </div>
            <input 
              type="text" 
              name="location"
              required
              placeholder="الحي / المدينة" 
              value={formData.location}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl py-3 pr-10 pl-4 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all font-medium"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#18d26e] hover:bg-[#15b960] text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
          >
            <span>إرسال الطلب عبر الواتساب</span>
            <Send size={20} className="mr-2 rotate-180" />
          </button>
          
          <p className="text-xs text-center text-gray-400 mt-2">
            بضغطك على الزر، سيتم توجيهك مباشرة لمحادثة واتساب مع المندوب.
          </p>
        </form>
      </div>
    </div>
  );
}
