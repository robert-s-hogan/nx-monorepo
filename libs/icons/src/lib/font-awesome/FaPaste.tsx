import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const FaPasteIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'paste'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`fa paste ${combinedClassNames}`}
      {...props}
    >
      {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --> */}
      <g fill="currentColor">
        <path d="M80 96v16c0 17.7 14.3 32 32 32h60.8c16.6-28.7 47.6-48 83.2-48h62c-7.1-27.6-32.2-48-62-48H215.4C211.6 20.9 188.2 0 160 0s-51.6 20.9-55.4 48H64C28.7 48 0 76.7 0 112V384c0 35.3 28.7 64 64 64h96V400H64c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H80zm64-40a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM256 464c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H384v48c0 17.7 14.3 32 32 32h48V448c0 8.8-7.2 16-16 16H256zm192 48c35.3 0 64-28.7 64-64V227.9c0-12.7-5.1-24.9-14.1-33.9l-51.9-51.9c-9-9-21.2-14.1-33.9-14.1H256c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H448z" />
      </g>
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: FaPasteIcon })
);
