'use client';
import React from 'react';

import { Heading, Text } from '@with-nx/generic-ui';
import DevBlogLayout from '../../../components/DevBlogLayout';
import DevBlogSection from '../../../components/DevBlogSection';

export default function CaseStudy() {
  return (
    <DevBlogLayout title="Case Study | PTO Site Redesign" hideNavBar={false}>
      <DevBlogSection fullWidth={false} className="py-32">
        {/* Title & Introduction */}
        <Heading
          level={2}
          className="text-center mb-4"
          text="Case Study: PTO Site Redesign"
        />
        <hr className="w-16 h-2 bg-primary mx-auto mb-8" />
        <Text
          className="text-xl italic mb-8 text-center"
          text="Boosting Parent Involvement & Accessibility"
        />

        <div className="max-w-3xl mx-auto space-y-10">
          {/* Introduction */}
          <section>
            <Heading
              level={3}
              className="text-xl font-bold mb-2"
              text="Introduction"
            />
            <Text text="An overview of the redesign project, its context, and why it was initiated." />
          </section>

          {/* Problem Statement */}
          <section>
            <Heading
              level={3}
              className="text-xl font-bold mb-2"
              text="Problem Statement"
            />
            <Text text="The original PTO website faced low parent engagement, lacked clear calls-to-action for volunteering, and had no multilingual support for Spanish-speaking families." />
          </section>

          {/* Goals & Objectives */}
          <section>
            <Heading
              level={3}
              className="text-xl font-bold mb-2"
              text="Goals & Objectives"
            />
            <ul className="list-disc list-inside pl-4">
              <li>Encourage parent involvement through simplified user flow</li>
              <li>Enhance accessibility with a language translator plugin</li>
              <li>Improve content hierarchy and navigation</li>
              <li>Implement a modern, responsive layout</li>
            </ul>
          </section>

          {/* Design & Approach */}
          <section>
            <Heading
              level={3}
              className="text-xl font-bold mb-2"
              text="Design & Approach"
            />
            <Text text="Using Figma for prototyping and WordPress for a functional test site, the redesign process included wireframing, color palette selection, and responsive layout testing." />
            <Text text="Key tasks involved configuring a translation plugin, reorganizing content for clarity, and ensuring a user-friendly parent volunteer form." />
          </section>

          {/* Figma Prototype */}
          <section>
            <Heading
              level={3}
              className="text-xl font-bold mb-2"
              text="Figma Prototype"
            />
            <div className="embed-container mb-8">
              <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                width="100%"
                height="450"
                src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/i4WisorQCHHIW8SXLEJcDA/whited-pto?node-id=46-1304&p=f&t=HjJiNw2voYo8A9JA-0"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          {/* Key Outcomes */}
          <section>
            <Heading
              level={3}
              className="text-xl font-bold mb-2"
              text="Key Outcomes"
            />
            <ul className="list-disc list-inside pl-4">
              <li>Parents can switch the interface to Spanish seamlessly</li>
              <li>Clear call-to-action for volunteer sign-ups</li>
              <li>Improved mobile experience with optimized load times</li>
            </ul>
          </section>

          {/* Next Steps */}
          <section>
            <Heading
              level={3}
              className="text-xl font-bold mb-2"
              text="Next Steps"
            />
            <Text text="Continued user testing with Spanish-speaking parents, refining final design elements, and finalizing plugin configurations before launch." />
          </section>

          {/* Useful Links */}
          <section>
            <Heading
              level={3}
              className="text-xl font-bold mb-2"
              text="Useful Links"
            />
            <ul className="list-disc list-inside pl-4">
              <li>
                <a
                  href="https://www.figma.com/design/i4WisorQCHHIW8SXLEJcDA/whited-pto?node-id=46-1304&p=f&t=HjJiNw2voYo8A9JA-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View the Figma Design
                </a>
              </li>
              <li>
                <a
                  href="https://dazzling-rshgymtemplate.wordpress.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
              </li>
              {/* <li>
                <a
                  href="https://github.com/your-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View on GitHub
                </a>
              </li> */}
            </ul>
          </section>
        </div>
      </DevBlogSection>
    </DevBlogLayout>
  );
}
