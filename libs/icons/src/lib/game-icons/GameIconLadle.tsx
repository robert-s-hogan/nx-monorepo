import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLadleIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'ladle'];
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
        d="M52.67 60.6C162.7 84.64 167.3 323.4 228.7 401.4c21.9 27.7 44.6 53.5 69.1 70.2 20.3 13.8 48.5 22.3 79.5 22.5 30.8.3 58.5-8.1 79.3-21.2 20.8-13 35.9-45.2 36.1-66.3.1-21.2-15.1-37.6-35.7-48.9-20.7-11.2-48.5-17.7-79-17.9-30.5-.3-59.6 3.6-79.3 16.5-25.5 16.7-46.3 17.6-62.6-1.4-72.6-84.4-47.5-286.22-155.91-332.36C37.8 4.485-17.15 44.03 52.67 60.6zM277.5 422.4c50.2 57 167.9 42.9 196.3-.1-1.3 7.6-15.8 27.9-25.4 34-17.9 11.2-43 19.1-70.9 18.9-28.1-.2-53.9-8.7-71.7-20.1-9.1-5.9-29.1-25.4-28.3-32.7z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLadleIcon })
);
