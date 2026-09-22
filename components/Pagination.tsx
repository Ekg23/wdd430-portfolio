'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-4 mt-8">
      <Link
        href={createPageURL(currentPage - 1)}
        aria-disabled={currentPage <= 1}
        className={`px-3 py-2 rounded-md border ${
          currentPage <= 1
            ? 'pointer-events-none opacity-50'
            : 'hover:bg-gray-100'
        }`}
      >
        Previous
      </Link>

      <span className="text-sm text-gray-700">
        Page {currentPage} of {totalPages}
      </span>

      <Link
        href={createPageURL(currentPage + 1)}
        aria-disabled={currentPage >= totalPages}
        className={`px-3 py-2 rounded-md border ${
          currentPage >= totalPages
            ? 'pointer-events-none opacity-50'
            : 'hover:bg-gray-100'
        }`}
      >
        Next
      </Link>
    </nav>
  );
}