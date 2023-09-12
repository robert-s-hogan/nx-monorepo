import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FaGuildedIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'guilded'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={`fa guilded ${combinedClassNames}`}
      {...props}
    >
      {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --> */}
      <g fill="currentColor">
        <path d="M443.427,64H4.571c0,103.26,22.192,180.06,43.418,222.358C112.046,414.135,224,448,225.256,448a312.824,312.824,0,0,0,140.55-103.477c25.907-33.923,53.1-87.19,65.916-145.761H171.833c4.14,36.429,22.177,67.946,45.1,86.944h88.589c-17.012,28.213-48.186,54.4-80.456,69.482-31.232-13.259-69.09-46.544-96.548-98.362-26.726-53.833-27.092-105.883-27.092-105.883H437.573A625.91,625.91,0,0,0,443.427,64Z" />
      </g>
    </svg>
  );
};

export default IconWrapper(FaGuildedIcon);
