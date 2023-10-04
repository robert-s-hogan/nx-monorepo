import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconRingBoxIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'ring-box'];
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
        d="M128 25c-13 0-27.1 6.78-37.6 17.36C79.8 52.95 73 67 73 80v183h16V98c0-17.5 4.5-32.24 14.6-42.36C113.8 45.52 128.5 41 146 41h220c17.5 0 32.2 4.52 42.4 14.64C418.5 65.76 423 80.5 423 98v165h16V80c0-13-6.8-27.05-17.4-37.64C411.1 31.78 397 25 384 25zm73.6 46.64l-48 49.96-5.5 6 5.1 6.3 72.6 84.7c9.7-2.4 19.8-3.6 30.2-3.6 10.4 0 20.5 1.2 30.2 3.6l72.6-84.7 5.1-6.3-5.5-6-48-49.96zM211.7 89h27.5l-20 30h-37.5zm61.1 0h27.5l30 30h-37.5zM256 96.22L271.2 119h-30.4zM179.6 137h37.6l18.8 65.8zm56.3 0h40.2L256 207.2zm58.9 0h37.6L276 202.8zM256 233c-44 0-82 25.5-99.9 62.6 4.3-.9 8.8-1.4 13.4-1.5 4.1-.1 8.3.2 12.6.8C198 270.3 225.6 254 257 254c31.2 0 58.8 16.2 74.7 40.7 3.7-.5 7.3-.7 10.8-.6 4.6.1 9.1.6 13.4 1.5C338 258.5 300 233 256 233zm1 39c-22.9 0-43.3 10.7-56.2 27.5 8.7 2.9 17.9 7.1 27.7 12.7l-9 15.6c-27.6-15.8-46.6-18-61.6-14.1-15 3.8-27.1 14.5-39.1 28.2l-13.6-11.8c8.1-9.3 17.1-18.3 27.8-25 2.6-8.4 6.2-16.5 10.5-24.1H69.1l-37.2 62h448.2l-37.2-62h-74.4c4.3 7.6 7.9 15.7 10.5 24.2 10.7 6.6 19.7 15.6 27.8 24.9l-13.6 11.8c-12-13.7-24.1-24.4-39.1-28.2-15-3.9-34-1.7-61.6 14.1l-9-15.6c10.4-5.9 20.1-10.3 29.2-13.2-12.9-16.5-33-27-55.7-27zM25 361v126h462V361zm183 46h96v18h-96z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconRingBoxIcon })
);
