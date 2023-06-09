import { AvatarProps } from '@with-nx/types';

export const Avatar: React.FC<AvatarProps> = ({ src, alt, size }) => {
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'h-6 w-6';
      case 'medium':
        return 'h-10 w-10';
      case 'large':
        return 'h-14 w-14';
      default:
        return '';
    }
  };

  return (
    <div className={`rounded-full overflow-hidden ${getSizeClass()}`}>
      {src ? (
        <img src={src} alt={alt} className="object-cover w-full h-full" />
      ) : (
        <span className="block bg-gray-300 text-center text-xs leading-6">
          {alt}
        </span>
      )}
    </div>
  );
};
