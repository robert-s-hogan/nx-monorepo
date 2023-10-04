import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBottledShadowIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bottled-shadow'];
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
        d="M104.2 27.37v56.5h306.1v-56.5H104.2zm19.7 75.13c-.8 5.4-2 8.8-3.3 11.1-2.1 3.8-4.6 5.5-9 8.6-4.4 3.1-10.5 7.8-14.66 16.1-4.15 8.3-6.32 19.5-6.32 36.3V426c0 32.3 26.38 58.6 58.68 58.6h213.5c32.3 0 58.6-26.3 58.6-58.6V174.6c0-17.6-2-29.1-5.8-37.8-3.9-8.5-9.8-13.6-14.1-16.7-4.4-3.2-6.6-4.6-8.5-7.9-1.1-2-2.2-5-2.9-9.7h-18.8c.9 7.9 2.7 14 5.4 18.9 4.2 7.2 10 10.9 13.7 13.7 3.7 2.7 5.8 4.2 8.1 9.2 2.2 5.2 4.2 14.2 4.2 30.3V426c0 22.5-17.6 40-39.9 40H149.3c-22.4 0-39.9-17.5-39.9-40V174.6c0-15.1 2.1-23.4 4.3-28 2.3-4.6 4.7-6.3 8.8-9.3 4.1-2.8 10.1-7 14.4-14.6 2.9-5.2 4.8-11.7 5.8-20.2h-18.8zM278.8 113c-49.7.6-104.1 37.5-114.2 62.9-15.8 40-25.1 119.5 12.6 124.1 16.8 2 42.1-14.4 34.2 27.6-2.6 13.9 53.8 5.9 51.2 17.6-9.1 41-72.8 93.2-56.6 94.3 30.7 2.1 129.9-16.6 111.6-63.7-13.7-35.5 17.7-39 37.8-47 16.6-6.6-2-48-32.1-75.3-31.7 8.1-39.7 19.6-55.3 31.8 0 0 3.8-44.3 20.8-52.1 2-.9 4.2-1.3 6.7-1.3 6-.1 13.1 2.2 19.8 5.2 30.8-30.9 32.5-92.8 13.1-108.3-14.4-11.5-31.7-16-49.6-15.8zm-5 19.3c.4 0 .7 0 1 .2 5.4 3.3-1.3 31.8-7.3 46.2-5.6 13.6-21.5 37.5-26 35.6-6.9-2.9-9.6-34.4-3.2-49.8 5.8-14 29.2-32.2 35.5-32.2zm24.8 6.5c3.8.3 15.4 11.2 19.1 19 4.3 9.1 3.3 38.9 2.2 41.4-1.2 2.8-14.1-2-18.3-7-9.2-10.7-7.4-51.6-3.6-53.3.2-.1.4-.1.6-.1z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBottledShadowIcon })
);
