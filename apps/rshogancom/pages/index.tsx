import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { Button, Flex, Heading } from '@with-nx/react-ui';
import { Text } from '@with-nx/generic-ui';
import { useModal } from '@with-nx/react-hooks';

import RSHLayout from '../components/RSHLayout';
import RSHSection from '../components/RSHSection';
import RSHModal from '../components/RSHModal';

import RSHHeroSection from '../components/RSHHeroSection';
import RSHWebServicesSection from '../components/RSHWebServicesSection';
import RSHOurStorySection from '../components/RSHOurStorySection';
import RSHAsSeenInSection from '../components/RSHAsSeenInSection';
import RSHWhatOurCustomersSaySection from '../components/RSHWhatOurCustomersSaySection';
import { DirectionAwareHover } from '../components/DirectionAwareHover';

import { featureCards } from '../data/featureCards';
const imageUrl =
  'https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

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

  const FeatureCard = ({ title, description, svgPathD }) => (
    <div className="card p-6 overflow-hidden text-center border-2 rounded">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="object-center h-24 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d={svgPathD}
        />
      </svg>
      <div className="p-4 h-auto space-y-2">
        <Heading level={3} className="font-semibold">
          {title}
        </Heading>
        <Text
          className="text-md text-center leading-relaxed block lg:text-sm"
          text={title}
        />
      </div>
    </div>
  );

  return (
    <RSHLayout>
      {/* HERO */}
      <RSHHeroSection />

      {/* COMPREHENSIVE WEB SERVICES */}
      <RSHWebServicesSection />

      {/* OUR STORY */}
      <DynamicOurStorySection isLoading={isLoading} />

      {/* FEATURED PRODUCTS */}
      <RSHSection>
        <Heading level={2}>Digital Creatives</Heading>
        <Text
          className="mt-4"
          text="Explore our unique digital products ranging from party PDFs to custom invites, crafted to add a special touch to your celebrations."
        />
        <Flex className="flex-wrap mt-6">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="card relative">
              <div className="relative  flex items-center justify-center">
                <DirectionAwareHover
                  imageUrl={imageUrl}
                  className="rounded-b-none"
                >
                  <p className="font-bold text-xl">In the mountains</p>
                  <p className="font-normal text-sm">$1299 / night</p>
                </DirectionAwareHover>
              </div>

              <Heading level={3} className="mt-2 text-xl font-medium">
                Super Hero Birthday Invitation
              </Heading>
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

      {/* AS SEEN IN */}
      <DynamicAsSeenInSection isLoading={isLoading} />

      {/* NEWSLETTER */}
      <RSHSection>
        <Heading level={2}>Stay Updated</Heading>
        <Text
          className="mt-4 "
          text="Subscribe to our newsletter for the latest updates."
        />
        Newsletter form
      </RSHSection>

      {/* WHAT OUR CUSTOMERS SAY */}
      <DynamicRSHWhatOurCustomersSaySection isLoading={isLoading} />
      {isShowing && <RSHModal isShowing={isShowing} toggle={toggle} />}
    </RSHLayout>
  );
}

export default Index;
