import { campaigns } from '../../../data/campaigns';
import { v4 as uuidv4 } from 'uuid';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(campaigns);
  } else if (req.method === 'POST') {
    const playerCount = req.body.playerCount;
    const playerStartLevel = req.body.playerStartLevel;

    const newCampaign = {
      id: uuidv4(),
      playerCount: playerCount,
      playerStartLevel: playerStartLevel,
    };
    campaigns.push(newCampaign);
    res.status(200).json(newCampaign);
  }
}
