import React, { useState } from 'react';
import { IconX } from '@tabler/icons-react';

interface SubjectInfoProps {
  name: string;
  description: string;
  style?: React.CSSProperties;
  className?: string;
  popupClassName?: string;
  textColor?: string;
  absolutePositioning?: string;
}

const SubjectInfo: React.FC<SubjectInfoProps> = ({
  name,
  description,
  style,
  className,
  popupClassName,
  textColor,
  absolutePositioning,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const nameStyle = `relative inline-block my-2 mr-3 ${className || ''}`;
  const popupStyle = `popup border-2 border-white ${popupClassName || ''}`;

  const textColorStyle = textColor ? `${textColor}` : `text-gray-200`;

  return (
    <div
      style={{ position: 'absolute', ...style, cursor: 'pointer' }}
      onClick={togglePopup}
      className={absolutePositioning}
    >
      {isOpen && (
        <div className={popupStyle}>
          <div className="flex items-center justify-between">
            <span className="whitespace-nowrap">{name}</span>
            <button onClick={togglePopup}>
              <IconX size={14} />
            </button>
          </div>
          <p className="text-xs">{description}</p>
        </div>
      )}
      <span className={nameStyle}>
        <span className={`relative px-2 font-semibold ${textColorStyle}`}>
          {name}
        </span>
      </span>
    </div>
  );
};

export default SubjectInfo;
