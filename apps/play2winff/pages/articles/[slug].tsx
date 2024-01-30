// pages/articles/[slug].js

import axios from 'axios';
import { Heading, Section } from '@with-nx/react-ui';

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const res = await axios.get(
    `https://public-api.wordpress.com/rest/v1.1/sites/playtowinff.wordpress.com/posts/slug:${slug}`
  );
  const article = res.data;

  return {
    props: { article }, // will be passed to the page component as props
  };
}

const Article = ({ article }) => {
  return (
    <Section className="py-32">
      <Heading level={1}>{article.title}</Heading>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </Section>
  );
};

export default Article;
