import Image from 'next/image';

import { Box, Button, Flex, Heading, Link } from '@with-nx/react-ui';
import { FiGithub } from 'react-icons/fi';
import { BiWrench } from 'react-icons/bi';
import { getIconForCategory } from '../utils/getIconForCategory';

const DevBlogHighlightedProject = ({ project }) => {
  return (
    <div className="relative w-full no-underline-on-hover">
      <Link
        href={`/projects/${project.slug}`}
        className="no-underline-on-hover static"
      >
        <Image
          src={project.image}
          height={400}
          width={400}
          alt={project.title}
          className="h-[400px] w-full md:h-[400px] object-cover"
          loading="lazy"
        />

        <div className="!absolute space-y-6 p-4 md:py-6 md:px-2 inset-0 bg-image-overlay bg-opacity-60 flex flex-col justify-center items-center rounded w-full">
          <Heading level={3} className="text-center">
            <span className="hidden md:inline-block">{project.title}</span>
            <span className="md:hidden">{project.mobileTitle}</span>
          </Heading>
          <p className="text-center w-full">{project.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default DevBlogHighlightedProject;
