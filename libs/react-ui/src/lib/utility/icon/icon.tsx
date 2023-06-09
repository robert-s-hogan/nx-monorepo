import { IconProps } from '@with-nx/types';

export const Icon: React.FC<IconProps> = ({ name }) => {
  switch (name) {
    case 'add':
      return (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 'remove':
      return (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M7 11a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return null;
  }
};
