import React from 'react';

interface SwapiCardsTreeProps {
  backgroundColor: string;
  trunkColor: string;
  topRounded: string;
  bottomRounded: string;
  rotateDeg: string;
  style: React.CSSProperties;
}

const SwapiCardsTree: React.FC<SwapiCardsTreeProps> = ({
  backgroundColor,
  trunkColor,
  topRounded,
  bottomRounded,
  rotateDeg,
  style,
}) => {
  return (
    <div className="forest-tree right-0 absolute w-[27%] h-[50%]" style={style}>
      <div
        className={`top-one absolute top-2 w-full h-[55%] ${topRounded}`}
        style={{ backgroundColor }}
      ></div>
      <div
        className="trunk-one absolute left-[40%] bottom-3 h-[80%] w-[10%] z-10 rounded-tl-[100%] rounded-tr-[9%] rounded-br-[51%] rounded-bl-[42%]"
        style={{ backgroundColor: trunkColor }}
      ></div>
      <div
        className="trunk-one-bottom absolute left-[40%] bottom-2 w-[10%] h-10"
        style={{ backgroundColor: trunkColor, borderRadius: bottomRounded }}
      ></div>
      <SwapiCardsBranch
        className="branch-one-right"
        direction="right"
        top="15%"
        backgroundColor={trunkColor}
        rotateDeg={rotateDeg}
      />
      <SwapiCardsBranch
        className="branch-one-left"
        direction="left"
        top="20%"
        backgroundColor={trunkColor}
        rotateDeg={`-${rotateDeg}`}
      />
      <SwapiCardsBranch
        className="branch-one-right"
        direction="right"
        top="30%"
        backgroundColor={trunkColor}
        rotateDeg={rotateDeg}
      />
      <SwapiCardsBranch
        className="branch-one-left"
        direction="left"
        top="35%"
        backgroundColor={trunkColor}
        rotateDeg={`-${rotateDeg}`}
      />
    </div>
  );
};

interface SwapiCardsBranchProps {
  className: string;
  direction: string;
  top: string;
  backgroundColor: string;
  rotateDeg: string;
}

const SwapiCardsBranch: React.FC<SwapiCardsBranchProps> = ({
  className,
  direction,
  top,
  backgroundColor,
  rotateDeg,
}) => {
  const horizontalOffset = direction === 'right' ? '20%' : '30%';

  return (
    <div
      style={{
        position: 'absolute',
        [direction]: `${horizontalOffset}`,
        top: `${top}`,
        height: '50%',
        width: '20%',
      }}
    >
      <div
        className="branch-r absolute h-[40%] w-[15%]"
        style={{
          transform: `rotate(${rotateDeg})`,
          backgroundColor,
          borderRadius: '0% 100% 35% 21% / 100% 100% 0% 0%',
        }}
      ></div>
      <div className="branch-2r absolute h-[45%] top-[40%]"></div>
    </div>
  );
};

export default SwapiCardsTree;
