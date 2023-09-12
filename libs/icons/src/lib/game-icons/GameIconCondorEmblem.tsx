
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCondorEmblemIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'condor-emblem'];
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
        <path fill="currentColor" d="M255.094 18.97c-62.468 0-118.465 27.977-156.156 72.06l-81.47-41.06v20.905l108.344 54.688c-1.48 4.984-2.718 10.26-2.718 16.25 0 39.773 32.436 72.7 76.437 87.687l10.064 3.438 2.094-10.438c3.905-19.485 11.652-31.05 14.062-48.22 2.126-15.148-1.23-32.572-14.938-58.81 26.516-6.19 48.084-9.652 63.875-9.22 15.152.41 24.52 3.87 30.407 10.03 4.568 4.783 7.74 12.163 8.97 23.282-9.478-.515-17.648.654-24.502 3.875-9.504 4.467-15.757 13.442-17.125 23.157-2.735 19.43 8.925 40.936 29.282 60.75l4.124 4 5.437-1.844c43.805-15.058 75.814-48.076 75.814-87.688 0-5.863-.848-11.406-2.22-16.78L492.75 70.843V49.906l-81.625 41c-37.69-44.003-93.632-71.937-156.03-71.937zm0 18.686c55.19 0 104.713 23.89 138.875 61.875l-21.845 10.97c-29.683-30.45-71.15-49.375-117.03-49.375-45.976 0-87.503 19.003-117.19 49.563l-21.874-11c34.17-38.09 83.787-62.032 139.064-62.032zm237.656 54.97l-84.344 41.718 84.344-10.594V92.625zm-475.28.405v30.814l83.468 10.5-83.47-41.313zm475.28 56.25l-82.156 8.44 82.156 17.936V149.28zm-475.28.095v26.094l81.28-17.75-81.28-8.345zm91.718 33.5l-91.72 17.28v29.94l91.72-47.22zm290.968 0l92.594 47.688v-30.22l-92.594-17.468zM121.28 205.75l-98.218 53.53c-1.868-.97-3.727-1.96-5.593-2.967v21.125c15.252 7.814 30.53 14.44 45.593 19.812 18.658 49.066 55.574 89.2 102.437 112l-54.375 83.344h22.313l95.625-146.53 3.812-5.877-4.563-5.312c-8.21-9.584-15.13-24.033-19-40.97l-2.468-10.842-10.25 4.312c-7.145 2.992-15.388 5.094-24.5 6.313l-11.906-54.594-16.47 55.625c-8.554-.403-17.552-1.388-26.874-2.97l22.062-70.625-52.594 63.625c-9.076-2.608-18.31-5.755-27.656-9.375l62.625-69.625zm266.783 0l62.875 69.875c-9.384 3.61-18.677 6.698-27.782 9.28l-52.72-63.78 22.064 70.688c-9.356 1.54-18.367 2.5-26.938 2.843l-16.406-55.562-11.844 54.28c-8.573-1.223-16.375-3.22-23.187-6.03l-10.156-4.188-2.5 10.72c-3.92 16.84-11.178 31.31-19.564 40.968l-4.625 5.312 3.876 5.906 95.594 146.532h22.313l-54.407-83.375c46.896-22.805 83.875-62.9 102.53-112 15.045-5.358 30.317-11.973 45.564-19.783v-21.156c-2.022 1.09-4.04 2.172-6.063 3.22l-98.625-53.75zm35.687 98.844c-18.555 39.012-50.223 70.545-89.344 88.906l-12.875-19.688c29.82-13.29 54.936-35.26 72.126-62.687 9.8-1.55 19.856-3.73 30.094-6.53zm-337.344.03c10.273 2.825 20.386 5.028 30.22 6.595 17.176 27.377 42.23 49.314 72 62.592l-12.845 19.72c-39.127-18.36-70.814-49.89-89.374-88.907zm157.938 84.907L215.78 492.595h28.564V389.53zm21.5 0v103.064h28.562L265.844 389.53zm-42.813 3.908l-64.31 99.156h36.56l27.75-99.156zm64.126 0l27.75 99.156h36.563l-64.314-99.156z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCondorEmblemIcon);
    