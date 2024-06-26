import { Heading, Text } from '@with-nx/react-ui';
import termsStyles from './terms-and-conditions.module.css';

/* eslint-disable-next-line */
export interface TermsAndConditionsProps {}

export const TermsAndConditions = (props: TermsAndConditionsProps) => {
  return (
    <div className={`${termsStyles['container']}`}>
      <div className={`${termsStyles['stack']}`}>
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
};
