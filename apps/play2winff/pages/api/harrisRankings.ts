import harrisData081623 from '../../data/adp/2023/harrisFootball';

export default function handler(req, res) {
  res.status(200).json(harrisData081623);
}
