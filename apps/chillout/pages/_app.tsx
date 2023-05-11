import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/styles.css';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { Provider } from 'react-redux';
import { store } from '../store/store';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
);

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <Component {...pageProps} />
      </Elements>
    </Provider>
  );
}

export default CustomApp;
