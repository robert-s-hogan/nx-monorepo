import ChilloutLayout from '../components/layout/ChilloutLayout';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';

import ReusableSection from '../components/ReusableSection';

import React from 'react';

const TermsAndConditions = () => {
  return (
    <ChilloutLayout>
      <section className="pt-24 pb-40 lg:pt-40 lg:pb-32 flex justify-center">
        <article className="max-w-screen-xl lg:mx-8">
          <div className="flex flex-col items-center justify-center">
            <div className="inline-block p-3 lg:p-4 rounded-lg mb-1 bg-blue-100">
              <svg
                className="h-8 w-8"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.7 9.3L18.7 2.3C18.5 2.1 18.3 2 18 2H8C6.9 2 6 2.9 6 4V28C6 29.1 6.9 30 8 30H24C25.1 30 26 29.1 26 28V10C26 9.7 25.9 9.5 25.7 9.3ZM18 4.4L23.6 10H18V4.4ZM24 28H8V4H16V10C16 11.1 16.9 12 18 12H24V28Z"
                  fill="#2368A2"
                />
                <path d="M10 22H22V24H10V22Z" fill="#2368A2" />
                <path d="M10 16H22V18H10V16Z" fill="#2368A2" />
              </svg>
            </div>
            <h1 className="text-3xl lg:text-4xl text-center mx-4 lg:mx-0 text-gray-700">
              Terms & Conditions
            </h1>
          </div>
          <div className="max-w-prose mx-6 lg:mx-auto text-gray-600 mt-16 lg:mt-24">
            <h2 className="text-xl lg:text-2xl mt-12 mb-4 text-gray-600">
              General
            </h2>
            <p className="mb-4">
              This website www.yourwebsitename.com (the “SITE”) is owned and
              operated by YOUR CLIENT'S NAME (“COMPANY” “we” or “us”). By using
              the Site, you agree to be bound by these Terms of Service and to
              use the Site in accordance with these Terms of Service, our
              Privacy Policy and any additional terms and conditions that may
              apply to specific sections of the Site or to products and services
              available through the Site or from COMPANY. Accessing the Site, in
              any manner, whether automated or otherwise, constitutes use of the
              Site.
            </p>

            <h2 className="text-xl lg:text-2xl mt-12 mb-4 text-gray-600">
              Disclaimers
            </h2>
            <p className="mb-4">
              Throughout the Site, we provide links to internet sites maintained
              by third parties. Some of the links we provide are “affiliate
              links.” This means if you click on the link and purchase the item
              connected to that link, COMPANY will receive an affiliate
              commission. Neither we nor affiliates operate or control in any
              respect any information, products or services that third parties
              may provide on or through the Site or on websites linked to by us
              on the Site. All opinions/advice/statements or other information
              or content expressed or made available by third parties, including
              information providers, are those of the respective authors or
              distributors, and not COMPANY. Neither COMPANY nor any third-party
              provider of information guarantees the accuracy, completeness, or
              usefulness of any content. Furthermore, COMPANY neither endorses
              nor is responsible for the accuracy and reliability of any
              opinion, advice, or statement made on any portion of the Site by
              anyone other than an authorized COMPANY representative while
              acting in his/her official capacity.
            </p>

            <p className="mb-4">
              The information, products and services offered on or through the
              site and by company and any third-party sites are provided “as is”
              and without warranties of any kind either express or implied. To
              the fullest extent permissible pursuant to applicable law, we
              disclaim all warranties, express or implied, including, but not
              limited to, implied warranties of merchantability and fitness for
              a particular purpose. we do not warrant that the site or any of
              its functions will be uninterrupted or error-free, that defects
              will be corrected, or that any part of this site, including
              bulletin boards, or the servers that make it available, are free
              of viruses or other harmful components. We do not warrant or make
              any representations regarding the use or the results of the use of
              the site or materials on this site or on third-party sites in
              terms of their correctness, accuracy, timeliness, reliability or
              otherwise.
            </p>

            <p className="mb-4">
              By accessing the site, you agree at all times to defend, indemnify
              and hold harmless COMPANY its affiliates, their successors,
              transferees, assignees and licensees and their respective parent
              and subsidiary companies, agents, associates, officers, directors,
              shareholders and employees of each from and against any and all
              claims, causes of action, damages, liabilities, costs and
              expenses, including legal fees and expenses, arising out of or
              related to your breach of any obligation, warranty, representation
              or covenant set forth herein.
            </p>
          </div>
        </article>
      </section>
    </ChilloutLayout>
  );
};

export default TermsAndConditions;
