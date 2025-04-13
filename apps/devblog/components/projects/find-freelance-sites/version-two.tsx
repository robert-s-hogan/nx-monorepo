import { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { Button, Flex, Input, Text } from '@with-nx/react-ui';

const fetcher = async (urls) => {
  const results = await Promise.all(
    urls.map((url) => axios.get(url).then((res) => res.data))
  );
  return results.flatMap((result) => result.items || []);
};

const VersionTwo = () => {
  const [googleSearchTerm, setGoogleSearchTerm] = useState('');
  const [excludedTerms, setExcludedTerms] = useState('');
  const [googleUrls, setGoogleUrls] = useState([]);

  const handleGoogleSearch = (e) => {
    e.preventDefault();
    if (googleSearchTerm !== '') {
      const excluded = excludedTerms
        .split(',')
        .map((term) => '-' + term.trim())
        .join(' ');
      setGoogleUrls(
        Array.from(
          { length: 10 },
          (_, i) =>
            `https://www.googleapis.com/customsearch/v1?key=${
              process.env.NEXT_PUBLIC_PAID_GOOGLE_SEARCH_API_KEY
            }&cx=${
              process.env.NEXT_PUBLIC_CUSTOM_SEARCH_ENGINE_ID
            }&q=${googleSearchTerm} ${excluded}&start=${i * 10 + 1}`
        )
      );
    }
  };

  const { data: VersionTwoData, error: VersionTwoError } = useSWR(
    googleUrls.length ? googleUrls : null,
    fetcher
  );

  if (VersionTwoError) {
    if (VersionTwoError.response && VersionTwoError.response.status === 429) {
      console.error('You have reached the maximum number of queries');
    } else {
      console.error(VersionTwoError);
    }
  }

  return (
    <form onSubmit={handleGoogleSearch} className="p-4">
      <Flex className="items-center space-x-6">
        <Input
          type="text"
          name="googleSearchTerm"
          label="Search Term"
          value={googleSearchTerm}
          onChange={(e) => setGoogleSearchTerm(e.target.value)}
          placeholder="Search"
        />
        <Input
          type="text"
          name="excludedTerms"
          label="Exclude Terms"
          value={excludedTerms}
          onChange={(e) => setExcludedTerms(e.target.value)}
          placeholder="Enter terms separated by commas"
        />
        <Button className="btn-primary mt-6" type="submit">
          Submit
        </Button>
      </Flex>
      {VersionTwoError && (
        <div>
          An error occurred:
          {VersionTwoError.response && VersionTwoError.response.status === 429
            ? 'You have reached the maximum number of queries'
            : VersionTwoError.message}
        </div>
      )}
      <>
        {!VersionTwoData ? (
          <div>Loading...</div>
        ) : (
          <Flex className="flex-col space-y-0 p-2">
            <Text className="text-xl font-bold">
              Results: {VersionTwoData && VersionTwoData.length}
            </Text>
            {VersionTwoData &&
              VersionTwoData.length > 0 &&
              VersionTwoData.map((item, index) => (
                <div key={`item-${index}`}>
                  <a target="_blank">{item.link}</a>
                </div>
              ))}
          </Flex>
        )}
      </>
    </form>
  );
};

export default VersionTwo;
