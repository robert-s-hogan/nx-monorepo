import { Container } from '@chakra-ui/react';

import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Container maxW={{ md: '4xl', lg: '7xl' }}>
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  );
}
