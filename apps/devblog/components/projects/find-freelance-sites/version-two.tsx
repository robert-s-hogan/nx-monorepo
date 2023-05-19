import { useState, useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  Text,
} from '@with-nx/react-ui';

// Custom fetcher that supports fetching multiple urls
const fetcher = async (urls) => {
  const results = await Promise.all(
    urls.map((url) => axios.get(url).then((res) => res.data))
  );
  // Combine all the items from each result into a single array
  return results.flatMap((result) => result.items || []);
};

const VersionTwo = () => {
  const [googleSearchTerm, setGoogleSearchTerm] = useState('');
  const [googleUrls, setGoogleUrls] = useState([]);

  const handleGoogleSearch = (e) => {
    e.preventDefault();
    if (googleSearchTerm !== '') {
      setGoogleUrls(
        Array.from(
          { length: 10 },
          (_, i) =>
            `https://www.googleapis.com/customsearch/v1?key=${
              process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY
            }&cx=${
              process.env.NEXT_PUBLIC_CUSTOM_SEARCH_ENGINE_ID
            }&q=${googleSearchTerm}&start=${i * 10 + 1}`
        )
      );
    }
  };

  const { data: VersionTwoData, error: VersionTwoError } = useSWR(
    googleUrls.length ? googleUrls : null,
    fetcher,
    { suspense: true }
  );

  if (VersionTwoError) console.error(VersionTwoError);

  return (
    <form onSubmit={handleGoogleSearch} className="mt-8">
      <Flex className="items-center space-x-6">
        <Input
          type="text"
          name="googleSearchTerm"
          label="Search Term"
          value={googleSearchTerm}
          onChange={(e) => setGoogleSearchTerm(e.target.value)}
          placeholder="Search"
        />
        <Button className="btn-primary" type="submit">
          Submit
        </Button>
      </Flex>
      {VersionTwoError && (
        <div>An error occurred: {VersionTwoError.message}</div>
      )}
      <>
        {googleUrls.length && !VersionTwoData && !VersionTwoError ? (
          <div>Loading...</div>
        ) : (
          <Flex className="flex-col space-y-4 mt-4">
            {VersionTwoData &&
              VersionTwoData.flatMap((data) =>
                data.items
                  ? data.items.map((item, index) => (
                      <div key={`${data.items}-${index}`}>
                        <a target="_blank" href={item.link}>
                          {item.title}
                        </a>
                        <p>{item.snippet}</p>
                      </div>
                    ))
                  : null
              )}
          </Flex>
        )}
        <pre className="text-xs">{JSON.stringify(VersionTwoData, null, 2)}</pre>
      </>
    </form>
  );
};

export default VersionTwo;
