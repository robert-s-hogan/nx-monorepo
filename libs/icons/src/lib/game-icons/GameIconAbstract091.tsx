import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAbstract091Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'abstract-091'];
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
      <path
        fill="currentColor"
        d="m256,21c-129.7965,0-235,105.0566-235,234.8531s105.2035,235.1469 235,235.1469 235-105.3504 235-235.1469-105.2034-234.8531-235-234.8531zm-53.4625,35.9844c12.2625,16.1191 31.6585,26.5844 53.4625,26.5844 21.7846,0 40.7576-10.4897 53.0218-26.5844 2.5594,20.0917 14.457,38.8882 33.3407,49.7906 18.8706,10.8949 40.5193,11.4841 59.1906,3.6719-7.7734,18.6491-7.0618,40.3448 3.8188,59.1906s29.4505,30.6143 49.4968,33.1938c-16.0384,12.2652-26.5843,31.5687-26.5843,53.3156s10.5396,41.2035 26.5843,53.4625c-20.0186,2.6339-38.6288,14.0761-49.4968,32.9-10.895,18.8706-11.6247,40.5255-3.8188,59.1907-18.685-7.7936-40.3172-7.0779-59.1906,3.8187-18.8103,10.8601-30.719,29.6495-33.3407,49.6437-12.2695-16.0167-31.2989-26.5843-53.0218-26.5843-21.804,0-41.2,10.759-53.4625,26.8781-2.5635-20.0857-14.1682-39.0379-33.0469-49.9375-18.8457-10.8806-40.5351-11.5984-59.1907-3.8187 7.806-18.6651 7.2231-40.3201-3.6719-59.1907-10.868-18.8239-29.6252-30.2661-49.6437-32.9 15.9721-12.2696 26.2906-31.7682 26.2906-53.4625 0-21.7864-10.3541-41.03-26.4375-53.3156 20.0794-2.5572 38.8909-14.3151 49.7906-33.1938 10.8806-18.8458 11.4453-40.5415 3.6719-59.1906 18.6529,7.7942 40.3355,7.214 59.1907-3.6719 18.8787-10.8995 30.4811-29.7136 33.0469-49.7906zm53.4625,64.4781c-74.3141,0-134.5375,60.2234-134.5375,134.5375s60.2234,134.5375 134.5375,134.5375 134.5375-60.2234 134.5375-134.5375-60.2233-134.5375-134.5375-134.5375zm-30.55,20.5625c7.0208,9.2289 18.0663,15.275 30.55,15.275 12.4726,0 23.3813-6.0601 30.4031-15.275 1.4654,11.5033 8.2821,22.3985 19.0937,28.6406 10.8043,6.2378 23.0911,6.5291 33.7813,2.0562-4.4506,10.6774-4.0264,23.1381 2.2031,33.9281s16.8695,17.47 28.3469,18.9469c-9.1827,7.0224-15.1281,18.0989-15.1281,30.55s5.9418,23.5312 15.1281,30.55c-11.4615,1.508-22.1244,8.0225-28.3469,18.8-6.2378,10.8042-6.6723,23.2416-2.2031,33.9281-10.698-4.4622-22.9754-4.0356-33.7813,2.2031-10.7696,6.2178-17.5927,16.8993-19.0937,28.3468-7.0249-9.1703-17.9658-15.1281-30.4031-15.1281-12.4837,0-23.5292,6.0461-30.55,15.275-1.4678-11.4999-8.138-22.2533-18.9469-28.4937-10.79-6.2297-23.247-6.6573-33.9281-2.2031 4.4693-10.6866 4.1815-23.1239-2.0563-33.9281-6.2224-10.7775-17.0322-17.292-28.4937-18.8 9.1446-7.0249 15.1282-18.1291 15.1281-30.55 0-12.4737-5.9197-23.5159-15.1281-30.55 11.4964-1.4641 22.2532-8.138 28.4937-18.9469 6.2296-10.79 6.5069-23.2507 2.0563-33.9281 10.6796,4.4625 23.1327,4.1764 33.9281-2.0562 10.8089-6.2404 17.4778-17.1456 18.9469-28.6406zm30.55,57.2812c-31.3184,0-56.6938,25.3754-56.6938,56.6938s25.3754,56.6937 56.6938,56.6937 56.6937-25.3753 56.6937-56.6937-25.3753-56.6938-56.6937-56.6938z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAbstract091Icon })
);
