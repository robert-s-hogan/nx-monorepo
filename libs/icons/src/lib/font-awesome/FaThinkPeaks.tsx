import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const FaThinkPeaksIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'thinkpeaks'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      className={`fa thinkpeaks ${combinedClassNames}`}
      {...props}
    >
      {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --> */}
      <g fill="currentColor">
        <path d="M465.4 409.4l87.1-150.2-32-.3-55.1 95L259.2 0 23 407.4l32 .3L259.2 55.6zm-355.3-44.1h32.1l117.4-202.5L463 511.9l32.5.1-235.8-404.6z" />
      </g>
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: FaThinkPeaksIcon })
);
