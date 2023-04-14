import { useRouter } from 'next/router';
import { getPostData, getAllPostIds } from '../../../../_articles';
import DevBlogLayout from '../../components/layout/DevBlogLayout';

export async function getStaticPaths() {
  const paths = getAllPostIds().map((id) => ({
    params: { slug: id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <DevBlogLayout>
      <article>
        <h1>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </DevBlogLayout>
  );
}
