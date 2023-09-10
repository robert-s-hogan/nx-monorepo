import DevBlogLayout from '../../components/DevBlogLayout';
import { Link, Button, Text, Heading, Flex, Section } from '@with-nx/react-ui';
import { FiGithub } from 'react-icons/fi';
import { BiWrench } from 'react-icons/bi';
import { FeatherMail, FeatherLinkedin } from '@with-nx/icons';
import Image from 'next/image';

const Projects = () => {
  return (
    <DevBlogLayout>
      <Section className="space-y-6 px-4 ">
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
              <h1 className="text-center font-sans text-lg leading-7 text-primary">
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
            <div className="flex flex-col justify-start">
              <h2 className="font-sans text-left text-4xl text-primary silkscreen">
                Revolutionizing Web Dev
              </h2>
            </div>
            <div>
              <div className="flex flex-col justify-start">
                <h3 className="font-sans text-left text-xl leading-6 text-white">
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
                  <p className="font-sans text-left leading-6 text-white">
                    Happy Clients
                  </p>
                </div>
                <div className="flex flex-col justify-start space-y-6">
                  <h2 className="font-sans text-left text-3xl text-primary silkscreen">
                    126
                  </h2>
                  <p className="font-sans text-left leading-6 text-white">
                    Astounding Projects
                  </p>
                </div>
                <div className="flex flex-col justify-start space-y-6">
                  <h2 className="font-sans text-left text-3xl text-primary silkscreen">
                    99.7
                  </h2>
                  <p className="font-sans text-left leading-6 text-white">
                    Success Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </DevBlogLayout>
  );
};

export default Projects;
