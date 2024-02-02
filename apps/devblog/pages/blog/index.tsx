import Link from 'next/link';
import DevBlogLayout from '../../components/DevBlogLayout';

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
  console.log('Posts:', posts); // Add this line

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
      <section className="container mx-auto max-w-7xl space-y-6 px-4">
        <h1 className="font-bold">Digital Garden</h1>
        <p className="text-center">
          A collection of topics, notes, and half-baked explorations I'm always
          tending to.
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPostsData.map(({ id, date, title, categories }) => (
            <div
              key={id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-2xl"
            >
              <Link href={`/blog/${id}`}>
                <p className="">{title}</p>
              </Link>
              <div className="flex items-center space-x-4 mt-4">
                <p className="text-sm">{categories.join(', ')}</p>
                <p className="text-sm">{date}</p>
              </div>
            </div>
          ))}
        </section>
      </section>
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
