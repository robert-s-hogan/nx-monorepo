import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const FaHotjarIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'hotjar'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`fa hotjar ${combinedClassNames}`}
      {...props}
    >
      {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --> */}
      <g fill="currentColor">
        <path d="M361.5 0c0 131.6-80.7 176.8-140.2 209.4c-.6 .3-1.1 .6-1.6 .9c-53.8 30.2-88.7 49.8-89.6 122H32C32 200.8 112.7 155.6 172.2 123C227 93.2 262.5 73 262.5 0h98.9zM301 302.6c54.8-29.8 90.3-50 90.3-123h98c0 131.6-80.7 176.7-140.2 209.4c-54.8 29.8-90.3 50-90.3 123h-98c0-131.6 80.7-176.8 140.2-209.4z" />
      </g>
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: FaHotjarIcon })
);
