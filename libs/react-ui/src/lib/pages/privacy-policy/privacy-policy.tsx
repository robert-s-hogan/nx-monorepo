import { Heading, Text } from '@with-nx/react-ui';

/* eslint-disable-next-line */
export interface PrivacyPolicyProps {}

export function PrivacyPolicy(props: PrivacyPolicyProps) {
  return (
    <div className={`p-8 bg-white shadow-md rounded-md`}>
      <div className={`space-y-4`}>
        <Heading level={1} className="text-2xl font-semibold">
          Privacy Policy
        </Heading>
        <Text className="font-normal text-gray-800">
          <strong>1. Introduction</strong>
          <br />
          We are committed to safeguarding the privacy of our website visitors
          and service users.
        </Text>
        <Text className="font-normal text-gray-800">
          <strong>2. How we use your personal data</strong>
          <br />
          This section provides you with information about what personal data we
          hold and process.
        </Text>
        {/* Add more sections here */}
        <Text className="font-normal text-gray-800">
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
