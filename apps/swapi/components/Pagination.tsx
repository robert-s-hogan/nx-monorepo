import { Button } from '@with-nx/react-ui';
import { useState, useEffect } from 'react';

interface Props {
  page: number;
  nextPage: string;
  previousPage: string;
  count: number;
  changePage: (newPage: number) => void;
  isLoading: boolean;
}

const Pagination: React.FC<Props> = ({
  page,
  nextPage,
  previousPage,
  count,
  changePage,
  isLoading,
}) => {
  const [loadingPage, setLoadingPage] = useState<number | null>(null);
  const totalPages = Math.ceil(count / 10);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const extractPageNumber = (url: string) => {
    const pageNumber = url.split('=')[1];
    return parseInt(pageNumber);
  };

  const handleChangePage = (newPage: number) => {
    setLoadingPage(newPage);
    changePage(newPage);
  };

  useEffect(() => {
    if (!isLoading && loadingPage !== null) {
      setLoadingPage(null);
    }
  }, [isLoading, loadingPage]);

  return (
    <div className="mt-4 flex flex-wrap justify-between">
      <Button
        className={`letter-box bg-orange uppercase ${
          previousPage === null ? 'disabled' : ''
        }`}
        onClick={() =>
          previousPage && handleChangePage(extractPageNumber(previousPage))
        }
        disabled={previousPage === null}
      >
        Back
      </Button>
      <div className="flex items-center space-x-1">
        {pages.map((pageNumber) => {
          return (
            <Button
              key={pageNumber}
              className={`letter-box bg-orange px-1 lg:px-3 ${
                pageNumber === page ? 'bg-blue' : ''
              }`}
              onClick={() => handleChangePage(pageNumber)}
            >
              {pageNumber.toString()}
            </Button>
          );
        })}
      </div>
      <Button
        className={`letter-box bg-orange uppercase ${
          nextPage === null ? 'disabled' : ''
        }`}
        onClick={() => nextPage && changePage(extractPageNumber(nextPage))}
        disabled={nextPage === null}
        loading={isLoading}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
