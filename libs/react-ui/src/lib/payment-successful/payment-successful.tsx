import { Button, Heading, Text, Link } from '@with-nx/react-ui';

/* eslint-disable-next-line */
export interface PaymentSuccessfulProps {}

export function PaymentSuccessful(props: PaymentSuccessfulProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center">
        <Heading
          level={1}
          className="text-3xl font-semibold text-gray-900 mb-4"
        >
          Thank you, your payment was successful!
        </Heading>
        <Text className="text-lg text-gray-700 mb-4">
          Your transaction has been completed, and a receipt for your purchase
          has been emailed to you.
        </Text>
        <Text className="text-blue-500 hover:underline">
          <Link href="/dashboard">
            <Button className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Go to Dashboard
            </Button>
          </Link>
        </Text>
      </div>
    </div>
  );
}

export default PaymentSuccessful;
