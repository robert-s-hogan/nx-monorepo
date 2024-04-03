import { EncounterDeleteConfirmationProps } from '../types';

const EncounterDeleteConfirmation = ({
  onConfirm,
  onCancel,
  encounter,
}: EncounterDeleteConfirmationProps) => {
  const encounterName = encounter ? encounter.objective : ''; // Assuming 'objective' can serve as a name/identifier for encounters
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold">Confirm Deletion</h3>
      <p className="my-2">
        Are you sure you want to delete the encounter{' '}
        <span className="font-bold text-lg">{encounterName}</span>? This action
        cannot be undone.
      </p>
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

export default EncounterDeleteConfirmation;
