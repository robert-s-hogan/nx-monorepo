import { Structures } from '@with-nx/constants';

export default function handler(req, res) {
  res.status(200).json(Structures);
}
