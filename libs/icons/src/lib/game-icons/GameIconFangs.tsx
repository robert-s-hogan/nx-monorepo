import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFangsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'fangs'];
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
        d="M169.57 106.12c-1.882-14.48-28.184-30.424-41.092-30.424-2.54 0-4.56.612-5.773 1.974-21.81 24.385 14.225 81.262 14.225 81.262s35.746-28.785 32.64-52.812zm128.832 60.524s34.315-54.186 13.544-77.36c-1.155-1.292-3.083-1.88-5.496-1.88-12.308 0-37.352 15.183-39.142 28.98-2.967 22.78 31.094 50.26 31.094 50.26zm-53.724-50.352c-1.79-13.798-26.845-28.98-39.14-28.98-2.414 0-4.343.588-5.497 1.88-20.782 23.22 13.544 77.36 13.544 77.36s34.06-27.387 31.094-50.26zM58.128 58.896a16.546 16.546 0 0 0-1.664.08c-87.75 8.937 11.373 286.056 40.55 304.484 0 0-16.984-151.636 2.795-244.236 7.238-34.107-24.006-60.328-41.683-60.328zm397.394.08a16.465 16.465 0 0 0-1.663-.08c-17.678 0-48.968 26.198-41.682 60.328 19.778 92.6 2.794 244.236 2.794 244.236 29.223-18.416 128.312-295.535 40.55-304.483zm-72.013 16.72c-12.92 0-39.258 15.945-41.094 30.424-3.106 23.97 32.652 52.823 32.652 52.823s36.024-56.888 14.225-81.26c-1.224-1.375-3.244-1.987-5.784-1.987zm-148.3 348.98c-2.032-11.37-25.598-35.353-25.598-35.353s-20.54 23.97-20.32 33.727c0 2.147-1.155 23.092 2.03 26 2.876 2.645 12.84 4.043 22.62 4.043 9.468 0 18.75-1.305 21.268-4.042 2.31-2.47.335-22.733 0-24.373zm-60.04-24.35c-12.065-20.69-19.155-51.01-23.092-73.733-3.094-17.966-4.19-31.174-4.19-31.174-15.127 11.81-44.292 137.675 2.54 137.675a30.02 30.02 0 0 0 4.952-.428c4.62-.762 10.46-4.295 15.01-9.236 5.935-6.43 9.456-15.17 4.78-23.103zm188.85-104.93s-1.006 12.03-3.777 28.738c-3.81 22.965-10.98 54.74-23.485 76.204-3.764 6.466-2.136 13.417 1.744 19.236 4.618 6.86 12.308 12.135 18.035 13.082a30.124 30.124 0 0 0 4.953.427c46.912-.046 17.677-125.91 2.563-137.734zm-41.406 127.7c.22-9.757-20.32-33.726-20.32-33.726s-23.532 23.935-25.518 35.307c-.254 1.444-2.563 21.592 0 24.386 2.564 2.794 11.812 4.04 21.268 4.04 9.78 0 19.744-1.396 22.62-4.04 4.387-4.088 1.962-25.286 1.985-26.002zm-143.726 5.496l.243.115v-.44z"
        className="cls-2"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFangsIcon })
);
