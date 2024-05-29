import { Skeleton, Text } from '@with-nx/react-ui';
import { Flex, Heading } from '@with-nx/generic-ui';
import Image from 'next/image';

import RSHSection from './RSHSection';

interface RSHWhatOurCustomersSayProps {
  isLoading?: boolean;
}

const RSHWhatOurCustomersSay = ({ isLoading }: RSHWhatOurCustomersSayProps) => {
  return (
    <RSHSection>
      <Heading level={2} text="What Our Customers Say" />
      <div className="mt-6 space-y-4">
        <div className="card p-4">
          <Text isLoading={isLoading} rows={1}>
            "Robert helped me create a website and set up my blog. I had zero
            experience and had no idea how to go about it. Thanks to Roberts
            help, my site is up and running, and I am very pleased with how it
            looks. Robert was so patient and knowledgeable. He made the process
            easy and enjoyable. I highly recommend Robert!"
          </Text>
          <Flex className="items-center mt-4">
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
                src="https://app-assets.vercel.app/apps/rshogancom/rshhogan_testimonials_ellen_2.jpeg"
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
          </Flex>
        </div>
      </div>
    </RSHSection>
  );
};

export default RSHWhatOurCustomersSay;
