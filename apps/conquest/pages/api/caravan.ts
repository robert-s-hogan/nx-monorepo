import { caravan } from '../../data/caravan';

export default function handler(req, res) {
  res.status(200).json(caravan);
}
