//pages/api/pagespeed.ts

import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query: { url = '' } = {} } = req;

  try {
    const response = await axios.get(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${process.env.NEXT_PUBLIC_PAGESPEED_INSIGHTS}`
    );
    const data = response.data;

    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error fetching data from PageSpeed Insights API.' });
  }
};

export default handler;
