import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FaWindowMaximizeIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'fa-windowmaximize'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`fa fa-windowmaximize ${combinedClassNames}`}
      {...otherProps}
    >
      {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --> */}
      <path d="M.3 89.5C.1 91.6 0 93.8 0 96V224 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64V224 96c0-35.3-28.7-64-64-64H64c-2.2 0-4.4 .1-6.5 .3c-9.2 .9-17.8 3.8-25.5 8.2C21.8 46.5 13.4 55.1 7.7 65.5c-3.9 7.3-6.5 15.4-7.4 24zM48 224H464l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192z" />
    </svg>
  );
};

export const FaWindowMaximize = IconWrapper(FaWindowMaximizeIcon);
