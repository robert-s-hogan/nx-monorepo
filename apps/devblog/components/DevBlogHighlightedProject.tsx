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
          className="h-[400px] w-[400px] md:w-full md:h-[400px] object-cover rounded-lg"
          loading="lazy"
        />

        <div className="!absolute space-y-6 p-4 md:py-6 md:px-2 inset-0 bg-image-overlay bg-opacity-60 flex flex-col justify-center items-center rounded-lg w-full">
          <Heading level={3} className="text-center">
            {project.title}
          </Heading>
          <p className="text-center w-full">{project.description}</p>

          <div className="relative flex space-x-2">
            <div className="absolute inset-0 bg-opposite-theming opacity-80 rounded-lg" />
            <Flex className="w-full items-center h-10 md:h-12 rounded-lg p-3">
              {project.category.map((cat) => {
                return (
                  <span
                    key={cat}
                    className={`relative z-10 text-3xl rounded-full overflow-hidden p-1 ${
                      cat === 'GithubPages'
                        ? 'flex items-center justify-center'
                        : ''
                    }`}
                  >
                    {getIconForCategory(cat)}
                  </span>
                );
              })}
            </Flex>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DevBlogHighlightedProject;
