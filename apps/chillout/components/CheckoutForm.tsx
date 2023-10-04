import React, { useState, useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Button } from '@with-nx/react-ui';
import { useRouter } from 'next/router';
import { FiX } from 'react-icons/fi';

const CheckoutForm = () => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const [checkoutStatus, setCheckoutStatus] = useState('default');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      return;
    }

    setIsLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('[stripe] Error:', error);
      setCheckoutStatus('failure');
      setIsLoading(false);
    } else {
      console.log('[stripe] PaymentMethod:', paymentMethod);

      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: process.env.STRIPE_TEST_PRODUCT,
        }),
      });

      const data = await response.json();
      const clientSecret = data.clientSecret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (result.error) {
        console.log(result.error.message);
        setCheckoutStatus('failure');
        setIsLoading(false);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          console.log('Payment succeeded!');
          setCheckoutStatus('success');
          setIsLoading(false);
        }
      }
    }
  };

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
    classes: {
      base: 'StripeElement',
    },
  };

  const redirectToOrders = () => {
    const timeoutId = setTimeout(() => {
      router.push('/w/profile/active-orders');
    }, 5000);

    return () => clearTimeout(timeoutId);
  };

  useEffect(() => {
    if (checkoutStatus === 'success') {
      const cleanup = redirectToOrders();
      return () => cleanup();
    }
  }, [checkoutStatus]);

  return (
    <>
      {checkoutStatus === 'default' && (
        <>
          <h2 className="text-2xl font-bold mb-4">Payment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <CardElement options={CARD_ELEMENT_OPTIONS} />
            <div className="mt-4" />
            <Button className="btn-primary" loading={isLoading} type="submit">
              Pay
            </Button>
          </form>
        </>
      )}

      {checkoutStatus === 'success' && (
        <div className="flex flex-col space-y-6 justify-center text-center">
          <div className="mx-auto">
            <FiX className="text-green-500 h-6 w-6" />
          </div>
          <h3>Purchase Complete</h3>
          <p>You will be redirected to orders in 5 seconds...</p>
          <div className="mx-auto">
            <button className="bg-brand-primary w-auto px-5 py-3 font-sans rounded-brand text-h4">
              Proceed to My Orders
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
