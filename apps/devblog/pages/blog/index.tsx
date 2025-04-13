import Link from 'next/link';
import DevBlogLayout from '../../components/DevBlogLayout';
import { Section } from '@devblog/components';
import { Flex, Heading, Text } from '@with-nx/generic-ui';
// Define the base URL for your WordPress API
const WP_API_BASE_URL =
  'https://public-api.wordpress.com/wp/v2/sites/robertshogandev.wordpress.com';

// Function to fetch posts and map category IDs to names
export async function getSortedPostsData(slug?: string) {
  const categoriesRes = await fetch(`${WP_API_BASE_URL}/categories`);
  const categories = await categoriesRes.json();

  const categoryMap = categories.reduce((acc, category) => {
    acc[category.id] = category.name;
    return acc;
  }, {});

  let postsRes;
  if (slug) {
    postsRes = await fetch(`${WP_API_BASE_URL}/posts?slug=${slug}`);
  } else {
    postsRes = await fetch(`${WP_API_BASE_URL}/posts`);
  }
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

// Use getStaticProps to fetch posts at build time
export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <DevBlogLayout>
      <Section className="space-y-6">
        <Heading level={1} className="font-bold" text="Digital Garden" />
        <Text
          className="text-center"
          text="A collection of topics, notes, and half-baked explorations I'm always tending to."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-2 md:space-y-0">
          {allPostsData.map(({ id, date, title, categories }) => (
            <div key={id} className="p-4 rounded-md">
              <Link href={`/blog/${id}`}>
                <Text className="" text={title} />
              </Link>
              <Flex className="items-center space-x-4 mt-4 md:mt-0">
                <Text className="text-sm" text={categories.join(', ')} />
                <Text className="text-xs" text={date} />
              </Flex>
            </div>
          ))}
        </div>
      </Section>
    </DevBlogLayout>
  );
}

function getCategoryClassName(category) {
  switch (category) {
    case 'react.js':
      return 'text-react-js';
    case 'journal':
      return 'text-journal';
    case 'konva.js':
      return 'text-konva-js';
    case 'css':
      return 'text-css';
    case 'tailwindcss':
      return 'text-tailwindcss';
    case 'chakra-ui':
      return 'text-chakra-ui';
    case 'terminal':
      return 'text-terminal';
    case 'safari':
      return 'text-safari';
    case 'react-query':
      return 'text-react-query';
    case 'antd':
      return 'text-antd';
    case 'emotion':
      return 'text-emotion';
    case 'typescript':
      return 'text-typescript';
    case 'javascript':
      return 'text-javascript';
    default:
      return 'text-black';
  }
}
