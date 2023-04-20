import DevBlogLayout from '../../components/layout/DevBlogLayout';
import { getSortedPostsData } from '../../../../_articles';
import blogStyles from './blog.module.css';
import Link from 'next/link';

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
              <div key={id} className={`${blogStyles.gridItem} card`}>
                <Link href={`/blog/${id}`} className="no-underline">
                  <p className={`${categoryClassNames} ${blogStyles.category}`}>
                    {categories}
                  </p>
                  <p className={`${blogStyles.date}`}>{date}</p>
                  <p className={`${blogStyles.title} card-title`}>{title}</p>
                </Link>
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
    case 'React':
      return 'react';
    case 'Journal':
      return 'journal';
    default:
      return 'text-black';
  }
}
