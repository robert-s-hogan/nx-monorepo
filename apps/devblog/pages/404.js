import { Heading, Text } from '@with-nx/generic-ui/';
import Link from 'next/link';

import Layout from '../components/DevBlogLayout';
import DevBlogSection from '../components/DevBlogSection';

const devBlogLinks = [
  { id: 'home', text: 'Home', href: '/' },
  { id: 'blog', text: 'Blog', href: '/blog' },
  { id: 'about', text: 'About', href: '/about' },
  { id: 'contact', text: 'Contact', href: '/contact' },
];

export default function Custom404() {
  return (
    <Layout>
      <DevBlogSection>
        <Heading level={1} text="404 - Page Not Found" />
        <Text text="Oops! The page you're looking for doesn't seem to exist." />
        <Text text="Maybe you were looking for one of these:" />
        <ul>
          {devBlogLinks.map((item) => (
            <li key={item.id}>
              {item.href ? (
                <Link href={item.href}>{item.text}</Link>
              ) : (
                <Text text={item.text} />
              )}
            </li>
          ))}
        </ul>
      </DevBlogSection>
    </Layout>
  );
}
