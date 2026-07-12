import HogansHero from '../components/HogansHero';
import TheHogansLayout from '../components/TheHogansLayout';

export default function Home() {
  return (
    <TheHogansLayout title="The Hogans 2.0" hideNavBar>
      <HogansHero />
    </TheHogansLayout>
  );
}
