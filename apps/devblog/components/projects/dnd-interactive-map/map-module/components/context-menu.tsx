import { ReactNode, useEffect, MouseEvent } from 'react';

interface ContextMenuOption {
  label: string;
  onClick: () => void;
}

interface ContextMenuProps {
  children?: ReactNode;
  position: { x: number; y: number };
  onClose: () => void;
  options: ContextMenuOption[];
}

const ContextMenu = ({
  children,
  position,
  onClose,
  options,
}: ContextMenuProps) => {
  const { x, y } = position;

  useEffect(() => {
    const listener = (event: MouseEvent | Event) => {
      onClose();
    };

    window.addEventListener('click', listener);

    return () => {
      window.removeEventListener('click', listener);
    };
  }, [onClose]);

  return (
    <div
      className="absolute z-50 rounded bg-white py-2 text-black shadow-md"
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
