import React, { useState, useEffect } from 'react';
import SkeletonImage from '../SkeletonImage';
import Link from 'next/link';
import { Text } from '@with-nx/react-ui';

import { projectStaticData } from '../../data/projects';
import { useRouter } from 'next/router';
import { FiGithub } from 'react-icons/fi';

const ProjectSection = () => {
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const pathname = router.pathname;

  const sortedProjects = projectStaticData.sort((a, b) => a.order - b.order);
  const featuredProjects = sortedProjects.filter((project) => project.featured);
  const otherProjects = sortedProjects.filter((project) => !project.featured);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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
                  <SkeletonImage
                    width={355}
                    height={224}
                    className="object-cover object-center w-full h-56"
                    src={project.image}
                    alt={project.name}
                    isLoading={loading}
                  />
                </div>

                <div className={`flex items-center px-4 py-3 bg-peach`}>
                  <Text
                    className="text-lg font-semibold text-black"
                    loading={loading}
                  >
                    {project.name}
                  </Text>
                </div>

                <div className="px-4 py-4 flex flex-col justify-between h-64">
                  <Text
                    className="py-2 flex-grow"
                    loading={loading}
                    loadingRows={4}
                  >
                    {project.description.length > 200
                      ? project.description.substring(0, 200) + '...'
                      : project.description}
                  </Text>

                  <div className="flex justify-between items-end flex-shrink-0">
                    <Text loading={loading}>#{project.tags[0]}</Text>

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
                  <SkeletonImage
                    width="355"
                    height="224"
                    className="object-cover object-center w-full h-56"
                    src={project.image}
                    alt="avatar"
                    isLoading={loading}
                  />
                </div>
                <div className={`flex items-center px-4 py-3 bg-peach`}>
                  <Text
                    className="text-lg font-semibold text-black"
                    loading={loading}
                  >
                    {project.name}
                  </Text>
                </div>

                <div className="px-4 py-4 flex flex-col justify-between h-64">
                  <Text
                    className="py-2 flex-grow"
                    loadingRows={4}
                    loading={loading}
                  >
                    {project.description.length > 200
                      ? project.description.substring(0, 200) + '...'
                      : project.description}
                  </Text>

                  <div className="flex justify-between items-end flex-shrink-0">
                    <Text loading={loading}>#{project.tags[0]}</Text>

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
