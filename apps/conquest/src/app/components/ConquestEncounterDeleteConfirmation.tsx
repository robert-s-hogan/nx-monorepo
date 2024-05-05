import { EncounterDeleteConfirmationProps } from '../types';
import { Button, Heading, Text } from '@with-nx/generic-ui';

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
        <Button theme="secondary" onClick={onCancel} text="Cancel" />
        <Button theme="danger" onClick={onConfirm} text="Delete" />
      </div>
    </div>
  );
};

export default ConquestEncounterDeleteConfirmation;
