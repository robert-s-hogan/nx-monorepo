// apps/devblog/components/atomic/templates/HomePageTemplate.tsx

'use client';
import React from 'react';
import DevBlogLayout from '../../DevBlogLayout';
import { Button, Heading, Section, Text } from '@devblog/components';
import DevBlogProjectCard from '../../molecules/DevBlogProjectCard';
import { Tabs, Tab } from '../../molecules/Tabs';
import { ContactForm } from '../../molecules/ContactForm/ContactForm';
import ToolsSection from '../../molecules/ToolsSection';

type HomePageTemplateProps = {
  volunteerProjects: any[];
  professionalProjects: any[];
};

export const HomePageTemplate = ({
  volunteerProjects,
  professionalProjects,
}: HomePageTemplateProps) => {
  return (
    <DevBlogLayout>
      {/* Hero, Experience, Projects, Tools, Contact sections */}
      <Section>
        <Heading text="Welcome to My Portfolio" level={1} />
        <Text
          text={`Over ${new Date().getFullYear() - 2018} years of experience`}
        />
      </Section>

      <Section>
        <Heading text="Volunteer Projects" level={2} />
        {volunteerProjects.map((p) => (
          <DevBlogProjectCard key={p.title} project={p} />
        ))}
      </Section>

      <Section>
        <Heading text="Professional Projects" level={2} />
        {professionalProjects.map((p) => (
          <DevBlogProjectCard key={p.title} project={p} />
        ))}
      </Section>

      <ToolsSection />

      <Section>
        <Heading text="Contact Me" level={2} />
        <ContactForm />
      </Section>
    </DevBlogLayout>
  );
};
