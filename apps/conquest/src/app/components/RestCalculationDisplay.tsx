import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { checkmarkCircleOutline, bedOutline } from 'ionicons/icons';
import { RestCalculationDisplayProps } from '../types';

const RestCalculationDisplay: React.FC<RestCalculationDisplayProps> = ({
  shortRestsNeeded,
  shortRestsAvailable,
  shortRestsRemaining,
  longRestNeeded,
  onTakeShortRest,
  onTakeLongRest,
}) => {
  // Calculate the width percentage for the progress bar
  const progressWidth = `${(shortRestsRemaining / 2) * 100}%`;

  const renderShortRestButton = (index: number) => {
    return shortRestsAvailable[index] ? (
      <IonButton
        size="small"
        onClick={() => onTakeShortRest((index + 1) as 1 | 2)}
      >
        Take rest
      </IonButton>
    ) : shortRestsNeeded[index] ? (
      <IonIcon icon={checkmarkCircleOutline} color="success" />
    ) : null;
  };

  return (
    <div className="p-4 space-y-4 bg-white rounded shadow">
      <h3 className="font-bold">Rest Calculation</h3>
      <div className="space-y-2">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex items-center justify-between">
            <span>
              {index + 1}
              {index + 1 === 1 ? 'st' : 'nd'} short rest{' '}
              {shortRestsNeeded[index] ? 'needed' : 'not needed'}.
            </span>
            {renderShortRestButton(index)}
          </div>
        ))}

        <div className="flex items-center justify-between">
          <span>Long rest {longRestNeeded ? 'needed' : 'not needed'}.</span>
          {longRestNeeded && (
            <IonButton size="small" onClick={onTakeLongRest}>
              <IonIcon slot="start" icon={bedOutline} />
              Take rest
            </IonButton>
          )}
        </div>
      </div>

      {/* Short Rests Remaining Progress Bar */}
      <div>
        <div className="text-sm font-semibold">Short Rests Remaining</div>
        <div className="w-full bg-gray-200 rounded h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded"
            style={{ width: progressWidth }}
          />
        </div>
      </div>
    </div>
  );
};

export default RestCalculationDisplay;
