import Link from 'next/link';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:3333/api/campaign`);
  console.log(`http://localhost:3333/api/campaign`);
  const data = await res.json();
  console.log(`data: ${JSON.stringify(data, null, 2)}`);

  const campaigns = data.campaigns;
  console.log(`campaigns: ${JSON.stringify(campaigns, null, 2)}`);
  return {
    props: {
      campaigns,
    },
  };
};

const Campaigns = ({ campaigns }) => {
  return (
    <div>
      <h1>Campaigns</h1>
      <div className="space-y-4">
        {campaigns.map((campaign) => (
          <Link href={`/campaigns/${campaign.id}`} key={campaign.id}>
            {campaign.name} (ID: {campaign.id})
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
