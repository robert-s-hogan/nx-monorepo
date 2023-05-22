import DevBlogLayout from '../../components/layout/DevBlogLayout';
import { Link, Button, Text, Heading, Flex } from '@with-nx/react-ui';
import { FiGithub } from 'react-icons/fi';
import { BiWrench } from 'react-icons/bi';
import { Mail, LinkedIn } from '@with-nx/icons';

import { projectsData } from '../../data/projects';
import { getIconForCategory } from '../../utils/getIconForCategory';

const Projects = () => {
  return (
    <DevBlogLayout>
      <section className="space-y-6 px-4">
        <Heading level={1}>Projects & Tools</Heading>
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
                  <Flex className="w-full items-center h-12">
                    {project.category.map((cat) => {
                      return (
                        <span
                          key={cat}
                          className={`text-3xl text-black bg-gray-200 rounded-full overflow-hidden p-1 ${
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
                  <div className="w-full flex justify-between text-black mt-8">
                    <Link
                      href={project.link}
                      target="_blank"
                      className={
                        project.isUnderConstruction ? 'no-underline' : ''
                      }
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
