import Link from 'next/link';
import { Flex } from '@with-nx/react-ui';

import DevBlogLayout from '../../components/layout/DevBlogLayout';
import { getSortedPostsData } from '../../../../_articles';
import blogStyles from './blog.module.css';

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
      <section className="space-y-4 px-4">
        <h1>Blog</h1>
        <p>
          A collection of topics, notes, and half-baked explorations Im always
          tending to.
        </p>
        <div className={blogStyles.grid}>
          {allPostsData.map(({ id, date, title, categories }) => {
            const categoryClassNames = categories
              .map((category) => getCategoryClassName(category))
              .join(' ');

            return (
              <div key={id} className={`${blogStyles.gridItem}`}>
                <Link href={`/blog/${id}.mdx`} className="no-underline">
                  <p className={`${blogStyles.title} card-title`}>{title}</p>
                </Link>
                <Flex className="items-center space-x-4">
                  <p className={`${categoryClassNames} ${blogStyles.category}`}>
                    {categories}
                  </p>
                  <p className={`${blogStyles.date}`}>{date}</p>
                </Flex>
              </div>
            );
          })}
        </div>
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
