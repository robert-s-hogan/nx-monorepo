import { FlexProps } from '@with-nx/types';

export function Flex({ id, children, className, ariaLabel }: FlexProps) {
  return (
    <div className={`flex w-full ${className}`} id={id} aria-label={ariaLabel}>
      {children}
    </div>
  );
}

export default Flex;
