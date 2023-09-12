import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FaEvernoteIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'evernote'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className={`fa evernote ${combinedClassNames}`}
      {...props}
    >
      {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --> */}
      <g fill="currentColor">
        <path d="M120.82 132.21c1.6 22.31-17.55 21.59-21.61 21.59-68.93 0-73.64-1-83.58 3.34-.56.22-.74 0-.37-.37L123.79 46.45c.38-.37.6-.22.38.37-4.35 9.99-3.35 15.09-3.35 85.39zm79 308c-14.68-37.08 13-76.93 52.52-76.62 17.49 0 22.6 23.21 7.95 31.42-6.19 3.3-24.95 1.74-25.14 19.2-.05 17.09 19.67 25 31.2 24.89A45.64 45.64 0 0 0 312 393.45v-.08c0-11.63-7.79-47.22-47.54-55.34-7.72-1.54-65-6.35-68.35-50.52-3.74 16.93-17.4 63.49-43.11 69.09-8.74 1.94-69.68 7.64-112.92-36.77 0 0-18.57-15.23-28.23-57.95-3.38-15.75-9.28-39.7-11.14-62 0-18 11.14-30.45 25.07-32.2 81 0 90 2.32 101-7.8 9.82-9.24 7.8-15.5 7.8-102.78 1-8.3 7.79-30.81 53.41-24.14 6 .86 31.91 4.18 37.48 30.64l64.26 11.15c20.43 3.71 70.94 7 80.6 57.94 22.66 121.09 8.91 238.46 7.8 238.46C362.15 485.53 267.06 480 267.06 480c-18.95-.23-54.25-9.4-67.27-39.83zm80.94-204.84c-1 1.92-2.2 6 .85 7 14.09 4.93 39.75 6.84 45.88 5.53 3.11-.25 3.05-4.43 2.48-6.65-3.53-21.85-40.83-26.5-49.24-5.92z" />
      </g>
    </svg>
  );
};

export default IconWrapper(FaEvernoteIcon);
