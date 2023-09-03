import DevBlogLayout from '../components/layout/DevBlogLayout';
import { Button, Flex, Heading, Link, Section, Text } from '@with-nx/react-ui';
import { FiGithub } from 'react-icons/fi';
import { Mail, LinkedIn } from '@with-nx/icons';
import Image from 'next/image';
import Script from 'next/script';
import { BiWrench } from 'react-icons/bi';
import { useModal } from '@with-nx/react-hooks';
import { X } from '@with-nx/icons';

import { projectsData } from '../data/projects';
import { getIconForCategory } from '../utils/getIconForCategory';

export function Index() {
  const { isShowing, toggle } = useModal();

  return (
    <DevBlogLayout>
      <section className="container mx-auto">
        <div className="space-y-4 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center items-center w-full mx-auto">
              <div className="space-y-4">
                <span className="text-2xl">
                  <span className="font-bold">Hello!</span> I'm{` `}
                  <span className="font-bold">Robert Hogan </span>a seasoned
                  Front-End{' '}
                  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block my-2 mr-3">
                    <span className="relative text-white px-2 silkscreen">
                      UI Engineer{' '}
                    </span>
                  </span>
                  with a knack for crafting efficient and user-centric digital
                  experiences.
                </span>
                <p className="sub-title">
                  🚀 Transitioning my site from Netlify/Gatsby to
                  Vercel/NX/Next.js — Bear with me!
                </p>
                <Flex className="space-x-4 flex items-center">
                  <Button className="btn-primary" onClick={toggle}>
                    Schedule a Meeting
                  </Button>

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
                </Flex>
              </div>
            </div>
            <dialog open={isShowing} className="border border-primary">
              {/* <Button onClick={toggle} autoFocus> */}
              <div className="w-full z-10 pb-2" onClick={toggle}>
                <X className="h-5 w-5 ml-auto opacity-80" />
              </div>
              {/* </Button> */}
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/robertshogan"
                style={{ minWidth: '320px', height: '600px' }}
              ></div>
              <Script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async
              ></Script>
            </dialog>
            <div className="mx-auto mt-8 md:mt-0">
              <Image
                src="http://robertshogan.dreamhosters.com/projects/devblog/portrait.jpg"
                height={770}
                width={500}
                priority
                className="rounded-lg"
                alt="Robert Hogans Portrait"
              />
            </div>
          </div>
        </div>
        <Section className="space-y-6 px-4">
          <div className="flex flex-col items-center justify-start">
            <div>
              <svg
                className="flex flex-col items-center justify-start w-full h-[225px]"
                viewBox="0 0 1356 225"
              >
                <foreignObject width="100%" height="100%">
                  <h1 className="text-center text-9xl uppercase text-primary silkscreen">
                    Showcase
                  </h1>
                </foreignObject>
              </svg>
              <div className="flex flex-col items-center justify-start max-w-4xl mx-auto">
                <h1 className="text-center font-sans text-lg leading-7">
                  Embark on a journey exploring a world of top-notch web
                  development projects featuring NX Monorepo, Next.js, React.js,
                  and UI.
                </h1>
              </div>
            </div>
            <div className="transform rotate-[-3deg]"></div>
            <div className="transform rotate-[144deg]"></div>
            <div className="transform rotate-[62deg]"></div>
          </div>
        </Section>
        <Section className="space-y-6 px-4">
          <div>
            <div className="space-y-6">
              <div className="flex flex-col justify-center">
                <Heading
                  level={2}
                  className="font-sans text-center text-3xl text-primary silkscreen"
                >
                  Revolutionizing Web Dev
                </Heading>
              </div>
              <div>
                <div className="flex flex-col justify-start">
                  <h3 className="font-sans text-left text-xl leading-6">
                    Gear up for groundbreaking projects utilizing NX Monorepo,
                    Next.js, and React.js integration to create modular and
                    scalable codebases.
                  </h3>
                </div>
                <div className="flex mt-6">
                  <div className="flex flex-col justify-start space-y-6">
                    <h2 className="font-sans text-left text-3xl text-primary silkscreen">
                      362
                    </h2>
                    <p className="font-sans text-left leading-6">
                      Happy Clients
                    </p>
                  </div>
                  <div className="flex flex-col justify-start space-y-6">
                    <h2 className="font-sans text-left text-3xl text-primary silkscreen">
                      126
                    </h2>
                    <p className="font-sans text-left leading-6">
                      Astounding Projects
                    </p>
                  </div>
                  <div className="flex flex-col justify-start space-y-6">
                    <h2 className="font-sans text-left text-3xl text-primary silkscreen">
                      99.7
                    </h2>
                    <p className="font-sans text-left leading-6">
                      Success Rate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <div className="flex flex-col justify-start flex-shrink-0 transform-none">
          <h2 className="text-left leading-tight font-sans silkscreen mb-3">
            Highlighted Projects
          </h2>
          <div className="grid grid-cols-2 relative">
            <img
              src="https://framerusercontent.com/images/7nfGGDYNAkbf641Ird5mi1Z3VI.jpg?scale-down-to=512"
              alt=""
              className="block w-full h-full object-center object-cover"
              loading="lazy"
            />
            <img
              src="https://framerusercontent.com/images/sywZubVBko9GaI341OKwxEr7j0.jpg?scale-down-to=512"
              alt=""
              className="block w-full h-full object-center object-cover"
              loading="lazy"
            />
            <img
              src="https://framerusercontent.com/images/ZYjTHduElaC4A2vUqo74fwaRMYo.jpg?scale-down-to=512"
              alt=""
              className="block w-full h-full object-center object-cover"
              loading="lazy"
            />
            <img
              src="https://framerusercontent.com/images/c45gDEeo7tICW6yPT3Gtn5NISH4.jpg?scale-down-to=512"
              alt=""
              className="block w-full h-full object-center object-cover"
              loading="lazy"
            />
            <img
              src="https://framerusercontent.com/images/8nusW7taaBRKHe0S9Pqphg9h0E.jpg?scale-down-to=512"
              alt=""
              className="block w-full h-full object-center object-cover"
              loading="lazy"
            />
            <img
              src="https://framerusercontent.com/images/XSU9IPTBHTBTXmmQ9Lj0Kxd5Kp4.jpg?scale-down-to=512"
              alt=""
              className="block w-full h-full object-center object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* <section className="space-y-6">
          <div className="space-y-2">
            <h2>Featured Projects</h2>
            <p className="sub-title">
              Every project is meticulously architected within a dedicated
              private NX monorepo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {projectsData.map((project, index) => {
              if (index < 3)
                return (
                  <div key={project.title} className="card">
                    <div className="card-body">
                      <Flex className="w-full space-x-3 items-center">
                        {project.image && (
                          <Image
                            src={project.image}
                            height={50}
                            width={50}
                            alt="Play2Win Fantasy Football Logo"
                          />
                        )}

                        <h3 className="card-title text-black">
                          {project.title}
                        </h3>
                      </Flex>
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
                        {project.github && (
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
                        )}
                      </div>
                    </div>
                  </div>
                );
            })}
          </div>
          <div className="my-4 flex justify-center">
            <Link href="/projects">View All Projects & Tools</Link>
          </div>
        </section> */}
      </section>
    </DevBlogLayout>
  );
}

export default Index;
