// pages/articles/[slug].js

import axios from 'axios';

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
    <div>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default Article;
