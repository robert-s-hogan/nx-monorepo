import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCraftingIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'crafting'];
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
        d="M25 25v206h110v-3.3L99.27 192 135 156.3V25H25zm398 94c-16.5 0-31.3 3.4-41.2 8.4-10 5-13.8 10.6-13.8 14.6s3.8 9.6 13.8 14.6c9.9 5 24.7 8.4 41.2 8.4 16.5 0 31.3-3.4 41.2-8.4 10-5 13.8-10.6 13.8-14.6s-3.8-9.6-13.8-14.6c-9.9-5-24.7-8.4-41.2-8.4zm-263 37.7L124.7 192l64 64-64 64 35.3 35.3 76.3-76.3H329v37.8l72.9-60.8-72.9-60.8V233h-92.7L160 156.7zm208 12.8v34.8l62.1 51.7-62.1 51.7V366c0 8 4.8 13.8 15 18.9 10.2 5.2 25.1 8.1 40 8.1 14.9 0 29.8-2.9 40-8.1 10.2-5.1 15-10.9 15-18.9V169.5c-1.8 1.1-3.7 2.2-5.7 3.2-13.2 6.6-30.4 10.3-49.3 10.3s-36.1-3.7-49.3-10.3c-2-1-3.9-2.1-5.7-3.2zM80 361c-30.48 0-55 24.5-55 55s24.52 55 55 55c30.5 0 55-24.5 55-55s-24.5-55-55-55z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCraftingIcon })
);
