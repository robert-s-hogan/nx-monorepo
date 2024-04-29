import React, { useState } from 'react';

import { Heading } from '@with-nx/generic-ui';

export interface ConquestRestCalculationDisplayProps {
  playerExperienceStart: number;
  adventuringDayXPLimit: number;
  xpStart: number;
  xpThresholdEasy: number;
  shortRestsAvailable: boolean[];
  longRestNeeded: boolean;
}

const ConquestRestCalculationDisplay: React.FC<
  ConquestRestCalculationDisplayProps
> = ({
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
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="space-y-2">
      <div className="w-full flex items-center">
        <Heading level={2} className="py-1 bg-white" text="Rest Calculations" />
        <div />
      </div>
      <div className="w-full flex items-center justify-between">
        <p>Rest Progress Bar</p>
      </div>
      <div
        className="relative mt-4 mb-4 w-full bg-gray-200 rounded h-6"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div
          className="bg-blue-500 h-full rounded"
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
        {showTooltip && (
          <div
            className="absolute top-[-20px] px-1 py-0.5 rounded bg-black text-white text-xs"
            style={{ left: `calc(${xpPercentage}% - 12px)` }}
          >
            {xpGained} XP ({xpPercentage.toFixed(2)}%)
          </div>
        )}
        {/* {shortRestsAvailable[0] ? (
          <p>First short rest taken at {xpPercentage.toFixed(2)}%.</p>
        ) : (
          <p>First short rest needed before 35%.</p>
        )} */}
        {/* Additional logic for second short rest and long rest can be added similarly */}
      </div>
    </div>
  );
};

export default ConquestRestCalculationDisplay;
