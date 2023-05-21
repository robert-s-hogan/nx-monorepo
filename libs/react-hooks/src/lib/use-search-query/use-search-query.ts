import { useState, useEffect } from 'react';

interface DefaultInitialState {
  searchTerm: string;
  years: number;
  fileTypes: {
    html: boolean;
    php: boolean;
    asp: boolean;
  };
  excludeTerm: string;
  excludeTerms: string[];
}

interface UseSearchQuery {
  state: DefaultInitialState;
  handleSearch: (searchTerm: string, years: number) => void;
  url: string | null;
}

const defaultInitialState = {
  searchTerm: '',
  years: 10,
  fileTypes: {
    html: false,
    php: false,
    asp: false,
  },
  excludeTerm: '',
  excludeTerms: [''],
};

export const useSearchQuery = (
  baseUrl: string,
  params: any,
  initialState: DefaultInitialState = defaultInitialState
): UseSearchQuery => {
  const { excludeTerms, ...restParams } = params;

  const [state, setState] = useState(initialState);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (state.searchTerm !== '') {
      const selectedFileTypes = Object.keys(state.fileTypes).filter(
        (fileType) => state.fileTypes[fileType]
      );
      const formattedParams = Object.entries(restParams)
        .map(([key, value]) => {
          if (
            typeof value === 'string' ||
            typeof value === 'number' ||
            typeof value === 'boolean'
          ) {
            return `${key}=${encodeURIComponent(value)}`;
          } else {
            return `${key}=invalid`;
          }
        })
        .join('&');
      let q = state.searchTerm;
      if (excludeTerms.length > 0 && excludeTerms[0] !== '') {
        q += ' -' + excludeTerms.join(' -');
      }
      let url = `${baseUrl}?${formattedParams}&q=${encodeURIComponent(q)}`;
      setUrl(url);
    }
  }, [state]);

  const handleSearch = (searchTerm, years) => {
    setState({
      ...state,
      searchTerm: searchTerm,
      years: years,
    });
  };

  return {
    state,
    handleSearch,
    url,
  };
};
