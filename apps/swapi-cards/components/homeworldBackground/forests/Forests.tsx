import React, { useState, useEffect } from 'react';
import SwapiCardsTree from '../../SwapiCardsTree';

const forestsAnimationStyles = `
  @keyframes rain {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 20% 100%;
    }
  }
`;

interface SwapiCardsProps {
  homeworld: string;
  terrain: string;
}
const treeConfigurations = [
  {
    backgroundColor: 'var(--tree-one-top)',
    trunkColor: 'var(--tree-one-trunk)',
    topRounded:
      'rounded-tl-[37%] rounded-tr-[51%] rounded-br-[34%] rounded-bl-[43%] rounded-t-[57%] rounded-b-[27%]',
    bottomRounded: 'rounded-[30%_70%_53%_47%/76%_69%_31%_24%]',
    rotateDeg: '45deg',
    position: { right: '-20%', top: '7%' },
    positionClass: 'forest-row-one',
  },
  {
    backgroundColor: 'var(--tree-two-top)',
    trunkColor: 'var(--tree-two-trunk)',
    topRounded: 'rounded-[100%_36%_51%_42%/100%_100%_33%_21%]',
    bottomRounded: 'rounded-[30%_70%_53%_47%/76%_69%_31%_24%]',
    rotateDeg: '45deg',
    position: { left: '20%', top: '5%' },
    positionClass: 'forest-row-one',
  },
  {
    backgroundColor: 'var(--tree-three-top)',
    trunkColor: 'var(--tree-three-trunk)',
    topRounded: 'rounded-[100%_79%_63%_54%/100%_82%_46%_53%]',
    bottomRounded: 'rounded-[30%_70%_53%_47%/76%_69%_31%_24%]',
    rotateDeg: '49deg',
    position: { left: '40%', top: '8%' },
    positionClass: 'forest-row-one',
  },
  {
    backgroundColor: 'var(--tree-four-top)',
    trunkColor: 'var(--tree-four-trunk)',
    topRounded: 'rounded-[100%_79%_63%_54%/100%_89%_60%_53%]',
    bottomRounded: 'rounded-[30%_70%_53%_47%/76%_69%_31%_24%]',
    rotateDeg: '45deg',
    position: { left: '60%', top: '3%' },
    positionClass: 'forest-row-one',
  },
  {
    backgroundColor: 'var(--tree-five-top)',
    trunkColor: 'var(--tree-five-trunk)',
    topRounded: 'rounded-[46%_100%_63%_47%/100%_89%_46%_39%]',
    bottomRounded: 'rounded-[30%_70%_53%_47%/76%_69%_31%_24%]',
    rotateDeg: '49deg',
    position: { left: '80%', top: '10%' },
    positionClass: 'forest-row-one',
  },
];

function renderTrees(
  positionClass: string,
  position: { left: string; top: string; zIndex?: number }
) {
  return (
    <div className={`${positionClass} h-full w-full absolute`} style={position}>
      {treeConfigurations.map((tree) => (
        <SwapiCardsTree style={tree.position} {...tree} />
      ))}
    </div>
  );
}

function Forests({ homeworld, terrain }: SwapiCardsProps) {
  const [findTerrain, setFindTerrain] = useState<string | null>(null);

  useEffect(() => {
    if (terrain?.startsWith('rainforest')) {
      setFindTerrain('rainforest');
    }
  }, [homeworld, terrain]);

  return (
    <>
      <style>{forestsAnimationStyles}</style>
      <div className={`w-96 h-96 relative bg-white -z-10`}>
        {findTerrain && (
          <div className="absolute inset-0 bg-[url('https://i.postimg.cc/XvR6CjbY/rain.png')] animate-rain"></div>
        )}
        <h3 className="absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-black z-20">
          {homeworld}
        </h3>
        {renderTrees('forest-row-one', { left: '-30%', top: '0%', zIndex: 2 })}
        {renderTrees('forest-row-two', { left: '-20%', top: '20%', zIndex: 3 })}
        {renderTrees('forest-row-three', {
          left: '-25%',
          top: '35%',
          zIndex: 4,
        })}
        {renderTrees('forest-row-four', { left: '-5%', top: '28%', zIndex: 5 })}
        {renderTrees('forest-row-five', {
          left: '-15%',
          top: '13%',
          zIndex: 6,
        })}
      </div>
    </>
  );
}

export default Forests;
