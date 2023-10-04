import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconNoseSideIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'nose-side'];
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
        d="M21.307 21.307v469.386h202.83c-4.174-21.84-1.993-42.658 6.646-60.482 14.007-28.898 44.732-48.323 86.37-51.22l.19-.013.194-.004c13.59-.456 44.624-11.956 61.684-31.192 8.53-9.617 13.925-20.642 14.282-33.626.357-12.984-4.327-28.633-18.682-47.488-53.87-70.76-118.502-154.877-153.504-245.36zm112.767 248.937l16.998 5.926c-7.097 20.357-10.2 36.084-10.066 48.324.132 12.24 3.172 20.972 9.11 29.108 11.874 16.27 37.717 29.868 75.25 49.265l-8.264 15.992c-37.432-19.346-65.516-32.708-81.528-54.647-8.006-10.97-12.4-24.158-12.566-39.526-.167-15.367 3.568-32.934 11.066-54.443zM288.44 330.13c19.56-.24 33.37 5.704 36.013 15.497 1.73 6.472-1.583 14.065-9.324 21.38-5.33-15.247-27.126-21.834-49.005-14.812-20.975 6.755-34.747 23.72-31.6 38.928-13.273-1.856-22.015-7.213-24.076-14.754-3.99-14.79 18.3-33.662 49.78-42.15 9.55-2.576 19.25-3.982 28.21-4.09z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconNoseSideIcon })
);
