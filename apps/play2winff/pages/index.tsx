import { Grid, Section } from '@with-nx/react-ui';
import { Button, Heading, Text } from '@with-nx/generic-ui';
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
          <Heading level={1} text="Play2Win Fantasy Football" />

          <Text
            className="text-2xl max-w-xl mx-auto"
            text="The ultimate platform for fantasy football insights, strategies,
                and real-time drafting tools."
          />
          <Link href="/draft">
            <Button className="mt-6" theme="primary" text="Start Drafting" />
          </Link>
        </div>
      </Section>

      <Section className="py-12 bg-secondary">
        <Heading level={2} className="text-center mb-8" text="Key Features" />

        <Grid className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-item flex flex-col items-center text-center">
            <div className="text-white">
              <FiBarChart size={48} />
            </div>
            <Text className="text-xl mt-4" text="Custom Rankings" />
            <Text
              text="Discover hidden gems and value players tailored to your
                  league."
            />
          </div>
          <div className="feature-item flex flex-col items-center text-center">
            <div className="text-white">
              <FiClock size={48} />
            </div>
            <Text className="text-xl mt-4" text="Real-Time Draft Tools" />
            <Text
              text="Stay updated on which players are taken, and adapt your
                  strategy on the fly."
            />
          </div>
          <div className="feature-item flex flex-col items-center text-center">
            <div className="text-white">
              <FiTag size={48} />
            </div>
            <Text className="text-xl mt-4" text="Custom Player Tags" />
            <Text
              text="Track injuries, falling values, rising stars, and your
                  personal targets all in one place."
            />
          </div>
        </Grid>
      </Section>

      <Section className="py-12 bg-gradient-to-b from-surface-color to-accent-color">
        <Text
          className="text-xl text-center mb-4"
          text="Ready to dominate your fantasy football draft?"
        />
        <div className="text-center">
          <Link href="/draft">
            <Button theme="primary" text="Start Now" />
          </Link>
        </div>
      </Section>
    </PlayToWinFFLayout>
  );
}

// Public: pure marketing content, no write actions on this page.
Index.isPublic = true;

export default Index;
