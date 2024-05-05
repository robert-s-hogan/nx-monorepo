import Modal from 'react-modal';
import Image from 'next/image';
import { Button, Heading } from '@with-nx/generic-ui';
const customStyles = {
  content: {
    width: '500px',
    height: '400px',
  },
};

const CharacterPopover = ({ item, onClose }) => {
  return (
    <Modal
      isOpen={!!item}
      onRequestClose={onClose}
      contentLabel="Item Details"
      style={customStyles}
    >
      <Heading level={2} text={`${item?.type} Details`} />
      {item && (
        <div>
          <Image height={300} width={300} src={item.src} alt={item.type} />
          <p>
            Position: ({item.x}, {item.y})
          </p>
        </div>
      )}
      <Button theme="secondary" onClick={onClose} text="Close" />
    </Modal>
  );
};

export default CharacterPopover;
