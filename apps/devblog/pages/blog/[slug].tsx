import { useRouter } from 'next/router';
import DevBlogLayout from '../../components/DevBlogLayout';
import DevBlogSection from '../../components/DevBlogSection';
import Image from 'next/image';

const WP_API_BASE_URL =
  'https://public-api.wordpress.com/wp/v2/sites/robertshogandev.wordpress.com';

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

  return posts.map((post) => ({
    id: post.slug,
    title: post.title.rendered,
    date: new Date(post.date).toLocaleDateString(),
    contentHtml: post.content.rendered, // Ensure this is the correct path to the post content
    categories: post.categories.map(
      (categoryId) => categoryMap[categoryId] || 'Uncategorized'
    ),
  }));
}

export async function getStaticPaths() {
  const posts = await getSortedPostsData(); // Fetch all posts to generate paths
  const paths = posts.map((post) => ({
    params: { slug: post.id },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const postData = await getSortedPostsData(params.slug);
  const post = postData[0]; // Assuming getSortedPostsData returns an array

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <DevBlogLayout>
      <DevBlogSection className="space-y-6">
        <article className="space-y-8 px-4">
          <h1>{post.title}</h1>
          <div
            className="space-y-6"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </DevBlogSection>
    </DevBlogLayout>
  );
}
