import { Heading, Text } from '@with-nx/react-ui';
import privacyPolicyStyles from './privacy-policy.module.css';

/* eslint-disable-next-line */
export interface PrivacyPolicyProps {}

export function PrivacyPolicy(props: PrivacyPolicyProps) {
  return (
    <div className={`${privacyPolicyStyles.container}`}>
      <div className={`${privacyPolicyStyles.stack}`}>
        <Heading level={1}>Privacy Policy</Heading>
        <Text>
          <strong>1. Introduction</strong>
          <br />
          We are committed to safeguarding the privacy of our website visitors
          and service users.
        </Text>
        <Text>
          <strong>2. How we use your personal data</strong>
          <br />
          This section provides you with information about what personal data we
          hold and process.
        </Text>
        {/* Add more sections here */}
        <Text>
          <strong>99. Amendments</strong>
          <br />
          We may update this policy from time to time by publishing a new
          version on our website.
        </Text>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
