import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDrippingGooIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'dripping-goo'];
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
        d="M257.844 17.28c-54.286 0-103.57 14.478-139.875 38.5-36.305 24.025-60 58.306-60 96.94 0 24.244 9.323 46.797 25.25 66.155 20.198 41.592 34.85 102.377 20.5 144.594-3.513 10.328-19 38.088-19 50.717 0 17.12 17.632 37.563 34.75 37.563 17.116 0 34.778-20.442 34.78-37.563 0-12.706-15.123-40.142-18.03-50.718-11.415-41.524-10.246-93.93 17.593-94.97 13.083 5.394 27.145 9.777 41.937 13.03 22.872 10.78 33.56 52.68 21.844 69.564-2.73 3.936-13.75 15.01-13.75 25.906 0 11.105 9.8 23.47 24.062 23.47 13.314 0 24.063-10.57 24.063-23.47 0-12.69-12.177-21.875-14.44-25.906-8.562-18.992-6.686-51.025 18.782-52.406 29.17-1.583 42.28 83.25 25.22 107.843-4.535 6.537-23.376 27.08-23.376 46.533 0 19.87 15.403 41.283 39.875 41.28 24.95 0 39.845-23.902 39.845-41.28 0-16.962-20.308-39.84-24.063-46.532-16.427-29.282-9.22-119.687 28.875-130.717 1.352-.473 2.338-.91 3.063-1.344 4.343-1.437 8.586-2.988 12.75-4.626.018-.007.044.007.063 0 39.218-5.213 35.794 40.094 55.468 40.094 17.347 0 9.824-61.536 28.69-105.5 9.592-15.822 15-33.27 15-51.72 0-38.632-23.666-72.913-59.97-96.937-36.304-24.022-85.62-38.5-139.906-38.5zM193.5 43.626c-44.808 19.875-74.47 54.414-74.47 93.688 0 61.603 72.957 111.53 162.94 111.53 71.58 0 132.346-31.623 154.217-75.562-6.408 23.038-23.457 44.077-48.75 60.814-24.52 16.226-56.552 28.032-92.562 32.906-19.593 1.22-41.32 4.405-63.375 1.22-40.332-3.84-76.304-16.316-103.22-34.126-32.654-21.61-51.624-50.374-51.624-81.375 0-31.002 18.97-59.736 51.625-81.345 18.12-11.99 40.33-21.593 65.22-27.75zM416.125 329.03c-15.707 0-28.438 12.732-28.438 28.44 0 15.705 12.73 28.436 28.438 28.436 15.707 0 28.438-12.73 28.438-28.437 0-15.708-12.73-28.44-28.438-28.44z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDrippingGooIcon })
);
