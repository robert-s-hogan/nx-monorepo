import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FaFaceGrinTongueIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'facegrintongue'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`fa facegrintongue ${combinedClassNames}`}
      {...props}
    >
      {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --> */}
      <g fill="currentColor">
        <path d="M464 256c0-114.9-93.1-208-208-208S48 141.1 48 256c0 81.7 47.1 152.4 115.7 186.4c-2.4-8.4-3.7-17.3-3.7-26.4V363.6c-8.9-8-16.7-17.1-23.1-27.1c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5c18.7-4.4 35.9 12 25.5 28.1c-6.4 9.9-14.2 19-23 27V416c0 9.2-1.3 18-3.7 26.4C416.9 408.4 464 337.7 464 256zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176.4-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 416V378.6c0-14.7-11.9-26.6-26.6-26.6h-2c-11.3 0-21.1 7.9-23.6 18.9c-2.8 12.6-20.8 12.6-23.6 0c-2.5-11.1-12.3-18.9-23.6-18.9h-2c-14.7 0-26.6 11.9-26.6 26.6V416c0 35.3 28.7 64 64 64s64-28.7 64-64z" />
      </g>
    </svg>
  );
};

export default IconWrapper(FaFaceGrinTongueIcon);
