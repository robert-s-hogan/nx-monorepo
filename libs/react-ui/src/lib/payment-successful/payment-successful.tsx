import { Button, Heading, Text, Link } from '@with-nx/react-ui';
import paymentSuccessfulStyles from './payment-successful.module.css';

/* eslint-disable-next-line */
export interface PaymentSuccessfulProps {}

export function PaymentSuccessful(props: PaymentSuccessfulProps) {
  return (
    <div className={`${paymentSuccessfulStyles.container}`}>
      <div className={`${paymentSuccessfulStyles.stack}`}>
        <Heading level={1}>Thank you, your payment was successful!</Heading>
        <Text>
          Your transaction has been completed, and a receipt for your purchase
          has been emailed to you.
        </Text>
        <Text>
          <Link href="/dashboard">
            <Button>Go to Dashboard</Button>
          </Link>
        </Text>
      </div>
    </div>
  );
}

export default PaymentSuccessful;
