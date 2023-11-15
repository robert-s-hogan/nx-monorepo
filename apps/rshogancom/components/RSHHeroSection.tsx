import { Heading, Button } from '@with-nx/react-ui';
import RSHSection from '../components/RSHSection';

const RSHHeroSection = () => {
  return (
    <RSHSection fullWidth>
      <div className="light-gradient py-28">
        <div className="container max-w-3xl mx-auto flex flex-col items-center justify-center space-y-4 text-center">
          <Heading level={1}>Empowering Your Digital Presence</Heading>
          <Heading level={2}>
            Tailored web solutions and creative digital products at your
            fingertips
          </Heading>
          {/* Uncomment if you want to use the button */}
          {/* <Button className="btn-primary">Discover More</Button> */}
        </div>
      </div>
    </RSHSection>
  );
};

export default RSHHeroSection;
