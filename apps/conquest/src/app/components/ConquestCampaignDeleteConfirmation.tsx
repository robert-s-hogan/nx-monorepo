import { Button, Flex, Heading, Text } from '@with-nx/generic-ui';
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
      <Flex className="justify-end space-x-2">
        <Button
          theme="secondary"
          className="border-none underline"
          onClick={onCancel}
          text="Cancel"
        />
        <Button theme="danger" onClick={onConfirm} text="Delete" />
      </Flex>
    </div>
  );
};

export default ConquestCampaignDeleteConfirmation;
