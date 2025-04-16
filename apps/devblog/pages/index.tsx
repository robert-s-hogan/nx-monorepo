// apps/devblog/pages/index.tsx

'use client';
import React from 'react';

import { Button, Heading, Text } from '../components/atomic/atoms';
import { Section } from '../components/atomic/organisms/Section';
import DevBlogLayout from '../components/DevBlogLayout';
import DevBlogProjectCard from '../components/atomic/molecules/DevBlogProjectCard';
import { Tabs, Tab } from '../components/atomic/molecules/Tabs';
import { ContactForm } from '../components/atomic/molecules/ContactForm/ContactForm';
import ToolsSection from '../components/atomic/molecules/ToolsSection';
import { scrollToProjects } from '../utils/helper';

const yearsExperience = new Date().getFullYear() - 2018;

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
      <div className="from-accent-color to-accent-color relative h-auto w-full rounded-2xl bg-gradient-to-br p-2 text-xl lg:p-10">
        <DevBlogProjectCard projects={professionalProjects} />
      </div>
    ),
  },
  {
    title: 'Volunteer',
    value: 'Volunteer',
    content: (
      <div className="from-accent-color to-accent-color relative h-auto w-full rounded-2xl bg-gradient-to-br p-1 text-xl lg:p-10">
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
        <Section fullWidth={true} className="bg-secondary-color w-full">
          <div className="container mx-auto">
            <Heading level={2} className="mb-4 text-center" text="About me" />
            <hr className="bg-primary mx-auto mb-8 h-2 w-16" />
            <Text
              className="mx-auto mb-20 max-w-4xl text-xl italic"
              text={`Dedicated Frontend Engineer with over ${yearsExperience} years of experience specializing in Vue.js, React.js, Next.js, and user-centric application development.`}
            />
            <div className="flex flex-col items-start justify-center space-y-8 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-16">
              <div className="w-full text-left lg:w-1/2">
                <Heading
                  level={3}
                  className="mb-4 text-2xl font-bold"
                  text="Get to know me!"
                />
                <Text
                  className="mb-4 text-lg"
                  text="I'm a web developer proficient in JavaScript and the web. I'm passionate about web performance, accessibility, mentoring, user & developer experience."
                />
                <Text
                  className="mb-4 text-lg"
                  text="In my free time, I build side projects and like exploring new technologies. You can see some of my work in the projects section below."
                />
                <Button
                  theme="primary"
                  text="Projects"
                  onClick={() => scrollToProjects('projects')}
                />
              </div>
              <div className="w-full text-left lg:w-1/2">
                <Heading
                  level={3}
                  className="mb-4 text-2xl font-bold"
                  text="My toolkit"
                />
                <ToolsSection />
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* PROJECTS SECTION */}
      <div id="projects" className="relative">
        <Section className="min-h-[2050px] p-0 py-32 md:min-h-[3050px] lg:min-h-[3250px] xl:min-h-[3100px]">
          <Heading level={2} className="mb-4 text-center" text="Projects" />
          <hr className="bg-primary mx-auto mb-8 h-2 w-16" />
          <div className="relative mx-auto my-40 flex w-full flex-col items-start justify-start [perspective:1200px]">
            <Tabs tabs={sampleTabs} />
          </div>
        </Section>
      </div>

      {/* CONTACT SECTION */}
      <div id="contact" className="relative">
        <Section fullWidth={true} className="bg-secondary-color">
          <Heading level={2} className="mb-4 text-center" text="Contact me" />
          <hr className="bg-primary mx-auto mb-8 h-2 w-16" />
          <ContactForm />
        </Section>
      </div>
    </DevBlogLayout>
  );
}
