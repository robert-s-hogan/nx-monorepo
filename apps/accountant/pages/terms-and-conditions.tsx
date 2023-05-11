import React from 'react';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';

import AccountantLayout from '../components/AccountantLayout';

const TermsAndConditions = () => {
  return (
    <AccountantLayout>
      <div className="terms">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-8 md:col-start-3">
              <h2 className="text-center">TERMS AND CONDITIONS</h2>

              <h3>General</h3>
              <p className="mb-4">
                This website www.yourwebsitename.com (the “SITE”) is owned and
                operated by YOUR CLIENT'S NAME (“COMPANY” “we” or “us”). By
                using the Site, you agree to be bound by these Terms of Service
                and to use the Site in accordance with these Terms of Service,
                our Privacy Policy and any additional terms and conditions that
                may apply to specific sections of the Site or to products and
                services available through the Site or from COMPANY. Accessing
                the Site, in any manner, whether automated or otherwise,
                constitutes use of the Site.
              </p>

              <h3>Disclaimers</h3>

              <p className="mb-4">
                Throughout the Site, we provide links to internet sites
                maintained by third parties. Some of the links we provide are
                “affiliate links.” This means if you click on the link and
                purchase the item connected to that link, COMPANY will receive
                an affiliate commission. Neither we nor affiliates operate or
                control in any respect any information, products or services
                that third parties may provide on or through the Site or on
                websites linked to by us on the Site. All
                opinions/advice/statements or other information or content
                expressed or made available by third parties, including
                information providers, are those of the respective authors or
                distributors, and not COMPANY. Neither COMPANY nor any
                third-party provider of information guarantees the accuracy,
                completeness, or usefulness of any content. Furthermore, COMPANY
                neither endorses nor is responsible for the accuracy and
                reliability of any opinion, advice, or statement made on any
                portion of the Site by anyone other than an authorized COMPANY
                representative while acting in his/her official capacity.
              </p>

              <p className="mb-4">
                The information, products and services offered on or through the
                site and by company and any third-party sites are provided “as
                is” and without warranties of any kind either express or
                implied. To the fullest extent permissible pursuant to
                applicable law, we disclaim all warranties, express or implied,
                including, but not limited to, implied warranties of
                merchantability and fitness for a particular purpose. we do not
                warrant that the site or any of its functions will be
                uninterrupted or error-free, that defects will be corrected, or
                that any part of this site, including bulletin boards, or the
                servers that make it available, are free of viruses or other
                harmful components. We do not warrant or make any
                representations regarding the use or the results of the use of
                the site or materials on this site or on third-party sites in
                terms of their correctness, accuracy, timeliness, reliability or
                otherwise.
              </p>

              <p className="mb-4">
                By accessing the site, you agree at all times to defend,
                indemnify and hold harmless COMPANY its affiliates, their
                successors, transferees, assignees and licensees and their
                respective parent and subsidiary companies, agents, associates,
                officers, directors, shareholders and employees of each from and
                against any and all claims, causes of action, damages,
                liabilities, costs and expenses, including legal fees and
                expenses, arising out of or related to your breach of any
                obligation, warranty, representation or covenant set forth
                herein.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AccountantLayout>
  );
};

export default TermsAndConditions;
