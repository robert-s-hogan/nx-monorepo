import paginationStyles from './pagination.module.css';
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
    <div className={`pagination ${paginationStyles.pagination}`}>
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`page-number  ${paginationStyles.pageNumber} ${
            page === currentPage ? 'current-page' : ''
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
