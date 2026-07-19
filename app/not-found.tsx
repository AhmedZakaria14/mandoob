import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h2 className="text-4xl font-bold mb-4">404 - الصفحة غير موجودة</h2>
      <p className="text-lg text-gray-600 mb-8">عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها.</p>
      <Link href="/" className="px-6 py-3 bg-brand-primary text-white rounded-full font-bold hover:bg-brand-secondary transition-colors">
        العودة للرئيسية
      </Link>
    </div>
  );
}
