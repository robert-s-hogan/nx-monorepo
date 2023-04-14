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
      <section className="space-y-4">
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
              <div key={id} className={blogStyles.gridItem}>
                <a href={`/blog/${id}`}>
                  <p className={`${categoryClassNames} ${blogStyles.category}`}>
                    {categories}
                  </p>
                  <p className={blogStyles.date}>{date}</p>
                  <p className={blogStyles.title}>{title}</p>
                </a>
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
      return 'bg-white';
  }
}
