import { characterAdvancement } from '../../data/characterAdvancement';

export default function handler(req, res) {
  res.status(200).json(characterAdvancement);
}
