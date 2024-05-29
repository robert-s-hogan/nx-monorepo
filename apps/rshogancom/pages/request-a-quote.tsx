import dynamic from 'next/dynamic';
import RSHLayout from '../components/RSHLayout';

const RSHQuote = dynamic(() => import('../components/RSHQuoteForm'), {
  ssr: false,
});

export default function RequestAQuote() {
  return (
    <RSHLayout>
      <RSHQuote />
    </RSHLayout>
  );
}
