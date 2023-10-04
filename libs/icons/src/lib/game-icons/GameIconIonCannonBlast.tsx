import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconIonCannonBlastIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'ion-cannon-blast'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className: propClassName, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`game-icon ${combinedClassNames}`}
      {...otherProps}
    >
      <path
        fill="currentColor"
        d="M19.01 18.54v34.09l262.992 262.99c7.32 7.32 14.19 9.506 20.45 9.302 6.262-.204 12.246-3.097 16.755-7.742 9.017-9.29 12.41-23.63-1.363-37.403L56.604 18.54H19.01zm406.86 199.636c-8.665-.085-17.745.958-27.01 3.008l9.28 17.21c6.013-1.06 11.738-1.59 17.108-1.564 15.373.074 27.91 4.55 36.51 13.15 13.76 13.76 16.965 37.6 8.467 67.002-.572 1.977-1.2 3.974-1.877 5.987l-22.125-52.392-9.045 67.264-33.51-46.225-1.564 58.94-37.875-18.31c11.532-14.72 19.73-30.216 24.026-45.077 5.89-20.378 4.493-40.825-8.75-54.068-8.277-8.278-19.37-11.928-31.498-12.063-7.278-.082-14.93 1.103-22.57 3.312-8.423 2.434-17.047 6.135-25.622 10.968l13.827 13.826c5.848-2.976 11.57-5.28 16.982-6.845 6.194-1.79 11.807-2.624 16.76-2.613 8.255.02 14.678 2.394 18.91 6.625 6.77 6.77 8.786 19.153 4.012 35.67-4.775 16.518-16.318 35.902-33.477 53.06-17.16 17.16-36.545 28.703-53.062 33.478-16.518 4.774-28.898 2.76-35.668-4.012-6.77-6.77-8.786-19.15-4.012-35.668 1.615-5.59 4.024-11.51 7.144-17.56l-13.812-13.81c-4.99 8.758-8.794 17.577-11.28 26.182-5.892 20.38-4.497 40.825 8.747 54.07 13.243 13.242 33.69 14.637 54.068 8.747 14.724-4.257 30.072-12.345 44.672-23.71l19.342 40.008-62.718 1.662 46.227 33.513-67.26 9.045 50.255 21.223c-.227.068-.456.14-.682.206-29.4 8.498-53.245 5.292-67.004-8.467-11.603-11.603-15.7-30.377-11.604-53.606l-17.198-9.272c-6.594 29.83-2.75 57.757 15.586 76.092 20.234 20.234 52.145 22.822 85.408 13.207 33.264-9.613 69.147-31.45 100.948-63.25 31.8-31.8 53.635-67.685 63.25-100.948 9.614-33.263 7.028-65.175-13.205-85.408-12.646-12.646-29.856-18.4-49.104-18.588z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconIonCannonBlastIcon })
);
