
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHospitalCrossIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'hospital-cross'];
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
        <path fill="currentColor" d="M174.688 28.063v71.625h-80.75v81.374H22.313v160.094h71.625v80.72h80.75v71.655H334.75v-71.655h81.375v-80.72h71.656V181.063h-71.655V99.688H334.75V28.064H174.688zm18.687 18.687h122.688v153H469.093v122.72H316.062V474.843H193.375V322.47H41V199.75h152.375v-153z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHospitalCrossIcon);
    