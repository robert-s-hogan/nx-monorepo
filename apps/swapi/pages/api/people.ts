import { NextApiRequest, NextApiResponse } from 'next';
import { people } from '../../data/peopleData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(people);
}
