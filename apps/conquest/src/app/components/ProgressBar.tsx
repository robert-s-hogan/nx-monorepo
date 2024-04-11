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
    const progressPercentage = calculateProgressPercentage();
    return `${xpIntoLevel} / ${xpNeeded} XP into Level (${progressPercentage.toFixed(
      2
    )}%)`;
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
      {/* Conditionally render the threshold markers */}
      {progressPercentage < 68 && (
        <div
          className="absolute bg-red-600 h-2 w-0.5"
          style={{ left: '68%' }}
        ></div>
      )}
      {progressPercentage < 35 && (
        <div
          className="absolute bg-red-600 h-2 w-0.5"
          style={{ left: '35%' }}
        ></div>
      )}
      {showTooltip && (
        <div
          className="absolute -top-8 right-0 bg-black text-white text-sm p-1 rounded w-1/2"
          style={{ marginLeft: `${progressPercentage}%` }}
        >
          {getTooltipText()}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
