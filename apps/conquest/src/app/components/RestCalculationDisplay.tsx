import React from 'react';
import { checkmarkCircleOutline, alertCircleOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

// Define a TypeScript interface for the component props
interface RestCalculationDisplayProps {
  shortRestsNeeded: [boolean, boolean]; // Tuple type for the first and second rest indicators
  shortRestsRemaining: number;
  totalShortRests: number;
  longRestNeeded: boolean;
}

const RestCalculationDisplay: React.FC<RestCalculationDisplayProps> = ({
  shortRestsNeeded,
  shortRestsRemaining,
  totalShortRests,
  longRestNeeded,
}) => {
  // Calculate the width percentage for the progress bar
  const progressWidth = `${(shortRestsRemaining / totalShortRests) * 100}%`;

  return (
    <div className="p-4 space-y-4 bg-white rounded shadow">
      <div>
        <h3 className="font-bold">Rest Calculation</h3>
      </div>

      {/* Short Rests Needed Indicators */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <IonIcon
            icon={
              shortRestsNeeded[0] ? alertCircleOutline : checkmarkCircleOutline
            }
            className={`text-lg ${
              shortRestsNeeded[0] ? 'text-red-500' : 'text-green-500'
            }`}
          />
          <div>
            1st Short Rest Needed?: {shortRestsNeeded[0] ? 'Yes' : 'No'}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <IonIcon
            icon={
              shortRestsNeeded[1] ? alertCircleOutline : checkmarkCircleOutline
            }
            className={`text-lg ${
              shortRestsNeeded[1] ? 'text-red-500' : 'text-green-500'
            }`}
          />
          <div>
            2nd Short Rest Needed?: {shortRestsNeeded[1] ? 'Yes' : 'No'}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <IonIcon
            icon={longRestNeeded ? alertCircleOutline : checkmarkCircleOutline}
            className={`text-lg ${
              longRestNeeded ? 'text-red-500' : 'text-green-500'
            }`}
          />
          <div>Long Rest Needed?: {longRestNeeded ? 'Yes' : 'No'}</div>
        </div>
      </div>

      {/* Short Rests Remaining Progress Bar */}
      <div>
        <div className="text-sm font-semibold">Short Rests Remaining</div>
        <div className="w-full bg-gray-200 rounded h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded"
            style={{ width: progressWidth }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RestCalculationDisplay;
