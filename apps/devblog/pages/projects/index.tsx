import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button, Flex, Grid, Heading, Section, Text } from '@with-nx/react-ui';
import { FeatherMail, FeatherLinkedin } from '@with-nx/icons';
import { FiGithub } from 'react-icons/fi';
import { BiWrench } from 'react-icons/bi';
import Link from 'next/link';

import { Project, projectsData } from '../../data/projects';
import DevBlogLayout from '../../components/DevBlogLayout';
import DevBlogSection from '../../components/DevBlogSection';
import DevBlogSubTitle from '../../components/DevBlogSubTitle';

type Props = {
  projects: Project[];
};

const ProjectPage = ({ projects }) => {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <DevBlogLayout>
      <DevBlogSection className="space-y-6">
        <Heading level={1}>Projects</Heading>
        <DevBlogSubTitle>
          Discover a diverse array of my digital creations, ranging from tools
          to apps, and from libraries to immersive interfaces. Each piece
          showcases the pinnacle of front-end craftsmanship and my dedication to
          creating seamless user experiences. Explore and connect!
        </DevBlogSubTitle>
        <Grid className="grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:12 space-y-4">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <div className="relative h-[400px] w-full md:h-[400px] rounded overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  height={400}
                  width={400}
                  className="h-[400px] w-full md:h-[400px] object-cover rounded"
                />
                <div className="absolute inset-0 bg-image-overlay"></div>
              </div>

              <Heading level={3} className="py-6">
                <span className="hidden md:inline-block">{project.title}</span>
                <span className="md:hidden">{project.mobileTitle}</span>
              </Heading>
              <DevBlogSubTitle className="h-auto md:h-36">
                {project.description}
              </DevBlogSubTitle>
            </Link>
          ))}
        </Grid>
      </DevBlogSection>
    </DevBlogLayout>
  );
};

export default ProjectPage;

export const getStaticProps = async () => {
  return {
    props: {
      projects: projectsData,
    },
  };
};
