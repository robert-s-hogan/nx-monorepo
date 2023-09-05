import { useRouter } from 'next/router';
import { getPostData, getAllPostIds } from '../../../../_articles';
import DevBlogLayout from '../../components/DevBlogLayout';
import Image from 'next/image';

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
      <article className="space-y-8 px-4">
        <h1>{postData.title}</h1>
        <div
          className="space-y-6"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        {postData.image && (
          <div>
            <Image
              src={postData.image}
              alt={`Image for ${postData.title}`}
              width={600}
              height={400}
            />
          </div>
        )}
      </article>
    </DevBlogLayout>
  );
}
