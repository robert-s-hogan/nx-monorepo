import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSamusHelmetIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'samus-helmet'];
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
        d="M265 41.08c65 2.2 111.7 28.07 142.8 57.38 16.3 15.34 28.3 31.64 36.1 45.74 7.5 13.8 10.8 25.8 11 31.1l-31 139.7-95.4 79.4-30.6 76.5h-83.8l-30.6-76.5L88.1 315l-31-139.7c.2-5.3 3.5-17.3 11-31.1 7.8-14.1 19.8-30.4 36.1-45.74C135.3 69.15 182 43.28 247 41.08V166.9h-26.7l-31.4 31.4L85.1 181l18.7 112.2 97 64.7 17.4 39.2 75.7-.4 17.3-38.8 97-64.7 16.7-99.8 2-12.4-103.8 17.3-31.4-31.4H265zM467.3 202.6L487 242v95.3L442.3 315zm-422.6 0l25 112.4L25 337.3V242zm388.5 128l44.9 22.4-155 103.3 20.4-50.9zm-354.4 0l89.7 74.8 20.4 50.9L33.9 353z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSamusHelmetIcon })
);
