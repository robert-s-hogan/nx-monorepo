import {
  Button,
  Flex,
  Grid,
  Heading,
  Link,
  Section,
  Text,
} from '@with-nx/react-ui';
import { FiX } from 'react-icons/fi';
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
              <Heading level={1} className="text-center">
                Portfolio
              </Heading>
              <DevBlogSubTitle className="pt-8 mx-4">
                <span className="font-bold">Hello!</span> I'm{` `}
                <span className="font-bold">Robert Hogan </span>a seasoned
                Front-End&nbsp;&nbsp;
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block my-2 mr-3">
                  <span className="relative px-2 font-semibold">
                    UI Engineer
                  </span>
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
              <FiX className="h-5 w-5 ml-auto opacity-80" />
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
          className="absolute border border-secondary rounded-100  h-155 w-295 top-[-128px] lg:top-[-64px] left-[-169px] transform rotate-[62deg] overflow-hidden z-0"
        ></div>
        <div
          id="left-circle"
          className="absolute border border-secondary rounded-100  h-155 w-295 top-[-128px] lg:top-[-64px] left-[-169px] transform rotate-[10deg] overflow-hidden z-0"
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

      <DevBlogSection className="">
        <Flex className="flex-col justify-start flex-shrink-0 transform-none">
          <Heading level={2} className="text-left">
            Highlighted Projects
          </Heading>
          <Grid className="grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 relative gap-12">
            {projectsData.map((project, index) => {
              if (index < 3)
                return (
                  <DevBlogHighlightedProject
                    key={`project ${index}`}
                    project={project}
                  />
                );
            })}
          </Grid>
        </Flex>
      </DevBlogSection>

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
