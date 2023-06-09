import { QuoteProps } from '@with-nx/types';

export const Quote: React.FC<QuoteProps> = ({ text, author }) => {
  return (
    <blockquote className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
      <p className="mb-2">{text}</p>
      <cite className="block text-right">{author}</cite>
    </blockquote>
  );
};
