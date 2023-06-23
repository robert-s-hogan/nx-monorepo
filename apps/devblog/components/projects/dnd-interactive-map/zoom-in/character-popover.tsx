import Modal from 'react-modal';
import Image from 'next/image';

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
      <h2>{item?.type} Details</h2>
      {item && (
        <div>
          <Image height={300} width={300} src={item.src} alt={item.type} />
          <p>
            Position: ({item.x}, {item.y})
          </p>
        </div>
      )}
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default CharacterPopover;
