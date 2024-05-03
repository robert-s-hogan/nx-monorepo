import { Heading } from '@with-nx/generic-ui';

const Roster = ({ draftedPlayers = [] }) => {
  const positions = [
    'RB',
    'RB',
    'WR',
    'WR',
    'WR',
    'TE',
    'FLEX',
    'DST',
    'K',
    'BN',
    'BN',
    'BN',
    'BN',
    'BN',
    'BN',
  ];

  const findPlayerForPosition = (position) => {
    // Find the first player of the given position that hasn't been rendered yet
    const player = draftedPlayers.find(
      (p) => p.position === position && !p.isDrafted
    );

    // Mark this player as rendered to avoid duplications
    if (player) {
      player.rendered = true;
      return player;
    }

    return null;
  };

  const renderPlayerForPosition = (position) => {
    const player = findPlayerForPosition(position);

    if (player) {
      return (
        <div>
          <span>{position}</span>
          <span>{player.name}</span>
          <span>{player.bye}</span>
        </div>
      );
    } else {
      return (
        <div>
          <span>{position}</span>
          <span>Empty</span>
        </div>
      );
    }
  };

  return (
    <div className="roster">
      <Heading level={2} text="Roster" />
      <div className="roster-positions">
        {positions.map((position, index) => (
          <div key={`${position}-${index}`} className="roster-position">
            {renderPlayerForPosition(position)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roster;
