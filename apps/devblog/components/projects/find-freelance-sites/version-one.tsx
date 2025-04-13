import { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { Button, Checkbox, Flex, Input, Text } from '@with-nx/react-ui';
import { FiX } from 'react-icons/fi';
import { useSearchQuery, useFileTypeSelection } from '@with-nx/react-hooks';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const VersionOne = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [years, setYears] = useState(10);
  const [excludeTerms, setExcludeTerms] = useState(['']);
  const [excludeTerm, setExcludeTerm] = useState('');

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

  //file types
  const { selectedFileType, handleFileTypeChange } = useFileTypeSelection();
  const { handleSearch: triggerSearch, url } = useSearchQuery(
    'https://www.googleapis.com/customsearch/v1',
    {
      key: process.env.NEXT_PUBLIC_FREE_GOOGLE_SEARCH_API_KEY,
      cx: process.env.NEXT_PUBLIC_CUSTOM_SEARCH_ENGINE_ID,
      excludeTerms: excludeTerms,
    }
  );

  const handleFormSubmit = (e, searchTerm, years) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    // Convert excludeTerms array into a string with - operator before each term
    const excluded = excludeTerms.reduce((acc, term) => `${acc} -${term}`, '');
    const fileTypeQuery = selectedFileType
      ? ` filetype:${selectedFileType}`
      : '';

    // Include the excluded terms and file types in the search term
    triggerSearch(`${searchTerm}${excluded}${fileTypeQuery}`, years);
  };

  const { data } = useSWR(url, fetcher);
  return (
    <>
      <form
        onSubmit={(e) => handleFormSubmit(e, searchTerm, years)}
        className="space-y-4 p-4"
      >
        <Flex className="items-center space-x-6">
          <Input
            type="text"
            name="searchTerm"
            label="Search Term"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
          />
          <Button className="btn-primary mt-6" type="submit">
            Submit
          </Button>
        </Flex>
        <Flex className="w-full flex-col space-y-2 md:flex-row">
          <Flex className="w-full items-center space-x-6 space-y-2 md:mr-8 md:w-auto">
            <Input
              type="number"
              label="Age of Website (Years)"
              name="years"
              className="mb-8 h-14 !w-48"
              value={years}
              onChange={(e) => setYears(parseInt(e.target.value))}
              placeholder="Years"
            />
          </Flex>
          <Flex className="w-full flex-col space-y-2 md:w-auto ">
            <Text className="block">Page File Type (old formats)</Text>
            <Flex className="space-x-2">
              {['html', 'php', 'asp'].map((fileType) => (
                <Checkbox
                  key={fileType}
                  name={fileType}
                  label={fileType.toUpperCase()}
                  checked={selectedFileType === fileType}
                  onChange={handleFileTypeChange}
                />
              ))}
            </Flex>
          </Flex>
        </Flex>
        <Flex className="mt-8 flex-col space-y-2">
          <Flex className="w-full items-center justify-between space-x-2">
            <Text className="!w-auto">Excluded Terms</Text>
            <Flex className="grow space-x-1">
              {excludeTerms.map(
                (term, index) =>
                  term !== '' && (
                    <Flex key={index} className="items-center space-x-2">
                      <Button
                        className="btn-secondary flex items-center"
                        onClick={() => handleRemoveExcludeTerm(index)}
                      >
                        {term}
                        <FiX className="ml-2 h-4 w-4" />
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
      </form>
      <>
        {url && !data ? (
          <div>Loading...</div>
        ) : (
          <Flex className="flex-col space-y-0 p-6">
            {data &&
              data.items.map((item, index) => (
                <div key={index}>
                  <a target="_blank" href={item.link}>
                    {item.link}
                  </a>
                  {/* <p>{item.snippet}</p> */}
                </div>
              ))}
          </Flex>
        )}
      </>
    </>
  );
};

export default VersionOne;
