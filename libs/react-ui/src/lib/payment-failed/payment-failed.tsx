import { Button, Heading, List, ListItem, Link, Text } from '@with-nx/react-ui';

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center">
        <Heading
          level={1}
          className="text-3xl font-semibold text-gray-900 mb-4"
        >
          We're sorry, but your payment couldn't be processed...
        </Heading>
        <Text className="text-lg text-gray-700 mb-4">
          This could be for one of the following reasons:
        </Text>
        <List
          className="mb-4"
          items={paymentFailedItems.map((item, index) => ({
            ...item,
            children: (
              <ListItem key={index} className="text-lg text-gray-500 mb-2">
                <Link href={item.href}>{item.children}</Link>
              </ListItem>
            ),
          }))}
        />
        <Text className="text-blue-500 hover:underline">
          <Link href="/retry-payment">
            <Button className="px-6 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors">
              Retry Payment
            </Button>
          </Link>
        </Text>
      </div>
    </div>
  );
}

export default PaymentFailed;
