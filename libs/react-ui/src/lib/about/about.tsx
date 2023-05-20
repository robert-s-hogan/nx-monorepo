import { Heading, Text } from '@with-nx/react-ui';
import aboutStyles from './about.module.css';

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <div className={`${aboutStyles.container}`}>
      <Heading level={1}>About Us</Heading>
      <Text>
        We are a company dedicated to delivering the highest quality products
        and services. Founded in 2023, we have been at the forefront of
        innovation, continually pushing boundaries to better meet our customers'
        needs.
      </Text>
      <Text>
        Our team is made up of a diverse group of talented individuals who are
        passionate about what they do. We believe in creating a positive impact
        on our customers' lives, and we strive to exceed expectations at every
        opportunity.
      </Text>
      <Text>
        We are proud of our accomplishments, but we are not resting on our
        laurels. We are always looking towards the future, eager to discover new
        ways to improve and grow.
      </Text>
    </div>
  );
}

export default About;
