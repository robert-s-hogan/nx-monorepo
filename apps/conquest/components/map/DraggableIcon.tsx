import { useDrag } from 'react-dnd';
import { IconContext } from 'react-icons';

const DraggableIcon = ({ id, icon: Icon, name, onRemove, customIconProps }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'icon',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const handleRemove = () => {
    if (onRemove) {
      onRemove();
    }
  };

  const shouldShowRemove = name !== 'faDragon' && name !== 'faPeopleGroup';
  const backgroundColor =
    name === 'faDragon'
      ? 'bg-red-500'
      : name === 'faPeopleGroup'
      ? 'bg-green-500'
      : 'bg-blue-500';

  const containerClassName = `${
    name !== '' ? `p-1 ${backgroundColor}` : ''
  } text-white rounded flex items-center px-2 space-x-2`;

  return (
    <div
      ref={drag}
      className={containerClassName}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <IconContext.Provider
        value={{ className: 'inline mr-2 text-white w-auto' }}
      >
        {shouldShowRemove ? (
          <span className="ml-2 cursor-pointer" onClick={handleRemove}>
            {Icon && <Icon size={36} {...customIconProps} />}
          </span>
        ) : (
          Icon && <Icon size={36} {...customIconProps} />
        )}
      </IconContext.Provider>
    </div>
  );
};

export default DraggableIcon;
