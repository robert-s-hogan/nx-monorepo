import React from 'react';
import DevBlogLayout from '../../components/layout/DevBlogLayout';
import { Link, Button, Text, Heading } from '@with-nx/react-ui';
import { FiGithub } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';
import {
  SiJavascript,
  SiCss3,
  SiNextdotjs,
  SiNx,
  SiReactquery,
  SiTailwindcss,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { BiWrench } from 'react-icons/bi';
import { projectsData } from '../../data/projects';

const Projects = () => {
  function getIconForCategory(category) {
    switch (category) {
      case 'React':
        return <FaReact className="react" />;
      case 'Next':
        return <SiNextdotjs className="next" />;
      case 'API':
        return <TbApi className="api" />;
      case 'JavaScript':
        return <SiJavascript className="javascript " />;
      case 'CSS':
        return <SiCss3 className="css" />;
      case 'NX':
        return <SiNx className="nx" />;
      case 'ReactQuery':
        return <SiReactquery className="react-query" />;
      case 'TailwindCSS':
        return <SiTailwindcss className="tailwindcss" />;
      // Add more cases for other categories here
      default:
        return null;
    }
  }
  return (
    <DevBlogLayout>
      <section className="space-y-6 px-4">
        <Heading level={1}>Projects</Heading>
        <Text className="sub-title">
          Here are all my projects I have worked on (still moving projects over
          to the monorepo) &#129318;
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projectsData.map((project) => {
            return (
              <div key={project.title} className="card">
                <div className="card-body">
                  <h3 className="card-title text-black">{project.title}</h3>
                  <p className="card-text text-black h-28">
                    {project.description}
                  </p>
                  <div className="w-full flex">
                    {project.category.map((cat) => {
                      return (
                        <span
                          key={cat}
                          className="text-3xl text-black bg-gray-200 rounded-full p-1"
                        >
                          {getIconForCategory(cat)}
                        </span>
                      );
                    })}
                  </div>
                  <div className="w-full flex justify-between text-black mt-8">
                    <Link href={project.link} target="_blank">
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
                        {project.isUnderConstruction ? (
                          <span>Under Construction</span>
                        ) : (
                          'Live Project'
                        )}
                      </Button>
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      className="hover:text-vivid-500"
                    >
                      <FiGithub size={24} color="black" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </DevBlogLayout>
  );
};

export default Projects;
