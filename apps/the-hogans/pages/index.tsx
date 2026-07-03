import FamilyImageWithNames from '../components/FamilyImageWithNames';
import TheHogansLayout from '../components/TheHogansLayout';

export default function Home() {
  return (
    <TheHogansLayout title="The Hogans 2.0">
      <div className="w-full px-4">
        <div className="my-8 lg:max-w-4xl mx-auto space-y-4">
          <div className="grid grid-col-1 md:gap-4">
            <FamilyImageWithNames className="md:col-span-2" />
          </div>
        </div>
      </div>
    </TheHogansLayout>
  );
}
