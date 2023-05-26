import { Heading, Text } from '@with-nx/react-ui';

/* eslint-disable-next-line */
export interface TermsAndConditionsProps {}

export function TermsAndConditions(props: TermsAndConditionsProps) {
  return (
    <div className="container mx-auto p-4">
      <div className="space-y-4">
        <Heading level={1}>Terms and Conditions</Heading>
        <Text>
          <strong>1. Introduction</strong>
          <br />
          These Terms and Conditions govern your use of our website. By using
          our website, you accept these Terms and Conditions in full.
        </Text>
        <Text>
          <strong>2. Intellectual Property Rights</strong>
          <br />
          Unless otherwise stated, we or our licensors own the intellectual
          property rights in the website and material on the website.
        </Text>
        {/* Add more terms here */}
        <Text>
          <strong>99. Entire Agreement</strong>
          <br />
          These Terms and Conditions constitute the entire agreement between you
          and us in relation to your use of our website and supersede all
          previous agreements.
        </Text>
      </div>
    </div>
  );
}

export default TermsAndConditions;
