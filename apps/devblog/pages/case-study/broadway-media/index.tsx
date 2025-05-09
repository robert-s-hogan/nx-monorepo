// apps/devblog/pages/case-study/broadway-media.tsx

'use client';

import React from 'react';
import DevBlogLayout from '../../../components/DevBlogLayout';
import DevBlogSection from '../../../components/DevBlogSection';
import Compare from '../../../components/Compare';
import { Heading, Text } from '@with-nx/generic-ui';

export default function BroadwayMediaCaseStudy() {
  return (
    <DevBlogLayout
      title="Case Study: Broadway Media"
      description="Detailed look into the Broadway Media project, focusing on the NX Monorepo, Stripe integration, and significant performance & business outcomes."
      hideNavBar={false}
    >
      {/* PAGE TITLE & INTRO */}
      <DevBlogSection>
        <Heading
          level={2}
          className="mb-4 text-center"
          text="Broadway Media: Building a Modern & Scalable Platform"
        />
        <hr className="bg-primary mx-auto mb-8 h-2 w-16" />
      </DevBlogSection>

      {/* OVERVIEW SECTION */}
      <DevBlogSection>
        <Heading
          level={3}
          className="mb-2 text-xl font-bold"
          text="Project Overview"
        />
        <Text
          className="mb-4 text-base"
          text="Broadway Media is a media company that specializes in digital signage and content management. They required a modernized, scalable platform to support e-commerce capabilities, efficient code sharing, and faster product release cycles."
        />
        <Text
          className="mb-4 text-base"
          text="During my tenure from June 2022 to May 2023, I worked as a Senior Engineer focusing on front-end architecture, performance optimization, and integrating third-party services like Stripe."
        />
      </DevBlogSection>

      {/* MY ROLE & CHALLENGES */}
      <DevBlogSection>
        <Heading
          level={3}
          className="mb-2 text-xl font-bold"
          text="My Role & Key Challenges"
        />
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>
            <strong>NX Monorepo Setup:</strong> Optimized the company’s monorepo
            environment to improve code sharing and reduce build times.
          </li>
          <li>
            <strong>Stripe Integration:</strong> Implemented a new subscription
            and payment flow, enhancing Broadway Media’s e-commerce features.
          </li>
          <li>
            <strong>API Development & UI/UX Collaboration:</strong> Partnered
            with cross-functional teams to refine the user experience and ensure
            a scalable, well-documented API.
          </li>
          <li>
            <strong>Speeding Up Release Cycles:</strong> Tackled dependency
            bloat and inconsistent code practices to enable faster, more
            reliable deployments.
          </li>
        </ul>
      </DevBlogSection>

      {/* TECHNOLOGIES & APPROACH */}
      <DevBlogSection>
        <Heading
          level={3}
          className="mb-2 text-xl font-bold"
          text="Technologies & Approach"
        />
        <Text
          className="mb-4 text-base"
          text="We leveraged a React + Next.js stack within an Nx Monorepo for modular code organization and faster builds. Redux Toolkit handled state management, while Stripe ensured secure payment processing."
        />
        <div className="mb-4">
          <Text
            className="text-base font-semibold"
            text="Key Technologies Included:"
          />
          <ul className="mt-2 list-inside list-disc space-y-2 pl-4">
            <li>React & Next.js</li>
            <li>TypeScript</li>
            <li>Nx Monorepo</li>
            <li>Redux Toolkit</li>
            <li>Stripe Integration</li>
            <li>Custom CSS</li>
          </ul>
        </div>
      </DevBlogSection>

      {/* KEY METRICS & OUTCOMES */}
      <DevBlogSection>
        <Heading
          level={3}
          className="mb-2 text-xl font-bold"
          text="Key Metrics & Outcomes"
        />
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>
            <strong>Revenue Growth (+15%):</strong> Spearheaded the Stripe
            integration, boosting e-commerce capabilities and increasing revenue
            in the first quarter post-launch.
          </li>
          <li>
            <strong>Code Efficiency (+30%):</strong> Optimized the Nx monorepo
            environment for better code sharing and reduced build times by 25%.
          </li>
          <li>
            <strong>User Satisfaction (+20%):</strong> Collaborated on API-level
            improvements and refined UI/UX design, leading to higher user
            satisfaction scores.
          </li>
          <li>
            <strong>Productivity Increase (+40%):</strong> Accelerated product
            release cycles by streamlining development processes with
            cross-functional teams.
          </li>
        </ul>
      </DevBlogSection>

      {/* SCREENSHOTS SECTION */}
      <DevBlogSection>
        <Heading
          level={3}
          className="mb-2 text-xl font-bold"
          text="Project Screenshots"
        />
        <Text
          className="mb-4 text-base"
          text="Below are snapshots from the development process, highlighting two major sections of the platform."
        />

        {/* STORE (CATALOG) */}
        <div className="mb-8 flex flex-col space-y-8">
          <div className="rounded-3xl border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-800 dark:bg-neutral-900">
            <Heading
              level={4}
              className="mb-2 text-lg font-semibold"
              text="Catalog / Store"
            />
            <div className="mb-2 flex w-full items-center justify-between">
              <span className="text-xs">Before</span>
              <span className="text-xs">After</span>
            </div>
            <Compare
              firstImage="https://rhogandev.wordpress.com/wp-content/uploads/2025/03/screen-shot-2022-09-06-at-10.58.38-am.png"
              secondImage="https://rhogandev.wordpress.com/wp-content/uploads/2025/03/catalog_after.png"
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-[250px] w-full md:h-[500px]"
              slideMode="hover"
            />
          </div>
          <Text
            className="text-base"
            text={
              "The original catalog didn't have a proper store. We integrated a shopping cart with a theatre-inspired design, giving users a clear path to browse and purchase digital signage solutions. The new layout uses custom CSS to maintain branding consistency and create a more immersive shopping experience."
            }
          />
        </div>

        {/* PRODUCTION EDITOR */}
        <div className="mb-8 flex flex-col space-y-8">
          <div className="rounded-3xl border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-800 dark:bg-neutral-900">
            <Heading
              level={4}
              className="mb-2 text-lg font-semibold"
              text="Production Editor"
            />
            <div className="mb-2 flex w-full items-center justify-between">
              <span className="text-xs">Before</span>
              <span className="text-xs">After</span>
            </div>
            <Compare
              firstImage="https://rhogandev.wordpress.com/wp-content/uploads/2025/03/screen-shot-2022-08-12-at-3.54.22-pm.png"
              secondImage="https://rhogandev.wordpress.com/wp-content/uploads/2025/03/screenshot-2023-01-23-at-10.53.37-am.png"
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-right-top"
              className="h-[250px] w-full md:h-[500px]"
              slideMode="hover"
            />
          </div>
          <Text
            className="text-base"
            text={
              "The Production Editor didn't exist until our team created it from scratch. I helped with the UI, component architecture, and design creation using custom CSS. This editor allowed users to quickly upload, preview, and schedule digital signage content in an intuitive way."
            }
          />
        </div>
      </DevBlogSection>

      {/* CONCLUSION */}
      <DevBlogSection>
        <Heading
          level={3}
          className="mb-2 text-xl font-bold"
          text="Conclusion"
        />
        <Text
          className="mb-4 text-base"
          text="Broadway Media’s platform transformation showcased the advantages of a well-structured Nx Monorepo, strategic third-party integrations like Stripe, and close collaboration across teams. The results speak for themselves: increased revenue, faster release cycles, and improved user satisfaction."
        />
        <Text
          className="mb-4 text-base"
          text="This project was an excellent opportunity to leverage my experience in front-end engineering, system architecture, and team leadership to deliver tangible results that continue to shape Broadway Media’s digital presence."
        />
        <Text
          className="text-base"
          text="If you have questions or want to learn more about how these solutions were implemented, feel free to reach out!"
        />
      </DevBlogSection>
    </DevBlogLayout>
  );
}
