import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLungsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'lungs'];
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
        d="M255.875 29.406A9 9 0 0 0 247 38.53v118.314l-15.188 18.97C232.602 181.416 233 186.87 233 192v11.156l23-28.75 23 28.75V192c0-5.13.398-10.583 1.188-16.188L265 156.845V38.53a9 9 0 0 0-9.125-9.124zM176 121c-4.204 0-14.86 3.97-26.688 12.063-11.828 8.094-25.28 19.814-38.125 33.468-25.688 27.31-48.756 62.726-54.343 91.19-7.464 38.02-11.432 81.626-11.532 119.342-.1 37.717 4.43 70.268 10.75 82.907.458.913 2.002 2.488 6.47 3.717 4.466 1.23 11.21 1.775 19.187 1.313 15.95-.925 36.805-5.69 57.06-13.406 20.257-7.717 40-18.395 54.126-30.438C207.033 409.113 215 396.25 215 384V192c0-13.92-4.043-33.063-11.375-47.625C196.293 129.813 186.832 121 176 121zm160 0c-10.832 0-20.293 8.813-27.625 23.375C301.043 158.937 297 178.08 297 192v192c0 12.25 7.967 25.113 22.094 37.156 14.127 12.043 33.87 22.72 54.125 30.438 20.255 7.716 41.11 12.48 57.06 13.406 7.977.462 14.722-.084 19.19-1.313 4.466-1.228 6.01-2.804 6.467-3.718 6.32-12.64 10.85-45.19 10.75-82.908-.1-37.716-4.067-81.32-11.53-119.343-5.588-28.464-28.656-63.88-54.344-91.19-12.845-13.653-26.297-25.374-38.125-33.468C350.858 124.97 340.204 121 336 121z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLungsIcon })
);
