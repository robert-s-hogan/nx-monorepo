import { Button, Grid, Heading, Section, Text } from '@with-nx/react-ui';
import Link from 'next/link';
import { FiBarChart, FiClock, FiTag } from 'react-icons/fi';

import PlayToWinFFLayout from '../components/P2WFFLayout';

export function Index() {
  return (
    <PlayToWinFFLayout>
      <Section
        className="relative text-center space-y-8 h-[500px] flex justify-center items-center flex-col"
        style={{
          backgroundImage:
            "url('/p2w_hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-bg-opacity-color opacity-50"></div>

        <div className="relative z-10">
          <Heading level={1}>Play2Win Fantasy Football</Heading>

          <Text className="text-2xl max-w-xl mx-auto">
            The ultimate platform for fantasy football insights, strategies,
            and real-time drafting tools.
          </Text>
          <Link href="/draft">
            <Button className="mt-6 bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded font-medium">
              Start Drafting
            </Button>
          </Link>
        </div>
      </Section>

      <Section className="py-12 bg-secondary">
        <Heading level={2} className="text-center mb-8">
          Key Features
        </Heading>

        <Grid className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-item flex flex-col items-center text-center">
            <div className="text-white">
              <FiBarChart size={48} />
            </div>
            <Text className="text-xl mt-4">Custom Rankings</Text>
            <Text>
              Discover hidden gems and value players tailored to your league.
            </Text>
          </div>
          <div className="feature-item flex flex-col items-center text-center">
            <div className="text-white">
              <FiClock size={48} />
            </div>
            <Text className="text-xl mt-4">Real-Time Draft Tools</Text>
            <Text>
              Stay updated on which players are taken, and adapt your
              strategy on the fly.
            </Text>
          </div>
          <div className="feature-item flex flex-col items-center text-center">
            <div className="text-white">
              <FiTag size={48} />
            </div>
            <Text className="text-xl mt-4">Custom Player Tags</Text>
            <Text>
              Track injuries, falling values, rising stars, and your personal
              targets all in one place.
            </Text>
          </div>
        </Grid>
      </Section>

      <Section className="py-12 bg-gradient-to-b from-surface-color to-accent-color">
        <Text className="text-xl text-center mb-4">
          Ready to dominate your fantasy football draft?
        </Text>
        <div className="text-center">
          <Link href="/draft">
            <Button variant="primary">Start Now</Button>
          </Link>
        </div>
      </Section>
    </PlayToWinFFLayout>
  );
}

// Public: pure marketing content, no write actions on this page.
Index.isPublic = true;

export default Index;
