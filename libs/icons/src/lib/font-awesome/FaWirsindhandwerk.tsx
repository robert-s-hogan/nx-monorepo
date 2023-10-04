import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const FaWirsindhandwerkIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'wirsindhandwerk'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`fa wirsindhandwerk ${combinedClassNames}`}
      {...props}
    >
      {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --> */}
      <g fill="currentColor">
        <path d="M50.77161,479.81213h83.36071V367.84741l-83.36071,47.009Zm329.04675,0h82.35022V414.85645l-82.35022-47.009Zm.00568-448V251.568L256.1759,179.1861,134.50378,251.568V31.81213H50.77161V392.60565L256.1759,270.31909,462.16858,392.60565V31.81213Z" />
      </g>
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: FaWirsindhandwerkIcon })
);
