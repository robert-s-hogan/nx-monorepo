// CharacterList.tsx
import { useState, useEffect } from 'react';
import SwapiCard from './SwapiCard';
import { useSWRApi } from '../api/useSWRApi';
import { Person } from '../types/api/types';
import Pagination from './Pagination';

export default function CharacterList() {
  const [nextPage, setNextPage] = useState(1);
  const [previousPage, setPreviousPage] = useState(null);

  const { data, isLoading, isError } = useSWRApi<Person>(
    `people/?page=${nextPage}`
  );

  const page = data
    ? data.next
      ? parseInt(data.next.split('=')[1]) - 1
      : parseInt(data.previous.split('=')[1]) + 1
    : 1;

  const changePage = (newPage) => {
    setNextPage(newPage);
    if (newPage > 1) {
      setPreviousPage(newPage - 1);
    }
  };

  if (isError) return <div>Error occurred while fetching data</div>;

  return (
    <div>
      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8">
        {data?.results.map((person) => (
          <SwapiCard key={person.name} person={person} isLoading={isLoading} />
        ))}
      </div> */}
      <Pagination
        page={page}
        nextPage={data?.next || null}
        previousPage={data?.previous || null}
        count={data?.count || 0}
        changePage={changePage}
        isLoading={isLoading}
      />
    </div>
  );
}
