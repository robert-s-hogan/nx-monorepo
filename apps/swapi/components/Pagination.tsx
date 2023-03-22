interface Props {
  page: number;
  nextPage: string;
  previousPage: string;
  count: number;
  changePage: (newPage: number) => void;
}

const Pagination: React.FC<Props> = ({
  page,
  nextPage,
  previousPage,
  count,
  changePage,
}) => {
  const totalPages = Math.ceil(count / 10);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const extractPageNumber = (url: string) => {
    const pageNumber = url.split('=')[1];
    return parseInt(pageNumber);
  };
  return (
    <div className="mt-4 flex flex-wrap justify-between">
      <button
        className={`letter-box bg-orange uppercase ${
          previousPage === null ? 'disabled' : ''
        }`}
        onClick={() =>
          previousPage && changePage(extractPageNumber(previousPage))
        }
        disabled={previousPage === null}
      >
        Back
      </button>
      <div className="flex items-center space-x-1">
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`letter-box bg-orange px-1 lg:px-3 ${
              pageNumber === page ? 'font-bold disabled' : ''
            }`}
            onClick={() => changePage(pageNumber)}
            disabled={previousPage === null}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        className={`letter-box bg-orange uppercase ${
          nextPage === null ? 'disabled' : ''
        }`}
        onClick={() => nextPage && changePage(extractPageNumber(nextPage))}
        disabled={nextPage === null}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
