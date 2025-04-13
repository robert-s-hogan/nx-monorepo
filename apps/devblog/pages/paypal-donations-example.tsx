import React from 'react';
import { Heading } from '@with-nx/generic-ui';

import DevBlogLayout from '../components/DevBlogLayout';
import DevBlogSection from '../components/DevBlogSection';

import { Flex, Grid } from '@with-nx/react-ui';

const PaypalDonationsExample = () => {
  return (
    <DevBlogLayout className="relative">
      <DevBlogSection>
        <Heading level={3} text="Paypal Donation Options" />
        <Grid className="grid-cols-1 px-2 lg:grid-cols-3">
          <Flex className="flex-col space-y-6">
            <iframe
              src="https://www.paypal.com/giving/campaigns?campaign_id=QAB5D5TSL487G"
              title="PayPal donate campaign card"
              frameBorder="0"
              width="382"
              height="550"
              scrolling="no"
            ></iframe>
          </Flex>
        </Grid>
      </DevBlogSection>
    </DevBlogLayout>
  );
};

export default PaypalDonationsExample;
