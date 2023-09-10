import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { Button, Flex, Heading } from '@with-nx/react-ui';
import { FeatherX } from '@with-nx/icons';

type DraftConfigModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DraftConfigModal: React.FC<DraftConfigModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [teams, setTeams] = useState<number>(8);
  const [draftOrder, setDraftOrder] = useState<number | string>('random');
  const [rosterPositions, setRosterPositions] = useState<{
    qb: number;
    rb: number;
    wr: number;
    te: number;
    flex: number;
    k: number;
    dst: number;
    bench: number;
  }>({
    qb: 1,
    rb: 2,
    wr: 2,
    te: 1,
    flex: 1,
    k: 1,
    dst: 1,
    bench: 6,
  });

  const router = useRouter(); // use Next.js's useRouter hook

  const handleDraftStart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: '/draft',
      query: {
        teams: teams,
        draftOrder: draftOrder,
        ...rosterPositions,
      },
    });
    onClose();
  };

  const handleTeamsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTeams(parseInt(e.target.value));
  };

  return (
    <dialog
      open={isOpen}
      className={`modal ${
        isOpen
          ? 'absolute top-4 border-0 rounded-lg p-4 mx-auto w-[360px] h-auto shadow-xl'
          : ''
      }`}
    >
      <div className="p-4">
        <Flex className="justify-end w-full h-full">
          <Button onClick={onClose} className="flex justify-end mb-4">
            <FeatherX />
          </Button>
        </Flex>
        <form onSubmit={handleDraftStart}>
          {/* Team Selection */}
          <div className="flex flex-col space-y-4">
            <Heading level={2} className="text-black-custom">
              Draft Configuration
            </Heading>
            <label className="flex justify-between">
              Teams:
              <select value={teams} onChange={handleTeamsChange}>
                <option value={8}>8</option>
                <option value={10}>10</option>
                <option value={12}>12</option>
              </select>
            </label>

            {/* Draft Order Selection */}
            <label className="flex justify-between">
              Draft Position:
              <select
                value={draftOrder}
                onChange={(e) => setDraftOrder(parseInt(e.target.value))}
              >
                {Array.from({ length: teams }, (_, i) => (
                  <option value={i + 1} key={i}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </label>

            {/* Roster Positions Selection */}
            <Heading level={2} className="text-black-custom mb-2">
              Roster Positions
            </Heading>
            {Object.keys(rosterPositions).map((pos) => (
              <label className="flex justify-between" key={pos}>
                {pos.replace('_', '/').toUpperCase()}:
                <select
                  value={rosterPositions[pos]}
                  onChange={(e) =>
                    setRosterPositions({
                      ...rosterPositions,
                      [pos]: parseInt(e.target.value),
                    })
                  }
                >
                  {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                    <option value={n} key={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>
            ))}

            <Button className="btn-primary" type="submit">
              Start Draft
            </Button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default DraftConfigModal;
