import ChilloutLayout from '../components/ChilloutLayout';
import React, { useState, useEffect } from 'react';
import { useModal } from '@with-nx/react-hooks';
// import { useAuth } from '@with-nx/auth';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';
import { nextStep, previousStep } from '@with-nx/store/checkout';

//components
import MyCart from '../components/MyCart';
import EnterYourDetails from '../components/EnterYourDetails';
import CheckoutForm from '../components/CheckoutForm';
import ChilloutModal from '../components/ChilloutModal';
import OrderSummary from '../components/OrderSummary';

export default function Page() {
  const { isShowing, toggle } = useModal();
  const [modalType, setModalType] = useState(null);

  const [formValid, setFormValid] = useState(false);

  // const canProgress = (step === 1 && formValid) || (step === 2 && formValid);

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
  // const canPay = step === 2 && formValid;
  const [formData, setFormData] = useState({
    showTitle: '',
    organizationName: '',
    firstPerformance: '',
    lastPerformance: '',
    licensorCode: null,
    additionalWeeks: 0,
    salesOrderNumber: '',
  });

  // useEffect(() => {
  //   console.log('formData', formData);
  // }, [formData]);

  // const createProduction = async (productionData: any) => {
  //   const options = {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       showTitle: formData.showTitle,
  //       organizationName: formData.organizationName,
  //       firstPerformance: formData.firstPerformance,
  //       lastPerformance: formData.lastPerformance,
  //       // salesOrderNumber: formData.salesOrderNumber,
  //       additionalWeeks: formData.additionalWeeks,
  //     }),
  //   };
  //   const response = await fetch(
  //     'http://localhost:3000/ecommerce/shopping-carts/productions',
  //     options
  //   );
  //   const result = await response.json();
  //   console.log(result);
  // };
  // const handleFormValidationStatus = (isValid, source) => {
  //   setFormValid(isValid);
  // };

  // /* set onprogress to true and set step to 2 */
  // const handleProgress = () => {
  //   setStepValue(step + 1);
  // };

  // const handlePayByCardPress = async () => {
  //   await createProduction(formData);
  //   setModalType('card');
  //   toggle();
  // };

  // const handlePayByPurchaseOrderPress = async () => {
  //   await createProduction(formData);
  //   setModalType('purchaseOrder');
  //   toggle();
  // };

  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.checkout.step);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handleBack = () => {
    dispatch(previousStep());
  };

  let stepComponent;
  switch (step) {
    case 1:
      stepComponent = <MyCart cartItems={cartItems} />;
      break;
    case 2:
      stepComponent = <ShippingDetails />;
      break;
    case 3:
      stepComponent = <PaymentDetails />;
      break;
    default:
      stepComponent = <Confirmation />;
  }

  return (
    <ChilloutLayout>
      <div className="w-full py-12 c:?background">
        <div className="container mx-auto">
          <Grid className="grid-cols-1 md:grid-cols-4">
            <div className="col-span-1 md:col-span-3">{stepComponent}</div>
            <OrderSummary
              canProgress={true}
              // onContinuePress={true}
              canPay={true}
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
