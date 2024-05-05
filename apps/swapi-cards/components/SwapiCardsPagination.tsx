import { Button } from '@with-nx/generic-ui';

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
        theme="primary"
        className={`letter-box bg-orange uppercase ${
          previousPage === null ? 'disabled' : ''
        }`}
        text={previousPage === null ? 'Previous' : `${previousPage.toString()}`}
      />
      <Button
        className="letter-box bg-orange"
        theme="primary"
        text={page.toString()}
      />
      <Button
        className={`letter-box bg-orange uppercase ${
          nextPage === null ? 'disabled' : ''
        }`}
        theme="primary"
        onClick={() => getInitialData()}
        text={nextPage !== null ? 'Next' : nextPage}
      />
    </div>
  );
};

export default SwapiCardsPagination;
