import axios from 'axios';
import Link from 'next/link';
import { Section } from '@with-nx/react-ui';
import { Heading } from '@with-nx/generic-ui';

import PlayToWinFFLayout from '../../components/P2WFFLayout';

export async function getServerSideProps() {
  const res = await axios.get(
    'https://public-api.wordpress.com/rest/v1.1/sites/playtowinff.wordpress.com/posts/'
  );
  const articles = res.data.posts;

  return {
    props: { articles },
  };
}

const ArticlesIndex = ({ articles }) => {
  return (
    <PlayToWinFFLayout>
      <Section className="py-12 bg-gray-600">
        <Heading level={1} text="Play2WinFF Articles" />
        <ul>
          {articles.map((article) => (
            <li className="text-white" key={article.ID}>
              <Link href={`/articles/${article.slug}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      </Section>
    </PlayToWinFFLayout>
  );
};

export default ArticlesIndex;
