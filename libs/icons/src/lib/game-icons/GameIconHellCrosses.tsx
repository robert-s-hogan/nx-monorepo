import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHellCrossesIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'hell-crosses'];
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
        d="M112 64c17.48 40.785 28.587 87.938 33.336 136.818C110.51 194.896 69.158 186.632 16 176v160c53.158-10.632 94.51-18.896 129.336-24.818C140.586 360.062 129.48 407.215 112 448h128c-18.493-43.15-29.852-93.428-34.096-145.338 34.994-3.54 65.198-3.54 100.192 0C301.852 354.572 290.493 404.85 272 448h128c-17.48-40.785-28.587-87.938-33.336-136.818C401.49 317.104 442.842 325.368 496 336V176c-53.158 10.632-94.51 18.896-129.336 24.818C371.414 151.938 382.52 104.785 400 64H272c18.493 43.15 29.852 93.428 34.096 145.338-34.994 3.54-65.198 3.54-100.192 0C210.148 157.428 221.507 107.15 240 64H112z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHellCrossesIcon })
);
