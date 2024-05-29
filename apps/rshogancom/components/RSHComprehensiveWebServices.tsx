import { Grid, Text } from '@with-nx/react-ui';
import { Heading } from '@with-nx/generic-ui';
import HoverEffect from './RSHCardHoveredEffect';
import RSHSection from './RSHSection';
import servicesData from '../data/comprehensiveWebServicesData';

const RSHComprehensiveWebServices = () => {
  return (
    <RSHSection className="text-center">
      <Heading
        level={2}
        className="text-center"
        text="Comprehensive Web Services"
      />
      <HoverEffect items={servicesData} key="test" />
    </RSHSection>
  );
};

export default RSHComprehensiveWebServices;
