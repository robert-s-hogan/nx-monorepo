import React, { SVGAttributes } from 'react';
import { useIcon } from './useIcon';

type IconProps = SVGAttributes<SVGElement> & {
  size?: string | number;
  className?: string;
};

function createIconComponent(iconName: string) {
  const IconComponent: React.FC<IconProps> = ({
    size = 24,
    className,
    ...restProps
  }) => {
    const svgContent = useIcon(iconName);

    return svgContent ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        dangerouslySetInnerHTML={{ __html: svgContent }}
        {...restProps}
      />
    ) : null;
  };

  return IconComponent;
}

// Export all Feather icons as React components
export const Activity = createIconComponent('activity');
export const Airplay = createIconComponent('airplay');
export const AlignJustify = createIconComponent('alignJustify');
export const AlignLeft = createIconComponent('alignLeft');
export const AlignRight = createIconComponent('alignRight');
export const Anchor = createIconComponent('anchor');
export const Aperture = createIconComponent('aperture');
export const Archive = createIconComponent('archive');
export const ArrowDown = createIconComponent('arrowDown');
export const ArrowLeft = createIconComponent('arrowLeft');
export const ArrowRight = createIconComponent('arrowRight');
export const ArrowUp = createIconComponent('arrowUp');
export const AtSign = createIconComponent('atSign');
export const Award = createIconComponent('award');
export const BarChart = createIconComponent('barChart');
export const BarChart2 = createIconComponent('barChart2');
export const Battery = createIconComponent('battery');
export const Bell = createIconComponent('bell');
export const BellOff = createIconComponent('bellOff');
export const Bluetooth = createIconComponent('bluetooth');
export const Bold = createIconComponent('bold');
export const Book = createIconComponent('book');
export const Bookmark = createIconComponent('bookmark');
export const Box = createIconComponent('box');
export const Briefcase = createIconComponent('briefcase');
export const Calendar = createIconComponent('calendar');
export const Camera = createIconComponent('camera');
export const CameraOff = createIconComponent('cameraOff');
export const Cast = createIconComponent('cast');
export const Check = createIconComponent('check');
export const CheckCircle = createIconComponent('checkCircle');
export const CheckSquare = createIconComponent('checkSquare');
export const Clipboard = createIconComponent('clipboard');
export const Clock = createIconComponent('clock');
export const Cloud = createIconComponent('cloud');
export const Code = createIconComponent('code');
export const Codepen = createIconComponent('codepen');
export const Coffee = createIconComponent('coffee');
export const Columns = createIconComponent('columns');
export const Command = createIconComponent('command');
export const Compass = createIconComponent('compass');
export const Copy = createIconComponent('copy');
export const CornerDownLeft = createIconComponent('cornerDownLeft');
export const CornerDownRight = createIconComponent('cornerDownRight');
export const CornerUpLeft = createIconComponent('cornerUpLeft');
export const CornerUpRight = createIconComponent('cornerUpRight');
export const Cpu = createIconComponent('cpu');
export const CreditCard = createIconComponent('creditCard');
export const Crop = createIconComponent('crop');
export const Crosshair = createIconComponent('crosshair');
export const Database = createIconComponent('database');
export const Delete = createIconComponent('delete');
// ... more icons
