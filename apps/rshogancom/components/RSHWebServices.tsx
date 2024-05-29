import { Grid, Text } from '@with-nx/react-ui';
import { Heading } from '@with-nx/generic-ui';
import RSHCardHoveredEffect from './RSHCardHoveredEffect';
import RSHSection from './RSHSection';
import servicesData from '../data/comprehensiveWebServicesData';

const RSHWebServices = () => {
  return (
    <RSHSection>
      <Heading level={2} text="Comprehensive Web Services" />
      <RSHCardHoveredEffect items={servicesData} />
    </RSHSection>
  );
};

export default RSHWebServices;
