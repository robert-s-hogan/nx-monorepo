
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbstract022Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abstract-022'];
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
        <path fill="currentColor" d="m187.9976,20.9999-50.6721,80.0288h-50.6721c-22.0576,0-39.9505,14.494-39.9505,32.5821v61.5606c-14.8069,3.8924-25.7029,17.7326-25.7029,34.534v225.3718c0,19.8506 15.1556,35.9146 34.075,35.9229h85.9221 .1457 81.3697 12.4841 41.8597 7.4908 86.5096 .1456 85.9226c18.9171,0 34.075-16.0722 34.075-35.9229v-225.3718c0-16.749-10.8203-30.5912-25.5567-34.534v-61.5606c0-18.0881-17.7462-32.5821-39.8034-32.5821h-51.1125l-50.6726-80.0288-56.2529,85.1338v359.0034h-23.3533v-359.0034zm0,95.5688c18.5039,0 33.4875,15.5659 33.4875,34.8343s-14.9836,34.9844-33.4875,34.9844-33.3413-15.716-33.3413-34.9844 14.8365-34.8343 33.3413-34.8343zm135.8596,0c18.5039,0 33.488,15.5659 33.488,34.8343s-14.9841,34.9844-33.488,34.9844-33.4874-15.716-33.4874-34.9844 14.9831-34.8343 33.4874-34.8343zm-222.5164,12.8379h30.55v64.5636h-70.5005v-31.9815c0-18.088 17.8934-32.5821 39.9505-32.5821zm278.7702,0h30.8438c22.0567,0 39.8034,14.494 39.8034,32.5821v31.9815h-70.6471zm-263.0549,90.9896h14.8346v244.2905h-14.8346c-18.917,0-34.075-16.0347-34.075-35.8854v-172.67c0-19.8506 15.158-35.7351 34.075-35.7351zm263.0549,0h14.8341c18.9194,0 34.075,15.8845 34.075,35.7351v172.67c0,19.8507-15.1556,35.8854-34.075,35.8854h-14.8341zm-192.1135,28.6029c18.5039,0 33.4875,15.7161 33.4875,34.9845s-14.9836,34.8343-33.4875,34.8343-33.3413-15.5659-33.3413-34.8343 14.8365-34.9845 33.3413-34.9845zm135.8596,0c18.5039,0 33.488,15.7161 33.488,34.9845s-14.9841,34.8343-33.488,34.8343-33.4874-15.5659-33.4874-34.8343 14.9831-34.9845 33.4874-34.9845zm-135.8596,132.5805c18.5039,0 33.4875,15.5659 33.4875,34.8343s-14.9836,34.8343-33.4875,34.8343-33.3413-15.5659-33.3413-34.8343 14.8365-34.8343 33.3413-34.8343zm135.8596,0c18.5039,0 33.488,15.5659 33.488,34.8343s-14.9841,34.8343-33.488,34.8343-33.4874-15.5659-33.4874-34.8343 14.9831-34.8343 33.4874-34.8343z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbstract022Icon);
    