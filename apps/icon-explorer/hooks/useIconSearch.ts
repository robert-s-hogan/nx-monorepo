import { useEffect, useState } from 'react';

interface IconProps {
  name: string;
  IconComponent: React.FC;
  className?: string;
}

const synonyms = {
  boat: ['ship', 'sea', 'anchor', 'sail'],
  warning: ['alert', 'caution', 'danger'],
  // ... add more as required
};

function useIconSearch(searchTerm: string, icons: IconProps[]) {
  const [results, setResults] = useState<IconProps[]>([]);

  useEffect(() => {
    let searchTerms = [searchTerm];

    // Check if the search term has synonyms
    if (synonyms[searchTerm]) {
      searchTerms = searchTerms.concat(synonyms[searchTerm]);
    }

    // Now search your icons using all searchTerms (original + synonyms)
    const filteredResults = icons.filter((icon) =>
      searchTerms.some((searchTerm) =>
        icon.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    console.log(`useIconSearch: ${searchTerm} => ${filteredResults.length}`);

    setResults(filteredResults);
  }, [searchTerm, icons]);

  return results;
}

export default useIconSearch;
