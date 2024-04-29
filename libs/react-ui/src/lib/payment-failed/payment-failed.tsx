import { Button, Heading, List, ListItem, Link, Text } from '@with-nx/react-ui';
import paymentFailedStyles from './payment-failed.module.css';

/* eslint-disable-next-line */
export interface PaymentFailedProps {}

const paymentFailedItems = [
  {
    href: '#',
    children: 'There may have been an issue with your credit or debit card.',
  },
  {
    href: '#',
    children: 'Your payment provider may have rejected the payment attempt.',
  },
  {
    href: '#',
    children: 'There may have been a temporary issue with the payment system.',
  },
];

export function PaymentFailed(props: PaymentFailedProps) {
  return (
    <div className={`${paymentFailedStyles['container']}`}>
      <div className={`${paymentFailedStyles['stack']}`}>
        <Heading level={1}>
          We're sorry, but your payment couldn't be processed...
        </Heading>
        <Text>This could be for one of the following reasons:</Text>
        <List items={paymentFailedItems || []} />
        <Text>
          <Link href="/retry-payment">
            <Button>Retry Payment</Button>
          </Link>
        </Text>
      </div>
    </div>
  );
}

export default PaymentFailed;
