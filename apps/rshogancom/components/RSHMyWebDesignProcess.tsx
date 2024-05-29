'use client';
import React from 'react';
import { StickyScroll } from '@with-nx/ace-eternity';
import Image from 'next/image';

import { FaChessRook, FaLightbulb, FaThumbsUp } from 'react-icons/fa';
import { AiOutlineFile, AiOutlineLineChart } from 'react-icons/ai';
import { FiCode } from 'react-icons/fi';

import RSHSection from './RSHSection';
import RSHListItem from './RSHListItem';

// Define the content for each service
const content = [
  {
    title: 'Web Strategy',
    icon: <FaChessRook size={50} />,
    description:
      'Before we put pen to paper (or start on your digital design, rather), we conduct thorough research into your industry, competitors, and target market to gather insights that will inform your custom digital strategy.',
    // image: <img src={DataReport} alt="Data Report Illustration" />,
    content: (
      <div className="space-y-6 h-full w-full">
        <p className="font-semibold">In this phase, we:</p>
        <ul className="space-y-4">
          <RSHListItem text="Identify the ideal positioning for your brand" />
          <RSHListItem text="Collect target audience data and create user personas" />
          <RSHListItem text="Define valuable content and marketing channels" />
          <RSHListItem text="Define KPIs to measure performance" />
        </ul>
      </div>
    ),
  },
  {
    title: 'Planning & Information Architecture',
    icon: <AiOutlineFile size={50} />,
    description:
      'Next, we map out your unique landing pages and define your site map and navigation. We create a plan for your URL structure, along with redirects and a search engine optimization strategy, careful to maintain any existing SEO value from your current site, if applicable.',
    // image: <img src={MobileApp} alt="Mobile App Illustration" />,
    content: (
      <div className="space-y-6 h-full w-full">
        <p className="font-semibold">In this phase, we:</p>
        <ul className="space-y-4">
          <RSHListItem text="Design your site structure, navigation and page hierarchy" />
          <RSHListItem text="Map out the conversion funnel for each unique landing page" />
          <RSHListItem text="Create black and white wireframes to show you the bones of your new site" />
        </ul>
      </div>
    ),
  },
  {
    title: 'Creative Design',
    description:
      "Here's where your website begins to come to life, as our award-winning designers step in. Your design is filled with color and custom elements as we incorporate your brand's personality and tailor the user journey to your target market.",
    icon: <FaLightbulb size={50} />,

    content: (
      <div className="space-y-6 h-full w-full">
        <p className="font-semibold">In this phase, we:</p>
        <ul className="space-y-4">
          <RSHListItem text="Design your custom website" />
          <RSHListItem text="Incorporate your unique branding elements" />
          <RSHListItem text="Present you with full-scale designs in Figma" />
        </ul>
      </div>
    ),
  },
  {
    title: 'Responsive Development',
    description:
      "In the development phase, our expert development team works behind the scenes to build a custom, secure and scalable solution for your brand, on your chosen platform. From B2B to eCommerce, we ensure clean code and a website that's fully optimized.",
    icon: <FiCode size={50} />,
    // image: <img src={Download} alt="Download Illustration" />,
    content: (
      <div className="space-y-6 h-full w-full">
        <p className="font-semibold">In this phase, we:</p>
        <ul className="space-y-4">
          <RSHListItem text="Write and finalize coding for your website" />
          <RSHListItem text="Bring your custom solution to life in a secure staging site" />
          <RSHListItem text="Ensure a responsive solution for both desktop and mobile" />
        </ul>
      </div>
    ),
  },
  {
    title: 'Quality Assurance (QA)',
    description:
      'Before we push your custom solution live for the world to see, we follow a stringent quality assurance process, leaving no stone unturned. We continuously test your site’s speed, functionality and other key elements to make sure it’s ready for launch.',
    icon: <FaThumbsUp size={50} />,
    // image: <img src={NoData} alt="No Data Illustration" />,
    content: (
      <div className="space-y-6 h-full w-full">
        <p className="font-semibold">In this phase, we:</p>
        <ul className="space-y-4">
          <RSHListItem text="Perform meticulously testing across the frontend and backend" />
          <RSHListItem text="Ensure all features and functionalities are working as intended" />
          <RSHListItem text="Make changes as needed to ensure a superior user experience" />
        </ul>
      </div>
    ),
  },
  {
    title: 'Launch & Optimization',
    description:
      "When our QA is complete, it’s time for launch! Our team will set up your server, carry out the DNS configuration and make sure all updates are finalized. We'll provide Cloudflare security protection, along with both internal and external monitoring.",
    icon: <AiOutlineLineChart size={50} />,
    // image: <img src={MobileApp} alt="Mobile App Illustration" />, // Reusing Mobile App Illustration
    content: (
      <div className="space-y-6 h-full w-full">
        <p className="font-semibold">In this phase, we:</p>
        <ul className="space-y-4">
          <RSHListItem text="Perform final QA testing" />
          <RSHListItem text="Devise a marketing plan for launch" />
          <RSHListItem text="Push your new digital solution live" />
        </ul>
      </div>
    ),
  },
];

export function RSHMyWebDesignProcess() {
  return (
    <RSHSection fullWidth={true} className="!py-0">
      <StickyScroll
        content={content}
        title="Our Website Design Process"
        description="How to create a website tailored to your unique business goals?
Take a look at our design process that helps us deliver"
      />
    </RSHSection>
  );
}

export default RSHMyWebDesignProcess;
