import { Grid } from '@chakra-ui/react';

const CustomCardGrid = ({ children }) => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
      width="100%"
    >
      {children}
    </Grid>
  );
};
export default CustomCardGrid;
