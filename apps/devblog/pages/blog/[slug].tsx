import { useRouter } from 'next/router';
import { getPostData, getAllPostIds } from '../../../../_articles';
import DevBlogLayout from '../../components/layout/DevBlogLayout';
import Image from 'next/image';

export async function getStaticPaths() {
  const paths = getAllPostIds().map((id) => ({
    params: { slug: id },
  }));
  console.log(`paths`, paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(`params`, params);
  const postData = await getPostData(params.slug);
  console.log(`postData`, postData);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  const router = useRouter();
  console.log(`Post: postData`, postData);

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
        {postData.image && ( // Only render the image if postData.image exists
          <div>
            <Image
              src={postData.image}
              alt={`Image for ${postData.title}`}
              width={600} // Adjust the width and height as needed
              height={400}
            />
          </div>
        )}
      </article>
    </DevBlogLayout>
  );
}
