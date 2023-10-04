import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGlockIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'glock'];
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
        d="M55.505 435.172h91.88v-16.518h-91.88zm265.317-173.437v-49.326l16.518-.795v66.639H218.618c2.158-5.162 4.316-11.356 6.442-16.518zM466.385 76.828l14.949 9.405h-14.949zm-387.136.114h15.486v9.291H79.249zm179.982 138.45c.207 9.374 2.468 21.442 10.592 32.458-9.952-2.065-22.712-14.03-30.61-22.444 1.353-3.407 2.602-6.504 3.697-9.219zm-134.558-63.088v-49.553h16.518v49.553zm66.071 0v-49.553h16.518v49.553zm-120.786 0v-49.553h38.198v49.553zm87.75 0v-49.553h16.519v49.553zM96.49 217.488c.413-12.389-14.608-33.335-30.899-33.335-20.977 0-11.593-8.104-1.331-15.33H486V187.9l-254.312 12.285c-4.976 11.625-22.712 56.976-36.39 92.149l4.779 10.324-9.477 1.858c-3.49 9.033-11.5 29.69-14.856 38.414l3.645 9.797-8.26 2.953c-12.388 32.313-17.55 46.456-17.55 46.456H53.44S26 393.216 26 385.216c-.124-43.99 69.292-131.74 70.49-167.728zM223.78 102.75H486v49.553H223.78z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGlockIcon })
);
