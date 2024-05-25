import { cn } from '@with-nx/utils';

import { Button } from '@with-nx/react-ui';
import { Heading, Text } from '@with-nx/generic-ui';
import RSHSection from '../components/RSHSection';
import { Boxes } from './BackgroundBoxes';

const RSHHeroSection = () => {
  return (
    <RSHSection fullWidth>
      <div className="h-96 relative w-full overflow-hidden bg-surface-color flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <Heading
          level={1}
          className={cn('relative z-20')}
          text="Empowering Your Digital Presence"
        />
        <Text
          className="text-center mt-2 relative z-20"
          text="Tailored web solutions and creative digital products at your
          fingertips"
        />
      </div>
    </RSHSection>
  );
};

export default RSHHeroSection;
