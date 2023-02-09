interface Props {
  page: number;
  nextPage: number;
  previousPage: number;
  getInitialData: () => void;
}

const Pagination: React.FC<Props> = (props) => {
  const { page, nextPage, previousPage, getInitialData } = props;

  return (
    <div className="mt-4 flex justify-between">
      <button
        className={`letter-box bg-orange uppercase ${
          previousPage === null ? 'disabled' : ''
        }`}
      >
        {previousPage === null ? 'Previous' : previousPage}
      </button>
      <button className="letter-box bg-orange">{page}</button>
      <button
        className={`letter-box bg-orange uppercase ${
          nextPage === null ? 'disabled' : ''
        }`}
        onClick={() => getInitialData()}
      >
        {nextPage !== null ? 'Next' : nextPage}
      </button>
    </div>
  );
};

export default Pagination;
