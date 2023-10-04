import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBasketIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'basket'];
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
        d="M128 30c-10.8 0-19 5.73-24.9 11.79-5.83 6.05-10.34 13.22-14.59 21.44-8.5 16.44-15.67 37.27-21.88 60.07-8.17 30-14.5 62.8-17.88 91.7h36.4c3.3-25.9 9.02-55.9 16.25-82.3 5.8-21.2 12.6-40.37 19.1-52.93 3.2-6.28 6.5-10.86 8.5-12.93.7-.73.8-.73.9-.84h252.2c.1.11.2.11.9.84 2 2.07 5.3 6.65 8.5 12.93 6.5 12.56 13.3 31.73 19.1 52.93 7.2 26.4 13 56.4 16.2 82.3h36.4c-3.3-28.9-9.7-61.7-17.8-91.7-6.2-22.8-13.4-43.63-21.9-60.07-4.3-8.22-8.8-15.39-14.6-21.44C403 35.73 394.8 30 384 30H128zM32 233c-20 0-20 46 0 46h448c20 0 20-46 0-46H32zm27.2 64c.45 2.2.88 4.5 1.3 6.8l3.51 3.5L74.24 297H59.2zm40.6 0l-23.04 23L128 371.2l51.2-51.2-23-23H99.8zm82 0l10.2 10.2 10.2-10.2h-20.4zm46 0l-23 23 51.2 51.2 51.2-51.2-23-23h-56.4zm82 0l10.2 10.2 10.2-10.2h-20.4zm46 0l-23 23 51.2 51.2 51.2-51.2-23-23h-56.4zm82 0l10.2 10.2 3.5-3.5c.4-2.3.9-4.5 1.3-6.7h-15zM192 332.8L140.7 384l51.2 51.2 51.3-51.2-51.2-51.2zm128 0L268.8 384l51.2 51.2 51.2-51.2-51.2-51.2zm-254.58 1.4c3.82 25.9 7.56 54.3 13.36 79.8.4 1.8.83 3.5 1.25 5.2L115.2 384l-49.78-49.8zm381.08.1L396.8 384l35.2 35.2c.4-1.8.8-3.5 1.2-5.2 5.8-25.5 9.6-53.8 13.3-79.7zM128 396.7l-42.37 42.4c3.64 11.2 7.86 21 12.71 28.6C106.6 480.6 115.4 487 128 487h12.2l39-39.1-51.2-51.2zm128 .1l-51.2 51.3 38.9 38.9h24.6l38.9-39-51.2-51.2zm128 0L332.8 448l39 39H384c12.6 0 21.4-6.4 29.7-19.3 4.8-7.6 9-17.4 12.6-28.6L384 396.8zm-191.9 64L165.8 487h52.5l-26.2-26.2zm127.9 0L293.8 487h52.4L320 460.8z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBasketIcon })
);
