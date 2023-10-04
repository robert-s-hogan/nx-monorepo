import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBookAuraIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'book-aura'];
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
        d="M105.063 18.03c71.2 31.42 129.344 86.117 152.5 155.75 23.155-69.633 78.953-124.33 150.03-155.75h-36.156c-53.802 15.416-89.834 45.46-107.25 92 2.238-52.074 18.275-78.34 40.25-92H203.094c21.98 13.66 38.044 39.926 40.28 92-17.415-46.54-53.446-76.584-107.25-92h-31.06zm386.968 4.157c-16.65 228.426-81.874 410.467-209.06 398.907 41.547 39.438 83.78 62.385 122.342 72.22l86.72-.002v-32.968c-27.303 13.718-52.895 14.545-130.938-13.438 68.627.614 101.042-14.37 130.937-51.656v-46.063c-20.77 32.913-58.994 60.416-130.936 75.438 64.71-34.947 107.585-89.884 130.937-180.844V22.188zM18.69 71.344V255.47c23.96 84.017 65.86 135.732 127.75 169.155-68.45-14.292-106.347-39.89-127.75-70.688v45.125c29.053 34.484 61.523 48.437 127.75 47.844-75.03 26.903-101.557 27.177-127.75 14.97v31.437h82.28c38.562-9.834 80.796-32.78 122.344-72.22-117.915 10.718-182.556-144.97-204.625-349.75zm113.687 82.406v176.28l4.875 2.658 112.063 60.875 4.468 2.406 4.44-2.408 112.06-60.875 4.908-2.656V153.75H356.5v165.188l-102.75 55.78-102.688-55.78V153.75h-18.687zm37.53.188v151.406l73.532 41.437V198.5l-73.53-44.563zm167.72 0l-75.5 45.78v148.188l75.5-42.562V153.938z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBookAuraIcon })
);
