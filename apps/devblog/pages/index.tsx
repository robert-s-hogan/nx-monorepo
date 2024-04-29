import { Button, Flex, Grid, Link } from '@with-nx/react-ui';
import { useModal } from '@with-nx/react-hooks';
import { useTheme } from '@with-nx/theme';
import { Heading, Text } from '@with-nx/generic-ui';

import DevBlogLayout from '../components/DevBlogLayout';
import DevBlogSection from '../components/DevBlogSection';
import DevBlogHighlightedProject from '../components/DevBlogHighlightedProject';
import { projectsData } from '../data/projects';

const WP_API_BASE_URL =
  'https://public-api.wordpress.com/wp/v2/sites/robertshogandev.wordpress.com';

export async function getSortedPostsData() {
  const categoriesRes = await fetch(`${WP_API_BASE_URL}/categories`);
  const categories = await categoriesRes.json();

  const categoryMaText = categories.reduce((acc, category) => {
    acc[category.id] = category.name;
    return acc;
  }, {});

  const postsRes = await fetch(`${WP_API_BASE_URL}/posts`);
  const posts = await postsRes.json();

  return posts.map((post) => ({
    id: post.slug,
    title: post.title.rendered,
    date: new Date(post.date).toLocaleDateString(),
    categories: post.categories.map((categoryId) => categoryMaText[categoryId]),
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
              <Heading level={1} className="text-center" text="Portfolio" />

              <h2 className="pt-8 mx-4">
                👋 I'm Robert Hogan:
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block my-2 mr-1">
                  <span className="relative px-2 font-semibold">Front End</span>
                </span>{' '}
                Mastery to AI-Integrated Web Development
              </h2>

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
        <DevBlogSection className="">
          <Flex className="flex-col justify-start flex-shrink-0 transform-none">
            <Heading
              level={2}
              className="text-left"
              text="Highlighted Projects"
            />
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

      <section className="container mx-auto max-w-7xl space-y-4 px-4">
        <Heading level={2} className="text-2xl font-bold" text="Latest Posts" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-2">
          {allPostsData.map(({ id, date, title, categories }) => (
            <div key={id}>
              <Link href={`/blog/${id}`}>
                <Text
                  className="text-lg font-semibold mb-0"
                  text={title.replace(/&nbsp;/g, ' ')}
                />
              </Link>
              <div className="flex items-center space-x-4 mt-0">
                <Text className="text-sm" text={categories.join(', ')} />
                <Text className="text-sm" text={date} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </DevBlogLayout>
  );
}

export default Index;
