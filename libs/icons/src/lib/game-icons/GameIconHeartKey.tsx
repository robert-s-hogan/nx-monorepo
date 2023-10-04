import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHeartKeyIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'heart-key'];
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
        d="M190.4 39.83c-14.4.16-28.1 4.81-39.9 12.2-26.9 17.04-42.2 48.27-30.8 74.77l6.8 15.9-15.9-6.8c-21.54-9.3-46.22-.9-63.82 17-4.03 4.2-7.78 8.8-10.96 13.8-16.97 27-19.45 63.9 13.15 96.5C72.23 286.4 118 291.5 164 290.4c23.1-.6 45.9-2.5 65.9-3.7 5-.3 9.8-.6 14.4-.8l186.3 186.3 25.4-25.4-.1-.1 32.6-32.5-25.4-25.4-32.6 32.5-18.4-18.4 21.2-21.2-25.4-25.4-21.2 21.2-17-17 55.1-55.2-25.4-25.4-55.1 55.2-74.6-74.6c.2-4.6.5-9.4.8-14.4 1.2-20 3.1-42.8 3.7-65.9 1-45.9-4-91.75-27.2-115.02-18.3-18.34-38.1-25.55-56.6-25.35z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHeartKeyIcon })
);
