import adpPPR8 from '../../data/adp/2023/ppr/8';
import adpPPR10 from '../../data/adp/2023/ppr/10';
import adpPPR12 from '../../data/adp/2023/ppr/12';

const dataSets = {
  '2023': {
    ppr: {
      8: adpPPR8,
      10: adpPPR10,
      12: adpPPR12,
      // ... other team sizes for PPR in 2023
    },
    standard: {
      // ... data for Standard scoring in 2023
    },
  },
  // ... other years
};

export default (req, res) => {
  const { year, scoringSystem, teams } = req.query;
  const data = dataSets[year][scoringSystem][teams];

  if (!data) {
    return res.status(404).json({ error: 'Data not found' });
  }

  // Optionally cache the response
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

  res.status(200).json(data);
};
