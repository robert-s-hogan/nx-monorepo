import { Heading, Text } from '@with-nx/react-ui';

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Heading level={1} className="text-4xl font-semibold">
        About Us
      </Heading>
      <Text className="mt-4 text-lg text-gray-700">
        We are a company dedicated to delivering the highest quality products
        and services. Founded in 2023, we have been at the forefront of
        innovation, continually pushing boundaries to better meet our customers'
        needs.
      </Text>
      <Text className="mt-4 text-lg text-gray-700">
        Our team is made up of a diverse group of talented individuals who are
        passionate about what they do. We believe in creating a positive impact
        on our customers' lives, and we strive to exceed expectations at every
        opportunity.
      </Text>
      <Text className="mt-4 text-lg text-gray-700">
        We are proud of our accomplishments, but we are not resting on our
        laurels. We are always looking towards the future, eager to discover new
        ways to improve and grow.
      </Text>
    </div>
  );
}

export default About;
