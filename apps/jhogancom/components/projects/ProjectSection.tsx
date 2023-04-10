import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ProjectItem from './ProjectItem';
import { projectStaticData } from '../../data/projects';
import { useRouter } from 'next/router';
import { FiGithub } from 'react-icons/fi';

const ProjectSection = () => {
  const router = useRouter();

  const pathname = router.pathname;

  const sortedProjects = projectStaticData.sort((a, b) => a.order - b.order);
  const featuredProjects = sortedProjects.filter((project) => project.featured);
  const otherProjects = sortedProjects.filter((project) => !project.featured);

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
                className="card overflow-hidden rounded-lg border bg-white border-opacity-20 border-blue text-left"
              >
                <div className="relative h-56 w-full">
                  <Image
                    fill
                    priority
                    // className="object-cover object-center"
                    src={project.image}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                    alt="avatar"
                  />
                </div>

                <div className={`flex items-center px-4 py-3 bg-peach`}>
                  <ProjectItem name={project.name} />
                </div>

                <div className="px-4 py-4 flex flex-col justify-between h-64">
                  <p className="py-2 flex-grow">
                    {project.description.length > 200
                      ? project.description.substring(0, 200) + '...'
                      : project.description}
                  </p>

                  <div className="flex justify-between items-end flex-shrink-0">
                    <p>{project.tags.map((tag) => `#${tag} `)}</p>
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
                <Image
                  width="355"
                  height="224"
                  className="object-cover object-center w-full h-56"
                  src={project.image}
                  alt="avatar"
                />

                <div className={`flex items-center px-4 py-3 bg-peach`}>
                  <ProjectItem name={project.name} />
                </div>

                <div className="px-4 py-4 flex flex-col justify-between h-64">
                  <p className="py-2 flex-grow">
                    {project.description.length > 200
                      ? project.description.substring(0, 200) + '...'
                      : project.description}
                  </p>

                  <div className="flex justify-between items-end flex-shrink-0">
                    <p>{project.tags.map((tag) => `#${tag} `)}</p>
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
