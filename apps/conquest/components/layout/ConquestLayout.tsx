import { Container } from '@chakra-ui/react';

import ConquestHeader from './ConquestHeader';

export default function Layout({ children }) {
  return (
    <div>
      <ConquestHeader />
      <Container maxW={{ md: '4xl', xl: 'full' }} px={{ xl: 48 }}>
        <main>{children}</main>
      </Container>
    </div>
  );
}
