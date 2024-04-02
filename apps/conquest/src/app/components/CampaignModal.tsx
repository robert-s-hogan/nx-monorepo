import ConquestModal from '@conquestComponents/ConquestModal';
import { CampaignModalProps } from '@conquestTypes/Campaign';

const CampaignModal: React.FC<CampaignModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <ConquestModal isOpen={isOpen} onClose={onClose} title={title}>
      {children}
    </ConquestModal>
  );
};

export default CampaignModal;
