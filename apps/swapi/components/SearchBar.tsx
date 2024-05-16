import { useState } from 'react';
import { useSWRApi } from '../api/useSWRApi';
import { Person } from '../types/api/types';
import { Button, Flex, Text } from '@with-nx/generic-ui';

const Loading = () => {
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
    <Flex className="justify-center max-w-7xl container mx-auto my-8">
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
        <Button
          className="rotate-1"
          theme="primary"
          type="submit"
          text="Search"
        />
      </form>
      {searchResults && (
        <Text
          className="text-white block text-center search-results"
          text={searchResults}
        />
      )}
      {isError && (
        <Text
          className="text-white block text-center search-results"
          text="Oops! Something went wrong. Please click the button below"
        />
      )}
    </Flex>
  );
};

export default Loading;
