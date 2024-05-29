import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import { Button, Flex } from '@with-nx/react-ui';
import { Heading } from '@with-nx/generic-ui';
import { Text } from '@with-nx/generic-ui';
import { useModal } from '@with-nx/react-hooks';

import RSHLayout from '../components/RSHLayout';
import RSHSection from '../components/RSHSection';
import RSHModal from '../components/RSHModal';

import RSHDigitalCreatives from '../components/RSHDigitalCreatives';
import RSHHeroSection from '../components/RSHHeroSection';
import RSHComprehensiveWebServices from '../components/RSHComprehensiveWebServices';
import RSHMyWebDesignProcess from '../components/RSHMyWebDesignProcess';
import RSHOurStorySection from '../components/RSHOurStory';
import RSHAsSeenInSection from '../components/RSHClientsAcrossIndustries';
import RSHWhatOurCustomersSaySection from '../components/RSHWhatOurCustomersSay';

//dynamic imports
const DynamicRSHComprehensiveWebServicesSection = dynamic(
  () => import('../components/RSHComprehensiveWebServices'),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DynamicRSHMyWebDesignProcess = dynamic(
  () => import('../components/RSHMyWebDesignProcess'),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DynamicRSHDigitalCreatives = dynamic(
  () => import('../components/RSHDigitalCreatives'),
  {
    loading: () => <p>Loading...</p>,
  }
);
const DynamicAsSeenInSection = dynamic(
  () => import('../components/RSHClientsAcrossIndustries'),
  {
    loading: () => <RSHAsSeenInSection isLoading={true} />,
  }
);
const DynamicRSHWhatOurCustomersSaySection = dynamic(
  () => import('../components/RSHWhatOurCustomersSay'),
  {
    loading: () => <p>Loading...</p>,
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

  return (
    <RSHLayout>
      {/* HERO */}
      <RSHHeroSection />

      {/* COMPREHENSIVE WEB SERVICES */}
      <DynamicRSHComprehensiveWebServicesSection />

      {/* OUR STORY */}
      {/* <DynamicOurStorySection /> */}

      {/* WEB DESIGN PROCESS */}
      <DynamicRSHMyWebDesignProcess />

      {/* FEATURED PRODUCTS */}
      {/* <DynamicRSHDigitalCreatives /> */}

      {/* AS SEEN IN */}
      <DynamicAsSeenInSection />

      {/* NEWSLETTER */}
      {/* <RSHSection fullWidth={true} className="text-center">
        <Heading level={2} text="Stay Updated" />
        <Text
          className="mt-4 "
          text="Subscribe to our newsletter for the latest updates on our services, new projects, and industry insights. Join our community and be the first to know about our latest offerings and exclusive content."
        />
        Newsletter form
      </RSHSection> */}

      {/* WHAT OUR CUSTOMERS SAY */}
      {/* <DynamicRSHWhatOurCustomersSaySection /> */}

      {isShowing && <RSHModal isShowing={isShowing} toggle={toggle} />}
    </RSHLayout>
  );
}

export default Index;
