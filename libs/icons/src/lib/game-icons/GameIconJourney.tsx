import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconJourneyIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'journey'];
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
        d="M424.188 85.594c.33.05-.86.094-3.313.094-18.512 0-35.78 20.06-35.78 47.5 0 13.83 4.712 26.208 11.624 34.78l10.217 12.626-16.062 2.47c-10.56 1.617-17.663 6.432-23.625 14.342s-10.344 19.18-13.25 32.344c-5.186 23.492-5.59 52.425-5.625 78.156h30.438l.593 8.72 7.094 106.593h65.813l8.03-106.69.657-8.624h32c-.24-25.383-1.62-53.933-7.344-77.25-3.213-13.086-7.783-24.354-13.687-32.375-5.905-8.02-12.7-12.85-22.064-14.593l-15.72-2.937 10.283-12.25c7.228-8.623 12.186-21.138 12.186-35.313 0-25.74-15.5-45.406-32.28-47.562l-.188-.03zm-244.75 3.375c-45.9.006-99.844 5.373-161.625 17.905V126c268.018-37.648 341.545 38.15 226.25 79.344-117.327 41.92-210.503 252.258 159.406 270.594 4.362.438 8.85.687 13.436.687 22.28 0 42.34-5.452 56.125-13.594 13.787-8.14 20.595-18.14 20.595-27.905s-6.808-19.764-20.594-27.906c-.23-.138-.482-.272-.717-.408l-2 26.47-.657 8.656H369l-.563-8.75-3.28-49.5c-128.194 2.8-163.256-100.51-80.094-130.47 20.385-7.344 37.086-15.836 50.187-25.03.17-.822.32-1.655.5-2.47 3.262-14.774 8.256-28.498 16.594-39.562 4.946-6.563 11.24-12.07 18.72-15.97-3.124-42.547-68.335-81.236-191.627-81.217z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconJourneyIcon })
);
