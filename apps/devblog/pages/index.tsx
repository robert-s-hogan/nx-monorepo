'use client';
import { useScroll, useTransform } from 'framer-motion';
import React from 'react';

import { Button, Flex, Heading, IconButton, Text } from '@with-nx/generic-ui';

import DevBlogLayout from '../components/DevBlogLayout';
import DevBlogSection from '../components/DevBlogSection';
import DevBlogProjectCard from '../components/DevBlogProjectCard';

const projects = [
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

export default function Home() {
  // Function to scroll to the "about-me" section
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <DevBlogLayout title="Portfolio | Robert Hogan" hideNavBar={false}>
      {/* ABOUT SECTION */}
      <div id="about" className="relative" />
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
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center space-y-8 md:space-y-0 md:space-x-16">
            <div className="md:w-1/2 text-left">
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
              <Text
                className="text-lg mb-4"
                text="I'm open to collaboration opportunities where I can contribute, learn and grow. Don't hesitate to reach out if you think my skills and experience are a good fit for your next project."
              />
              <Button
                theme="primary"
                text="Projects"
                onClick={scrollToProjects}
              />
            </div>
            <div className="md:w-1/2 text-left">
              <Heading
                level={3}
                className="text-2xl font-bold mb-4"
                text="My toolkit"
              />
              <div className="flex flex-wrap">
                {[
                  'JavaScript',
                  'Node.js',
                  'Express.js',
                  'HTML5',
                  'CSS3',
                  'React.js',
                  'Next.js',
                  'TailwindCSS',
                  'Nx',
                  'TypeScript',
                  'Jest',
                  'React Testing Library',
                  'Storybook',
                  'Firebase',
                  'GitHub',
                  'Vercel',
                  'Stripe',
                  'CORESense',
                  'WordPress',
                  'SEO',
                  'CLI',
                  'SASS',
                ].map((tool) => (
                  <span
                    key={tool}
                    className="bg-gray-800 text-white px-4 py-2 m-1 rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DevBlogSection>
      {/* PROJECTS SECTION */}
      <div id="projects" className="relative" />
      <DevBlogSection>
        <DevBlogProjectCard projects={projects} />
      </DevBlogSection>
    </DevBlogLayout>
  );
}
