import { Button, Heading, Text } from '@with-nx/generic-ui';
import Link from 'next/link';
import { ConquestCampaignDeleteConfirmationProps } from '../types';

const ConquestCampaignDeleteConfirmation = ({
  onConfirm,
  onCancel,
  campaign,
}: ConquestCampaignDeleteConfirmationProps) => {
  const campaignName = campaign ? campaign.name : '';
  return (
    <div className="p-4 space-y-4">
      <div className="space-y-1">
        <Heading level={3} text="Confirm Deletion" />
        <Text
          text={`Are you sure you want to delete ${campaignName}? cannot be undone.`}
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button className="border-none underline" onClick={onCancel}>
          Cancel
        </button>
        <Button theme="danger" onClick={onConfirm} text="Delete" />
      </div>
    </div>
  );
};

export default ConquestCampaignDeleteConfirmation;
