import useSWR from 'swr';
import axios from 'axios';
import { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  Section,
  Text,
} from '@with-nx/react-ui';
import { X } from '@with-nx/icons';

import DevBlogLayout from '../../components/layout/DevBlogLayout';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function FreelanceFindSites() {
  const [searchTerm, setSearchTerm] = useState('');
  const [years, setYears] = useState(10);
  const [fileTypes, setFileTypes] = useState({
    html: false,
    php: false,
    asp: false,
  });
  const [excludeTerm, setExcludeTerm] = useState('');
  const [excludeTerms, setExcludeTerms] = useState(['']);
  const [url, setUrl] = useState(null);

  const { data, error } = useSWR(url, fetcher);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm !== '') {
      const selectedFileTypes = Object.keys(fileTypes).filter(
        (fileType) => fileTypes[fileType]
      );
      setUrl(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY
        }&cx=${
          process.env.NEXT_PUBLIC_CUSTOM_SEARCH_ENGINE_ID
        }&q=${searchTerm}${excludeTerms
          .map((term) => ` -${term}`)
          .join('')}&dateRestrict=y${years}&fileType=${selectedFileTypes.join(
          ','
        )}`
      );
    }
  };

  const handleFileTypeChange = (e) => {
    setFileTypes({ ...fileTypes, [e.target.name]: e.target.checked });
  };

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

  if (error) return <div>Failed to load</div>;

  return (
    <DevBlogLayout>
      <Section>
        <Flex className="flex-col space-y-4">
          <Heading level={1}>Find Freelance Sites</Heading>
          <Text>
            This tool is to find older websites that need an a refresg. The
            search utilizes Googles Custom Search API with the parameters that
            can help find older websites: age of website, file type of site, and
            exclude terms that show up on the site.
          </Text>
        </Flex>
        <form onSubmit={handleSearch} className="mt-8">
          <Flex className="items-center space-x-6">
            <Input
              type="text"
              name="searchTerm"
              label="Search Term"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
            />
            <Button className="btn-primary" type="submit">
              Submit
            </Button>
          </Flex>
          <Flex className="items-center space-x-6">
            <Input
              type="number"
              label="Age of Website (Years)"
              name="years"
              className="!w-48 h-14"
              value={years}
              onChange={(e) => setYears(parseInt(e.target.value))}
              placeholder="Years"
            />
            <Flex className="flex-col space-y-2">
              <Text className="block">Page File Type (old formats)</Text>
              <Flex className="space-x-2">
                {['html', 'php', 'asp'].map((fileType) => (
                  <Checkbox
                    key={fileType}
                    name={fileType}
                    label={fileType.toUpperCase()}
                    checked={fileTypes[fileType]}
                    onChange={handleFileTypeChange}
                  />
                ))}
              </Flex>
            </Flex>
          </Flex>
          <Flex className="flex-col space-y-2 mt-8">
            <Flex className="items-center justify-between w-full space-x-2">
              <Text className="!w-auto">
                Exclude Terms that show up on the site
              </Text>
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
        </form>
        <>
          {url && !data ? (
            <div>Loading...</div>
          ) : (
            <Flex className="flex-col space-y-4 mt-4">
              {data &&
                data.items.map((item, index) => (
                  <div key={index}>
                    <a target="_blank" href={item.link}>
                      {item.title}
                    </a>
                    <p>{item.snippet}</p>
                  </div>
                ))}
            </Flex>
          )}
        </>
      </Section>
    </DevBlogLayout>
  );
}
