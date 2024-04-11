import React, { useState } from 'react';

interface ProgressBarProps {
  xpStart: number;
  xpEnd: number;
  playerExperience: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  xpStart,
  xpEnd,
  playerExperience,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const calculateProgressPercentage = () => {
    const progress = ((playerExperience - xpStart) / (xpEnd - xpStart)) * 100;
    return Math.min(Math.max(progress, 0), 100); // Clamps the value between 0 and 100
  };

  const getTooltipText = () => {
    const xpIntoLevel = playerExperience - xpStart;
    const xpNeeded = xpEnd - xpStart;
    return `${xpIntoLevel} / ${xpNeeded} XP into Level`;
  };

  const progressPercentage = calculateProgressPercentage();

  return (
    <div
      className="w-full bg-gray-200 rounded h-2 relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div
        className="bg-blue-600 h-2 rounded"
        style={{ width: `${progressPercentage}%` }}
      ></div>
      {showTooltip && (
        <div
          className="absolute -top-8 left-0 bg-black text-white text-sm p-1 rounded"
          style={{ marginLeft: `${progressPercentage}%` }}
        >
          {getTooltipText()}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
