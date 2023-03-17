import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import useSWR, { SWRConfig } from 'swr';
import { store } from '../features/store';
import { Provider } from 'react-redux';
import { RandomValuesProvider } from '../store/RandomValuesProvider';

config.autoAddCss = false;

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <RandomValuesProvider value={{}}>
        <ChakraProvider theme={theme}>
          <SWRConfig value={{ fetcher }}>
            <Component {...pageProps} />
          </SWRConfig>
        </ChakraProvider>
      </RandomValuesProvider>
    </Provider>
  );
}

export default MyApp;
