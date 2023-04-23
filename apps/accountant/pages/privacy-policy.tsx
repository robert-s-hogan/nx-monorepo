import React from 'react';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';

import AccountantLayout from '../components/AccountantLayout';
import ReusableSection from '../components/ReusableSection';

const PrivacyPolicy = () => {
  return (
    <AccountantLayout>
      <div className="terms">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2 className="text-center">PRIVACY POLICY</h2>

              <p>
                The following Privacy Policy governs the online information
                collection practices of www.yourwebsitename.com (“we” or “us” or
                “Site”). By visiting and using the Site, you agree that your use
                of our Site, and any dispute over privacy, is governed by this
                Privacy Policy. This Site strives to offer its visitors the many
                advantages of Internet technology and to provide an interactive
                and personalized experience. We may use Personally Identifiable
                Information (your name and/or e-mail address) subject to the
                terms of this privacy policy. We will never sell, barter, or
                rent your email address to any unauthorized third party.
              </p>

              <p>
                We may collect and store personal or other information that you
                voluntarily supply to us online while using the Site (e.g.,
                while on the Site or in responding via email to a feature
                provided on the Site). This Site only contacts individuals who
                specifically request that we do so or in the event that they
                have signed up to receive our free newsletters or have purchased
                one of our products. This Site collects personally identifying
                information from our users during online registration and online
                purchasing. All of this information is provided to us by you.
              </p>

              <p>
                We also collect and store information that is generated
                automatically as you navigate online through the Site. For
                example, we may collect information about your computer’s
                connection to the Internet, which allows us, among other things,
                to improve the delivery of our web pages to you and to measure
                traffic on the Site. We also may use a standard feature found in
                browser software called a “cookie” to enhance your experience
                with the Site. Cookies are small files that your web browser
                places on your hard drive for record-keeping purposes. By
                showing how and when visitors use the Site, cookies help us
                deliver advertisements, identify how many unique users visit us,
                and track user trends and patterns.
              </p>

              <p className="text-center">
                The Site also includes links to websites we endorse or sponsor
                and provides access to products and services offered by third
                parties, whose privacy policies we do not control. Some of the
                links we provide are “affiliate links.” This means if you click
                on the link and purchase the item connected to that link, we
                will receive an affiliate commission. When you access another
                website or purchase third-party products or services through the
                Site, use of any information you provide is governed by the
                privacy policy of the operator of the site you are visiting or
                the provider of such products or services.
              </p>

              <p className="text-center">
                We may also make some content, products and services available
                through our Site through cooperative relationships with
                third-party providers, where the brands of our provider partner
                appear on the Site in connection with such content, products
                and/or services. We may share with our provider partner any
                information you provide, or that is collected, in the course of
                visiting any pages that are made available in cooperation with
                our provider partner. In some cases, the provider partner may
                collect information from you directly, in which cases the
                privacy policy of our provider partner may apply to the provider
                partner’s use of your information. The privacy policy of our
                provider partners may differ from ours. If you have any
                questions regarding the privacy policy of one of our provider
                partners, you should contact the provider partner directly for
                more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AccountantLayout>
  );
};

export default PrivacyPolicy;
