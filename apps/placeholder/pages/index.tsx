import PlaceholderLayout from '../components/layout/PlaceholderLayout';
import { useState } from 'react';
import { Hero, Stepper, PageIndicator, MultiStepForm } from '@with-nx/react-ui';
import { Card, ImageCarousel } from '@with-nx/react-tailwind-ui';
import { FiMinus, FiPlus, FiCheck } from 'react-icons/fi';

function Index() {
  const [quantity, setQuantity] = useState(1);
  const [page, setPage] = useState(0);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const availableProjectors = [
    {
      name: 'Projector 1',
      price: 100,
      image: 'https://picsum.photos/200/300',
    },
    {
      name: 'Projector 2',
      price: 200,
      image: 'https://picsum.photos/200/300',
    },
    {
      name: 'Projector 3',
      price: 300,
      image: 'https://picsum.photos/200/300',
    },
  ];

  const steps = [
    {
      name: 'rentalStartDate',
      component: ({ data, onChange }) => (
        <div className="flex flex-col space-y-4">
          <label htmlFor="rental-start-date" className="block">
            Rental Start Date
          </label>
          <input
            className="input"
            id="rental-start-date"
            type="date"
            value={data.rentalStartDate}
            onChange={(event) =>
              onChange('rentalStartDate', event.target.value)
            }
          />
        </div>
      ),
      validation: (data) => {
        return data?.rentalStartDate?.length > 0;
      },
    },

    {
      name: 'rentalEndDate',
      component: ({ data, onChange }) => (
        <div className="flex flex-col space-y-4">
          <label htmlFor="rental-end-date">Rental End Date</label>
          <input
            className="input"
            id="rental-end-date"
            type="date"
            value={data.rentalEndDate}
            onChange={(event) => onChange('rentalEndDate', event.target.value)}
          />
        </div>
      ),
      validation: (data) => {
        return data?.rentalEndDate?.length > 0;
      },
    },
    {
      name: 'availableProjectors',
      component: ({ data, onChange }) => (
        <div className="flex flex-col space-y-4">
          <label htmlFor="availableProjectors">Available Projectors</label>
          <select
            id="availableProjectors"
            onChange={(event) =>
              onChange('availableProjectors', event.target.value)
            }
          >
            <option value="">Select a projector</option>
            {availableProjectors.map((projector) => (
              <option key={projector.name} value={projector.name}>
                {projector.name}
              </option>
            ))}
          </select>
        </div>
      ),
      validation: (data) => {
        return data?.availableProjectors?.length > 0;
      },
    },
    {
      name: 'uploadYourDocuments',
      component: ({ data, onChange }) => (
        <div className="flex flex-col space-y-4">
          <label htmlFor="uploadCoi">COI (Optional)</label>
          <input
            className="input"
            id="uploadCoi"
            type="file"
            onChange={(event) => onChange('uploadCoi', event.target.value)}
          />
          <label htmlFor="uploadDL">Drivers License (Optional)</label>
          <input
            className="input"
            id="uploadDL"
            type="file"
            onChange={(event) => onChange('uploadDL', event.target.value)}
          />
        </div>
      ),
      validation: (data) => {
        return true;
      },
    },
    {
      name: 'whatIsYourAddress',
      component: ({ data, onChange }) => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-2">
            <label htmlFor="firstName" className="block">
              First Name
            </label>
            <input
              className="input"
              id="firstName"
              type="text"
              value={data.firstName}
              onChange={(event) => onChange('firstName', event.target.value)}
            />
          </div>
          <div className="lg:col-span-2">
            <label htmlFor="lastName" className="block">
              Last Name
            </label>
            <input
              className="input"
              id="lastName"
              type="text"
              value={data.lastName}
              onChange={(event) => onChange('lastName', event.target.value)}
            />
          </div>

          <div className="lg:col-span-2">
            {' '}
            <label htmlFor="companyName" className="block">
              Company Name (Optional)
            </label>
            <input
              className="input"
              id="companyName"
              type="text"
              value={data.companyName}
              onChange={(event) => onChange('companyName', event.target.value)}
            />
          </div>

          <div className="lg:col-span-2">
            {' '}
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              className="input"
              id="email"
              type="email"
              value={data.email}
              onChange={(event) => onChange('email', event.target.value)}
            />
          </div>

          <div className="md:col-span-2 lg:col-span-4">
            <label htmlFor="streetAddress" className="block">
              Street Address
            </label>
            <input
              className="input"
              id="streetAddress"
              type="text"
              value={data.streetAddress}
              onChange={(event) =>
                onChange('streetAddress', event.target.value)
              }
            />
          </div>

          <div className="">
            <label htmlFor="city" className="block">
              City
            </label>
            <input
              className="input"
              id="city"
              type="text"
              value={data.city}
              onChange={(event) => onChange('city', event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="state" className="block">
              State
            </label>
            <input
              className="input"
              id="state"
              type="text"
              value={data.state}
              onChange={(event) => onChange('state', event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="zipCode" className="block">
              Zip Code
            </label>
            <input
              className="input"
              id="zipCode"
              type="text"
              value={data.zipCode}
              onChange={(event) => onChange('zipCode', event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="country" className="block">
              Country
            </label>
            <input
              className="input"
              id="country"
              type="text"
              value={data.country}
              onChange={(event) => onChange('country', event.target.value)}
            />
          </div>
        </div>
      ),
      validation: (data) => {
        return (
          data?.firstName?.length > 0 &&
          data?.lastName?.length > 0 &&
          data?.companyName?.length > 0 &&
          data?.email?.length > 0 &&
          data?.streetAddress?.length > 0 &&
          data?.city?.length > 0 &&
          data?.state?.length > 0 &&
          data?.zipCode?.length > 0 &&
          data?.country?.length > 0
        );
      },
    },
    {
      name: 'confirmOrderDetails',
      component: ({ data, onChange }) => (
        <div className="flex flex-col">
          <div className="table">
            <div className="table-row">
              <div className="table-cell">Item</div>
              <div className="table-cell">Unit Price</div>
              <div className="table-cell">Total Price</div>
            </div>
            <div className="table-row">
              <div className="table-cell">Stage Projector Lite</div>
              <div className="table-cell">$100 x 4 weeks</div>
              <div className="table-cell">$400</div>
            </div>
            <div className="table-row">
              <div className="table-cell">Shipping</div>
              <div className="table-cell">$400</div>
              <div className="table-cell">$400</div>
            </div>
            <div className="table-row">
              <div className="table-cell">Rush Fee</div>
              <div className="table-cell">$400</div>
              <div className="table-cell">$400</div>
            </div>
            <div className="table-row">
              <div className="table-cell">Total</div>
              <div className="table-cell"></div>
              <div className="table-cell">$400</div>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="btn-primary">Pay With Card </button>
            or
            <button
              className="btn-primary"
              onClick={() => onChange('paymentMethod', 'purchaseOrder')}
            >
              Pay With Purchase Order
            </button>
          </div>
        </div>
      ),
      validation: (data) => {
        return true;
      },
    },
    {
      name: 'uploadDocuments',
      component: ({ data, onChange }) => (
        <div className="flex flex-col space-y-4">
          <label htmlFor="upload-documents" className="block">
            Upload Documents
          </label>
          <input
            id="upload-documents"
            type="file"
            onChange={(event) => onChange('documents', event.target.value)}
          />
          <div className="flex space-x-4">
            <button className="btn-success">Complete Order</button>
          </div>
        </div>
      ),
      validation: (data) => {
        return true;
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
      <div className="space-y-12 space-x-8 px-8">
        <div className="p-8 border border-red-500 space-y-4">
          <p>import Stepper from @with-nx/react-ui</p>
          <Stepper
            value={quantity}
            onValueChange={handleQuantityChange}
            minusIcon={<FiMinus />}
            plusIcon={<FiPlus />}
          />
        </div>

        <div className="p-8 border border-red-500 space-y-4">
          <p>import PageIndicator @with-nx/react-ui</p>
          <PageIndicator page={page} total={15} className="bg-red-500" />
        </div>

        <div className="p-8 border border-red-500 space-y-4">
          <p>import MultiStepForm @with-nx/react-ui</p>
          <MultiStepForm
            steps={steps}
            onSubmit={onSubmit}
            className=" bg-white text-black rounded pb-14"
            okayButtonIcon={<FiCheck />}
            showButtonStatus={[true, true, true, true, true, false, false]}
          />
        </div>

        <div className="p-8 border border-red-500 space-y-4">
          <p>import Card @with-nx/react-tailwind-ui</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="Card Title"
              description="Card description"
              image="https://via.placeholder.com/150"
              label="Label"
              price={100}
              discountedPrice={50}
            />
            <Card
              title="Card Title"
              description="Card description"
              image="https://via.placeholder.com/150"
              label="Label"
              price={100}
              discountedPrice={50}
            />
            <Card
              title="Card Title"
              description="Card description"
              image="https://via.placeholder.com/150"
              label="Label"
              price={100}
              discountedPrice={50}
            />
          </div>
        </div>

        <div className="p-8 border border-red-500 space-y-4">
          <p>import ImageCarousel @with-nx/react-tailwind-ui</p>
          <ImageCarousel
            images={[
              'https://via.placeholder.com/150',
              'https://via.placeholder.com/250',
              'https://via.placeholder.com/350',
            ]}
          />
        </div>
      </div>
    </PlaceholderLayout>
  );
}

export default Index;
