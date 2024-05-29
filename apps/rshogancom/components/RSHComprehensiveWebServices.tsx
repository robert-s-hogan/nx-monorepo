import { Grid, Text } from '@with-nx/react-ui';
import { Heading } from '@with-nx/generic-ui';
import HoverEffect from './RSHCardHoveredEffect';
import RSHSection from './RSHSection';
import servicesData from '../data/comprehensiveWebServicesData';

const RSHComprehensiveWebServices = () => {
  return (
    <RSHSection>
      <Heading level={2} text="Comprehensive Web Services" />
      <HoverEffect items={servicesData} />
    </RSHSection>
  );
};

export default RSHComprehensiveWebServices;
