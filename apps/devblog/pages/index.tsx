import DevBlogLayout from '../components/layout/DevBlogLayout';
import { Button, Flex, Link } from '@with-nx/react-ui';
import { FiGithub } from 'react-icons/fi';
import { Mail, LinkedIn } from '@with-nx/icons';
import Image from 'next/image';
import { FaReact } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import {
  SiJavascript,
  SiCss3,
  SiNextdotjs,
  SiNx,
  SiReactquery,
  SiTailwindcss,
  SiGithubpages,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { BiWrench } from 'react-icons/bi';

import { projectsData } from '../data/projects';
import RSHPortrait from '../public/images/portrait.jpg';

export function Index() {
  function getIconForCategory(category) {
    switch (category) {
      case 'React':
        return <FaReact className="text-react-js" />;
      case 'Next':
        return <SiNextdotjs className="text-next-js" />;
      case 'API':
        return <TbApi className="text-api" />;
      case 'JavaScript':
        return <SiJavascript className="text-javascript " />;
      case 'CSS':
        return <SiCss3 className="text-css" />;
      case 'NX':
        return <SiNx className="text-nx" />;
      case 'ReactQuery':
        return <SiReactquery className="text-react-query" />;
      case 'TailwindCSS':
        return <SiTailwindcss className="text-tailwindcss" />;
      case 'Google':
        return <FcGoogle className="text-google" />;
      case 'GithubPages':
        return (
          <SiGithubpages
            className="text-github"
            style={{ width: '3.75em', height: '3.75em' }}
          />
        );
      default:
        return null;
    }
  }
  return (
    <DevBlogLayout>
      <section className="container max-w-7xl mx-auto px-4">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center items-center w-full md:w-3/4 mx-auto">
              <div className="space-y-4">
                <h1>
                  Hello, I am Robert Hogan <br /> Front End{' '}
                  <span className="underline decoration-primary">
                    UI/UX Engineer
                  </span>
                </h1>
                <p className="sub-title">
                  Moving my site from Netlify/Gatsby to Vercel/NX/Next.js
                  &#128059; with me
                </p>
                <div className="space-x-4 flex">
                  <Link
                    href="mailto:robert@robertshogan.com"
                    className=" hover:text-vivid-500"
                    target="_blank"
                  >
                    <Mail className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/robert-s-hogan/"
                    className="hover:text-vivid-500"
                    target="_blank"
                  >
                    <LinkedIn className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-8 md:mt-0">
              <Image
                src={RSHPortrait}
                height={770}
                width={500}
                priority
                className="rounded-lg"
                alt="Robert Hogans Portrait"
              />
            </div>
          </div>
        </div>
        <section className="space-y-6">
          <div className="space-y-2">
            <h2>Featured Projects</h2>
            <p className="sub-title">
              All my projects are hosted inside the same private NX monorepo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {projectsData.map((project, index) => {
              if (index < 3)
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
                          <FiGithub
                            size={24}
                            className="text-black hover:text-vivid-500"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
            })}
          </div>
          <div className="my-4 flex justify-center">
            <Link href="/projects">View All Projects & Tools</Link>
          </div>
        </section>
      </section>
    </DevBlogLayout>
  );
}

export default Index;
