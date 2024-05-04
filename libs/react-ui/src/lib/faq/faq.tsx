'use client';

import { useState } from 'react';
import { Heading, Text } from '@with-nx/react-ui';
import faqStyles from './faq.module.css';

/* eslint-disable-next-line */
export interface FAQProps {
  item: {
    question: string;
    answer: string;
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

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

export const AccordionItem = ({ item }: FAQProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${faqStyles['accordionItem']}`}>
      <Heading level={3} onClick={() => setIsOpen(!isOpen)}>
        {item.question}
      </Heading>
      {isOpen && <Text>{item.answer}</Text>}
    </div>
  );
};

export function FAQ(props: FAQProps) {
  return (
    <div className={`${faqStyles['container']}`}>
      <Heading level={1}>Frequently Asked Questions</Heading>
      {faqItems.map((item, index) => (
        <AccordionItem key={index} item={item} />
      ))}
    </div>
  );
}
