import { projectStaticData } from '../../../data/projects';

export default function handler(req, res) {
  res.status(200).json(projectStaticData);
}
