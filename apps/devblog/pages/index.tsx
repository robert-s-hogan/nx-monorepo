'use client';
import React from 'react';

import { Button, Heading, Text } from '@with-nx/generic-ui';

import DevBlogLayout from '../components/DevBlogLayout';
import DevBlogSection from '../components/DevBlogSection';
import DevBlogProjectCard from '../components/DevBlogProjectCard';
import { Tabs, Tab } from '../components/Tabs';
import { ContactForm } from '../components/contact-form';
import ToolsSection from '../components/ToolsSection';
import { scrollToProjects } from '../utils/helper';

const personalProjects = [
  {
    title: 'Conquest',
    description:
      'Dungeon Master tool for tracking campaigns, characters, and more.',
    technologies: ['React', 'Next.js', 'TailwindCSS', 'Firebase'],
    goals: [
      'Create a tool for Dungeon Masters to track campaigns, characters, and more.',
      'Use React and Next.js for the frontend.',
      'Use TailwindCSS for styling and layout.',
      'Use Firebase for the backend.',
    ],
    imageUrl: 'https://app-assets.vercel.app/apps/devblog/dev_blog-map.jpg',
    link: 'https://conquest-nx.vercel.app',
  },
  {
    title: 'Star Wars API',
    description: 'Visualizing Star Wars data using the SWAPI.tech API.',
    technologies: [
      'React',
      'Next.js',
      'TailwindCSS',
      'Custom SVGs',
      'Neo-Brutalism',
    ],
    goals: [
      'Create a visually appealing and interactive web app.',
      'Use the SWAPI.tech API to fetch and display Star Wars data.',
      'Use TailwindCSS for styling and layout.',
      'Find custom SVGs for planet backgrounds.',
      'Apply a Neo-Brutalism design style.',
    ],
    imageUrl:
      'https://app-assets.vercel.app/apps/swapi-cards/devblog_swapi-plus.jpg',
    link: 'https://swapi-cards-nx-monorepo.vercel.app/',
  },
  {
    title: 'Concentration',
    description:
      'Interactive and fun game designed to test and improve your memory skills.',
    technologies: ['Vanilla JavaScript', 'HTML5', 'CSS', 'FontAwesome'],
    goals: [
      'Create a fun and interactive game that tests and improves memory skills.',
      'Use vanilla JavaScript to build the game logic.',
      'Use HTML5 and CSS to create the game layout and design.',
      'Use FontAwesome for the game icons.',
    ],
    imageUrl:
      'https://app-assets.vercel.app/apps/concentration/concentration.png',
    link: 'https://robert-s-hogan.github.io/Project-Memory-Game/',
  },
];

const professionalProjects = [
  {
    title: 'Broadway Media',
    description:
      'A media company that specializes in digital signage and content management.',
    technologies: [
      'Nx Monorepo',
      'React',
      'CSS',
      'TypeScript',
      'Next.js',
      'Stripe',
      'Redux Toolkit',
    ],
    goals: [
      'Create a new website for Broadway Media.',
      'Use React and Next.js for the frontend.',
      'Create custom component library.',
      'Use Nx Monorepo to manage the project.',
      'Use Redux Toolkit for state management.',
      'Integrate Stripe for payment processing.',
    ],
    imageUrl: 'https://app-assets.vercel.app/work/broadway_media.png',
    link: 'https://www.broadwaymedia.com/',
  },
  {
    title: 'Clos Pegase Winery',
    description:
      'A winery located in Calistoga, California, offering wine tastings and tours.',
    technologies: ['jQuery', 'JavaScript', 'HTML5', 'Bootstrap', 'CORESense'],
    goals: [
      'Redesign Clos Pegase website.',
      'Use Bootstrap, jQuery, CSS, and HTML5 for the frontend.',
      'Use CORESense (CMS) for the backend.',
      'Use jQuery for interactivity and animations.',
      'Added Talkable referral program.',
    ],
    imageUrl: 'https://app-assets.vercel.app/work/clos_pegase.png',
    link: 'https://www.clospegase.com/',
  },
  {
    title: 'Windsor Vineyards',
    description:
      'A winery located in Windsor, California, offering custom wine labels and wine tastings.',
    technologies: ['jQuery', 'JavaScript', 'HTML5', 'Bootstrap', 'CORESense'],
    goals: [
      'Redesign Clos Pegase website.',
      'Use Bootstrap, jQuery, CSS, and HTML5 for the frontend.',
      'Use CORESense (CMS) for the backend.',
      'Use jQuery for interactivity and animations.',
      'Added Talkable referral program.',
    ],
    imageUrl: 'https://app-assets.vercel.app/work/windsor_vineyards.png',
    link: 'https://www.windsorvineyards.com/',
  },
];

const sampleTabs: Tab[] = [
  {
    title: 'Professional',
    value: 'Professional',
    content: (
      <div className="w-full relative h-auto rounded-2xl p-10 text-xl bg-gradient-to-br from-accent-color to-accent-color">
        <DevBlogProjectCard projects={professionalProjects} />
      </div>
    ),
  },
  {
    title: 'Personal',
    value: 'Personal',
    content: (
      <div className="w-full relative h-auto rounded-2xl p-10 text-xl bg-gradient-to-br from-accent-color to-accent-color">
        <DevBlogProjectCard projects={personalProjects} />
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
              text="Dedicated Frontend Engineer with over 6 years of experience specializing in React.js, Next.js, and user-centric application development."
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
                  text="I'm a software developer proficient in JavaScript and the web. I'm passionate about web performance, accessibility, mentoring, user & developer experience."
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
        <DevBlogSection className="py-32 min-h-[2450px] md:min-h-[3050px] lg:min-h-[3250px] xl:min-h-[2650px] p-0">
          <Heading level={2} className="text-center mb-4" text="Projects" />
          <hr className="w-16 h-2 bg-primary mx-auto mb-8" />
          <div className="[perspective:1000px] relative flex flex-col mx-auto w-full  items-start justify-start my-40">
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
