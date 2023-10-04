import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSatelliteCommunicationIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'satellite-communication'];
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
        d="M189.1 18l14.5 14.47 14.1-14.11-.4-.36zm54.3 0l-.3.31 21.3 21.26 17-16.99-4.6-4.58zm-73.8 6.01l-11.7 11.67 14.2 28.28 18.7-18.72zm60.8 7.06l-14.1 14.11 21.2 21.25 14.1-14.1zm-26.9 26.89l-18.7 18.73 28.3 14.16 11.7-11.66zM163.2 72.8L147 89l12.8 12.8L176 85.52zm-50.1 7.77L80.61 113.1l58.79 58.8h32.5v-32.6zm101.7 52.03c-1.4 19.6-11.8 39.7-27.2 55-15.3 15.4-35.4 25.8-55 27.2l3.5 17.8c24.1-2.3 46.8-14.8 64.3-32.2 17.4-17.5 29.9-40.2 32.2-64.3zm47.5 9.5c-6.4 63.8-56.4 113.7-120.2 120.2l3.5 17.7c70.6-8 126.4-63.8 134.4-134.4zM89.03 147l-16.22 16.2L85.54 176l16.26-16.3zM340 157.6c-7.4 37.9-28.2 78.8-58.7 112.3-32.2 35.5-74.9 62.6-123.6 70.6l3.5 17.7c53.1-8.9 99.1-38.4 133.5-76.1 32.5-35.9 55-79.2 63-121zm-304.21.3l-11.66 11.7 21.23 21.2 18.71-18.7zM434 176.4C422.9 231.5 393.8 285 353.7 329l16 9.2c40.7-45.7 70.5-100.7 82-158.3zm-357.2 8.4l-18.73 18.7 21.22 21.3 11.66-11.7zM18 189v28.2l.46.5 14.13-14.1zm27.3 27.3l-14.11 14.1 21.26 21.2 14.09-14.1zm-26.88 26.8l-.42.4v33.2l4.7 4.7 16.99-17zm418.38 95.4l-98.3 98.3c11.4 6.5 30.5 12.6 49.5 14.8 24.1 2.6 47.8-1.7 54.8-8.8 7.1-7 11.4-30.7 8.8-54.8-2.2-19-8.3-38.1-14.8-49.5zm-92.4 5.9l22.3 38.8 16.5-16.5zm-15.4 9.2c-44 40.2-97.5 69.3-152.6 80.4l3.5 17.7c57.6-11.5 112.6-41.3 158.3-82zM469.4 425c-1.8 12.1-6.1 22.8-13.8 30.6-7.8 7.7-18.5 12-30.6 13.8V487h62v-62z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSatelliteCommunicationIcon })
);
