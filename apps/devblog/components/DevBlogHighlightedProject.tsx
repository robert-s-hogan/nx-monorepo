import Image from 'next/image';

import { Button, Flex, Link } from '@with-nx/react-ui';
import { FiGithub } from 'react-icons/fi';
import { BiWrench } from 'react-icons/bi';
import { getIconForCategory } from '../utils/getIconForCategory';

const DevBlogHighlightedProject = ({ project }) => {
  return (
    <div className="relative hover:opacity-100 group w-full">
      <Image
        src={project.image}
        height={225}
        width={200}
        alt={project.title}
        className="h-[225px] w-[200px] md:w-full md:h-[400px] object-cover rounded-2xl"
        loading="lazy"
      />

      <div className="absolute p-8 inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl w-full">
        <h3 className="text-primary text-center text-2xl mb-4">
          {project.title}
        </h3>
        <p className="text-white mb-4 w-full overflow-hidden">
          {project.description}
        </p>

        <div className="flex space-x-2 mb-4">
          <Flex className="w-full items-center h-12 bg-black opacity-75 rounded-2xl border border-primary p-3">
            {project.category.map((cat) => {
              return (
                <span
                  key={cat}
                  className={`text-3xl text-white rounded-full overflow-hidden p-1 ${
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

        <div
          className={`w-full flex ${
            project.github ? 'justify-between' : 'justify-center'
          } text-black mt-8`}
        >
          <Link
            href={project.link}
            target="_blank"
            className={project.isUnderConstruction ? 'no-underline' : ''}
          >
            <Button
              className="btn-primary"
              disabled={project.isUnderConstruction}
              icon={
                project.isUnderConstruction ? (
                  <BiWrench size={18} className="mr-2" />
                ) : (
                  ''
                )
              }
            >
              {project.isUnderConstruction
                ? 'Under Construction'
                : 'Live Project'}
            </Button>
          </Link>
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="hover:text-vivid-500"
            >
              <Button className="btn-secondary">
                <FiGithub
                  size={24}
                  className="text-white hover:text-vivid-500"
                />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DevBlogHighlightedProject;
