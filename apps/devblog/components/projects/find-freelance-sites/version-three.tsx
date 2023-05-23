import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  Text,
} from '@with-nx/react-ui';
import { X } from '@with-nx/icons';
import { useSearchQuery, useFileTypeSelection } from '@with-nx/react-hooks';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const VersionThree = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [years, setYears] = useState(10);
  const [excludeTerms, setExcludeTerms] = useState(['']);
  const [excludeTerm, setExcludeTerm] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fetchData, setFetchData] = useState(false); // State to trigger data fetching
  const [initialZipCode, setInitialZipCode] = useState(null);

  const handleExcludeTermChange = (e) => {
    setExcludeTerm(e.target.value);
  };

  const handleAddExcludeTerm = (e) => {
    e.preventDefault();
    if (excludeTerm !== '') {
      setExcludeTerms([...excludeTerms, excludeTerm]);
      setExcludeTerm('');
    }
  };

  const handleRemoveExcludeTerm = (index) => {
    setExcludeTerms(excludeTerms.filter((_, i) => i !== index));
  };

  const { selectedFileType, handleFileTypeChange } = useFileTypeSelection();

  const restParams = {
    key: process.env.NEXT_PUBLIC_FREE_GOOGLE_SEARCH_API_KEY,
    cx: process.env.NEXT_PUBLIC_CUSTOM_SEARCH_ENGINE_ID,
  };

  const { state, handleSearch: triggerSearch } = useSearchQuery(
    'https://www.googleapis.com/customsearch/v1',
    {
      key: process.env.NEXT_PUBLIC_FREE_GOOGLE_SEARCH_API_KEY,
      cx: process.env.NEXT_PUBLIC_CUSTOM_SEARCH_ENGINE_ID,
      excludeTerms: excludeTerms,
      setFetchData: setFetchData, // pass it here
    }
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let zip = parseInt(zipCode);
    setInitialZipCode(zip); // Set the initial zip code
    const excluded = excludeTerms.reduce((acc, term) => `${acc} -${term}`, '');
    const fileTypeQuery = selectedFileType
      ? ` filetype:${selectedFileType}`
      : '';
    triggerSearch(`${searchTerm} ${zip}${excluded}${fileTypeQuery}`, years);
  };

  useEffect(() => {
    if (state.searchTerm !== '') {
      const zipCodes = ['95403', '95404']; // Add the zip codes you want to search through
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

      const fetchData = async () => {
        let allData = []; // Temp array to store all search results

        for (let zip of zipCodes) {
          let url = `https://www.googleapis.com/customsearch/v1?${formattedParams}&q=${encodeURIComponent(
            q
          )} ${zip}`;

          try {
            let response = await fetch(url);
            let data = await response.json();
            if (data.items) {
              allData = allData.concat(data.items);
            }
          } catch (error) {
            console.error('Error fetching data: ', error);
            setError(error);
          }
        }

        setData(allData);
        setFetchData(true); // trigger network request
      };

      fetchData();
    }
  }, [state]);

  return (
    <form onSubmit={handleFormSubmit} className="p-4 space-y-4">
      <Flex className="items-center space-x-6">
        <Input
          type="text"
          name="searchTerm"
          label="Search Term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
        />
        <Flex className="items-center space-x-6">
          <Input
            type="text"
            name="zipCode"
            label="Zip Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Zip Code"
          />
        </Flex>

        <Button className="btn-primary mt-6" type="submit">
          Submit
        </Button>
      </Flex>
      <Flex className="flex-col space-y-2 mt-8">
        <Flex className="items-center justify-between w-full space-x-2">
          <Text className="!w-auto">Excluded Terms</Text>
          <Flex className="flex-grow space-x-1">
            {excludeTerms.map(
              (term, index) =>
                term !== '' && (
                  <Flex key={index} className="items-center space-x-2">
                    <Button
                      className="btn-secondary flex items-center"
                      onClick={() => handleRemoveExcludeTerm(index)}
                    >
                      {term}
                      <X className="h-4 w-4 ml-2" />
                    </Button>
                  </Flex>
                )
            )}
          </Flex>
        </Flex>
        <Flex className="items-center space-x-2">
          <Input
            type="text"
            value={excludeTerm}
            onChange={handleExcludeTermChange}
            placeholder="Enter term to exclude"
          />
          <Button className="btn-primary" onClick={handleAddExcludeTerm}>
            Add
          </Button>
        </Flex>
      </Flex>
      {/* {data ? (
        <Flex className="flex-col space-y-0 p-6">
          {data.items &&
            data.items.length > 0 &&
            data.items.map((item, index) => (
              <div key={index}>
                <a target="_blank" rel="noopener noreferrer" href={item.link}>
                  {item.title}
                </a>
              </div>
            ))}
        </Flex>
      ) : (
        <div>Loading...</div>
      )} */}
    </form>
  );
};

export default VersionThree;
