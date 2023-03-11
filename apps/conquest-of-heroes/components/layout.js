import { Container } from '@chakra-ui/react';

import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Container maxW={{ md: '4xl', xl: 'full' }} px={{ xl: 48 }}>
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  );
}
