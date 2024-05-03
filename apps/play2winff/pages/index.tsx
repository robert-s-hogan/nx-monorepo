import { useState } from 'react';
import P2WDraftConfigModal from '../components/P2WDraftConfigModal';
import { useADPData } from '../hooks/useADPData';
import { Error, Grid, Loading, Section } from '@with-nx/react-ui';
import { Heading, Text } from '@with-nx/generic-ui';
import { Button } from '@with-nx/generic-ui';
import Link from 'next/link';
import { FiBarChart, FiClock, FiTag } from 'react-icons/fi';

import PlayToWinFFLayout from '../components/P2WFFLayout';
import useMergedData from '../hooks/useMergedData';

export function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [news, setNews] = useState([]);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const { adpPlayers, isADPLoading, isADPError } = useADPData();
  const { data: mergedData, isLoading, isError } = useMergedData();

  return (
    <PlayToWinFFLayout>
      {isADPLoading ? (
        !isADPError ? (
          <Loading timeout={3000} />
        ) : (
          <Error message="Failed to load ADP data." />
        )
      ) : (
        <>
          <P2WDraftConfigModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
          />

          <Section
            className="relative text-center space-y-8 h-[500px] flex justify-center items-center flex-col"
            style={{
              backgroundImage:
                `url('https://app-assets.vercel.app/apps/play2winff/p2w_hero.jpg')` ??
                'none',
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
                <Button
                  className="mt-6"
                  theme="primary"
                  text="Start Drafting"
                />
              </Link>
            </div>
          </Section>

          {/* <EspnNewsFeed /> */}

          {/* <Section className="pb-0">
          <PlayersWithHighVariability players={adpPlayers!} />
        </Section> */}

          <Section className="py-12 bg-secondary">
            <Heading
              level={2}
              className="text-center mb-8"
              text="Key Features"
            />

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

          {/* <Section className="py-12">
        <Heading level={2} className="text-center mb-8">
          The Play2WinFF Advantage
        </Heading>
        <Grid className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image
            src=""
            height={100}
            width={100}
            alt="Play2Win Fantasy Football Logo"
          />
          <div>
            <Text className="text-xl">Why We Stand Apart</Text>
            <p>
              With unique features tailored for both novices and fantasy
              football veterans, our platform ensures you have the edge in every
              draft.
            </p>
          </div>
        </Grid>
      </Section>

      <Section className="py-12 bg-gray-600">
        <Heading level={2} className="text-center mb-8">
          What Our Users Say
        </Heading>
        <Grid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-4 shadow-md bg-white">
            <p>"Testimonial from a happy user."</p>
            <Text className="text-xl mt-4">- User Name</Text>
          </div>
        </Grid>
      </Section>

      <Section className="py-12">
        <Heading level={2} className="text-center mb-8">
          Explore Our Tools
        </Heading>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <Image
              src=""
              height={100}
              width={100}
              alt="Play2Win Fantasy Football Logo"
            />
            <Text className="text-xl mt-4">Tool 1</Text>
            <p>Detailed description of the tool.</p>
          </div>
        </div>
      </Section> */}

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
        </>
      )}
    </PlayToWinFFLayout>
  );
}

export default Index;
