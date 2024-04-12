import React from 'react';

const RestCalculationDisplay: React.FC<{
  playerExperienceStart: number;
  adventuringDayXPLimit: number;
  xpStart: number;
  xpThresholdEasy: number; // New prop for dynamic XP threshold for a long rest
  shortRestsAvailable: boolean[];
  longRestNeeded: boolean; // New prop to determine if a long rest is needed
}> = ({
  playerExperienceStart,
  adventuringDayXPLimit,
  xpStart,
  xpThresholdEasy,
  shortRestsAvailable,
  longRestNeeded,
}) => {
  // Calculate XP gained and percentage of XP limit reached
  const xpGained = playerExperienceStart - xpStart;
  const xpPercentage = (xpGained / adventuringDayXPLimit) * 100;

  // Calculate the percentage for the dynamic long rest threshold
  const longRestThresholdPercentage =
    (xpThresholdEasy / adventuringDayXPLimit) * 100;

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-bold">Rest Calculation</h3>
      <div className="relative mt-4 mb-4 w-full bg-gray-200 rounded h-5">
        <div
          className="bg-blue-500 h-full"
          style={{ width: `${xpPercentage}%` }}
        ></div>
        {/* Markers for short rests and dynamic long rest thresholds */}
        <div
          style={{
            position: 'absolute',
            left: '35%',
            top: '0',
            height: '100%',
            width: '2px',
            backgroundColor: 'red',
          }}
          title="Short Rest 1 Threshold"
        ></div>
        <div
          style={{
            position: 'absolute',
            left: '68%',
            top: '0',
            height: '100%',
            width: '2px',
            backgroundColor: 'red',
          }}
          title="Short Rest 2 Threshold"
        ></div>
        <div
          style={{
            position: 'absolute',
            right: `${longRestThresholdPercentage}%`,
            top: '0',
            height: '100%',
            width: '2px',
            backgroundColor: 'green',
          }}
          title="Long Rest Threshold"
        ></div>
      </div>
      <div className="text-sm">
        {shortRestsAvailable[0] ? (
          <p>First short rest taken at {xpPercentage.toFixed(2)}%.</p>
        ) : (
          <p>First short rest needed before 35%.</p>
        )}
        {/* Additional logic for second short rest and long rest can be added similarly */}
      </div>
    </div>
  );
};

export default RestCalculationDisplay;
