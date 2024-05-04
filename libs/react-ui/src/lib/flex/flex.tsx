import { FlexProps } from '@with-nx/types';
import reactUIFlexstyles from './flex.module.css';

export const Flex = function ({
  id,
  children,
  className,
  ariaLabel,
}: FlexProps) {
  return (
    <div
      className={
        className ? `flex ${className}` : `flex ${reactUIFlexstyles['flex']}`
      }
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
};

export default Flex;
