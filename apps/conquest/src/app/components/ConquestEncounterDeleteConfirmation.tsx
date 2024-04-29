import { EncounterDeleteConfirmationProps } from '../types';
import { Heading, Text } from '@with-nx/generic-ui';

const ConquestEncounterDeleteConfirmation = ({
  onConfirm,
  onCancel,
  encounter,
}: EncounterDeleteConfirmationProps) => {
  const encounterName = encounter ? encounter.objective : '';
  return (
    <div className="p-4">
      <Heading
        level={3}
        className="text-lg font-semibold"
        text="Confirm Deletion"
      />
      <Text
        className="my-2"
        text={`Are you sure you want to delete the encounter ${encounterName}</span>? This action cannot be undone.`}
      />

      <div className="flex justify-end space-x-2">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={onConfirm}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ConquestEncounterDeleteConfirmation;
