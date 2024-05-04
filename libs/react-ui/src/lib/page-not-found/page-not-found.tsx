import { Button, Heading, List, ListItem, Link, Text } from '@with-nx/react-ui';
import pageNotFoundStyles from './page-not-found.module.css';

/* eslint-disable-next-line */
export interface PageNotFoundProps {}

const pageNotFoundItems = [
  {
    href: '#',
    children: 'The link to this page may be incorrect or out-of-date',
  },
  {
    href: '#',
    children: 'You may have bookmarked a page that has been moved.',
  },

  {
    href: '#',
    children: 'The link you clicked on is old or broken.',
  },
];

export const PageNotFound = (props: PageNotFoundProps) => {
  return (
    <div className={`${pageNotFoundStyles['container']}`}>
      <div className={`${pageNotFoundStyles['stack']}`}>
        <Heading level={1}>We're sorry...</Heading>
        <Text>
          The page you&rsquo;re looking for is not available for one of the
          following reasons:
        </Text>
        <List items={pageNotFoundItems || []} />
        <Text>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </Text>
      </div>
    </div>
  );
};
