import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const Fa42GroupIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', '42group'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      className={`fa 42group ${combinedClassNames}`}
      {...props}
    >
      {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --> */}
      <g fill="currentColor">
        <path d="M320 96V416C341.011 416 361.818 411.861 381.23 403.821C400.641 395.78 418.28 383.995 433.138 369.138C447.995 354.28 459.78 336.641 467.821 317.23C475.861 297.818 480 277.011 480 256C480 234.989 475.861 214.182 467.821 194.771C459.78 175.359 447.995 157.72 433.138 142.863C418.28 128.005 400.641 116.22 381.23 108.179C361.818 100.139 341.011 96 320 96ZM0 256L160.002 416L320.003 256L160.002 96L0 256ZM480 256C480 277.011 484.138 297.818 492.179 317.23C500.219 336.643 512.005 354.28 526.862 369.138C541.72 383.995 559.357 395.781 578.77 403.821C598.182 411.862 618.989 416 640 416V96C597.565 96 556.869 112.858 526.862 142.863C496.857 172.869 480 213.565 480 256Z" />
      </g>
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: Fa42GroupIcon })
);
