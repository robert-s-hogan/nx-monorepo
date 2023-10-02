import Head from 'next/head';
import { SeoProps } from '@with-nx/types';

export function Seo(props: SeoProps) {
  const { title, description, faviconPath } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <link rel="icon" type="image/png" href={`${faviconPath}`} sizes="16x16" />
    </Head>
  );
}

export default Seo;
