import { chilloutProducts } from '../../../data/chilloutProducts';

export default function handler(req, res) {
  res.status(200).json(chilloutProducts);
}
