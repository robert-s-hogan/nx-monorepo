import RSHLayout from '../components/RSHLayout';
import { Link } from '@with-nx/react-ui';
import { Heading, Text } from '@with-nx/generic-ui';
export default function Custom404() {
  return (
    <RSHLayout>
      <div className="container mx-auto my-48 md:my-80 lg:my-28 xl:my-48 2xl:my-72">
        <div className="space-y-4 px-5">
          <Heading level={1} className="text-5xl" text="We&rsquo;re sorry..." />
          <Text
            text="The page you&rsquo;re looking for is not available for one of the
            following reasons:"
          />
          <ul className="ml-4 list-disc">
            <li>The link to this page may be incorrect or out-of-date.</li>
            <li>You may have bookmarked a page that has been moved.</li>
          </ul>
          <Link
            href="mailto:robert@robertshogan.com?subject=404%20Error%20on%20robertshogan.com"
            className="text-catalog-primary underline"
            target="_blank"
          >
            <Text
              className="pb-4 md:pb-8"
              text="You can also contact us for help."
            />
          </Link>
          <Link href="/" className="btn-primary mt-4 text-lg">
            Go Home
          </Link>
        </div>
      </div>
    </RSHLayout>
  );
}
