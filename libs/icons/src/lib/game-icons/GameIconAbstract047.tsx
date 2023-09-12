
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbstract047Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abstract-047'];
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
        <path fill="currentColor" d="m255.8532,21-63.7438,80.7813-102.225-12.0438 11.75,102.3719-80.6344,63.7435 80.9281,64.0375-12.0437,102.225 102.225-11.8966 63.7438,80.7812 64.0375-80.7812 102.225,11.8966-12.0438-102.225 80.9281-64.0375-80.6343-63.7435 11.75-102.3719-102.225,12.0438-64.0375-80.7813zm-2.35,43.1813c.8184-.0879 1.6568,0 2.4969,0 13.4403,0 24.3812,11.5471 24.3812,25.85s-10.9409,25.85-24.3812,25.85-24.3813-11.5472-24.3813-25.85c0-13.4089 9.6078-24.529 21.8844-25.85zm-27.9063,36.2781c4.2495,13.5041 16.2831,23.2063 30.4032,23.2063s26.0067-9.7021 30.2562-23.2063l30.8438,10.575 27.4656,13.5125c-6.544,12.5536-4.8438,27.9094 5.1406,37.8938s25.1932,11.5377 37.7469,4.9937l13.6594,27.9062 10.4281,30.2565c-13.5041,4.2483-23.2064,16.2827-23.2063,30.4029s9.7022,26.007 23.2063,30.2563l-10.1344,29.375-14.1,28.9341c-12.5536-6.5434-27.9095-4.9919-37.8937,4.9942-9.9845,9.9823-11.5378,25.3415-4.9938,37.8933l-27.7594,13.5125-30.4031,10.4284c-4.2495-13.504-16.1361-23.2063-30.2562-23.2063s-26.1537,9.7022-30.4032,23.2063l-29.375-10.1341-28.6406-13.9534c6.5439-12.5537 4.9906-27.7643-4.9938-37.7466-9.9844-9.9861-25.3402-11.6847-37.8937-5.1409l-13.9531-28.7875-10.1344-29.375c13.5041-4.2493 23.2063-16.136 23.2063-30.2563s-9.7022-26.1546-23.2063-30.4029l10.2812-29.8158 13.8062-28.2001c12.5537,6.544 27.7625,4.9907 37.7469-4.9937s11.6847-25.3402 5.1407-37.8937l29.2281-14.3938 28.7875-9.8406zm148.6375,13.0719c6.4276-.183 12.7263,2.1513 17.4781,6.9031 9.5038,9.5038 9.0856,25.4301-1.0281,35.5438s-26.04,10.5319-35.5437,1.0281-9.0856-25.4302 1.0281-35.5437c5.0568-5.0568 11.6381-7.7478 18.0656-7.9313zm-238.6719.1463c.7967-.0577 1.5466-.0216 2.35,0 6.4276.183 12.862,2.8746 17.9187,7.9313 10.1138,10.1137 10.532,25.893 1.0282,35.3968s-25.2831,9.0857-35.3969-1.0281-10.5319-25.8932-1.0281-35.3969c4.1579-4.1579 9.5516-6.5142 15.1281-6.9031zm97.6719,25.85-21.7375,7.3437-21.7375,10.8687c4.9013,9.4024 3.5125,20.869-3.9656,28.3469s-18.7977,8.7195-28.2,3.8187l-10.4281,21.15-7.6376,22.1783c10.1141,3.1819 17.3313,12.1895 17.3313,22.7654s-7.2172,19.5835-17.3313,22.7654l7.6376,22.0317 10.4281,21.4433c9.4023-4.8997 21.0157-3.5128 28.4937,3.9659s8.5732,18.7977 3.6719,28.2l21.4438,10.575 22.0312,7.4909c3.1828-10.1149 12.1902-17.3317 22.7657-17.3317s19.4359,7.2168 22.6187,17.3317l22.7656-7.9317 20.7094-9.9875c-4.9013-9.4005-3.6593-20.8694 3.8188-28.3466s19.0914-8.8656 28.4937-3.9659l10.4281-21.4433 7.6375-22.0317c-10.1141-3.1819-17.3312-12.1895-17.3312-22.7654s7.2171-19.5835 17.3312-22.7654l-7.9312-22.6192-10.1344-20.856c-9.4023,4.9017-20.7221,3.8059-28.2-3.6719s-8.8669-19.0914-3.9656-28.4938l-20.5626-10.1344-23.0593-7.9312c-3.1828,10.1145-12.0432,17.3313-22.6187,17.3313s-19.5829-7.2168-22.7657-17.3313zm22.7657,33.7813c45.6862,0 82.6905,37.0043 82.6905,82.6906s-37.0043,82.6904-82.6905,82.6904-82.6907-37.004-82.6907-82.6904 37.0044-82.6906 82.6907-82.6906zm-10.2813,30.4031-9.6938,3.2313-9.8406,4.8466c2.2028,4.2258 1.5985,9.4174-1.7624,12.7784s-8.4055,3.9654-12.6313,1.7625l-4.7001,9.4-3.3781,9.9875c4.5458,1.4302 7.7844,5.5281 7.7844,10.2813s-3.2386,8.851-7.7844,10.2812l3.3781,9.8409 4.7001,9.6933c4.2258-2.2024 9.4172-1.5985 12.7781,1.7625s3.8184,8.4055 1.6156,12.6317l9.6938,4.7 9.8406,3.3779c1.4305-4.5458 5.5282-7.7846 10.2813-7.7846s8.7039,3.2388 10.1343,7.7846l10.2813-3.525 9.2531-4.5529c-2.2028-4.2258-1.5985-9.2707 1.7625-12.6317s8.5523-3.9649 12.7781-1.7625l4.7-9.6933 3.3781-9.8409c-4.5457-1.4302-7.7843-5.5281-7.7843-10.2812s3.2386-8.851 7.7843-10.2813l-3.525-10.1341-4.5531-9.4c-4.2257,2.2024-9.2703,1.7451-12.6312-1.6159s-3.9653-8.5526-1.7625-12.7784l-9.2531-4.5529-10.4282-3.525c-1.4304,4.5458-5.3813,7.7846-10.1343,7.7846s-8.8508-3.2388-10.2813-7.7846zm-158.1844,27.9062c.8703-.0846 1.7498,0 2.6438,0 14.303,0 25.85,10.9407 25.85,24.3813s-11.547,24.3813-25.85,24.3813-25.8501-10.9411-25.85-24.3813c-7e-05-12.6002 10.1527-23.1301 23.2063-24.3813zm331.7906,0c.8703-.0846 1.7499,0 2.6438,0 14.3029,0 25.85,10.9407 25.85,24.3813s-11.5471,24.3813-25.85,24.3813-25.85-10.9407-25.85-24.3813c0-12.6002 10.1524-23.1301 23.2062-24.3813zm-279.7969,116.6187c6.4276-.1833 12.8731,2.0046 17.6251,6.7562 9.5037,9.5039 9.0857,25.4298-1.0282,35.5438s-26.04,10.5336-35.5437,1.0279c-9.5039-9.502-9.0854-25.4312 1.0281-35.5433 5.0568-5.0577 11.4913-7.6013 17.9187-7.7846zm230.5938,0c.7967-.0562 1.5466,0 2.35,0 6.4276.1833 13.0088,2.8745 18.0657,7.9313 10.1136,10.1135 10.5319,26.0399 1.0281,35.5438s-25.4301,9.0837-35.5437-1.0279c-10.1137-10.1153-10.532-26.0389-1.0282-35.5442 4.1579-4.1567 9.5516-6.5137 15.1281-6.9029zm-116.6187,47.7346c.8184-.0907 1.6568,0 2.4969,0 13.4403,0 24.3812,11.5456 24.3812,25.85s-10.9409,25.85-24.3812,25.85-24.3813-11.5493-24.3813-25.85c0-13.4105 9.6078-24.5312 21.8844-25.85z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbstract047Icon);
    