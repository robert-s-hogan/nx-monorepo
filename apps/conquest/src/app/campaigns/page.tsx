import { NextPage } from 'next';
import Layout from '@components/Layout';

type CampaignsPageProps = {
  // Add your custom props here
};

const CampaignsPage: NextPage<CampaignsPageProps> = () => {
  return <Layout title="Campaigns | Conquest">Campaigns</Layout>;
};

export default CampaignsPage;
