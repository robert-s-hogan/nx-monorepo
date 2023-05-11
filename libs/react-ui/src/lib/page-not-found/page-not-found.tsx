import { Button, Heading, List, ListItem, Link, Text } from '@with-nx/react-ui';
import pageNotFoundStyles from './page-not-found.module.css';

/* eslint-disable-next-line */
export interface PageNotFoundProps {}

const pageNotFoundItems = [
  {
    id: 1,
    value: 'The link to this page may be incorrect or out-of-date',
  },
  {
    id: 2,
    value: 'You may have bookmarked a page that has been moved.',
  },

  {
    id: 3,
    value: 'The link you clicked on is old or broken.',
  },
];

export function PageNotFound(props: PageNotFoundProps) {
  return (
    <div className={`${pageNotFoundStyles.container}`}>
      <div className={`${pageNotFoundStyles.stack}`}>
        <Heading level={1}>We're sorry...</Heading>
        <Text>
          The page you&rsquo;re looking for is not available for one of the
          following reasons:
        </Text>
        <List items={pageNotFoundItems} />
        <Text>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </Text>
      </div>
    </div>
  );
}
export default PageNotFound;
