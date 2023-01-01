import { data } from '../../../data/index';

export default function handler(req, res) {
  res.status(200).json(data);
}
