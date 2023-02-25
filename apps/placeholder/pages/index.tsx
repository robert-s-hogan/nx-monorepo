import PlaceholderLayout from '../components/layout/PlaceholderLayout';
import { useState } from 'react';
import { Hero, Stepper, PageIndicator } from '@with-nx/react-ui';
import { FiMinus, FiPlus } from 'react-icons/fi';

function Index() {
  const [quantity, setQuantity] = useState(1);
  const [page, setPage] = useState(0);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };
  return (
    <PlaceholderLayout title="Home">
      <div className="space-y-12">
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

        <Stepper
          value={quantity}
          onValueChange={handleQuantityChange}
          minusIcon={<FiMinus />}
          plusIcon={<FiPlus />}
        />

        <div>
          <p>PageIndicator: @with-nx/react-ui</p>
          <PageIndicator page={page} total={15} className="bg-blue-500" />
        </div>
      </div>
    </PlaceholderLayout>
  );
}

export default Index;
