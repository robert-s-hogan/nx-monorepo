import ConquestModal from './ConquestModal';
import { CampaignModalProps } from '../types';

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
