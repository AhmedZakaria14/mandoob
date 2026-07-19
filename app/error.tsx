'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h2 className="text-4xl font-bold mb-4">حدث خطأ داخلي</h2>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-brand-primary text-white rounded-full font-bold hover:bg-brand-secondary transition-colors"
      >
        حاول مرة أخرى
      </button>
    </div>
  );
}
