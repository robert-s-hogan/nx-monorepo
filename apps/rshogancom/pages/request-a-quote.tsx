import dynamic from 'next/dynamic';
import RSHLayout from '../components/RSHLayout';

const RSHQuote = dynamic(() => import('../components/RSHQuoteForm'), {
  ssr: false,
});

export default function RequestAQuote() {
  return (
    <RSHLayout
      title="Request a Quote | Robert Hogan - UI/UX Engineer"
      description="Contact Robert Hogan to request a quote for your project. Provide your details and let's create something amazing together."
    >
      <RSHQuote />
    </RSHLayout>
  );
}
