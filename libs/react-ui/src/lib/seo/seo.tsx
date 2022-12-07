import Head from 'next/head';

/* eslint-disable-next-line */
export interface SeoProps {
  title: string;
  description: string;
  faviconPath?: string;
}

export function Seo(props: SeoProps) {
  const { title, description, faviconPath } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/png" href={`${faviconPath}`} sizes="16x16" />
    </Head>
  );
}

export default Seo;
