import { useState } from 'react';
import { Heading, Text } from '@with-nx/react-ui';

/* eslint-disable-next-line */
export interface FAQProps {}

const faqItems = [
  {
    question: 'What is your return policy?',
    answer:
      'You can return any item within 30 days of receipt for a full refund.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'Delivery typically takes between 3-5 business days.',
  },
  // Add more items here
];

function AccordionItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4">
      <Heading
        level={3}
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      >
        {item.question}
      </Heading>
      {isOpen && <Text>{item.answer}</Text>}
    </div>
  );
}

export function FAQ(props: FAQProps) {
  return (
    <div className="m-4">
      <Heading level={1}>Frequently Asked Questions</Heading>
      {faqItems.map((item, index) => (
        <AccordionItem key={index} item={item} />
      ))}
    </div>
  );
}

export default FAQ;
