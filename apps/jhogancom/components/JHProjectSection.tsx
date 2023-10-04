import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Flex, Grid, Heading, Text, Skeleton } from '@with-nx/react-ui';
import { FeatherGithub } from '@with-nx/icons';

import { projectStaticData } from '../data/projects';
import { useRouter } from 'next/router';

const sortProjects = (projects) => projects.sort((a, b) => a.order - b.order);

const ProjectCard = ({ project, loading }) => (
  <div className="card overflow-hidden rounded-lg border border-opacity-20 text-left">
    <div className="">
      {loading ? (
        <Skeleton height={375} isLoading={loading} />
      ) : (
        <Image
          width={500}
          height={375}
          quality={75}
          className="object-cover object-center"
          layout="responsive"
          placeholder="blur"
          src={project.image}
          alt={project.name}
        />
      )}
    </div>
    <Flex className={`items-center px-4 py-3 bg-peach`}>
      <Text className="text-lg font-semibold text-black" isLoading={loading}>
        {project.name}
      </Text>
    </Flex>

    <div className="px-4 py-4 flex flex-col justify-between h-48">
      <Text className="py-2 flex-grow" rows={4} isLoading={loading}>
        {project.description.length > 200
          ? project.description.substring(0, 200) + '...'
          : project.description}
      </Text>

      <div className="flex justify-between items-end flex-shrink-0">
        <Text
          className="font-semibold"
          isLoading={loading}
          height={24}
          width={200}
        >
          #{project.tags}
        </Text>

        <a
          target="_blank"
          rel="noreferrer"
          href={project.link}
          aria-label={`${project.link}'s Github Link`}
        >
          <FeatherGithub className="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
);

const ProjectSection = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = router.pathname;

  const sortedProjects = useMemo(
    () => sortProjects([...projectStaticData]),
    []
  );
  const featuredProjects = sortedProjects.filter((project) => project.featured);
  const otherProjects = sortedProjects.filter((project) => !project.featured);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="space-y-4">
      <Heading level={2}>Projects</Heading>
      <p>
        As a Data Scientist and Data Analyst, I translate data into actionable
        insights. I have experience with python, machine learning, SQL and
        statistics.
      </p>

      <Grid className="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} loading={loading} />
        ))}

        {otherProjects.map(
          (project, index) =>
            (index < 3 || pathname !== '/') && (
              <ProjectCard
                key={project.name}
                project={project}
                loading={loading}
              />
            )
        )}
      </Grid>
    </section>
  );
};

export default ProjectSection;
