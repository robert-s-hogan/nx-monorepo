import RSHoganComLayout from '../components/layout/RSHoganComLayout';
import { Heading, Link } from '@with-nx/react-ui';

export default function Custom404() {
  return (
    <RSHoganComLayout>
      <div className="container mx-auto my-48 md:my-80 lg:my-28 xl:my-48 2xl:my-72">
        <div className="space-y-4 px-5">
          <Heading level={1} className="text-5xl">
            We&rsquo;re sorry...
          </Heading>
          <p>
            The page you&rsquo;re looking for is not available for one of the
            following reasons:
          </p>
          <ul className="ml-4 list-disc">
            <li>The link to this page may be incorrect or out-of-date.</li>
            <li>You may have bookmarked a page that has been moved.</li>
          </ul>
          <p className="pb-4 md:pb-8">
            You can also{' '}
            <Link
              href="https://www.broadwaymedia.com/about/contact-us"
              className="text-catalog-primary underline"
              target="_blank"
            >
              contact us
            </Link>{' '}
            for help.
          </p>
          <Link href="/" className="btn-primary mt-4 text-lg">
            Go Home
          </Link>
        </div>
      </div>
    </RSHoganComLayout>
  );
}
