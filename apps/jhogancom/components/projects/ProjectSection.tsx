import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Seo } from '@with-nx/react-ui';
import useSWR from 'swr';
import ProjectItem from './ProjectItem';
import { projectStaticData } from '../../data/projects';
import { useRouter } from 'next/router';

const fetcher = (url) => fetch(url).then((r) => r.json());

const ProjectSection = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const { data, error } = useSWR('/api/projects', fetcher);

  if (error) {
    return <div>Error loading projects</div>;
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16v3a5 5 0 010 10v3a8 8 0 008 8h4c0-6.627-5.373-12-12-12z"
          ></path>
        </svg>
        <span>Loading projects...</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p>
        As a Data Scientist and Data Analyst, I translate data into actionable
        insights. I have experience with python, machine learning, SQL and
        statistics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {projectStaticData.map((project, index) => {
          if (index < 4 || pathname !== '/') {
            return (
              // <Link href={`/projects/${project.slug}`} key={project.name}>
              <div
                key={project.name}
                className="overflow-hidden rounded-lg dark:bg-black border border-opacity-20 border-blue hover:shadow-2xl transition delay-150 text-left"
              >
                <Image
                  width="355"
                  height="224"
                  className="object-cover object-center w-full h-56"
                  src={project.image}
                  alt="avatar"
                />

                <div className="flex items-center px-4 py-3 bg-peach">
                  <ProjectItem name={project.name} />
                </div>

                <div className="px-4 py-4 flex flex-col justify-between h-64">
                  <p className="py-2 flex-grow">{project.description}</p>

                  <div className="flex justify-between items-end flex-shrink-0">
                    <p>{project.tags.map((tag) => `#${tag} `)}</p>
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue hover:text-black"
                      href={project.link}
                    >
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 640 640"
                      >
                        <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              // </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProjectSection;
