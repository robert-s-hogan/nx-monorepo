import React, { FormEvent } from 'react';

interface Props {
  character: string;
  setCharacter: (value: string) => void;
  handleFormSubmit: (e: FormEvent) => void;
}

const SearchForm: React.FC<Props> = ({
  character,
  setCharacter,
  handleFormSubmit,
}) => {
  return (
    <form
      className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full md:mx-2"
      onSubmit={handleFormSubmit}
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
      <button className="rotate-1" type="submit" disabled={!character}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
