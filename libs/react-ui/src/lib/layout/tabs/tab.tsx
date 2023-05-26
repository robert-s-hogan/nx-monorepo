import { Button } from '@with-nx/react-ui';

/* eslint-disable-next-line */
export interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function Tab({ label, isActive, onClick }: TabProps) {
  const activeStyles = isActive
    ? 'z-20 bg-gray-200 text-black font-bold border-b-2 border-black'
    : '';
  return (
    <Button
      className={`tab cursor-pointer mb-[-1.1px] p-2 opacity-60 border-b-2 border-black rounded z-10 bg-white ${activeStyles}`}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

export default Tab;
