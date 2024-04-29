import React, { useState } from 'react';

export interface ConquestProgressBarProps {
  xpStart: number;
  xpEnd: number;
  playerExperience: number;
  onTakeFirstShortRest: () => void;
  onTakeSecondShortRest: () => void;
  isShortRestAvailable: boolean[];
}

const ConquestProgressBar: React.FC<ConquestProgressBarProps> = ({
  xpStart,
  xpEnd,
  playerExperience,
  onTakeFirstShortRest,
  onTakeSecondShortRest,
  isShortRestAvailable,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Calculate the width of the progress bar based on experience
  const progressPercentage =
    ((playerExperience - xpStart) / (xpEnd - xpStart)) * 100;

  return (
    <div
      className="relative w-full bg-gray-200 rounded h-6"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div
        className="bg-blue-500 h-full rounded"
        style={{ width: `${progressPercentage}%` }}
      ></div>

      {/* Buttons for taking rests */}
      {isShortRestAvailable[0] && (
        <button
          className="absolute bottom-[-20px] transform -translate-x-1/2 text-white bg-red-600 px-2 py-1 rounded text-xs"
          style={{ left: '35%' }}
          onClick={onTakeFirstShortRest}
        >
          Take 1st Short Rest
        </button>
      )}
      {isShortRestAvailable[1] && (
        <button
          className="absolute bottom-[-20px] transform -translate-x-1/2 text-white bg-red-600 px-2 py-1 rounded text-xs"
          style={{ left: '68%' }}
          onClick={onTakeSecondShortRest}
        >
          Take 2nd Short Rest
        </button>
      )}

      {/* Tooltip */}
      {showTooltip && (
        <div
          className="absolute -top-8 px-1 py-0.5 rounded bg-black text-white text-xs"
          style={{
            left: `calc(${progressPercentage}% - 12px)`, // Offset for the tooltip pointer
          }}
        >
          {playerExperience - xpStart} / {xpEnd - xpStart} XP (
          {progressPercentage.toFixed(2)}%)
        </div>
      )}
    </div>
  );
};

export default ConquestProgressBar;
