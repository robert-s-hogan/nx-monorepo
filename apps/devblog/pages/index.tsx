'use client';
import { useScroll, useTransform } from 'framer-motion';
import React from 'react';

import { Button, Flex, Heading, IconButton, Text } from '@with-nx/generic-ui';

import DevBlogLayout from '../components/DevBlogLayout';
import DevBlogSection from '../components/DevBlogSection';
import { HeroEffect } from '../components/HeroEffect';
import DevBlogProjectCard from '../components/DevBlogProjectCard';

const projects = [
  {
    title: 'Concentration',
    description:
      'Interactive and fun game designed to test and improve your memory skills.',
    technologies: ['Vanilla JavaScript', 'HTML5', 'CSS', 'FontAwesome'],
    imageUrl:
      'https://raw.githubusercontent.com/robert-s-hogan/assets-nx-monorepo/main/apps/concentration/concentration.png?token=GHSAT0AAAAAACMVWOEH5OIQP3HOWJJ7MBT4ZSN4GOA',
    link: 'https://robert-s-hogan.github.io/Project-Memory-Game/',
  },
  {
    title: 'Project Two',
    description: 'Description for project two.',
    technologies: ['React', 'Next.js', 'TailwindCSS'],
    imageUrl:
      'https://raw.githubusercontent.com/robert-s-hogan/assets-nx-monorepo/main/apps/concentration/concentration.png?token=GHSAT0AAAAAACMVWOEH5OIQP3HOWJJ7MBT4ZSN4GOA',
    link: 'https://example.com/project-two',
  },
  {
    title: 'Project Three',
    description: 'Description for project three.',
    technologies: ['TypeScript', 'Node.js', 'Express'],
    imageUrl:
      'https://raw.githubusercontent.com/robert-s-hogan/assets-nx-monorepo/main/apps/concentration/concentration.png?token=GHSAT0AAAAAACMVWOEH5OIQP3HOWJJ7MBT4ZSN4GOA',
    link: 'https://example.com/project-three',
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
