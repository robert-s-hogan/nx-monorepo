import '../styles/styles.css';
import { SWRConfig } from 'swr';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import { RandomValuesProvider } from '../store/RandomValuesProvider';
import { AuthProvider } from '../hooks/useAuth';

const fetcher = (...args: Parameters<typeof fetch>): Promise<any> =>
  fetch(...args).then((res) => res.json());

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <RandomValuesProvider>
          <SWRConfig value={{ fetcher }}>
            <Component {...pageProps} />
          </SWRConfig>
        </RandomValuesProvider>
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;