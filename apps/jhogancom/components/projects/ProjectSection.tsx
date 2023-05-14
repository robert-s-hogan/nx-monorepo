import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Text, Flex } from '@with-nx/react-ui';
import { Skeleton } from '@with-nx/react-ui';

import { projectStaticData } from '../../data/projects';
import { useRouter } from 'next/router';
import { FiGithub } from 'react-icons/fi';

const ProjectSection = () => {
  const [loading, setLoading] = useState(true);
  const [hydrated, setHydrated] = useState(true);

  const router = useRouter();

  const pathname = router.pathname;

  const sortedProjects = projectStaticData.sort((a, b) => a.order - b.order);
  const featuredProjects = sortedProjects.filter((project) => project.featured);
  const otherProjects = sortedProjects.filter((project) => !project.featured);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [hydrated]);

  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p>
        As a Data Scientist and Data Analyst, I translate data into actionable
        insights. I have experience with python, machine learning, SQL and
        statistics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {featuredProjects.length > 0 && (
          <>
            {featuredProjects.map((project) => (
              <div
                key={project.name}
                className="card overflow-hidden rounded-lg border border-opacity-20 border-blue text-left"
              >
                <div className="relative h-56 w-full">
                  {loading ? (
                    <Skeleton
                      height={224}
                      isLoading={loading}
                      className="mt-0"
                    />
                  ) : (
                    <Image
                      width={355}
                      height={224}
                      className="object-cover object-center w-full h-56"
                      src={project.image}
                      alt={project.name}
                    />
                  )}
                </div>

                <Flex className={`items-center px-4 py-3 bg-peach`}>
                  <Text
                    className="text-lg font-semibold text-black"
                    isLoading={loading}
                    height={28}
                  >
                    {project.name}
                  </Text>
                </Flex>

                <div className="px-4 py-4 flex flex-col justify-between h-64">
                  <Text className="py-2 flex-grow" isLoading={loading} rows={4}>
                    {project.description.length > 200
                      ? project.description.substring(0, 200) + '...'
                      : project.description}
                  </Text>

                  <div className="flex justify-between items-end flex-shrink-0">
                    <Text isLoading={loading} height={24} width={200}>
                      #{project.tags}
                    </Text>

                    <Text isLoading={loading} height={24} width={24}>
                      <Link
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue hover:text-black"
                        href={project.link}
                      >
                        <FiGithub size={24} />
                      </Link>
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        {otherProjects.map((project, index) => {
          if (index < 3 || pathname !== '/') {
            return (
              <div
                key={project.name}
                className="card overflow-hidden rounded-lg border bg-white border-opacity-20 border-blue text-left"
              >
                <div className="relative h-56 w-full">
                  {loading ? (
                    <Skeleton height={224} isLoading={loading} />
                  ) : (
                    <Image
                      width={355}
                      height={224}
                      className="object-cover object-center w-full h-56"
                      src={project.image}
                      alt={project.name}
                    />
                  )}
                </div>
                <Flex className={`items-center px-4 py-3 bg-peach`}>
                  <Text
                    className="text-lg font-semibold text-black"
                    isLoading={loading}
                  >
                    {project.name}
                  </Text>
                </Flex>

                <div className="px-4 py-4 flex flex-col justify-between h-64">
                  <Text className="py-2 flex-grow" rows={4} isLoading={loading}>
                    {project.description.length > 200
                      ? project.description.substring(0, 200) + '...'
                      : project.description}
                  </Text>

                  <div className="flex justify-between items-end flex-shrink-0">
                    <Text isLoading={loading} height={24} width={200}>
                      #{project.tags}
                    </Text>

                    <Link
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue hover:text-black"
                      href={project.link}
                    >
                      <FiGithub size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProjectSection;
