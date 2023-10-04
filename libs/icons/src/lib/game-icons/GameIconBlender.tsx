import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBlenderIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'blender'];
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
        d="M256.9 25.12c-18.2 0-36.5 1.8-55 5.36-3 .63-5 3.63-5 6.92 0 3.3 3 5.81 6 5.81h107c4 0 7-2.5 7-5.8 0-3.29-2-6.29-5-6.93-18.5-3.59-36.7-5.37-55-5.36zm-96 32.18-24 20.16v17.63h240V77.46l-24-20.16zm12 54.9v16.9h163.9v-16.9zm-53 .2 20 55.1v-1.6c10 105 45 165.2 45 165.2l3 4.2h136l3-4.2s15-26.4 29-74.6l49-19.8c27-39.6 34-79.8 35-103.4 1-5.4-1-10.7-5-14.7s-9-6.2-14-6.2h-64c0 114.4-34 187.9-43 205.8h-116c-10-17.9-44-91.4-44-205.8zm254 11.8h37c3 0 6 1.3 8 3.7 3 2.3 4 5.4 3 8.6-1 18.2-7 53.3-27 83.1l-34 14.9c7-30.4 13-67.4 13-110.3zM214.9 263s-2 43.4 42 43.4 41-43.4 41-43.4-6 25.4-33 29.9c-1-12.8-8-29.9-8-29.9s-5 10.8-7 21.7c-1 2.7-1 5.5-1 8.2-27-4.5-34-29.9-34-29.9zm-29 89-13 39.1h168l-13-39.1zm-35 55.4-11 79.5h234l-11-79.5zm40 17.7c5 0 8 3.9 8 8.6v13.4c0 4.8-3 8.6-8 8.6s-9-3.8-9-8.6v-13.4c0-4.7 4-8.6 9-8.6zm33 0c5 0 9 3.9 9 8.6v13.4c0 4.8-4 8.6-9 8.6s-9-3.8-9-8.6v-13.4c0-4.7 4-8.6 9-8.6zm33 0c5 0 9 3.9 9 8.6v13.4c0 4.8-4 8.6-9 8.6s-9-3.8-9-8.6v-13.4c0-4.7 4-8.6 9-8.6zm33 0c5 0 9 3.9 9 8.6v13.4c0 4.8-4 8.6-9 8.6-4 0-8-3.8-8-8.6v-13.4c0-4.7 4-8.6 8-8.6zm33 0c5 0 9 3.9 9 8.6v13.4c0 4.8-4 8.6-9 8.6-4 0-8-3.8-8-8.6v-13.4c0-4.7 4-8.6 8-8.6z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBlenderIcon })
);
