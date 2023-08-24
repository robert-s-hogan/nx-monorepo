// pages/api/yahooAdp.ts
import { NextApiRequest, NextApiResponse } from 'next';

import yahooAdpData from '../../data/adp/2023/yahoo';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(yahooAdpData);
};
