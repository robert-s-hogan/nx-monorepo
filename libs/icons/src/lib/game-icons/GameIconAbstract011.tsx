
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbstract011Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abstract-011'];
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
        <path fill="currentColor" d="m256,20.9995-5.7284,28.6404-187.4125-25.7029c-.69-.0937-1.3776-.1413-2.0562-.1456-10.1821-.0843-18.8287,9.564-18.0654,19.6813l11.8966,157.8904c-19.8251,9.2769-33.6341,30.2361-33.6341,54.6376s13.8091,45.3202 33.6341,54.6375l-11.8966,157.8909c-.8136,10.7916 9.0799,21.0532 20.1216,19.5341l187.4125-25.7029 5.7284,28.6404 5.7279-28.6404 187.4125,25.7029c11.0417,1.5191 20.9352-8.7425 20.1221-19.5341l-11.8971-158.0377c19.7724-9.3596 33.6346-30.1618 33.6346-54.4908s-13.8622-45.1718-33.6346-54.4904l11.8971-158.0375c.7619-10.1172-7.8838-19.7672-18.0659-19.6813-.6786.004-1.3663.0504-2.0562.1456l-187.4125,25.7029-5.7279-28.6404zm-187.5596,19.6813 179.9221,18.0654-5.2875,26.5846-63.7442-21.2971 50.8192,42.8875-50.8192,43.0346 63.7442-21.2971 12.925,64.3312 12.925-64.3312 63.7433,21.2971-50.8183-43.0346 50.8183-42.8875-63.7433,21.2971-5.2875-26.5846 179.9216-18.0654c4.6427.2112 8.2133,3.5791 8.5188,8.0779l-5.2875,148.9312c-4.011-.9485-8.2038-1.4687-12.4846-1.4687-18.0922,0-34.1441,8.9944-44.5029,22.9124 8.6494-14.5352 22.3527-25.2582 38.3346-29.0812v-116.4716c0-.0505-.1457-.7347-.1457-.7347s-18.7192,53.9917-21.0029,97.2313c-21.6703-36.198-62.4221-72.7029-62.4221-72.7029s8.5592,57.0608 26.2904,95.7625c-35.2542-19.4651-87.2433-28.7875-87.2433-28.7875s33.2685,44.8005 66.2404,68.5905c-39.3888,2.5079-88.5654,22.9124-88.5654,22.9124l.4418.1456h-.4418c0,0 49.1766,20.5522 88.5654,23.0596-32.9719,23.7905-66.2404,68.5904-66.2404,68.5904s51.989-9.322 87.2433-28.7875c-17.7312,38.7021-26.2904,95.7625-26.2904,95.7625s40.7514-36.652 62.4221-72.85c2.2847,43.2395 21.0029,97.2312 21.0029,97.2312s.1363-.7041.1457-.7341v-116.325c-16.1196-3.8554-29.8445-14.6142-38.4817-29.375 10.3494,14.1235 26.4281,23.2063 44.65,23.2063 4.2808,0 8.4736-.516 12.4846-1.4687l5.2875,148.9312c-.3055,4.4988-3.8761,7.8678-8.5188,8.0779l-179.9216-18.0654 5.2875-26.5846 63.7433,21.4437-50.8183-43.0341 50.8183-42.8875-63.7433,21.15-12.925-64.3312-12.925,64.3312-63.7442-21.15 50.8192,42.8875-50.8192,43.0341 63.7442-21.4437 5.2875,26.5846-179.9221,18.0654c-4.6427-.2112-8.2128-3.579-8.5188-8.0779l5.2875-148.9312c3.964.9315 8.1061,1.4687 12.3375,1.4687 17.5639,0 33.3601-8.3336 43.7687-21.5909-8.7067,13.928-21.9311,24.0476-37.4529,27.7597v116.325c0,.0432.1457.7341.1457.7341s18.5721-53.9917 20.8563-97.2313c21.6708,36.198 62.4221,72.85 62.4221,72.85s-8.4125-57.0604-26.1442-95.7625c35.2556,19.4655 87.2442,28.7875 87.2442,28.7875s-33.2685-44.7999-66.2409-68.5904c39.3893-2.5074 88.4188-23.0596 88.4188-23.0596h-.2914l.2914-.1456c0,0-49.0294-20.4046-88.4188-22.9125 32.9724-23.79 66.2409-68.5904 66.2409-68.5904s-51.9881,9.3225-87.2442,28.7875c17.7317-38.7017 26.1442-95.7626 26.1442-95.7626s-40.7514,36.5049-62.4221,72.703c-2.2842-43.2396-20.8562-97.2313-20.8562-97.2313s-.1363.7048-.1457.7347v116.4716c15.5217,3.713 28.7461,13.8631 37.4529,27.7596-10.4086-13.2257-26.2048-21.5908-43.7687-21.5908-4.2314,0-8.3735.5412-12.3375,1.4687l-5.2875-148.9312c.3055-4.4988 3.8761-7.8678 8.5187-8.0779zm187.5596,49.6438c9.4874,0 17.1841,7.3893 17.1841,16.5966s-7.6972,16.7438-17.1841,16.7438-17.1846-7.5359-17.1846-16.7438 7.6977-16.5966 17.1846-16.5966zm-159.6534,135.8591c15.5349,0 28.2,13.3052 28.2,29.8159s-12.6651,29.6687-28.2,29.6687-28.0534-13.1581-28.0534-29.6687 12.5189-29.8159 28.0534-29.8159zm319.1591,0c15.5349,0 28.0534,13.3052 28.0534,29.8159s-12.5184,29.6687-28.0534,29.6687c-15.5344,0-28.2-13.1581-28.2-29.6687s12.6656-29.8159 28.2-29.8159zm-159.5058,162.15c9.486,0 17.1841,7.5364 17.1841,16.7437s-7.6972,16.5972-17.1841,16.5972-17.1846-7.3899-17.1846-16.5972 7.6977-16.7437 17.1846-16.7437z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbstract011Icon);
    