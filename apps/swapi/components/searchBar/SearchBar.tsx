import { useState, useEffect } from 'react';
import { useSearchPosts } from '../../lib/hooks/api-search-hooks';
import { FetchState } from '../../pages/types';

const Loading: React.FC = () => {
  const [data, searchResults, fetchState, getSearchData] = useSearchPosts(null);
  const [character, setCharacter] = useState('');
  useEffect(() => {
    getSearchData(character);
  }, []);

  return (
    <div className="flex justify-center max-w-4xl container mx-auto my-8">
      <form
        className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full mx-2"
        onSubmit={(e) => {
          e.preventDefault();
          getSearchData(character);
        }}
      >
        <label htmlFor="character" className="w-full md:col-span-3">
          <input
            id="character"
            className="w-full"
            value={character}
            placeholder="Search Star Wars Characters"
            onChange={(e) => setCharacter(e.target.value)}
          />
        </label>
        <button className="rotate-1" type="submit">
          Search
        </button>
      </form>
      {fetchState === FetchState.SUCCESS && (
        <p className="text-white block text-center search-results">
          {data.length}
        </p>
      )}
      {fetchState === FetchState.ERROR && (
        <p className="text-white block text-center search-results">
          Oops! Something went wrong. Please click the button below
        </p>
      )}
    </div>
  );
};

export default Loading;
