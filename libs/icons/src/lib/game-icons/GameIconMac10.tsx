import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMac10Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'mac-10'];
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
        d="M245 340.769h-54v127h54zM27.91 70.459c-.22-9.26 2.32-16.33 7.55-20.81 8-6.85 19.51-5.79 27.48-4.36 2.22.4 106.51 21.75 113.88 22.24a8 8 0 1 1-1.06 15.95c-7.8-.52-113.61-22.12-115.63-22.48-10-1.8-13.3-.1-14.25.71-1.84 1.58-2 6-2 8.38.23 9.61.17 50.69.1 81.69h-16c.1-30.01.15-72.01-.07-81.32zM330 221.609a28.34 28.34 0 0 1-28.2 28.16H266v-16h35.8a12.32 12.32 0 0 0 12.2-12.16v-18.84h16zm-15-160.84h24v16h-4v7h-16v-7h-4zm70 17.16l29-10.1v15.94h-29zm104 50.84v28h-55v-28zm-466 39v57h31.4l-.4-57zm5.15 42.56a7.76 7.76 0 1 1 7.76 7.76 7.76 7.76 0 0 1-7.76-7.76zm221.85-7.56v122h-58v-122zm-98.17 122s5.7-65.28 13.7-81.67c8.63-17.68 5.37-31.33-1.38-40.33H176v122zm21.8-176H418v-49H117.72zm3.1-14a5 5 0 0 1 5.05-5h194.51a5 5 0 1 1 0 10h-194.5a5 5 0 0 1-5.06-5zm0-20a5 5 0 0 1 5.05-5h194.51a5 5 0 1 1 0 10h-194.5a5 5 0 0 1-5.06-5zm-83.35-15l74.25 65H418v22H71v-87zm185.62 103h-11s4.25 13.69 14.12 20.75c-6.06-11.94-3.12-20.75-3.12-20.75z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMac10Icon })
);
