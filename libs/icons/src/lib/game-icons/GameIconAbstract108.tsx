
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbstract108Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abstract-108'];
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
        <path fill="currentColor" d="m491,427.2562c0,35.2951-28.4123,63.7438-63.5968,63.7438h-123.2281c8.7457-11.2367 16.7774-24.3213 24.0875-38.6282h79.1656c35.1845,0 63.5968-28.4487 63.5968-63.7437v-350.4438c12.328,11.5758 19.975,28.0545 19.975,46.4125zm-30.2562-65.6531c0,35.2951-28.4124,63.7437-63.5969,63.7437h-56.5468c18.8282-47.3644 29.9625-105.8763 29.9625-169.3469 0-97.5346-26.3796-183.5969-66.3875-235h123.2281c12.2256,0 23.6581,3.4598 33.3406,9.4zm-120.7313-105.6031c0,86.3696-37.6108,211.7683-84.0124,211.7683s-84.0125-125.3988-84.0125-211.7683 37.6108-177.0159 84.0125-177.0159 84.0124,90.6464 84.0124,177.0159zm-132.1875,235h-123.2281c-35.1845,0-63.5969-28.4487-63.5969-63.7438v-342.6594c0-18.2834 7.7347-34.6974 19.975-46.2656v350.2969c0,35.2951 28.4123,63.7437 63.5969,63.7437h79.1656c7.314,14.3187 15.3358,27.3837 24.0875,38.6282zm0-470c-40.0079,51.4031-66.3875,137.4654-66.3875,235 0,63.4705 11.2812,121.9825 30.1094,169.3469h-56.6938c-35.1845,0-63.5969-28.4487-63.5969-63.7437v-331.2031c9.7057-5.9813 21.0693-9.4 33.3406-9.4z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbstract108Icon);
    