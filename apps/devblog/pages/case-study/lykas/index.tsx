'use client';

import React from 'react';
import DevBlogLayout from '../../../components/DevBlogLayout';
import DevBlogSection from '../../../components/DevBlogSection';
import { Heading, Text } from '@with-nx/generic-ui';

export default function LykasCaseStudy() {
  return (
    <DevBlogLayout
      title="Case Study: LYKAS"
      description="Deep dive into the LYKAS project, focusing on Vue.js + Pinia migration, atomic design refactoring, and overall performance & business outcomes."
      hideNavBar={false}
    >
      <DevBlogSection fullWidth={false} className="py-32">
        {/* PAGE TITLE & INTRO */}
        <Heading
          level={2}
          className="mb-4 text-center"
          text="LYKAS: Transforming a Legacy Questionnaire into a Modular Vue App"
        />
        <hr className="bg-primary mx-auto mb-8 h-2 w-16" />

        {/* OVERVIEW SECTION */}
        <DevBlogSection>
          <Heading
            level={3}
            className="mb-2 text-xl font-bold"
            text="Project Overview"
          />
          <Text
            className="mb-4 text-base"
            text="LYKAS required a comprehensive refactor of an existing Python/HTML project, which included a lengthy 4,000+ line file. The goal was to transform this monolithic solution into a modern, modular Vue.js application with Pinia for state management, while incorporating an atomic design approach."
          />
          <Text
            className="mb-4 text-base"
            text="The key focus was to maintain existing functionality for setting up trusts and legal questionnaires, all without compromising on user experience or performance. Due to NDA constraints, certain specifics (like code snippets or visual layouts) are not shown."
          />
        </DevBlogSection>

        {/* MY ROLE & KEY CHALLENGES */}
        <DevBlogSection>
          <Heading
            level={3}
            className="mb-2 text-xl font-bold"
            text="My Role & Key Challenges"
          />
          <ul className="list-inside list-disc space-y-2 pl-4">
            <li>
              <strong>Vue.js Migration:</strong> Converted the core
              functionality from Python/HTML into reusable, componentized Vue.js
              modules.
            </li>
            <li>
              <strong>State Management Optimization:</strong> Implemented Pinia
              to streamline and centralize state updates, improving efficiency
              by 30%.
            </li>
            <li>
              <strong>Atomic Design Refactoring:</strong> Broke down a massive
              single-page file into a suite of UI components organized by atoms,
              molecules, and organisms for better code reuse and
              maintainability.
            </li>
            <li>
              <strong>Performance & Testing:</strong> Achieved a 35% decrease in
              page load times through optimized bundling and wrote unit tests to
              bring code coverage to 90%.
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
            text="The project leveraged Vue.js for front-end rendering, TypeScript for type safety, and Pinia as a lightweight yet powerful state management library. An atomic design methodology ensured that smaller, reusable components could be assembled into larger features efficiently."
          />
          <div className="mb-4">
            <Text
              className="text-base font-semibold"
              text="Key Technologies Included:"
            />
            <ul className="mt-2 list-inside list-disc space-y-2 pl-4">
              <li>Vue.js</li>
              <li>TypeScript</li>
              <li>Pinia</li>
              <li>Atomic Design Principles</li>
              <li>CI/CD Pipelines</li>
              <li>Python (Legacy Back-End)</li>
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
              <strong>Enhanced User Engagement (+25%):</strong> Modernized
              front-end with Vue.js, improving usability and interface
              responsiveness.
            </li>
            <li>
              <strong>State Efficiency (+30%):</strong> Moved to Pinia,
              resulting in more streamlined data flow and updates.
            </li>
            <li>
              <strong>Quality Assurance (+90% Code Coverage):</strong> Added
              comprehensive unit and integration tests, reducing bugs in
              production by 40%.
            </li>
            <li>
              <strong>Faster Delivery (+20%):</strong> Collaborated
              cross-functionally to shorten development cycles and deploy new
              features more quickly.
            </li>
            <li>
              <strong>CI/CD Pipelines (+50% Deployment Speed):</strong>
              Implemented automated pipelines, slashing deployment times and
              increasing release frequency.
            </li>
            <li>
              <strong>Performance Gains (-35% Load Times):</strong> Refactored
              and optimized front-end components and bundling processes to
              improve page load speeds.
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

          <div className="mb-8 flex flex-col space-y-8">
            <Text
              className="text-base"
              text={
                'Although visuals are not shown, the refactored application now follows a structured atomic design system, making it easier to maintain and scale.'
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
            text="This LYKAS case study demonstrates the power of a modern Vue.js stack combined with Pinia and atomic design principles. By refactoring a single 4,000+ line Python/HTML file into modular components, we not only improved performance and maintainability but also opened the door for easier team collaboration and faster feature rollouts."
          />
          <Text
            className="mb-4 text-base"
            text="The project underscores the importance of solid testing practices, effective state management, and a well-considered design methodology—all of which contributed to measurable gains in user engagement, code quality, and deployment speed."
          />
          <Text
            className="text-base"
            text="For any additional details or inquiries (within NDA limits), feel free to reach out!"
          />
        </DevBlogSection>
      </DevBlogSection>
    </DevBlogLayout>
  );
}
