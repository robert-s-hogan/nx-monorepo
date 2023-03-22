import { useState } from 'react';
import { useSWRApi } from '../api/useSWRApi';
import { Person } from '../types/api/types';

const Loading: React.FC = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState('');

  const { data, isLoading, isError } = useSWRApi<Person>('people', search);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (data) {
      setSearchResults(`Found ${data.count} results`);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred while fetching data</div>;

  return (
    <div className="flex justify-center max-w-4xl container mx-auto my-8">
      <form
        onSubmit={handleFormSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full mx-2"
      >
        <label htmlFor="character" className="w-full md:col-span-3">
          <input
            id="character"
            className="w-full"
            value={search}
            placeholder="Search Star Wars Characters"
            onChange={handleSearch}
          />
        </label>
        <button className="rotate-1" type="submit">
          Search
        </button>
      </form>
      {searchResults && (
        <p className="text-white block text-center search-results">
          {searchResults}
        </p>
      )}
      {isError && (
        <p className="text-white block text-center search-results">
          Oops! Something went wrong. Please click the button below
        </p>
      )}
    </div>
  );
};

export default Loading;
