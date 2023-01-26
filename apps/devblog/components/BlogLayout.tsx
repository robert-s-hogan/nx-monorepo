import { Navbar } from '@with-nx/react-ui';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import Logo from './rsh_logo_Crop.jpg';

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
];

const logo = <Image src={Logo} height={50} width={50} alt="Logo" />;

const Footer = dynamic(() => import('./layout/Footer'), { ssr: false });

const RenderNavbar = () => {
  return (
    <>
      <Navbar
        className="flex justify-between container max-w-4xl mx-auto py-2"
        links={links}
        logo={logo}
        isOpen={true}
      />
    </>
  );
};

const RenderLayout = ({ children, meta }) => {
  return (
    <div className="max-w-full bg-blue-700 text-white px-5">
      <RenderNavbar />
      {/* <div className="container mx-auto py-5 max-w-4xl">
        <Button className="bg-yellow-500 text-black px-3 py-2 rounded-lg">
          <a href="/blog">Back</a>
        </Button>
      </div> */}
      <div className="container mx-auto max-w-4xl py-12">
        <div className="space-y-4">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

const Layout = ({ children, meta }) => {
  return <RenderLayout meta={meta}>{children}</RenderLayout>;
};

export default Layout;
