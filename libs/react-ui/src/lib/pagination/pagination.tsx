import { PaginationProps } from '@with-nx/types';

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 m-1 border border-gray-300 bg-white text-gray-700 cursor-pointer transition-colors duration-200 ease-in-out ${
            page === currentPage ? 'bg-gray-700 text-white border-gray-700' : ''
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
