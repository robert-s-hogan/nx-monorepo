import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBrodieHelmetIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'brodie-helmet'];
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
        d="M256 74.246c-87.892 0-159.154 61.235-159.154 136.786 0 33.817 88.216 54.075 171.766 54.075 75.156 0 146.49-16.393 146.49-54.075.05-70.7-71.208-136.786-159.1-136.786zm172.12 107.03a124.91 124.91 0 0 1 3.657 29.703c0 17.66-9.82 41.857-56.59 56.984-27.346 8.84-65.194 13.715-106.565 13.715-44.06 0-88.442-5.467-121.782-15.005-18.7-5.34-33.6-11.843-44.383-19.333-10.14-7.044-22.224-19.075-22.224-36.363a135.414 135.414 0 0 1 3.263-29.59C50.74 195.395 31 213.275 31 232.797c0 44.216 100.776 80.07 225 80.07 124.226 0 225-35.812 225-80.07 0-19.605-19.894-37.59-52.88-51.52zM118.613 313.46c20.176 64.746 73.618 111.165 136.213 111.165 62.336 0 115.675-46.066 136.006-110.46a416.83 416.83 0 0 1-19.096 4.384c-20.145 52.662-64.963 89.42-116.91 89.42-52.133 0-97.1-37.016-117.11-90.002a413.867 413.867 0 0 1-19.103-4.508z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBrodieHelmetIcon })
);
