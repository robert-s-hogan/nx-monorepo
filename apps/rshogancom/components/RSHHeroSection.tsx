import { cn } from '@with-nx/utils';

import { Button } from '@with-nx/react-ui';
import { Heading, Text } from '@with-nx/generic-ui';
import RSHSection from '../components/RSHSection';
import { RSHBackgroundBoxes } from './RSHBackgroundBoxes';

const RSHHeroSection = () => {
  return (
    <RSHSection fullWidth className="!py-0">
      <div className="h-96 relative w-full overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-surface-color z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <RSHBackgroundBoxes />
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
