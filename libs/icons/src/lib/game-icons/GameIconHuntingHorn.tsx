import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHuntingHornIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'hunting-horn'];
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
        d="M239.156 37.75c-10.482 0-18.78 8.3-18.78 18.78 0 10.483 8.298 18.75 18.78 18.75 10.482 0 18.78-8.267 18.78-18.75.002-10.48-8.298-18.78-18.78-18.78zm30.78 40.03c-3.68 5.29-8.692 9.602-14.53 12.44l68.875 128.155 11.44-18.188L269.936 77.78zm-61.342.282l-86.656 161.25 16.468 8.875 84.78-157.843c-5.847-2.782-10.873-7.042-14.592-12.28zM45.188 160.406l-24.97 3.313 3.563 45.186 29.845-3.25-8.438-45.25zm317.968 32.125l-35.03 52.814L442.75 364.75l54.875-32.156-134.47-140.063zM53.376 224.5l-17.22 1.875c2.953 19.654 8.28 38.592 15.657 56.47l31.593-29.72c-11.057-8.548-21.156-18.13-30.03-28.625zM109.78 254l-60.624 57 13.875 23.72 72.814-66.69L109.78 254zm215.845 14.625c-57.23 35.417-124.366 37.77-181.72 17.375l-58.843 53.844c41.063 52.304 103.08 86.312 172.938 86.312 65.384.002 123.118-19.914 161.875-59.406l-10.47-10.906c-15.392 12.397-35.67 22.09-54.75 25.375 11.426-8.788 24.36-20.352 35.064-31.876-32.882 22.27-73.838 35.722-101.283 32.344 31.562-8.1 70.43-32.47 90.407-57.657l-24.375-25.374c-18.687 9.08-42.456 13.885-63.033 12 15.763-6.55 34.606-16.258 49.25-26.344l-15.062-15.687z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHuntingHornIcon })
);
