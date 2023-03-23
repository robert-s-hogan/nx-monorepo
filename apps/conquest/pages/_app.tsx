import './styles.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { SWRConfig } from 'swr';
import { store } from '../features/store';
import { Provider } from 'react-redux';
import { RandomValuesProvider } from '../store/RandomValuesProvider';
import { AuthProvider } from '../hooks/useAuth';

config.autoAddCss = false;

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        color: 'light-green',
      },
    },
  },
  colors: {
    brand: {
      darkGreen: '#004d00',
    },
  },
});

const fetcher = (...args: Parameters<typeof fetch>): Promise<any> =>
  fetch(...args).then((res) => res.json());
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <RandomValuesProvider>
          <ChakraProvider theme={theme}>
            <SWRConfig value={{ fetcher }}>
              <Component {...pageProps} />
            </SWRConfig>
          </ChakraProvider>
        </RandomValuesProvider>
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
