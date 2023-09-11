import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FaSquareFullIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'fa-squarefull'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`fa fa-squarefull ${combinedClassNames}`}
      {...otherProps}
    >
      {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --> */}
      <path d="M464 48V464H48V48H464zM48 0H0V48 464v48H48 464h48V464 48 0H464 48z" />
    </svg>
  );
};

export const FaSquareFull = IconWrapper(FaSquareFullIcon);
