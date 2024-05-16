//components/projects/find-freelance-sites/pagespeed-insights.tsx

import useSWR from 'swr';
import axios from 'axios';
import { useState } from 'react';
import { Input, Button } from '@with-nx/react-ui';
import { Flex } from '@with-nx/generic-ui';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const PagespeedInsights = () => {
  const [url, setUrl] = useState('');
  const [requestUrl, setRequestUrl] = useState('');

  const { data, error } = useSWR(
    requestUrl ? `/api/pagespeed?url=${requestUrl}` : null,
    fetcher
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestUrl(url);
  };

  console.log(`data`, data);

  return (
    <div>
      <form onSubmit={onSubmit} className="p-4">
        <Flex className="items-center space-x-4">
          <Input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter website URL"
            className="h-full"
            required
          />
          <Button className="btn-primary w-36" type="submit">
            Submit
          </Button>
        </Flex>
      </form>

      {error && <div>Failed to load data</div>}
      {!data && requestUrl && <div className="p-4">Loading...</div>}
      {data && (
        <Flex className="flex-col p-4">
          <Flex className="justify-between">
            <span>Performance Score</span>
            <span>{data.lighthouseResult.categories.performance.score}</span>
          </Flex>
          <Flex className="justify-between">
            <span>First Contentful Paint</span>
            <span>
              {
                data.lighthouseResult.audits['first-contentful-paint']
                  .displayValue
              }
            </span>
          </Flex>
          <Flex className="justify-between">
            <span>Speed Index</span>
            <span>
              {data.lighthouseResult.audits['speed-index'].displayValue}
            </span>
          </Flex>
          <Flex className="justify-between">
            <span>Time to Interactive</span>
            <span>{data.lighthouseResult.audits.interactive.displayValue}</span>
          </Flex>
          <Flex className="justify-between">
            <span>First Meaningful Paint</span>
            <span>
              {
                data.lighthouseResult.audits['first-meaningful-paint']
                  .displayValue
              }
            </span>
          </Flex>
          <Flex className="justify-between">
            <span>Largest Contentful Paint</span>
            <span>
              {
                data.lighthouseResult.audits['largest-contentful-paint']
                  .displayValue
              }
            </span>
          </Flex>
          <Flex className="justify-between">
            <span>Cumulative Layout Shift</span>
            <span>
              {
                data.lighthouseResult.audits['cumulative-layout-shift']
                  .displayValue
              }
            </span>
          </Flex>
          <Flex className="justify-between">
            <span>Total Blocking Time</span>
            <span>
              {data.lighthouseResult.audits['total-blocking-time'].displayValue}
            </span>
          </Flex>
          <Flex className="justify-between">
            <span>SEO Score</span>
            <span>
              {data.lighthouseResult.categories.seo ? (
                <Flex className="justify-between">
                  <span>{data.lighthouseResult.categories.seo.score}</span>
                </Flex>
              ) : (
                <Flex className="justify-between">
                  <span>N/A</span>
                </Flex>
              )}
            </span>
          </Flex>
        </Flex>
      )}
    </div>
  );
};

export default PagespeedInsights;
