import PlaceholderLayout from '../components/layout/PlaceholderLayout';
import { useState } from 'react';
import { Hero, Stepper, PageIndicator, MultiStepForm } from '@with-nx/react-ui';
import { FiMinus, FiPlus } from 'react-icons/fi';

function Index() {
  const [quantity, setQuantity] = useState(1);
  const [page, setPage] = useState(0);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const steps = [
    {
      name: 'Step 1',
      component: ({ data, onChange }) => (
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(event) => onChange('name', event.target.value)}
          />
        </div>
      ),
      validation: (data) => {
        return data?.name?.length > 0;
      },
    },

    {
      name: 'Step 2',
      component: ({ data, onChange }) => (
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(event) => onChange('email', event.target.value)}
          />
        </div>
      ),
      validation: (data) => {
        return data?.email?.length > 0;
      },
    },
    {
      name: 'Step 3',
      component: ({ data, onChange }) => (
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={(event) => onChange('phone', event.target.value)}
          />
        </div>
      ),
      validation: (data) => {
        return data?.phone?.length > 0;
      },
    },
  ];

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
      <div className="space-y-12 space-x-8">
        <Stepper
          value={quantity}
          onValueChange={handleQuantityChange}
          minusIcon={<FiMinus />}
          plusIcon={<FiPlus />}
        />

        <div className="space-y-8">
          <p>PageIndicator: @with-nx/react-ui</p>
          <PageIndicator page={page} total={15} className="bg-blue-500" />
        </div>

        <MultiStepForm steps={steps} onSubmit={onSubmit} />
      </div>
    </PlaceholderLayout>
  );
}

export default Index;
