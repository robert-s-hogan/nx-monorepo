import reactUIFlexstyles from './flex.module.css';

/* eslint-disable-next-line */
export interface FlexProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  role?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function Flex({ id, children, className, role, onClick }: FlexProps) {
  return (
    <div
      className={`${reactUIFlexstyles.flex} ${className}`}
      id={id}
      role={role}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Flex;
