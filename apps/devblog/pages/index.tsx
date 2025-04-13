// apps/devblog/pages/index.tsx

'use client';
import React from 'react';

import { Button, Heading, Text } from '../components/atomic/atoms';
import DevBlogLayout from '../components/DevBlogLayout';
import DevBlogSection from '../components/DevBlogSection';
import DevBlogProjectCard from '../components/atomic/molecules/DevBlogProjectCard';
import { Tabs, Tab } from '../components/atomic/molecules/Tabs';
import { ContactForm } from '../components/atomic/molecules/ContactForm/ContactForm';
import ToolsSection from '../components/atomic/molecules/ToolsSection';
import { scrollToProjects } from '../utils/helper';

const yearsExperience = new Date().getFullYear() - 2018;

// Removed the 'goals' property from each project object.
const volunteerProjects = [
  {
    title: 'Whited PTO',
    description:
      'A comprehensive redesign of a PTO website aimed at boosting parent engagement and enhancing accessibility with multilingual support for Spanish-speaking families.',
    technologies: ['Figma', 'WordPress', 'TailwindCSS', 'Translation Plugin'],
    imageUrl:
      'https://dazzling-rshgymtemplate.wordpress.com/wp-content/uploads/2025/03/whited_pto_case_study.png',
    link: '/case-study/whited-pto',
  },
];

const professionalProjects = [
  {
    title: 'LYKAS',
    description:
      'Refactored an extensive Python/HTML app into a modular Vue.js and Pinia-based solution, focusing on atomic design principles.',
    technologies: ['Vue.js', 'TypeScript', 'Pinia', 'Atomic Design'],
    imageUrl:
      'https://rhogandev.wordpress.com/wp-content/uploads/2025/03/devblog_lykas.jpg',
    link: '/case-study/lykas',
  },
  {
    title: 'Broadway Media',
    description:
      'A media company that specializes in digital signage and content management.',
    technologies: [
      'Nx',
      'TypeScript',
      'React',
      'CSS',
      'Next.js',
      'Stripe',
      'Redux Toolkit',
    ],
    imageUrl: 'https://app-assets.vercel.app/work/broadway_media.png',
    link: '/case-study/broadway-media',
  },
  {
    title: 'Clos Pegase Winery',
    description:
      'A winery located in Calistoga, California, offering wine tastings and tours.',
    technologies: ['jQuery', 'HTML5', 'JavaScript', 'Bootstrap', 'CORESense'],
    imageUrl: 'https://app-assets.vercel.app/work/clos_pegase.png',
    link: 'https://www.clospegase.com/',
  },
  {
    title: 'Windsor Vineyards',
    description:
      'A winery located in Windsor, California, offering custom wine labels and wine tastings.',
    technologies: ['jQuery', 'HTML5', 'JavaScript', 'Bootstrap', 'CORESense'],
    imageUrl: 'https://app-assets.vercel.app/work/windsor_vineyards.png',
    link: 'https://www.windsorvineyards.com/',
  },
];

const sampleTabs: Tab[] = [
  {
    title: 'Professional',
    value: 'Professional',
    content: (
      <div className="w-full relative h-auto rounded-2xl p-2 lg:p-10 text-xl bg-gradient-to-br from-accent-color to-accent-color">
        <DevBlogProjectCard projects={professionalProjects} />
      </div>
    ),
  },
  {
    title: 'Volunteer',
    value: 'Volunteer',
    content: (
      <div className="w-full relative h-auto rounded-2xl p-1 lg:p-10 text-xl bg-gradient-to-br from-accent-color to-accent-color">
        <DevBlogProjectCard projects={volunteerProjects} />
      </div>
    ),
  },
];

export default function Home() {
  return (
    <DevBlogLayout title="Portfolio | Robert Hogan" hideNavBar={false}>
      {/* ABOUT SECTION */}
      <div id="about" className="relative">
        <DevBlogSection
          fullWidth={true}
          className="w-full bg-secondary-color py-32"
        >
          <div className="container mx-auto">
            <Heading level={2} className="text-center mb-4" text="About me" />
            <hr className="w-16 h-2 bg-primary mx-auto mb-8" />
            <Text
              className="text-xl mb-20 italic max-w-4xl mx-auto"
              text={`Dedicated Frontend Engineer with over ${yearsExperience} years of experience specializing in Vue.js, React.js, Next.js, and user-centric application development.`}
            />
            <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center space-y-8 lg:space-y-0 lg:space-x-16">
              <div className="w-full lg:w-1/2 text-left">
                <Heading
                  level={3}
                  className="text-2xl font-bold mb-4"
                  text="Get to know me!"
                />
                <Text
                  className="text-lg mb-4"
                  text="I'm a web developer proficient in JavaScript and the web. I'm passionate about web performance, accessibility, mentoring, user & developer experience."
                />
                <Text
                  className="text-lg mb-4"
                  text="In my free time, I build side projects and like exploring new technologies. You can see some of my work in the projects section below."
                />
                <Button
                  theme="primary"
                  text="Projects"
                  onClick={() => scrollToProjects('projects')}
                />
              </div>
              <div className="w-full lg:w-1/2 text-left">
                <Heading
                  level={3}
                  className="text-2xl font-bold mb-4"
                  text="My toolkit"
                />
                <ToolsSection />
              </div>
            </div>
          </div>
        </DevBlogSection>
      </div>

      {/* PROJECTS SECTION */}
      <div id="projects" className="relative">
        <DevBlogSection className="py-32 min-h-[2050px] md:min-h-[3050px] lg:min-h-[3250px] xl:min-h-[3100px] p-0">
          <Heading level={2} className="text-center mb-4" text="Projects" />
          <hr className="w-16 h-2 bg-primary mx-auto mb-8" />
          <div className="[perspective:1200px] relative flex flex-col mx-auto w-full items-start justify-start my-40">
            <Tabs tabs={sampleTabs} />
          </div>
        </DevBlogSection>
      </div>

      {/* CONTACT SECTION */}
      <div id="contact" className="relative">
        <DevBlogSection fullWidth={true} className="w-full bg-secondary-color">
          <Heading level={2} className="text-center mb-4" text="Contact me" />
          <hr className="w-16 h-2 bg-primary mx-auto mb-8" />
          <ContactForm />
        </DevBlogSection>
      </div>
    </DevBlogLayout>
  );
}
