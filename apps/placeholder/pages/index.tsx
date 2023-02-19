import PlaceholderLayout from '../components/layout/PlaceholderLayout';
import { Hero } from '@with-nx/react-ui';

function Index() {
  return (
    <PlaceholderLayout title="Home">
      <Hero
        title="Welcome to placeholder!"
        subtitle="This is a placeholder for your next project."
        // backgroundImage="https://via.placeholder.com/1500"
        buttonClassName="btn-primary"
        buttonText="Get Started"
        buttonIcon={<span>👉</span>}
        onButtonClick={() => console.log('clicked')}
        className="h-max py-32 flex flex-col justify-center items-center text-primary space-y-4 bg-hero"
      />
    </PlaceholderLayout>
  );
}

export default Index;
