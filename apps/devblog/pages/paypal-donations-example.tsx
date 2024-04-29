import React, { useState } from 'react';
import { Heading } from '@with-nx/generic-ui';

import DevBlogLayout from '../components/DevBlogLayout';
import DevBlogSection from '../components/DevBlogSection';

import { Button, Flex, Grid } from '@with-nx/react-ui';
import { copyToClipboard } from '@with-nx/utils';

const link = `<iframe
src="https://www.paypal.com/giving/campaigns?campaign_id=QAB5D5TSL487G"
title="PayPal donate campaign card"
frameborder="0"
width=382
height=550
scrolling="no"
></iframe>`;

const CopyLinkButton = ({ link }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      },
      (error) => {
        console.error('Copy failed!', error);
      }
    );
  };

  return (
    <div>
      <Button
        className={`${copied ? 'btn-success' : 'btn-primary'}`}
        onClick={() => copyToClipboard(link)}
      >
        {copied ? <span>copied!</span> : <span>Copy Iframe Code</span>}
      </Button>
    </div>
  );
};

const PaypalDonationsExample = () => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <DevBlogLayout className="relative">
      <DevBlogSection>
        <Heading level={3} text="Paypal Donation Options" />
        <Grid className="grid-cols-1 lg:grid-cols-3 px-2">
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
