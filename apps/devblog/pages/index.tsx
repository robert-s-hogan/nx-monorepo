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
// import Script from 'next/script';
import { useModal } from '@with-nx/react-hooks';
import { useTheme } from '@with-nx/theme';

import DevBlogLayout from '../components/DevBlogLayout';
import DevBlogSection from '../components/DevBlogSection';
import DevBlogSubTitle from '../components/DevBlogSubTitle';
import DevBlogHighlightedProject from '../components/DevBlogHighlightedProject';
import { projectsData } from '../data/projects';

const WP_API_BASE_URL =
  'https://public-api.wordpress.com/wp/v2/sites/robertshogandev.wordpress.com';

export async function getSortedPostsData() {
  const categoriesRes = await fetch(`${WP_API_BASE_URL}/categories`);
  const categories = await categoriesRes.json();

  const categoryMap = categories.reduce((acc, category) => {
    acc[category.id] = category.name;
    return acc;
  }, {});

  const postsRes = await fetch(`${WP_API_BASE_URL}/posts`);
  const posts = await postsRes.json();

  return posts.map((post) => ({
    id: post.slug,
    title: post.title.rendered,
    date: new Date(post.date).toLocaleDateString(),
    categories: post.categories.map(
      (categoryId) => categoryMap[categoryId] || 'Uncategorized'
    ),
  }));
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export function Index({ allPostsData }) {
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
          {/* <dialog open={isShowing} className="border border-primary">
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
          </dialog> */}
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

      <section className="container mx-auto max-w-7xl space-y-6 px-4">
        <h2 className="text-2xl font-bold">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPostsData.map(({ id, date, title, categories }) => (
            <div
              key={id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/blog/${id}`}>
                <p className="text-lg text-black font-semibold">
                  {title.replace(/&nbsp;/g, ' ')}
                </p>
              </Link>
              <div className="flex items-center space-x-4 mt-4">
                <p className="text-sm text-gray-600">{categories.join(', ')}</p>
                <p className="text-sm text-gray-500">{date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <DevBlogSection className="">
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
