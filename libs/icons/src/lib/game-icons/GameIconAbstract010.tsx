
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbstract010Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abstract-010'];
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
        <path fill="currentColor" d="m285.375,21c21.1833,2.7415 41.5997,8.1197 60.6596,16.0096l-36.8659,97.6716c8.3712,3.7328 16.4425,8.3688 23.7937,13.6597l66.5346-80.6347c16.7005,12.7309 31.5572,27.6003 44.3557,44.2097l-80.9278,66.2404c5.3204,7.3085 9.9043,15.1796 13.6596,23.5l98.1125-36.5716c7.9783,19.0472 13.5604,39.1886 16.3029,60.3653l-103.4,16.8908c.4699,4.5176.5873,9.0184.5873,13.6592 0,4.5891-.1268,9.1918-.5873,13.6597l103.4,17.0375c-2.7425,21.1777-8.3251,41.3191-16.3029,60.3653l-98.1125-36.7188c-3.7671,8.3684-8.3115,16.3001-13.6596,23.6472l80.9278,66.2404c-12.8047,16.6042-27.6552,31.4773-44.3557,44.2096l-66.5346-80.6346c-7.3513,5.2894-15.4225,9.926-23.7937,13.6596l36.8659,97.6717c-19.0599,7.8894-39.4763,13.1215-60.6596,15.8625l-17.0375-102.5188c-4.0627.4137-8.1884.5621-12.3375.5873-4.1482-.0504-8.2748-.1737-12.3375-.5873l-17.0375,102.5188c-21.1834-2.7411-41.5997-7.9731-60.6596-15.8625l36.8658-97.6717c-8.3711-3.7336-16.442-8.3702-23.7937-13.6596l-66.5346,80.6346c-16.7009-12.7323-31.5516-27.6054-44.3557-44.2096l80.9278-66.2404c-5.3481-7.3471-9.8925-15.2788-13.6596-23.6472l-98.1125,36.7188c-7.9778-19.0463-13.5604-39.1876-16.3028-60.3654l103.4-17.0375c-.4605-4.4678-.5874-9.0706-.5874-13.6597 0-4.6407.1175-9.1415.5874-13.6592l-103.4-16.8908c2.7424-21.1768 8.3246-41.3181 16.3028-60.3653l98.1125,36.5716c3.7553-8.3204 8.3392-16.1915 13.6596-23.5l-80.9278-66.2404c12.7981-16.6094 27.6548-31.4787 44.3557-44.2097l66.5346,80.6347c7.3517-5.2908 15.4226-9.9269 23.7937-13.6597l-36.8658-97.6716c19.0599-7.8899 39.4762-13.2681 60.6596-16.0096l17.0375,102.6658c4.0617-.418 8.1884-.5643 12.3375-.5874 4.1501.0432 8.2753.1694 12.3375.5874l17.0375-102.6658zm-29.375,119.1158c-63.7268.7826-115.0038,52.3472-115.0029,115.8841l33.9279-2.4966c0,44.8573 36.1486,77.5575 81.075,78.4312 44.9273-.8737 81.075-33.574 81.075-78.4312l33.9279,2.4966c.0009-63.5369-51.2751-115.1016-115.0029-115.8841zm22.9125,18.0654c35.3163,0 46.5596,65.7187 46.5596,97.525 0,40.2292-30.8926,61.5348-69.4721,62.4221-38.5785-.8874-69.4721-22.1929-69.4721-62.4221 0-31.8063 11.2433-97.525 46.5596-97.525v53.6096c0,13.544 10.0726,24.5364 22.9125,25.4092 12.8409-.8728 22.9125-11.8652 22.9125-25.4092v-53.6096z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbstract010Icon);
    