
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbstract095Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abstract-095'];
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
        <path fill="currentColor" d="m215.1686,21.0003c-14.2713,2.4598-28.1355,6.4333-41.4187,11.3094 .76,1.0668 1.5354,2.0746 2.2031,3.2313 11.333,19.6294 4.6482,44.4794-14.9813,55.8124s-44.7731,4.795-56.1062-14.8343c-.6522-1.1295-1.2292-2.2161-1.7625-3.3781-10.9541,9.1629-21.1028,19.2938-30.2562,30.2562 1.1772.5405 2.3794.9542 3.525,1.6156 19.6294,11.333 26.3143,36.3301 14.9813,55.9594s-36.33,26.4611-55.9594,15.1281c-1.167-.6738-2.3031-1.2892-3.3781-2.0562-4.843,13.227-8.5671,27.0662-11.0156,41.2718 1.2873-.1218 2.6462-.294 3.9656-.294 22.666,0 40.9781,18.3121 40.9781,40.9781s-18.3121,40.9781-40.9781,40.9781c-1.3191,0-2.6787-.0288-3.9656-.147 2.4567,14.2529 6.1488,28.1513 11.0156,41.4187 1.0757-.7675 2.2103-1.5289 3.3781-2.2031 6.1342-3.5416 12.7807-5.4072 19.3875-5.5813 14.535-.3827 28.7804,7.0673 36.5719,20.5625 11.333,19.6293 4.6481,44.7732-14.9813,56.1062-1.0947.632-2.2528,1.2421-3.3781,1.7625 9.1178,10.9002 19.2092,20.9916 30.1094,30.1094 .5203-1.1253 1.1305-2.2834 1.7625-3.3781 7.0831-12.2683 19.4835-19.4919 32.6062-20.4156 7.8737-.5542 16.139,1.1845 23.5,5.4344 19.6294,11.333 26.3143,36.33 14.9813,55.9593-.6745,1.1679-1.4356,2.3025-2.2031,3.3781 13.2675,4.8669 27.1658,8.5589 41.4187,11.0157-.1218-1.287-.1463-2.6466-.1463-3.9657 0-22.666 18.3121-40.9781 40.9782-40.9781s40.9781,18.3121 40.9781,40.9781c0,1.3195-.1722,2.6784-.294,3.9657 14.2056-2.4485 28.0447-6.1726 41.2718-11.0157-.7671-1.075-1.3824-2.2111-2.0563-3.3781-11.333-19.6293-4.5012-44.7732 15.1281-56.1062 6.1342-3.5416 12.6238-5.2774 19.2406-5.4344 14.557-.3452 28.9273,7.0673 36.7187,20.5625 .6529,1.1311 1.0818,2.3613 1.6157,3.525 10.9623-9.1535 21.0933-19.302 30.2562-30.2562-1.162-.5333-2.2486-1.1103-3.3781-1.7625-19.6294-11.3331-26.4611-36.6238-15.1281-56.2531 7.7914-13.4952 22.1456-20.8206 36.7187-20.4156 6.6241.1845 13.2533,2.0396 19.3875,5.5813 1.1909.6875 2.1363,1.5654 3.2313,2.35 4.8999-13.3235 8.8413-27.2469 11.3093-41.5656-1.2836.1211-2.65.147-3.9656.147-22.666,0-41.125-18.312-41.125-40.9781s18.459-40.9781 41.125-40.9781c1.3159,0 2.6817.1737 3.9656.294-2.4567-14.2529-6.2957-28.1513-11.1625-41.4187-1.125.811-2.1512,1.4948-3.3781,2.2031-19.6294,11.3331-44.7732,4.5013-56.1062-15.1281s-4.5012-44.6263 15.1281-55.9594c1.1753-.6789 2.3075-1.0641 3.525-1.6156-9.1986-11.0163-19.3868-21.2046-30.4031-30.4031-.547,1.2024-.9413,2.3572-1.6157,3.525-11.3331,19.6294-36.3299,26.3143-55.9593,14.9812s-26.4611-36.3299-15.1281-55.9593c.699-1.2102 1.4037-2.2664 2.2031-3.3781-13.2675-4.8669-27.1658-8.7058-41.4187-11.1625 .1211,1.2839.294,2.6497.294,3.9657 0,22.666-18.3121,41.125-40.9781,41.125s-40.9781-18.459-40.9781-41.125c0-1.3156.0288-2.6821.147-3.9657zm40.6844,85.3344c88.9564,0 177.9875,153.9958 133.5093,231.0342s-222.3936,77.0384-266.8717,0 44.4062-231.0342 133.3624-231.0342zm0,59.778c-47.6099,0-95.1861,106.3597-71.3812,159.5062 23.8051,53.1465 119.1043,53.1465 142.9093,0 23.805-53.1465-23.9181-159.5062-71.5281-159.5062zm.147,115.0031c18.0106,0 32.6063,14.5956 32.6063,32.6063s-14.5956,32.7531-32.6063,32.7531-32.6062-14.7425-32.6062-32.7531 14.5956-32.6063 32.6062-32.6063z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbstract095Icon);
    