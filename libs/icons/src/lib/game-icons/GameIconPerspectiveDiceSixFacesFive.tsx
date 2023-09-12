
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPerspectiveDiceSixFacesFiveIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'perspective-dice-six-faces-five'];
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
        <path fill="currentColor" d="M255.76 44.764c-6.176 0-12.353 1.384-17.137 4.152L85.87 137.276c-9.57 5.536-9.57 14.29 0 19.826l152.753 88.36c9.57 5.536 24.703 5.536 34.272 0l152.753-88.36c9.57-5.535 9.57-14.29 0-19.825l-152.753-88.36c-4.785-2.77-10.96-4.153-17.135-4.153zm1.86 12.423a31.953 18.96 0 0 1 21.194 5.536 31.953 18.96 0 0 1-45.187 26.812 31.953 18.96 0 0 1 23.992-32.347zm-119.173 70.188a31.953 18.96 0 0 1 .002 0 31.953 18.96 0 0 1 21.195 5.535 31.953 18.96 0 0 1-45.19 26.813 31.953 18.96 0 0 1 23.992-32.348zm118.24.244a31.953 18.96 0 0 1 22.125 32.362 31.953 18.96 0 1 1-45.187-26.812 31.953 18.96 0 0 1 23.06-5.55zm119.663.015a31.953 18.96 0 0 1 .002 0 31.953 18.96 0 0 1 21.195 5.535 31.953 18.96 0 0 1-45.19 26.812 31.953 18.96 0 0 1 23.993-32.347zM75.67 173.84c-5.753-.155-9.664 4.336-9.664 12.28v157.696c0 11.052 7.57 24.163 17.14 29.69l146.93 84.848c9.57 5.526 17.14 1.156 17.14-9.895V290.76c0-11.052-7.57-24.16-17.14-29.688l-146.93-84.847c-2.69-1.555-5.225-2.327-7.476-2.387zm360.773.002c-2.25.06-4.783.83-7.474 2.385l-146.935 84.847c-9.57 5.527-17.14 18.638-17.14 29.69v157.7c0 11.05 7.57 15.418 17.14 9.89L428.97 373.51c9.57-5.527 17.137-18.636 17.137-29.688v-157.7c0-7.942-3.91-12.432-9.664-12.278zM89.297 195.77a31.236 18.008 58.094 0 1 33.818 41.183 31.236 18.008 58.094 1 1-45-25.98 31.236 18.008 58.094 0 1 11.182-15.203zm333.52 0A18.008 31.236 31.906 0 1 434 210.973a18.008 31.236 31.906 0 1-45 25.98 18.008 31.236 31.906 0 1 33.818-41.183zm-165.198 2.314a31.953 18.96 0 0 1 21.194 5.535 31.953 18.96 0 0 1-45.187 26.812 31.953 18.96 0 0 1 23.992-32.348zm109.198 30.018A18.008 31.236 31.906 0 1 378 243.305a18.008 31.236 31.906 0 1-45 25.98 18.008 31.236 31.906 0 1 33.818-41.183zm-165.52 32.332a31.236 18.008 58.094 0 1 33.817 41.183 31.236 18.008 58.094 1 1-45-25.98 31.236 18.008 58.094 0 1 11.182-15.203zm109.52 0A18.008 31.236 31.906 0 1 322 275.637a18.008 31.236 31.906 0 1-45 25.98 18.008 31.236 31.906 0 1 33.818-41.183zM89.298 318.48a31.236 18.008 58.094 0 1 33.817 41.184 31.236 18.008 58.094 1 1-45-25.98 31.236 18.008 58.094 0 1 11.182-15.204zm333.52 0A18.008 31.236 31.906 0 1 434 333.684a18.008 31.236 31.906 0 1-45 25.98 18.008 31.236 31.906 0 1 33.818-41.184zm-56 32.332A18.008 31.236 31.906 0 1 378 366.017a18.008 31.236 31.906 0 1-45 25.98 18.008 31.236 31.906 0 1 33.818-41.183zm-165.52 32.33a31.236 18.008 58.094 0 1 33.817 41.184 31.236 18.008 58.094 1 1-45-25.98 31.236 18.008 58.094 0 1 11.182-15.203zm109.52 0A18.008 31.236 31.906 0 1 322 398.347a18.008 31.236 31.906 0 1-45 25.98 18.008 31.236 31.906 0 1 33.818-41.183z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPerspectiveDiceSixFacesFiveIcon);
    