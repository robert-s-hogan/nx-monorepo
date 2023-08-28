import { useState, useEffect } from 'react';
import DraftConfigModal from '../components/DraftConfigModal';
import styles from './index.module.css';
import PlayersWithHighVariability from '../components/PlayersWithHighVariability';
import { useADPData } from '../hooks/useADPData';
import { Button, Grid, Heading, Section, Text } from '@with-nx/react-ui';
import Image from 'next/image';
import Link from 'next/link';
import { BarChart, Clock, Tag } from '@with-nx/icons';

import PlayToWinFFLayout from '../components/PlayToWinFFLayout';
import EspnNewsFeed from '../components/EspnNewsFeed';
import useMergedData from '../hooks/useMergedData';

export function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [news, setNews] = useState([]);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const { adpPlayers, isADPLoading, isADPError } = useADPData();
  const { data: mergedData, isLoading, isError } = useMergedData();

  if (isADPLoading) {
    return <div>Loading...</div>;
  }
  if (isADPError) return <div>An error occurred</div>;

  return (
    <PlayToWinFFLayout>
      <DraftConfigModal isOpen={isModalOpen} onClose={handleModalClose} />

      <Section
        className="relative text-center space-y-6 h-[500px] flex justify-center items-center flex-col"
        style={{
          backgroundImage:
            "url('https://rshogan.imgix.net/projects/play2winff/p2w_hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Optional: Add a dark overlay to increase text contrast */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Ensure this container is relative so content stacks over the overlay */}
        <div className="relative z-10">
          <Heading level={1} className="text-white">
            Play 2 Win Fantasy Football
          </Heading>
          <Text className="text-lg text-white max-w-xl mx-auto px-6">
            The ultimate platform for fantasy football insights, strategies, and
            real-time drafting tools.
          </Text>
          <Link href="/draft">
            <Button className="btn-primary mt-4">Quick Draft</Button>
          </Link>
        </div>
      </Section>

      {/* <EspnNewsFeed /> */}

      {/* <Section className="pb-0">
          <PlayersWithHighVariability players={adpPlayers!} />
        </Section> */}

      <Section className="py-12 bg-gray-600">
        <pre className="text-white">
          {JSON.stringify(mergedData?.length, null, 2)}
        </pre>
        <Heading level={2} className="text-center mb-8">
          Key Features
        </Heading>
        <Grid className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-item flex flex-col items-center text-center">
            <div className="text-white">
              <BarChart className="h-12" />
            </div>
            <Text className="text-xl mt-4">Custom Rankings</Text>
            <p>
              Discover hidden gems and value players tailored to your league.
            </p>
          </div>
          <div className="feature-item flex flex-col items-center text-center">
            <div className="text-white">
              <Clock className="h-12" />
            </div>
            <Text className="text-xl mt-4">Real-Time Draft Tool</Text>
            <p>
              Stay updated on which players are taken, and adapt your strategy
              on the fly.
            </p>
          </div>
          <div className="feature-item flex flex-col items-center text-center">
            <div className="text-white">
              <Tag className="h-12" />
            </div>
            <Text className="text-xl mt-4">Custom Player Tags</Text>
            <p>
              Track injuries, falling values, rising stars, and your personal
              targets all in one place.
            </p>
          </div>
        </Grid>
      </Section>

      {/* <Section className="py-12">
        <Heading level={2} className="text-center mb-8">
          The Play2WinFF Advantage
        </Heading>
        <Grid className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image
            src="https://rshogan.imgix.net/projects/play2winff/play2winff_logo_nobg.png"
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
              src="https://rshogan.imgix.net/projects/play2winff/play2winff_logo_nobg.png"
              height={100}
              width={100}
              alt="Play2Win Fantasy Football Logo"
            />
            <Text className="text-xl mt-4">Tool 1</Text>
            <p>Detailed description of the tool.</p>
          </div>
        </div>
      </Section> */}

      <Section className="py-12 bg-gradient-to-b from-rich-black to-black-custom">
        <Text className="text-xl text-center mb-4">
          Ready to dominate your fantasy football draft?
        </Text>
        <div className="text-center">
          <Link href="/draft">
            <Button className="btn-primary">Start Now</Button>
          </Link>
        </div>
      </Section>
    </PlayToWinFFLayout>
  );
}

export default Index;
