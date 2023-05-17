import ChilloutLayout from '../components/ChilloutLayout';
import React, { useState, useEffect } from 'react';
import { useModal } from '@with-nx/react-hooks';
import { RootState } from '@with-nx/store';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Flex, Grid, Heading, Text, Section } from '@with-nx/react-ui';
import Image from 'next/image';
import { nextStep, previousStep } from '@with-nx/store/checkout';
import { setFormValid } from '@with-nx/store/form';

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
  const isFormComplete = useSelector((state: RootState) => state.form.isValid);
  const handleFormValidationStatusChange = (isValid: boolean) => {
    setFormValid(isValid);
  };

  const [formData, setFormData] = useState({
    showTitle: '',
    organizationName: '',
    firstPerformance: '',
    lastPerformance: '',
    licensorCode: null,
    additionalWeeks: 0,
    salesOrderNumber: '',
  });

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
      stepComponent = (
        <EnterYourDetails
          isFormComplete={isFormComplete}
          onValidationStatusChange={handleFormValidationStatusChange}
        />
      );
      break;
    // case 3:
    //   stepComponent = <PaymentDetails />;
    //   break;
    default:
      return null;
  }

  return (
    <ChilloutLayout>
      <div className="w-full py-12">
        <div className="container mx-auto">
          <Grid className="grid-cols-1 md:grid-cols-4">
            <div className="col-span-1 md:col-span-3 mt-12">
              {stepComponent}
            </div>
            <OrderSummary
              isFormComplete={formValid}
              // canProgress={handleNext}
              onContinuePress={handleNext}
              canPay={true}
              onBackPress={handleBack}
              // onClick={handleProgress}
              // subtotal={{ products: '$850.00', license: '$900.00' }}
              // total="$850.00"
              step={step === 2 ? 'pay' : 'continue'}
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
