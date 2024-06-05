import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Heading, Text } from '@with-nx/generic-ui';

import RSHSection from './RSHSection';

const RSHCaseStudy = () => {
  return (
    <RSHSection>
      {/* Header Section */}
      <div className="flex">
        <div className="w-1/2 px-6 rounded-md">
          <Heading level={1} text="WEB DESIGN" className="text-blue-600 mb-2" />
          <Heading
            level={2}
            text="Broadway Media Website Redesign Case Study"
            className="mb-4"
          />
          <Text
            text="Broadway Media needed a more user-friendly and scalable website to better serve their customers and support their e-commerce capabilities."
            className="mb-4"
          />
          <Text
            text="We created a new website, enhanced functionality, and optimized performance."
            className="mb-4"
          />
          <Text
            text="The result: Significant improvements in user experience and e-commerce transactions."
            className="font-bold"
          />
          {/* Call to Action */}
          <div className="mt-6">
            <Link href="/request-a-quote" className="btn btn-primary">
              Request a Quote for Your Project
            </Link>
          </div>
        </div>
        <div className="w-1/2 px-6 flex flex-col justify-center items-center">
          {/* <Image
            src="https://app-assets.vercel.app/work/windsor-vineyards/windsor_vineyards_desktop.png"
            alt="Windsor Vineyards Desktop View"
            width={500}
            height={300}
            className="mb-4"
          /> */}
          <Image
            src="https://app-assets.vercel.app/work/windsor-vineyards/windsor_vineyards_tablet.png"
            alt="Windsor Vineyards Tablet View"
            width={500}
            height={300}
            className="mb-4"
          />
          {/* <Image
            src="https://app-assets.vercel.app/work/windsor-vineyards/windsor_vineyards_mobile.png"
            alt="Windsor Vineyards Mobile View"
            width={500}
            height={1000}
            className="mb-4"
          /> */}
        </div>
      </div>

      {/* Intro Section */}
      <div className="space-y-4">
        <Heading level={2} text="The Challenge" />
        <Text text="Broadway Media needed a more user-friendly and scalable website to better serve their customers and support their e-commerce capabilities." />
        <Image
          src="https://app-assets.vercel.app/work/broadway_media.svg"
          alt="Broadway Media Logo"
          width={200}
          height={100}
        />
      </div>

      {/* Challenge Details */}
      <div className="space-y-4">
        <Heading level={3} text="Cluttered UX" />
        <Text text="The existing interface was cluttered, making it difficult for users to navigate and complete transactions efficiently." />
        <Heading level={3} text="Limited Functionality" />
        <Text text="The site lacked the necessary features to support a seamless e-commerce experience." />
      </div>

      {/* Solution Section */}
      <div className="space-y-4">
        <Heading level={2} text="The Solution" />
        <p className="mb-4">
          To address these challenges, I led a comprehensive website redesign
          and functionality enhancement project. Key steps included:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Website Audit:</strong> Conducted a thorough audit of the
            existing website to identify pain points and areas for improvement.
          </li>
          <li>
            <strong>Website Strategy:</strong> Created a new sitemap to
            streamline navigation and remove redundant pages.
          </li>
          <li>
            <strong>Website Redesign:</strong> Designed a clean, intuitive
            interface to improve user interaction and satisfaction.
          </li>
          <li>
            <strong>Responsive Design:</strong> Implemented a responsive design
            to ensure optimal performance across various devices.
          </li>
          <li>
            <strong>Integration:</strong> Integrated Stripe for seamless
            e-commerce transactions, boosting the site's revenue capabilities.
          </li>
          <li>
            <strong>Performance Optimization:</strong> Optimized the mono-repo
            environment using NX to enhance code sharing and repository
            management.
          </li>
        </ul>
      </div>

      {/* Results Section */}
      <div className="space-y-4">
        <Heading level={2} text="The Results" />
        <p className="mb-4">
          In the first few months post-launch, the redesigned Broadway Media
          website saw significant improvements:
        </p>
        <div className="space-y-4">
          <div>
            <Heading level={3} text="Increased E-commerce Transactions" />
            <Text text="The integration of Stripe significantly boosted revenue." />
          </div>
          <div>
            <Heading level={3} text="Enhanced User Experience" />
            <Text text="The streamlined interface and improved navigation led to a higher user satisfaction rate." />
          </div>
          <div>
            <Heading level={3} text="Improved Performance" />
            <Text text="The optimized mono-repo environment facilitated better code management and faster deployment times." />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-6">
        <Link href="/request-a-quote" className="btn btn-primary">
          Request a Quote for Your Project
        </Link>
      </div>
    </RSHSection>
  );
};

export default RSHCaseStudy;
