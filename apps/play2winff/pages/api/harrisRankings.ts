import harrisData082023 from '../../data/adp/2023/harrisFootball/082023';

export default function handler(req, res) {
  res.status(200).json(harrisData082023);
}
