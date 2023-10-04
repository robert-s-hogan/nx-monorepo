import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGalleyIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'galley'];
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
        d="M273.3 27.85v34.21l-24.8 4.97 3.6 17.64 21.2-4.24v56.47l-41.2 10.2 4.4 17.4 36.8-9.1V355c6-.2 12-.3 18-.5V150.9l57.2-14.2-4.4-17.4-52.8 13.1V76.83l40.8-8.17-3.6-17.65-37.2 7.45V27.85zm-96 144.05v34.2l-24.8 5 3.6 17.6 21.2-4.2v56.4l-41.2 10.3 4.4 17.4 36.8-9.2v57.2c6 0 12-.1 18-.2v-61.5l57.2-14.2-4.4-17.4-52.8 13.2v-55.6l40.8-8.2-3.6-17.6-37.2 7.4v-30.6zm192 0v34.2l-24.8 5 3.6 17.6 21.2-4.2v56.4l-41.2 10.3 4.4 17.4 36.8-9.2v52.1c6.1-.3 12.1-.6 18-1v-55.6l57.2-14.3-4.4-17.4-52.8 13.2v-55.5l40.8-8.2-3.6-17.6-37.2 7.4v-30.6zM22.18 326.5l7.26 29c29.1.8 63.18 1.2 99.86 1.3v-17zm470.62 33.6C381.6 374 150 377.2 21.86 373.2l11.43 45.7h27.06l-41.12 51.4 14.06 11.2 50.06-62.6h25.05l-41.2 51.4 14.06 11.2 50.14-62.6h25l-41.1 51.4 14 11.2 50.1-62.7h25l-41.1 51.4 14 11.2 50.1-62.6h27.2l-43.3 54.1 14 11.2 52.2-65.3h25l-43.3 54.1 14 11.2 52.2-65.3h25.1l-43.3 54.1 14 11.2 52.3-65.3h25.1l-43.3 54.1 14 11.2 52.2-65.3h24.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGalleyIcon })
);
