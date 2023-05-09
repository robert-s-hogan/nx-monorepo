import { Structures } from '../../data/Structures';

export default function handler(req, res) {
  res.status(200).json(Structures);
}
