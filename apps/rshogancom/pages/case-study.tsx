import dynamic from 'next/dynamic';
import RSHLayout from '../components/RSHLayout';

const RSHCaseStudy = dynamic(() => import('../components/RSHCaseStudy'), {
  ssr: false,
});

export default function CaseStudy() {
  return (
    <RSHLayout
      title="Case Study: Keona Health"
      description="Discover how Robert Hogan improved Keona Health's website, leading to a 42.5% increase in organic traffic. Learn about the challenges, solutions, and results in this detailed case study."
    >
      <RSHCaseStudy />
    </RSHLayout>
  );
}
