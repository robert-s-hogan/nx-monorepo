import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFleurDeLysIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'fleur-de-lys'];
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
        d="M256 24c-31.466 48-62.932 96-62.932 160 0 56.794 37.144 113.568 45.514 148h34.836c8.37-34.432 45.514-91.206 45.514-148 0-64-31.466-112-62.932-160zM98.637 206c-47.2 0-78.664 32-78.664 80 0 32 22.115 63.526 62.93 64-15.732-16 .002-64 31.468-64 31.89 0 56.58 21.916 69.253 46h33.828c-13.744-47.52-49.108-126-118.813-126zm314.726 0c-69.705 0-105.07 78.48-118.814 126h33.827c12.673-24.084 37.362-46 69.252-46 31.465 0 47.2 48 31.466 64 40.816-.474 62.93-32 62.93-64 0-48-31.464-80-78.663-80zM153.076 350c-38.705 0-54.44 16-54.44 48 0 16 15.734 48 47.2 48 35.4 0 61.948-27 73.01-54h-35.682c-4.657 3.57-11.5 6-21.596 6-15.733 0-31.464-32-8.492-48zm37.694 0c.017.064.03.127.048.19-13.29 2.16-12.694 23.343 1.793 23.79v.02H319.39l-.003-.02c14.486-.447 15.083-21.63 1.792-23.79.017-.063.03-.126.048-.19H190.77zm168.154 0c22.972 16 7.24 48-8.492 48-10.096 0-16.94-2.43-21.596-6h-35.682c11.062 27 37.61 54 73.01 54 31.466 0 47.2-32 47.2-48 0-32-15.735-48-54.44-48zm-118.656 42c-15.733 16-15.734 48-31.467 64l31.468-16c0 16 0 32 15.732 48 15.733-16 15.732-32 15.732-48l31.467 16c-15.734-16-15.735-48-31.468-64h-31.464z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFleurDeLysIcon })
);
