import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBasketballBasketIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'basketball-basket'];
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
        d="M256 23C140.57 23 73.01 90.16 24.283 171.37L23 173.507V309.85l142.268 63.228C175.353 408.092 183 436.353 183 480h18c0-2.378-.028-4.703-.07-7h22.304l.405 7.484 17.973-.968-.35-6.516h29.14l-.366 6.496 17.973 1.008.422-7.504h22.64c-.042 2.3-.072 4.624-.072 7h18c0-43.265 7.505-72.296 17.453-106.797L489 309.85V173.508l-1.283-2.14C438.99 90.16 371.43 23 256 23zm0 18c107.607 0 167.912 59.792 215 137.563V298.15l-118.027 52.457c1.952-6.838 3.947-14.016 5.96-21.607H384v-34h-23V167H151v128h-23v34h25.023c1.965 7.597 3.906 14.745 5.81 21.52L41 298.15V178.563C88.088 100.793 148.393 41 256 41zm-87 144h174v110H169V185zm2.61 144h43.863l1.617 30h-37.115c-2.71-9.403-5.528-19.275-8.364-30zm61.888 0h44.982l-1.683 30h-41.682l-1.617-30zm63.012 0h43.804c-2.88 10.63-5.75 20.51-8.507 30h-36.98l1.683-30zm-111.377 48h32.928l1.618 30h-26.756c-2.27-10.02-4.922-19.86-7.79-30zm50.953 0h39.7l-1.682 30h-36.4l-1.618-30zm57.73 0h32.825c-2.83 10.065-5.443 19.92-7.683 30h-26.824l1.683-30zm-97.308 48h24.14l1.618 30h-22.14c-.762-10.673-2.002-20.55-3.618-30zm42.166 0h34.422l-1.684 30h-31.12l-1.618-30zm52.45 0h24.31c-1.59 9.476-2.808 19.37-3.563 30h-22.43l1.685-30z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBasketballBasketIcon })
);
