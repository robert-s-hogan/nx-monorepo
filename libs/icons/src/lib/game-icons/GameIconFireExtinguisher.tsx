import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFireExtinguisherIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'fire-extinguisher'];
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
        d="M135.72 27.47l-10.609 14.54c20.374 14.867 34.059 31.213 46.008 48.312l20.98-1.48c-13.992-21.06-30.188-42.259-56.378-61.371zm-59.488 75.985l.645 29.988 69.268-4.836 9.376-22.6-79.289-2.552zm123.538 2.893l-25.653 1.808-11.883 28.645a163.104 163.104 0 0 1 14.856 4.637c.249-6.83 2.59-13.402 6.43-19.018 4.246-6.21 10.56-11.397 18.459-13.524l-2.21-2.548zm10.324 19.498c-.95-.018-1.841.081-2.692.252-3.401.682-6.657 3.02-9.023 6.48-2.366 3.46-3.558 7.866-3.268 11.313.283 3.356 1.376 5.674 4.545 7.672 1.714.925 3.4 1.882 5.067 2.863l11.22-27.047c-2.203-1.073-4.123-1.5-5.85-1.533zm22.64 8.037l-6.898 16.627 20.932 8.877c8.02 3.402 13.324 10.249 17.068 21.662 3.744 11.413 5.298 26.912 5.205 44.412-.186 35-6.696 77.83-10.578 115.127-1.941 18.649-3.238 35.919-2.611 50.61.626 14.69 2.625 27.223 10.71 36.171 4.043 4.474 9.955 7.515 16.295 8.108 6.34.593 12.92-.86 20.043-3.805 10.923-4.516 23.474-12.68 38.745-25.186l-16.479-9.925c-12.173 9.487-21.913 15.487-29.143 18.476-5.35 2.212-9.185 2.733-11.49 2.518-2.304-.216-3.269-.765-4.615-2.254-2.692-2.98-5.528-11.875-6.082-24.87-.554-12.994.623-29.669 2.53-47.98 3.81-36.622 10.478-79.777 10.675-116.894.098-18.559-1.356-35.65-6.103-50.12-4.748-14.47-13.42-26.8-27.143-32.62l-21.06-8.934zm-102.203 16.553c-13.51-.013-23.874 3.42-29.945 9.699L80.182 209.32l131.162 54.412 20.404-49.185c.156-8.732-4.732-18.492-14.283-28.047-9.983-9.987-24.579-19.2-40.281-25.715-15.703-6.514-32.532-10.337-46.653-10.35zm295.276 38.957l-76.301 156.183 26.478 15.95 102.567-140.364-52.744-31.77zM73.285 225.947L67.92 238.88l131.16 54.412 5.365-12.932-131.16-54.412zm-12.262 29.557l-11.496 27.71 44.336 18.393L19.525 480.8 18 480.166V494h97.816l76.368-184.084-131.16-54.412zM42.63 299.84L18 359.209v78.293l52.34-126.166-27.711-11.496zm298.945 61.973l-8.916 18.248 20.68 12.455 11.982-16.399-23.746-14.305z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFireExtinguisherIcon })
);
