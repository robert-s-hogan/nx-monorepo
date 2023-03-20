import { structures } from '../../data/structures';

export default function handler(req, res) {
  res.status(200).json(structures);
}
