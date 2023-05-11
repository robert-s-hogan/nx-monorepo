import ChilloutLayout from '../components/ChilloutLayout';
// import { OrderSummary } from '@with-nx/simple-ui/organisms';
import React, { useState, useEffect } from 'react';
import { useModal } from '@with-nx/react-hooks';
// import { useAuth } from '@with-nx/auth';
// import { useDisclosure } from '@chakra-ui/react';
import useShoppingCart from '../hooks/useShoppingCart';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';

//components
import MyCart from '../components/MyCart';
import EnterYourDetails from '../components/EnterYourDetails';
import CheckoutForm from '../components/CheckoutForm';
import ChilloutModal from '../components/ChilloutModal';
import OrderSummary from '../components/OrderSummary';

export interface CheckoutPageFormData {
  showTitle: string;
  organizationName: string;
  firstPerformance: string;
  lastPerformance: string;
  licensorCode: number;
  additionalWeeks: number;
  salesOrderNumber: string;
}

export const initialItems = [
  {
    id: 1,
    productId: 1,
    details: {
      title: 'title one',
      organization: 'org one',
      first_performance_date: '2021-10-10',
      last_performance_date: '2021-10-10',
      access_code: 'access code one',
    },
  },
  {
    id: 2,
    productId: 2,
    details: {
      title: 'title two',
      organization: 'org two',
      first_performance_date: '2021-10-10',
      last_performance_date: '2021-10-10',
      access_code: 'access code two',
    },
  },
  {
    id: 3,
    productId: 3,
    details: {
      title: 'title three',
      organization: 'org three',
      first_performance_date: '2021-10-10',
      last_performance_date: '2021-10-10',
      access_code: 'access code three',
    },
  },
];

export default function Page() {
  const { isShowing, toggle } = useModal();
  const [modalType, setModalType] = useState(null);
  const { step, setStepValue } = useShoppingCart();
  const [formValid, setFormValid] = useState(false);

  const canProgress = (step === 1 && formValid) || (step === 2 && formValid);

  const [cartItems, setCartItems] = useState(initialItems);
  // const handleApplyAllChange = (
  //   id: number,
  //   productId: number,
  //   details: {
  //     title: string;
  //     organization: string;
  //     first_performance_date: string;
  //     last_performance_date: string;
  //     access_code: string;
  //   }
  // ) => {
  //   const newItem = id;
  //   let newCartItems;

  //   if (newItem.id === id.id) {
  //     newCartItems = cartItems.map((item) => {
  //       if (item.id !== newItem.id) {
  //         return { ...newItem };
  //       } else {
  //         return initialItems;
  //       }
  //     });
  //   } else {
  //     newCartItems = initialItems;
  //   }
  //   setCartItems(newCartItems);
  // };
  //Can pay logic
  const canPay = step === 2 && formValid;
  const [formData, setFormData] = useState({
    showTitle: '',
    organizationName: '',
    firstPerformance: '',
    lastPerformance: '',
    licensorCode: null,
    additionalWeeks: 0,
    salesOrderNumber: '',
  });

  useEffect(() => {
    console.log('formData', formData);
  }, [formData]);

  const createProduction = async (productionData: any) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        showTitle: formData.showTitle,
        organizationName: formData.organizationName,
        firstPerformance: formData.firstPerformance,
        lastPerformance: formData.lastPerformance,
        // salesOrderNumber: formData.salesOrderNumber,
        additionalWeeks: formData.additionalWeeks,
      }),
    };
    const response = await fetch(
      'http://localhost:3000/ecommerce/shopping-carts/productions',
      options
    );
    const result = await response.json();
    console.log(result);
  };
  const handleFormValidationStatus = (isValid, source) => {
    setFormValid(isValid);
  };

  /* set onprogress to true and set step to 2 */
  const handleProgress = () => {
    setStepValue(step + 1);
  };

  const handlePayByCardPress = async () => {
    await createProduction(formData);
    setModalType('card');
    toggle();
  };

  const handlePayByPurchaseOrderPress = async () => {
    await createProduction(formData);
    setModalType('purchaseOrder');
    toggle();
  };

  return (
    <ChilloutLayout>
      <div className="w-full py-48 c:?background">
        <div className="container mx-auto">
          <Grid className="grid-cols-1 md:grid-cols-4">
            <div className="col-span-1 md:col-span-3">
              {step === 1 && (
                <MyCart
                  onValidationStatusChange={(isValid) =>
                    handleFormValidationStatus(isValid, 'MyCart')
                  }
                  formData={formData}
                  setFormData={setFormData}
                  onCreateProduction={createProduction}
                />
              )}
              {step === 2 && (
                <EnterYourDetails
                  onValidationStatusChange={(isValid) =>
                    handleFormValidationStatus(isValid, 'EnterYourDetails')
                  }
                />
              )}
            </div>
            <OrderSummary
              canProgress={canProgress}
              onContinuePress={handleProgress}
              canPay={canPay}
              // onClick={handleProgress}
              // subtotal={{ products: '$850.00', license: '$900.00' }}
              // total="$850.00"
              // step={step === 2 ? 'pay' : 'continue'}
              // onApplyToAllPress={onApplyToAllPress}
              // onPayByCardPress={handlePayByCardPress}
              // onUploadPurchaseOrderPress={handlePayByPurchaseOrderPress}
            />
          </Grid>
        </div>
      </div>
      <ChilloutModal isShowing={isShowing} toggle={toggle} title="Checkout">
        {modalType === 'card' && <CheckoutForm />}
      </ChilloutModal>
    </ChilloutLayout>
  );
}
