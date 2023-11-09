import { caravan } from '@with-nx/constants';

export default function handler(req, res) {
  res.status(200).json(caravan);
}
