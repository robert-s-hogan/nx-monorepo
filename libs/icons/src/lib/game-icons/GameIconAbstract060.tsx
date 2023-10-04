import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAbstract060Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'abstract-060'];
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
        d="m21,21v448.2625l100.0219-100.0219c-25.7363-30.6361-41.2719-70.0981-41.2719-113.2407 0-97.3402 78.9097-176.25 176.25-176.25 43.1427,0 82.6034,15.5356 113.2408,41.2719l100.1683-100.0218h-448.4092zm470,21.5906-100.1687,100.0219c25.8153,30.658 41.4188,70.1712 41.4188,113.3875 0,97.3402-78.9097,176.2501-176.25,176.2501-43.2165,0-82.7294-15.6035-113.3875-41.4188l-100.1687,100.1688h448.5562v-448.4094zm-234.9999,65.3594c-35.3934,0-67.7943,12.4749-93.2659,33.1937l65.6534,65.6532c8.1634-4.5942 17.5775-7.1969 27.6125-7.1969 31.1487,0 56.3999,25.2511 56.3999,56.3999 0,10.0348-2.6023,19.449-7.1966,27.6126l65.6529,65.6531c20.7191-25.4714 33.1938-57.8725 33.1938-93.2657 0-81.7658-66.2841-148.0499-148.05-148.0499zm-114.8563,54.7844c-20.7188,25.4714-33.1938,57.8724-33.1938,93.2656 0,81.7658 66.2841,148.05 148.05,148.05 35.3933,0 67.7942-12.4749 93.2658-33.1938l-65.6533-65.6531c-8.1634,4.5942-17.5776,7.1969-27.6125,7.1969-31.1488,0-56.4-25.2511-56.4-56.4 0-10.0348 2.6024-19.4489 7.1966-27.6125l-65.6529-65.6531z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAbstract060Icon })
);
