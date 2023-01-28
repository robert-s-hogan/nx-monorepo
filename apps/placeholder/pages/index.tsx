import Layout from '../components/layout/Layout';
import { Hero } from '@with-nx/react-ui/organisms';

function Index() {
  return (
    <Layout>
      <Hero
        title="Welcome to placeholder!"
        subtitle="This is a placeholder for your next project."
        backgroundImage="https://via.placeholder.com/1500"
        buttonClassName="btn-primary"
        buttonText="Get Started"
        buttonIcon={<span>👉</span>}
        onButtonClick={() => console.log('clicked')}
        className="h-max py-32 flex flex-col justify-center items-center text-white space-y-4"
      />
    </Layout>
  );
}

export default Index;
