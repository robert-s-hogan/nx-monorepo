import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSparkPlugIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'spark-plug'];
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
        d="M468.8 38.21l-18.9 18.88h-22.6l-13.7 13.65 32.6 32.66 13.6-13.78V66.99l18.9-18.88zm-71.1 42.08c-2.3.42-5.3.91-8.5 1.69-6.8 1.63-14.5 5.09-15.9 6.44-1.3 1.34-4.8 9.05-6.4 15.98-1.6 6.7-2.4 12.6-2.4 12.6l-.7 7.2-7.2.7s-5.8.8-12.6 2.4c-6.9 1.6-14.6 5-15.9 6.4-1.4 1.3-4.8 9.1-6.5 15.9-1.5 6.8-2.3 12.7-2.3 12.7l-.9 8h-8.2s-7.1-.1-14.2 1.2c-2.3.4-4.5.9-6.4 1.5l54.3 54.3c.6-1.8 1.2-4 1.6-6.3 1.2-7.2 1.2-14.4 1.2-14.4l-.1-8.1 8-.9s5.9-.8 12.7-2.3c6.9-1.6 14.6-5.1 15.8-6.4 1.5-1.4 4.9-9.1 6.6-16 1.4-6.7 2.3-12.6 2.3-12.6l.8-7.2 7.1-.7s5.9-.8 12.7-2.4c6.8-1.6 14.5-5.1 15.9-6.4 1.2-1.3 4.8-9.1 6.4-15.9.8-3.2 1.3-6.2 1.7-8.5zM276.4 185.3l-21.2 21.2 55.2 55.2 21.2-21.2zm-52.8 30.2L210 229.2l4.9 4.9 72.8 72.8 13.7-13.6v-15.1l-39.2-39.3-23.5-23.4zm-60.3 37.7l-32.5 32.5 100.4 100.4 32.5-32.5zm45.3 0l-9.9 9.9 55 55.2 9.9-9.9zm-96.4 59.4l-11 14.1L203 405.9l11.1-14.1zm-22.6 22.6l-11.03 14.2 101.83 79.2 11-14.3zm-22.56 22.7L55.94 372l101.86 79.2 11-14.2zm-22.7 22.6l-11.03 14.1 101.89 79.2 11-14.1zm15.35 49.1l-14.15 28.3 13.44 13.4 28.28-14.1z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSparkPlugIcon })
);
