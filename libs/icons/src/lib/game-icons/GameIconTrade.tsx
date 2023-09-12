
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTradeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'trade'];
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
        <path fill="currentColor" d="M287.03 20c-39.133.48-79.73 15.297-117 45.938h80.47v43.188c52.76-29.75 114.592-31.588 163.938.03l-18.188 9.72 64.688 50.72-3.75-83.314-26.407 14.126C395.99 48.792 345.038 20.644 290.907 20c-1.288-.015-2.583-.016-3.875 0zm-268 64.625v212.75h212.782V84.625H19.032zm50.282 26.03H205.78v138.939h-18.718v-120.25H69.313v-18.688zm3.344 38.126l90.094 91.845-13.344 13.094-90.094-91.845 13.344-13.094zm206.656 61.75v212.782h212.75v-212.78h-212.75zm50.25 26.064h136.469V375.5h-18.686V255.28h-117.78l-.002-18.686zm3.344 38.094l90.125 91.875-13.342 13.062-90.125-91.844 13.343-13.092zm-278.53 63.656l3.75 83.312 23.312-12.47c60.927 88.637 169.99 106.485 259.625 32.814h-80.439v-43.188c-52.08 29.38-113 31.544-162.03 1.188l20.436-10.938-64.655-50.718z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTradeIcon);
    