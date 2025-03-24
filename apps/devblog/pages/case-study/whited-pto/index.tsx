// apps/devblog/pages/case-study/whited-pto.tsx

'use client';
import React from 'react';

import { Heading, Text } from '@with-nx/generic-ui';
import DevBlogLayout from '../../../components/DevBlogLayout';
import DevBlogSection from '../../../components/DevBlogSection';

export default function WhitedPTOCaseStudy() {
  return (
    <DevBlogLayout
      title="Case Study: Whited PTO"
      description="A work-in-progress case study showcasing the ongoing Whited PTO redesign."
      hideNavBar={false}
    >
      <DevBlogSection fullWidth={false} className="py-32">
        {/* PAGE TITLE & INTRO */}
        <Heading
          level={2}
          className="text-center mb-4"
          text="Whited PTO: Redesign & Multilingual Support"
        />
        <hr className="w-16 h-2 bg-primary mx-auto mb-8" />

        {/* PROJECT OVERVIEW */}
        <section className="max-w-3xl mx-auto mb-10">
          <Heading
            level={3}
            className="text-xl font-bold mb-2"
            text="Project Overview"
          />
          <Text
            className="text-base mb-4"
            text="Whited PTO is a parent-teacher organization website currently undergoing a redesign. The primary goal is to increase parent engagement and support Spanish-speaking families by offering an accessible, multilingual experience. This will be critical for the 2025 school year when we plan to roll out a new WordPress theme."
          />
          <Text
            className="text-base"
            text="Please note that this project is still in the design and user-testing phase."
          />
        </section>

        {/* MOTIVATION */}
        <section className="max-w-3xl mx-auto mb-10">
          <Heading
            level={3}
            className="text-xl font-bold mb-2"
            text="Motivation"
          />
          <Text
            className="text-base mb-4"
            text="The current PTO site suffers from low volunteer turnout and limited engagement due to hard-to-find calls-to-action. Additionally, the site does not cater to Spanish-speaking parents, creating a language barrier for a significant portion of the community. By modernizing the platform and incorporating a free educational/non-profit WordPress theme, we aim to create a welcoming, inclusive environment for all families."
          />
        </section>

        {/* KEY FEATURES */}
        <section className="max-w-3xl mx-auto mb-10">
          <Heading
            level={3}
            className="text-xl font-bold mb-2"
            text="Key Features (Planned)"
          />
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Dedicated volunteer sign-up form with clear CTAs</li>
            <li>
              Spanish translation toggle to better serve bilingual families
            </li>
            <li>Mobile-friendly layout using a responsive WordPress theme</li>
            <li>
              Minimal custom styling for a quick, accessible rollout in 2025
            </li>
          </ul>
        </section>

        {/* DESIGN & TOOLS */}
        <section className="max-w-3xl mx-auto mb-10">
          <Heading
            level={3}
            className="text-xl font-bold mb-2"
            text="Design & Tools"
          />
          <Text
            className="text-base mb-4"
            text="We are prototyping in Figma to map out the user flow, test various layout ideas, and validate color choices that meet accessibility guidelines. On the technical side, we have a WordPress sandbox environment, where we’re experimenting with a free educational/non-profit theme to minimize custom development efforts."
          />
          <Text
            className="text-base mb-2 font-semibold"
            text="Key Tools & Setup:"
          />
          <ul className="list-disc list-inside space-y-2 pl-4 mb-4">
            <li>Figma (low- to mid-fidelity prototypes & user flow)</li>
            <li>
              WordPress test site (using a free educational/non-profit theme)
            </li>
            <li>Minimal CSS modifications (no Tailwind in final deployment)</li>
            <li>Multilingual plugin exploration for Spanish translation</li>
          </ul>
        </section>

        {/* FIGMA EMBED */}
        <section className="max-w-3xl mx-auto mb-10">
          <Heading
            level={3}
            className="text-xl font-bold mb-2"
            text="Figma Prototype (In Progress)"
          />
          <Text
            className="text-base mb-4"
            text="Below is an embedded Figma prototype showcasing our current designs. Feel free to explore different screens and flows. Keep in mind the final styling will reflect the free WordPress theme once integrated."
          />
          <div className="mb-8">
            <iframe
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              width="100%"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/i4WisorQCHHIW8SXLEJcDA/whited-pto?node-id=46-1304&p=f&t=lcAa1Ur0XFPWuK3a-0"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* CURRENT STATUS */}
        <section className="max-w-3xl mx-auto mb-10">
          <Heading
            level={3}
            className="text-xl font-bold mb-2"
            text="Current Status"
          />
          <Text
            className="text-base mb-4"
            text="We are in the design and user-feedback phase. No metrics on engagement improvements are available yet, but we have begun collecting informal feedback from a handful of parents. Early impressions suggest that clearer volunteer calls-to-action and a bilingual interface may significantly boost participation."
          />
          <Text
            className="text-base"
            text="Before the 2025 school year starts, we hope to finalize our WordPress theme selection and begin integrating the chosen bilingual plugin."
          />
        </section>

        {/* NEXT STEPS */}
        <section className="max-w-3xl mx-auto mb-10">
          <Heading
            level={3}
            className="text-xl font-bold mb-2"
            text="Next Steps"
          />
          <Text
            className="text-base mb-4"
            text="Our immediate focus is establishing the final WordPress theme, setting up the multilingual plugin for Spanish, and refining the volunteer sign-up flow based on user feedback. The full rollout is planned for the 2025 school year, when the site will officially replace the old PTO webpage."
          />
          <Text
            className="text-base"
            text="After launch, we’ll track engagement metrics and parent feedback to guide future updates, ensuring the site remains relevant and user-friendly."
          />
        </section>

        {/* LINKS & REFERENCES */}
        <section className="max-w-3xl mx-auto">
          <Heading
            level={3}
            className="text-xl font-bold mb-2"
            text="Links & References"
          />
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <a
                href="https://www.figma.com/design/i4WisorQCHHIW8SXLEJcDA/whited-pto?node-id=46-1304&p=f&t=lcAa1Ur0XFPWuK3a-0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Figma Prototype Link
              </a>
            </li>
            <li>
              <a
                href="https://testwhitedpto.wordpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                WordPress Test Site
              </a>
            </li>
          </ul>
        </section>
      </DevBlogSection>
    </DevBlogLayout>
  );
}
