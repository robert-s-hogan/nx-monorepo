import { Button, Heading, List, ListItem, Link, Text } from '@with-nx/react-ui';

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

export function PageNotFound(props: PageNotFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="space-y-8">
        <Heading level={1} className="text-center mb-6">
          We're sorry...
        </Heading>
        <Text className="mb-4">
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
