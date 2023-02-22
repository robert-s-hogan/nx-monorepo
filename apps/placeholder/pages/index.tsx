import PlaceholderLayout from '../components/layout/PlaceholderLayout';
import { useState } from 'react';
import { Hero, Stepper } from '@with-nx/react-ui';
import { FiMinus, FiPlus } from 'react-icons/fi';

function Index() {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };
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

      <Stepper
        value={quantity}
        onValueChange={handleQuantityChange}
        minusIcon={<FiMinus />}
        plusIcon={<FiPlus />}
      />
    </PlaceholderLayout>
  );
}

export default Index;
