import Image from 'next/image';

import { Button, Flex } from '@with-nx/react-ui';
import { Heading, Text } from '@with-nx/generic-ui';
import { DirectionAwareHover } from '@with-nx/ace-eternity';

import RSHSection from './RSHSection';

const imageUrl =
  'https://app-assets.vercel.app/apps/rshogancom/products/super_hero.png';

function RSHFeaturedProducts() {
  return (
    <RSHSection>
      <Heading level={2} text="Digital Creatives" />
      <Text
        className="mt-4"
        text="Explore our unique digital products ranging from party PDFs to custom invites, crafted to add a special touch to your celebrations."
      />
      <Flex className="flex-wrap mt-6">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="card relative">
            <div className="relative  flex items-center justify-center text-left">
              <DirectionAwareHover
                imageUrl={imageUrl}
                className="rounded-b-none"
              >
                <p className="font-semibold text-xl">
                  Make your child's birthday unforgettable with our
                  superhero-themed digital invitation.
                </p>
                <p className="mt-2 mb-0 font-semibold">Description:</p>
                <ul className="text-sm md:text-md">
                  <li>Size 5x7</li>
                  <li>Instant Download</li>
                  <li>All text is editable</li>
                  <li>Background is not editable</li>
                  <li>Digital file only</li>
                  <li>No refunds on digital items</li>
                  {/* <li className="mt-2 font-bold">
              Rated 4.8/5 by 150+ parents
            </li> */}
                </ul>
              </DirectionAwareHover>
            </div>

            <Heading
              level={3}
              className="mt-2 text-xl font-medium"
              text="Super Hero Birthday Invitation"
            />
            <Text
              className="mt-2"
              text="Make your child's birthday unforgettable with our
        superhero-themed digital invitation."
            />
            <Flex className="justify-between items-center mt-4 p-4">
              <span className="text-lg">$4.99</span>
              <Button className="btn-primary">Add to Cart</Button>
            </Flex>
          </div>
        </div>
      </Flex>
    </RSHSection>
  );
}

export default RSHFeaturedProducts;
