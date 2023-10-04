import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBoxingGloveSurpriseIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'boxing-glove-surprise'];
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
        d="M341.8 17.3c-18.3.42-39.5 6.07-53.1 14.34-18.4 11.43-32.1 29.09-38.4 51.59C275.2 93.31 302 116 329.9 154c13.6 18.6 20.4 38.2 21.3 55.7-1.7 19.3-5.2 36.9-19.8 45.9 41.9 25.8 87.3 23.2 119.9 3.6 23-13.8 39.6-36.2 44.3-64.2 4.7-28-2.5-62.1-29.2-99.72-39.1-55.07-85-77.45-124.6-77.98zM221.4 95.69c-12.7-.13-22.5 5.41-30.4 15.21-21.9 27.2-23.2 94.4 23.4 163.5l-15.5 10.5c-17.1-25.3-28.6-50.7-35.2-74.6-15.1 9.7-24.5 21.7-24.6 35.8-.2 21.9 10.3 46.8 27.2 67.6 17 20.8 40.2 37.2 63.4 43.3 11.7 3.1 20.7.5 29.4-6.3 4.2-3.2 8.1-7.5 11.8-12.5-9.7-2.2-19.5-5.6-27.5-11l9.9-14.6c38.9 22.1 77.7 6.2 116.5-22.4-21.6-4.3-43.3-13.9-63.5-29.6-6.2-.7-12.6-2.6-19.1-5.7-18.4-8.7-38.5-26.6-60.5-56.5l15.1-11.1c20.8 28.4 39.3 44 53.4 50.7 14.1 6.7 22.4 5.1 28.2.4 5.8-4.6 9.8-14.4 9.1-27.7-.6-13.4-6.1-29.7-17.7-45.6-29.1-39.7-56.1-60-77.1-66.58-5.5-1.45-11.3-2.74-16.3-2.83zM122.7 292l-17.5 6.5c12.4 34 51.8 60.1 93.2 66-26.3-20.6-63.4-42.7-75.7-72.5zm-36.31 36.4l-17.55 6.4c13.72 37.4 59.96 65.4 105.76 67.2l.8-18.7c-38.3-1.5-79.25-28.3-89.01-54.9zm-36.34 36.3l-17.55 6.4c13.72 37.5 59.96 65.4 105.8 67.3l.8-18.7c-33.8-7.5-77.1-25.8-89.05-55zm-29.57 49v28c21.15 19.1 51.29 31.8 81.52 33l.7-18.7c-30.83-5.9-65.41-19.6-82.22-42.3zm0 66.4v13.6H68.8c-17.68-2.1-34.78-6.6-48.32-13.6z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBoxingGloveSurpriseIcon })
);
