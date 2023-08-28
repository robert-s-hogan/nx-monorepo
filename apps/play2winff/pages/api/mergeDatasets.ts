import { NextApiRequest, NextApiResponse } from 'next';

import yahooData from '../../data/adp/2023/yahoo';
import harrisRankings from '../../data/adp/2023/harrisFootball';
import playerTags from '../../data/adp/2023/harrisFootball/tags';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const mergedData = harrisRankings?.map((player) => {
    const yahooPlayer = yahooData?.find(
      (yPlayer) => yPlayer.name === player.name
    );
    const playerTag =
      playerTags && playerTags.find((tPlayer) => tPlayer.name === player.name);

    return {
      ...player,
      yahooADP: yahooPlayer || { rank: Number.MAX_SAFE_INTEGER },
      tags: playerTag?.tags || [],
    };
  });

  res.status(200).json(mergedData);
};
