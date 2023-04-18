import dynamic from 'next/dynamic';
import { PageLayout } from '@with-nx/react-ui';
import { useRouter } from 'next/router';
import { Seo } from '@with-nx/nextjs-react-ui';

import ChilloutHeader from './ChilloutHeader';

const ChilloutFooter = dynamic(() => import('./ChilloutFooter'), {
  ssr: false,
});

interface ChilloutLayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  hideNavBar?: boolean;
}

const ChilloutLayout: React.FC<ChilloutLayoutProps> = ({
  children,
  className = '',
  title,
  description,
  hideNavBar: hideNavBarProp,
}: ChilloutLayoutProps) => {
  const router = useRouter();
  const asPath = router.asPath;
  const hideMaxWidth7xl = asPath.includes('projects/dnd-interactive-map');
  return (
    <PageLayout
      className={`w-full min-h-screen ${className}`}
      header={hideNavBarProp ? '' : <ChilloutHeader />}
      footer={<ChilloutFooter />}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        id="myVideo"
        className="h-screen w-full object-cover absolute -z-10"
      >
        <source src="/landing-video.mp4" type="video/mp4" />
      </video>
      <Seo
        title={title ? title : 'Portfolio | Robert Hogan'}
        description={
          description
            ? description
            : 'Explore Robert Hogans portfolio as a Front End UI/UX Engineer, showcasing his expertise in creating innovative web solutions with cutting-edge technologies like Vercel, NX, and Next.js. Discover his featured projects, including an interactive map, memory game, and more.'
        }
        url="https://www.roberthogan.dev/"
        faviconPath="/favicon.ico"
        image="/images/portrait.jpg"
        twitterHandle="@robert_s_hogan"
        siteName="Robert Hogans Portfolio"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="Robert Hogan, Portfolio, Front End UI/UX Engineer, Vercel, NX, Next.js, featured projects, private NX monorepo, Star Wars API Pagination, interactive map, Memory Game, Game of Concentration, vanilla javascript, web development, web solutions."
      />
      <div
        className={`container mx-auto ${
          hideMaxWidth7xl ? 'max-w-full' : 'max-w-7xl'
        } selection:bg-primary ${className}`}
      >
        {children}
      </div>
    </PageLayout>
  );
};

export default ChilloutLayout;
