import {
  Button,
  Flex,
  Grid,
  Heading,
  Link,
  Section,
  Text,
} from '@with-nx/react-ui';
import { FeatherX } from '@with-nx/icons';
import Image from 'next/image';
import Script from 'next/script';
import { useModal } from '@with-nx/react-hooks';
import { useTheme } from '@with-nx/theme';

import DevBlogLayout from '../components/DevBlogLayout';
import DevBlogSection from '../components/DevBlogSection';
import DevBlogSubTitle from '../components/DevBlogSubTitle';
import DevBlogHighlightedProject from '../components/DevBlogHighlightedProject';
import { projectsData } from '../data/projects';

export function Index() {
  const { isShowing, toggle } = useModal();
  const { theme, toggleTheme } = useTheme();
  return (
    <DevBlogLayout>
      <DevBlogSection className="relative">
        <Grid className="grid-cols-1 px-2">
          <Flex className="justify-center items-center w-full mx-auto">
            <div className="space-y-4 max-w-4xl">
              <Heading
                level={1}
                className="text-center text-6xl md:text-9xl uppercase"
              >
                Portfolio
              </Heading>
              <DevBlogSubTitle className="pt-8 mx-4">
                <span className="font-bold">Hello!</span> I'm{` `}
                <span className="font-bold">Robert Hogan </span>a seasoned
                Front-End&nbsp;&nbsp;
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block my-2 mr-3">
                  <span className="relative text-white px-2">UI Engineer</span>
                </span>
                with a knack for crafting efficient and user-centric digital
                experiences.
              </DevBlogSubTitle>

              {/* <Flex className="space-x-4 items-center mx-4">
                <Button className="btn-primary" onClick={toggle}>
                  Schedule a Meeting
                </Button>
              </Flex> */}
            </div>
          </Flex>
          <dialog open={isShowing} className="border border-primary">
            <div className="w-full z-10 pb-2" onClick={toggle}>
              <FeatherX className="h-5 w-5 ml-auto opacity-80" />
            </div>
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
        </Grid>
        <div
          id="left-circle"
          className="absolute border border-secondary rounded-100  h-155 w-295 top-[-128px] left-[-169px] transform rotate-[62deg] overflow-hidden z-0"
        ></div>
        <div
          id="left-circle"
          className="absolute border border-secondary rounded-100  h-155 w-295 top-[-128px] left-[-169px] transform rotate-[10deg] overflow-hidden z-0"
        ></div>
        <div
          id="right-top-circle"
          className="absolute border border-secondary rounded-100 h-155 w-295 bottom-[-140px] right-[45px] transform rotate-[144deg] overflow-hidden z-0"
        ></div>
        <div
          id="right-bottom-circle"
          className="absolute border border-secondary rounded-100 h-155 w-295 bottom-[-140px] right-[45px] transform rotate-3 overflow-hidden z-0"
        ></div>
      </DevBlogSection>
      {/* <DevBlogSection className="">
        <Flex className="flex-col items-center justify-start">
          <div>
            <Heading level={2} className="text-center">
              Showcase
            </Heading>
            <DevBlogSubTitle className="">
              Embark on a journey exploring a world of top-notch web development
              projects featuring NX Monorepo, Next.js, React.js, and UI.
            </DevBlogSubTitle>
          </div>
        </Flex>
      </DevBlogSection> */}
      {/* <DevBlogSection className="">
        <div>
          <div className="space-y-6">
            <Flex className="flex-col justify-center">
              <Heading level={2} className="text-center">
                Revolutionizing Web Dev
              </Heading>
            </Flex>
            <div>
              <DevBlogSubTitle className="flex-col justify-start">
                Gear up for groundbreaking projects utilizing NX Monorepo,
                Next.js, and React.js integration to create modular and scalable
                codebases.
              </DevBlogSubTitle>
              <Flex className="mt-6 space-y-2 flex-col">
                <Heading level={3} className="text-left pb-2">
                  362
                </Heading>
                <Text className="text-left">Happy Clients</Text>
                <Heading level={3} className="text-left pb-2">
                  126
                </Heading>
                <Text className="text-left">Astounding Projects</Text>
                <Heading level={3} className="text-left pb-2">
                  99.7
                </Heading>
                <Text className="text-left">Success Rate</Text>
              </Flex>
            </div>
          </div>
        </div>
      </DevBlogSection> */}
      <DevBlogSection className="">
        <Flex className="flex-col justify-start flex-shrink-0 transform-none">
          <Heading level={2} className="text-left">
            Highlighted Projects
          </Heading>
          <Grid className="grid-cols-1 lg:grid-cols-3 relative gap-12">
            {projectsData.map((project, index) => (
              <DevBlogHighlightedProject
                key={`project ${index}`}
                project={project}
              />
            ))}
          </Grid>
        </Flex>
      </DevBlogSection>
      {/* <DevBlogSection className="">
        <div className="bg-gray-900 p-10">
          <Grid className="grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-5 rounded-md">
              <div
                className="w-full h-64 bg-center bg-cover rounded-t-md"
                style={{
                  backgroundImage: `url(
                    https://framerusercontent.com/images/mqjZUMwI5vwxD6Vw7Q7IavHW7Fg.jpg?scale-down-to=512
                  )`,
                }}
              ></div>
              <Heading level={3} className="text-white">
                Frankly, I’ve never seen more impressive work in web
                development. These projects are absolutely mind-blowing.
              </Heading>
              <Text className="text-center text-white">Samantha Smith</Text>
            </div>

            <div className="bg-gray-800 p-5 rounded-md">
              <div
                className="w-full h-64 bg-center bg-cover rounded-t-md"
                style={{
                  backgroundImage: `url(
                    https://framerusercontent.com/images/AsH6Ju49a4D9586br57cczPXI.jpg?scale-down-to=512
                  )`,
                }}
              ></div>
              <Heading level={3} className="text-white mt-4 mb-2">
                The combination of NX Monorepo, Next.js, and React.js lets my
                team build projects like never before!
              </Heading>
              <Text className="text-center text-white">Lucas Johnson</Text>
            </div>

            <div className="bg-gray-800 p-5 rounded-md">
              <div
                className="w-full h-64 bg-center bg-cover rounded-t-md"
                style={{
                  backgroundImage: `url(
                    https://framerusercontent.com/images/XTFrcWInzeF8NXmDlSsA5wgQjYY.jpg?scale-down-to=512'
                  )`,
                }}
              ></div>
              <Heading level={3} className="text-white">
                I can’t even begin to express my gratitude for these incredible
                resources. Bring on the revolution!
              </Heading>
              <Text className="text-center text-white">Alexander Park</Text>
            </div>
          </Grid>
        </div>
      </DevBlogSection> */}
      {/* <DevBlogSection className="">
        <Flex className="flex-col items-center space-y-6">
          <Heading level={2} className="text-center">
            Get Started
          </Heading>

          <p className="text-center">
            Ready to transform your web development process and create
            awe-inspiring projects? Don’t hesitate, join the revolution now!
          </p>

          <Button className="btn-primary">Launch Your Project</Button>

          <div className="rotate-[-124deg]"></div>
          <div className="rotate-[-26deg]"></div>
        </Flex>
      </DevBlogSection> */}
    </DevBlogLayout>
  );
}

export default Index;
