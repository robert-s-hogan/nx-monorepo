
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSwordTieIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'sword-tie'];
    const combinedClassNames = [...svgClassNames, props.className].join(' ');
  
    // Ensure className is not passed again in the spread operation
    const { className: propClassName, ...otherProps } = props;
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className={`game-icon ${combinedClassNames}`}
        {...otherProps}
      >
        <path fill="currentColor" d="M263.857 19.672c-1.538-.042-3.12.125-4.658.125-32.844 0-59.585 33.908-59.585 75.92 0 21.273 7.083 40.468 18.096 54.285-68.132 10.566-82.843 105.413-66.646 191.555h23.334l-.765-78.11 18.687-.183.94 95.715 9.004 136.618h109.9l11.477-154.04h.366l.77-78.294 18.687.183-.768 78.11h24.2c18.367-88.46-4.715-178.936-67.086-190.672 11.505-13.88 18.977-33.357 18.977-55.168 0-39.388-23.417-72.022-53.408-75.92-.5-.075-1.01-.11-1.523-.125zm-202.79.21v18.68H77.53v79.45H21.77v50.324h18.68v-31.643h23.34l-6.436 212.66L87.137 400.7l29.252-51.346-6.023-212.66h22.928v31.642h18.68v-50.324H96.21v-79.45h16.466V19.88h-51.61zm339.23 0v18.68h16.465v79.45h-55.764v50.324h18.682v-31.643h23.338l-6.436 212.66 29.785 51.346 29.252-51.346-6.022-212.66h22.927v31.642h18.682v-50.324h-55.764v-79.45h16.463V19.88h-51.61zm-167.95 66.59h53.385v18.688h-17.35v82.82h57.682v51.737h-18.687v-33.05h-24.04l6.237 220.296-30.26 53.113-30.808-53.113 6.664-220.295H210.7v33.05h-18.688V187.98h57.683v-82.82h-17.35V86.47z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSwordTieIcon);
    