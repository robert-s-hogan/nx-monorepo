import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FaCirclePauseIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'circlepause'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`fa circlepause ${combinedClassNames}`}
      {...props}
    >
      {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --> */}
      <g fill="currentColor">
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm224-72V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24zm112 0V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
      </g>
    </svg>
  );
};

export default IconWrapper(FaCirclePauseIcon);
