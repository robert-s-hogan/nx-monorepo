import DevBlogLayout from '../components/layout/DevBlogLayout';
import { Link, Button } from '@with-nx/react-ui';
import { FiGithub } from 'react-icons/fi';
import Image from 'next/image';
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
import { useRouter } from 'next/router';

import { projectsData } from '../data/projects';
import RSHPortrait from '../public/images/portrait.jpg';

export function Index() {
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
  const router = useRouter();
  return (
    <DevBlogLayout>
      <section className="container max-w-7xl mx-auto px-4">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center items-center w-3/4 mx-auto">
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
                    aria-label="Mail Icon"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/robert-s-hogan/"
                    className="hover:text-vivid-500"
                    aria-label="Linked Icon"
                    target="_blank"
                  >
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mx-auto">
              <Image
                src={RSHPortrait}
                height={770}
                width={500}
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
          <div className="my-4 flex justify-center">
            <Link href="/projects">View All Projects</Link>
          </div>
        </section>
      </section>
    </DevBlogLayout>
  );
}

export default Index;
