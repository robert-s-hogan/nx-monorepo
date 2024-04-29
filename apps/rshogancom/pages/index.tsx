import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import {
  Button,
  Flex,
  Grid,
  Heading,
  Skeleton,
  SkeletonText,
  Text,
} from '@with-nx/react-ui';
import { useModal } from '@with-nx/react-hooks';

import RSHLayout from '../components/RSHLayout';
import RSHSection from '../components/RSHSection';
import RSHModal from '../components/RSHModal';

import RSHHeroSection from '../components/RSHHeroSection';
import RSHWebServicesSection from '../components/RSHWebServicesSection';
import RSHOurStorySection from '../components/RSHOurStorySection';
import RSHAsSeenInSection from '../components/RSHAsSeenInSection';
import RSHWhatOurCustomersSaySection from '../components/RSHWhatOurCustomersSaySection';

import { featureCards } from '../data/featureCards';

//dynamic imports
const DynamicOurStorySection = dynamic(
  () => import('../components/RSHOurStorySection'),
  {
    loading: () => <RSHOurStorySection isLoading={true} />,
  }
);
const DynamicAsSeenInSection = dynamic(
  () => import('../components/RSHAsSeenInSection'),
  {
    loading: () => <RSHAsSeenInSection isLoading={true} />,
  }
);

const DynamicRSHWhatOurCustomersSaySection = dynamic(
  () => import('../components/RSHWhatOurCustomersSaySection'),
  {
    loading: () => <p>Loading...</p>, // Optional: Add a loading component or message
  }
);

export function Index() {
  const { isShowing, toggle } = useModal();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // const FeatureCard = ({ title, description, svgPathD }) => (
  //   <div className="card p-6 overflow-hidden text-center border-2 rounded">
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       className="object-center h-24 mx-auto"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       stroke="currentColor"
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth={1}
  //         d={svgPathD}
  //       />
  //     </svg>
  //     <div className="p-4 h-auto space-y-2">
  //       <Heading level={3} className="font-semibold">
  //         {title}
  //       </Heading>
  //       <Text className="text-md text-center leading-relaxed block lg:text-sm" text={description} />
  //     </div>
  //   </div>
  // );

  return (
    <RSHLayout>
      {/* HERO */}
      <RSHHeroSection />

      {/* COMPREHENSIVE WEB SERVICES */}
      <RSHWebServicesSection />

      {/* OUR STORY */}
      <DynamicOurStorySection isLoading={isLoading} />

      {/* FEATURED PRODUCTS */}
      {/* <RSHSection>
        <Heading level={2}>Digital Creatives</Heading>
        <Text className="mt-4">
          Explore our unique digital products ranging from party PDFs to custom
          invites, crafted to add a special touch to your celebrations.
        </Text>
        <div className="flex flex-wrap mt-6">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="card">
              <Image
                className="w-full object-cover rounded-tr-lg rounded-tl-lg"
                src="https://rshogan.imgix.net/projects/rshogancom/images/Comic_book_swap_day_preview.jpg"
                loading="lazy"
                width={250}
                height={250}
                alt="product"
              />
              <Heading level={3} className="mt-2 text-xl font-medium">
                Super Hero Birthday Invitation
              </Heading>
              <Text className="mt-2">
                Make your child's birthday unforgettable with our
                superhero-themed digital invitation.
              </Text>
              <div className="flex justify-between items-center mt-4 p-4">
                <span className="text-lg">$4.99</span>
                <Button className="btn-primary">Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </RSHSection> */}

      {/* AS SEEN IN */}
      <DynamicAsSeenInSection isLoading={isLoading} />

      {/* NEWSLETTER */}
      {/* <RSHSection>
        <Heading level={2}>Stay Updated</Heading>
        <Text className="mt-4 ">
          Subscribe to our newsletter for the latest updates.
        </Text> */}
      {/* Newsletter form */}
      {/* </RSHSection> */}

      {/* WHAT OUR CUSTOMERS SAY */}
      <DynamicRSHWhatOurCustomersSaySection isLoading={isLoading} />
      {isShowing && <RSHModal isShowing={isShowing} toggle={toggle} />}
    </RSHLayout>
  );
}

export default Index;
