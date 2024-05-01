import { Heading, Skeleton, Text } from '@with-nx/react-ui';
import Image from 'next/image';

import RSHSection from '../components/RSHSection';

interface RSHWhatOurCustomersSaySectionProps {
  isLoading?: boolean;
}

const RSHWhatOurCustomersSaySection = ({
  isLoading,
}: RSHWhatOurCustomersSaySectionProps) => {
  return (
    <RSHSection>
      <div className="container mx-auto max-w-3xl">
        <Heading level={2} isLoading={isLoading}>
          What Our Customers Say
        </Heading>
        <div className="mt-6 space-y-4">
          <div className="card p-4">
            <Text isLoading={isLoading} rows={1}>
              "Robert helped me create a website and set up my blog. I had zero
              experience and had no idea how to go about it. Thanks to Roberts
              help, my site is up and running, and I am very pleased with how it
              looks. Robert was so patient and knowledgeable. He made the
              process easy and enjoyable. I highly recommend Robert!"
            </Text>
            <div className="flex items-center mt-4">
              {isLoading ? (
                <Skeleton
                  isLoading={true}
                  height="48px"
                  width="48px"
                  className="rounded-full"
                />
              ) : (
                <Image
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full"
                  src="https://raw.githubusercontent.com/robert-s-hogan/assets-nx-monorepo/main/apps/rshogancom/rshhogan_testimonials_ellen_2.jpeg?token=GHSAT0AAAAAACMVWOEGZAQ4R75S2ZAA4WXWZRSKKSA"
                  alt="customer"
                />
              )}
              <div className="ml-4">
                <Text
                  className="text-lg font-medium"
                  isLoading={isLoading}
                  rows={1}
                >
                  Ellen S.
                </Text>
                <Text className="text-base" isLoading={isLoading}>
                  Verified Buyer
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RSHSection>
  );
};

export default RSHWhatOurCustomersSaySection;
