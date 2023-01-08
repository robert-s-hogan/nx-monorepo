import { Button } from '@with-nx/react-ui';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="logo">logo</div>
      <div className="menu">menu</div>
    </div>
  );
};

const RenderLayout = ({ children, meta }) => {
  return (
    <div className="max-w-full bg-blue-700 text-white h-screen px-5">
      <div className="container max-w-4xl mx-auto">
        <Navbar />
      </div>
      <div className="container mx-auto py-5">
        <Button className="bg-yellow-500 text-black px-3 py-2 rounded-lg">
          <a href="/blog">Back</a>
        </Button>
      </div>

      <div className="container mx-auto">
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
};

const Layout = ({ children, meta }) => {
  return <RenderLayout meta={meta}>{children}</RenderLayout>;
};

export default Layout;
