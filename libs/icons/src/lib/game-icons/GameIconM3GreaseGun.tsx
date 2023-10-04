import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconM3GreaseGunIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'm3-grease-gun'];
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
        d="M163.042 247.9l-.31-12.46a47.42 47.42 0 0 0-10-.16c-.5 2.82-1.26 6.75-2.19 11.33zm24 1.86a18.33 18.33 0 0 0 5.1-6.26h8.52a27 27 0 0 1-8.53 12.46c-6.74 5.49-16.36 8.12-28.75 8.12a109.5 109.5 0 0 1-16.16-1.39c.56-2.68 1.12-5.21 1.64-7.75 21.97 3.23 32.87-.82 38.18-5.18zm132 142.74h-30v-130h30zM20.302 206.35a22.55 22.55 0 0 1 22.74-21.85h21s.09 15 .24 16h-21.24a6.62 6.62 0 0 0-6.77 6.39l-2.31 68.61a8 8 0 0 1-8 7.69h-.28a7.94 7.94 0 0 1-7.72-8.2zm346.74-54.56l13 14.07v11.92l-13 14.07zm127 14.71v12h-98v-12zm-399-47h6v9.14l13.36 6.86h-19.36zm230 127h-40v-32s-12.21-4.29-15.05-4.29a7.75 7.75 0 0 0-4.52 1.45l-20.29 14.4a7.86 7.86 0 0 1-4.55 1.46h-62.76c-3.6-5-12.35-8.71-20.81-8.71-9.42 0-18.49 3.74-19.73 11.75-1.91 12.38-15.64 74.54-15.64 74.54a13.86 13.86 0 0 1-17.53 10.36l-26.37-7.87a6.34 6.34 0 0 1-4.17-8.18c5.17-14.72 22.12-71.53 22.68-80.43.31-4.94-2.77-8.45-6.32-10.45h235.06v38zm-75-103h72v19h-72zm-16 8v27h104v-27h13v41h-271v-41z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconM3GreaseGunIcon })
);
