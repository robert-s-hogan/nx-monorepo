import React from 'react';
import { Heading, Tabs } from '@with-nx/react-ui';

import { useADPData } from '../hooks/useADPData';
import PlayToWinFFLayout from '../components/P2WFFLayout';

const Adp = () => {
  const scoringSystem = 'ppr';
  const teamSizes = [8, 10, 12];

  const positionColors = {
    WR: 'bg-wr-color',
    RB: 'bg-rb-color',
    QB: 'bg-qb-color',
    TE: 'bg-te-color',
    PK: 'bg-pk-color',
    K: 'bg-pk-color',
    DEF: 'bg-def-color',
  };

  const tabsData = teamSizes.map((teamSize) => {
    const { adpPlayers, isADPLoading, isADPError } = useADPData(
      scoringSystem,
      teamSize
    );

    return {
      label: `${teamSize} Teams`,
      content: (
        <div>
          {isADPLoading && <p>Loading...</p>}
          {isADPError && <p>Error loading data</p>}
          {adpPlayers ? (
            <table className="w-full table-auto">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-2 py-2 text-left">Player</th>
                  <th className="px-2 py-2 text-left">Position</th>
                  <th className="hidden md:flex px-2 py-2 text-left">Team</th>
                  <th className="px-2 py-2 text-left">ADP</th>
                  <th className="px-2 py-2 text-left">Bye</th>
                </tr>
              </thead>
              <tbody>
                {adpPlayers &&
                  adpPlayers.map((player, index) => (
                    <tr
                      key={index}
                      className={`border-t border-gray-300 ${
                        positionColors[player.position]
                      }`}
                      style={{
                        backgroundColor: positionColors[player.position],
                      }}
                    >
                      <td className="px-2 py-2">{player.name}</td>
                      <td className="px-2 py-2">{player.position}</td>
                      <td className="hidden md:flex px-2 py-2">
                        {player.team}
                      </td>
                      <td className="px-2 py-2">{player.adp_formatted}</td>
                      <td className="px-2 py-2">{player.bye}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : null}
        </div>
      ),
    };
  });

  return (
    <PlayToWinFFLayout>
      <Heading level={1} className="text-center">
        Average Draft Position
      </Heading>
      <Heading level={2} className="text-center">
        {scoringSystem.toUpperCase()} Scoring
      </Heading>
      <div className="p-2">
        <Tabs data={tabsData} />
      </div>
    </PlayToWinFFLayout>
  );
};

export default Adp;
