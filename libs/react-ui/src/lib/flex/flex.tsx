import { FlexProps } from '@with-nx/types';
import reactUIFlexstyles from './flex.module.css';

export function Flex({ id, children, className, ariaLabel }: FlexProps) {
  return (
    <div
      className={`flex ${reactUIFlexstyles.flex} ${className}`}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}

export default Flex;
