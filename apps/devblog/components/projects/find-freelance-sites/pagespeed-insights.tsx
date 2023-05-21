//components/projects/find-freelance-sites/pagespeed-insights.tsx

import useSWR from 'swr';
import axios from 'axios';
import { useState } from 'react';
import { Input, Button, Flex } from '@with-nx/react-ui';

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
        <div className="flex flex-col p-4">
          <div className="flex justify-between">
            <span>Performance Score</span>
            <span>{data.lighthouseResult.categories.performance.score}</span>
          </div>
          <div className="flex justify-between">
            <span>First Contentful Paint</span>
            <span>
              {
                data.lighthouseResult.audits['first-contentful-paint']
                  .displayValue
              }
            </span>
          </div>
          <div className="flex justify-between">
            <span>Speed Index</span>
            <span>
              {data.lighthouseResult.audits['speed-index'].displayValue}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Time to Interactive</span>
            <span>{data.lighthouseResult.audits.interactive.displayValue}</span>
          </div>
          <div className="flex justify-between">
            <span>First Meaningful Paint</span>
            <span>
              {
                data.lighthouseResult.audits['first-meaningful-paint']
                  .displayValue
              }
            </span>
          </div>
          <div className="flex justify-between">
            <span>Largest Contentful Paint</span>
            <span>
              {
                data.lighthouseResult.audits['largest-contentful-paint']
                  .displayValue
              }
            </span>
          </div>
          <div className="flex justify-between">
            <span>Cumulative Layout Shift</span>
            <span>
              {
                data.lighthouseResult.audits['cumulative-layout-shift']
                  .displayValue
              }
            </span>
          </div>
          <div className="flex justify-between">
            <span>Total Blocking Time</span>
            <span>
              {data.lighthouseResult.audits['total-blocking-time'].displayValue}
            </span>
          </div>
          <div className="flex justify-between">
            <span>SEO Score</span>
            <span>
              {data.lighthouseResult.categories.seo ? (
                <div className="flex justify-between">
                  <span>{data.lighthouseResult.categories.seo.score}</span>
                </div>
              ) : (
                <div className="flex justify-between">
                  <span>N/A</span>
                </div>
              )}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PagespeedInsights;
