import { encounter } from '../../data/encounter';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(encounter);
  } else if (req.method === 'POST') {
    res.status(200).json(encounter);
  }
}
