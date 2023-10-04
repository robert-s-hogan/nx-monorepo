import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCard4DiamondsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'card-4-diamonds'];
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
        d="M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363c0 21.263 13.074 38.5 29.2 38.5h275.298c16.126 0 29.198-17.237 29.198-38.5v-363c0-21.263-13.072-38.5-29.198-38.5H119.436zm26.882 3.717h.002l47.393 58.27-47.393 58.286-47.375-58.287 47.373-58.27zm124.436 139.908h7.726v112.453h27.34v10.104h-27.34v25.32c0 2.219.872 4.002 2.616 5.35 2.536 1.822 5.468 2.734 8.797 2.734h10.103v8.914h-65.975v-8.914h12.245c4.12 0 7.133-.872 9.035-2.615 1.981-1.744 2.97-4.28 2.97-7.608v-23.181h-67.28v-11.41l79.763-111.147zM258.27 211.84l-57.414 80.238h57.414V211.84zm107.39 140.683h.001l47.393 58.27-47.393 58.287-47.375-58.287 47.373-58.27z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCard4DiamondsIcon })
);
