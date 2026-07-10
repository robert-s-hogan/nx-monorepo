import { Button } from '@with-nx/react-ui';

interface SwapiCardsPaginationProps {
  page: number;
  nextPage: number;
  previousPage: number;
  getInitialData: () => void;
}

const SwapiCardsPagination: React.FC<SwapiCardsPaginationProps> = (props) => {
  const { page, nextPage, previousPage, getInitialData } = props;

  return (
    <div className="mt-4 flex justify-between">
      <Button
        className={`letter-box bg-orange uppercase ${
          previousPage === null ? 'disabled' : ''
        }`}
      >
        {previousPage === null ? 'Previous' : `${previousPage.toString()}`}
      </Button>
      <Button className="letter-box bg-orange">{page.toString()}</Button>
      <Button
        className={`letter-box bg-orange uppercase ${
          nextPage === null ? 'disabled' : ''
        }`}
        onClick={() => getInitialData()}
      >
        {nextPage !== null ? 'Next' : nextPage}
      </Button>
    </div>
  );
};

export default SwapiCardsPagination;
