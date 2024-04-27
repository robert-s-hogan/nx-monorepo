import { ConquestCampaignDeleteConfirmationProps } from '../types';

const ConquestCampaignDeleteConfirmation = ({
  onConfirm,
  onCancel,
  campaignId,
  campaign,
}: ConquestCampaignDeleteConfirmationProps) => {
  const campaignName = campaign ? campaign.name : '';
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold">Confirm Deletion</h3>
      <p className="my-2">
        Are you sure you want to delete{' '}
        <span className="font-bold text-lg">{campaignName}</span>? cannot be
        undone.
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

export default ConquestCampaignDeleteConfirmation;
