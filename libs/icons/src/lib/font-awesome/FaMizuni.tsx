import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FaMizuniIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'mizuni'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      className={`fa mizuni ${combinedClassNames}`}
      {...props}
    >
      {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --> */}
      <g fill="currentColor">
        <path d="M248 8C111 8 0 119.1 0 256c0 137 111 248 248 248s248-111 248-248C496 119.1 385 8 248 8zm-80 351.9c-31.4 10.6-58.8 27.3-80 48.2V136c0-22.1 17.9-40 40-40s40 17.9 40 40v223.9zm120-9.9c-12.9-2-26.2-3.1-39.8-3.1-13.8 0-27.2 1.1-40.2 3.1V136c0-22.1 17.9-40 40-40s40 17.9 40 40v214zm120 57.7c-21.2-20.8-48.6-37.4-80-48V136c0-22.1 17.9-40 40-40s40 17.9 40 40v271.7z" />
      </g>
    </svg>
  );
};

export default IconWrapper(FaMizuniIcon);
