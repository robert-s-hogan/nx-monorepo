
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbstract072Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abstract-072'];
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
        <path fill="currentColor" d="m486.8875,21.0002c2.6078,71.9065 4.1125,151.3005 4.1125,235s-1.5047,163.0936-4.1125,234.9998c-.9339-.2063-1.8362-.526-2.7907-.7355-10.4371-2.2984-18.6081-8.1877-23.2062-15.7454v-436.5965c4.5544-7.869 12.7432-14.1447 23.3531-16.4809 .8758-.1931 1.7627-.3125 2.6438-.4413zm-461.7751,0c.8812.1284 1.7679.2486 2.6438.4413 10.6099,2.3361 18.799,8.6119 23.3531,16.4809v436.5965c-4.5977,7.5576-12.7687,13.447-23.2063,15.7454-.9088.1998-1.861.383-2.7906.5886-2.6043-71.8671-4.1125-151.2113-4.1125-234.8528 0-83.6995 1.5047-163.0935 4.1125-235zm407.2844,21.0426c6.6049.235 13.1338,1.8893 18.9469,4.856v418.3501c-10.5662,5.4815-23.5531,6.793-34.9562,2.6487-1.1592-.4216-2.4054-1.0854-3.525-1.6189-4.7284-2.241-8.3857-5.3163-11.3094-8.829v-402.6047c2.959-3.5814 6.6597-6.7001 11.4562-8.9762 6.063-2.8759 12.7827-4.0608 19.3875-3.8259zm-352.7938,0c6.6048-.235 13.1777.9501 19.2406,3.8259 4.797,2.2761 8.644,5.3948 11.6032,8.9762v402.6047c-2.9244,3.5128-6.7278,6.5881-11.4563,8.829-1.1199.5335-2.3662,1.1975-3.525,1.6189-11.4031,4.1443-24.3901,2.8328-34.9562-2.6487v-418.3501c5.813-2.9667 12.4889-4.6211 19.0937-4.856zm176.397,15.8923c23.1397,0 41.8593,18.9019 41.8593,42.0852s-18.7196,41.938-41.8593,41.938-41.8594-18.7547-41.8594-41.938 18.7196-42.0852 41.8594-42.0852zm123.9624,17.9524c4.0405.2106 8.1579.9699 12.0438,2.2073v355.958c-4.3518,1.4475-8.9921,2.2485-13.5125,2.3544-9.8943.2317-19.5631-2.8173-26.8781-8.8291-4.9227-4.0449-8.1224-8.9859-9.5469-14.2739v-313.8726c1.3366-5.5423 4.5506-10.7827 9.6938-15.0094 6.6368-5.4543 15.3201-8.2553 24.2343-8.5347 1.3372-.0425 2.6189-.0699 3.9656,0zm-243.9593,0c8.9143.2792 17.4511,3.0804 24.0875,8.5347 5.1438,4.2267 8.5043,9.4671 9.8406,15.0094v313.8726c-1.4244,5.288-4.6244,10.229-9.5469,14.2739-7.3151,6.0118-16.9835,9.0607-26.8781,8.8291-4.5206-.1057-9.1608-.9069-13.5125-2.3544v-355.958c5.1812-1.6498 10.6608-2.3749 16.0094-2.2072zm196.3718,37.2292v285.9142c-7.0848-2.5272-14.3974-4.7559-21.8843-6.769-8.0909-22.3363-29.4015-38.2592-54.4906-38.2592s-46.3998,15.9229-54.4907,38.2592c-7.4869,2.013-14.7994,4.2417-21.8843,6.769v-285.9142c7.1417,2.5464 14.4699,4.7423 22.0312,6.7689 8.1399,22.2426 29.3216,38.2592 54.3438,38.2592s46.2038-16.0166 54.3437-38.2592c7.5404-2.0227 14.9084-4.2293 22.0312-6.7689zm-49.4968,77.6957h-53.7562c-8.3325,0-14.9813,6.6618-14.9813,15.0096s6.6488,15.1563 14.9813,15.1563h53.7562c8.3324,0 14.9812-6.808 14.9812-15.1563s-6.6488-15.0096-14.9812-15.0096zm0,50.1785h-53.7562c-8.3325,0-14.9813,6.5147-14.9813,14.8625s6.6488,15.1563 14.9813,15.1563h53.7562c8.3324,0 14.9812-6.808 14.9812-15.1563s-6.6488-14.8625-14.9812-14.8625zm0,50.0313h-53.7562c-8.3325,0-14.9813,6.5147-14.9813,14.8625s6.6488,15.1563 14.9813,15.1563h53.7562c8.3324,0 14.9812-6.8085 14.9812-15.1563s-6.6488-14.8625-14.9812-14.8625zm-26.8781,79.1672c23.1397,0 41.8593,18.7558 41.8593,41.9378s-18.7196,41.9383-41.8593,41.9383-41.8594-18.7539-41.8594-41.9383 18.7196-41.9378 41.8594-41.9378z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbstract072Icon);
    