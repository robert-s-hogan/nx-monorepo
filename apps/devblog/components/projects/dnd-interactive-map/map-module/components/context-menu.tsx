import { useEffect } from 'react';

interface ContextMenuProps {
  children: any;
  position: any;
  onClose: () => void;
  options: any;
}

const ContextMenu = ({
  children,
  position,
  onClose,
  options,
}: ContextMenuProps) => {
  const { x, y } = position;

  useEffect(() => {
    const listener = (event) => {
      onClose();
    };

    window.addEventListener('click', listener);

    return () => {
      window.removeEventListener('click', listener);
    };
  }, [onClose]);

  return (
    <div
      className="absolute bg-white text-black shadow-md z-50 rounded py-2"
      style={{ top: y, left: x }}
    >
      {options.map((option, index) => (
        <div
          onClick={option.onClick}
          key={index}
          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default ContextMenu;
