import Head from 'next/head';
import type { StaticImageData } from 'next/image';

/* eslint-disable-next-line */
export interface SeoProps {
  title: string;
  description: string;
  url: string;
  faviconPath: string | StaticImageData;
  image: string | StaticImageData;
  twitterHandle?: string;
  siteName?: string;
  appleTouchIconPath?: string;
  keywords?: string;
}

export function Seo(props: SeoProps) {
  const {
    title,
    description,
    url,
    faviconPath,
    image,
    twitterHandle,
    siteName,
    appleTouchIconPath,
    keywords,
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="keywords" content={keywords} />

      <link rel="icon" type="image/png" href={`${faviconPath}`} sizes="16x16" />
      <link rel="apple-touch-icon" href={`${appleTouchIconPath}`} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image as string} />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={image as string} />
      {twitterHandle && (
        <meta name="twitter:creator" content={`@${twitterHandle}`} />
      )}
    </Head>
  );
}

export default Seo;
