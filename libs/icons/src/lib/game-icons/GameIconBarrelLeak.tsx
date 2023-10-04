import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBarrelLeakIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'barrel-leak'];
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
        d="M151 28c-34.4 0-65.6 5.33-87.35 13.49-10.88 4.08-19.36 8.9-24.62 13.56C33.77 59.71 32 63.62 32 67c0 3.38 1.77 7.29 7.03 11.95 5.26 4.66 13.74 9.48 24.62 13.56C85.4 100.7 116.6 106 151 106c34.4 0 65.6-5.3 87.3-13.49 10.9-4.08 19.4-8.9 24.7-13.56 5.2-4.66 7-8.57 7-11.95 0-3.38-1.8-7.29-7-11.95-5.3-4.66-13.8-9.48-24.7-13.56C216.6 33.33 185.4 28 151 28zm65 28a24 8 0 0 1 24 8 24 8 0 0 1-24 8 24 8 0 0 1-24-8 24 8 0 0 1 24-8zM32 96.35V179c0 2 1.23 4.6 6.87 8.2 5.63 3.6 14.88 7.2 26.31 10.1C88.04 203 119.6 206 151 206c31.4 0 63-3 85.8-8.7 11.4-2.9 20.7-6.5 26.3-10.1 5.7-3.6 6.9-6.2 6.9-8.2V96.35c-7 5.05-15.5 9.35-25.3 13.05-24.6 9.2-57.4 14.6-93.7 14.6-36.3 0-69.1-5.4-93.67-14.6-9.84-3.7-18.37-8-25.33-13.05zM288 107v244.1l39.8 9.1c-3.4-7.9-5.8-17.1-7.2-27.5-3.5-26.1-1.5-59.3 6.6-94.7 8-35.4 20.5-66.1 35-88.1 5.8-8.8 11.9-16.1 18.3-21.8L288 107zm140.2 77.9c-56 7.6-114.1 108.3-74.4 180.8.9.5 1.7.8 2.6 1 3.3.8 7.5-.1 13.1-4.2 5.8-4.1 12.4-11.3 18.8-21 12.8-19.4 24.9-48.6 32.5-82.2 6.2-27.3 8.5-53.3 7.4-74.4zM32 204v84c0 2 1.23 4.6 6.87 8.2 5.63 3.6 14.88 7.2 26.31 10.1C88.04 312 119.6 315 151 315c31.4 0 63-3 85.8-8.7 11.4-2.9 20.7-6.5 26.3-10.1 5.7-3.6 6.9-6.2 6.9-8.2v-84c-7.9 4.6-17.6 7.9-28.8 10.7C216 221 183.6 224 151 224s-65.04-3-90.18-9.3C49.64 211.9 39.91 208.5 32 204zm0 109v58c0 5 2.2 9.3 7.86 14.2 5.66 4.8 14.7 9.5 25.99 13.3C88.42 406 119.8 410 151 410c31.2 0 62.6-4 85.2-11.5 11.2-3.8 20.3-8.5 25.9-13.3 5.7-4.9 7.9-9.2 7.9-14.2v-58c-7.9 4.6-17.6 7.9-28.8 10.7C216 330 183.6 333 151 333s-65.04-3-90.18-9.3C49.64 320.9 39.91 317.5 32 313zm378.5 54.9c-.7 0-1.5 0-2.2.1-19.5 1.5-6.5 45.2-24.3 53.2-15.3 7-31.5-16.6-48.2-14.5-27.9 3.5-78.1 15.8-72.3 43.3 8 37.7 76.7 8.1 114.8 14 36 5.6 87.2 50.9 107.4 20.5 25.4-38.2-29.1-117.7-75.2-116.6zm-181.9 91.3c-5.1 0-9.4 2.1-12 6.4-4.7 7.7 6.2 19.1 14.3 23 9.4 4.5 35.6 5.8 31.1-3.6-7.8-16.4-22.3-26-33.4-25.8z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBarrelLeakIcon })
);
