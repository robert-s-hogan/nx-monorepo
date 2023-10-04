import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBlackHandShieldIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'black-hand-shield'];
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
        d="M51.67 24.377c0 215.76 44.432 429.318 209.21 474.63 181.394-38.7 209.446-258.276 209.446-474.63H51.67zM276.482 44.79c1.448.018 2.916.13 4.375.34l.07.01c6.26.92 12.11 3.844 15.452 6.77L275.18 180.922l17.607 5.646L352.07 66.25c4.27-.31 10.41.832 16.05 3.863 5.992 3.22 10.74 8.133 12.995 12.658l-56.13 116.24 15.218 10.48 76.664-81.246c4.1 1.16 9.34 4.344 13.65 9.195 4.623 5.2 7.66 11.762 8.53 16.882L337.624 263.916l.135-.143c-14.347 14.864-16.183 38.756-12.852 68.202 3.173 28.047 11.84 62.157 23.774 100.28-25.156 24.603-55.416 40.65-85.72 47.116-28.74-10.175-50.453-19.478-72.64-39.227 20.222-52.778 24.746-101.603 23.157-140.637 6.284 2.99 12.498 5.453 18.69 7.197 15.103 4.253 30.777 3.893 44.453-4.392l-9.687-15.988c-8.748 5.3-17.79 5.74-29.7 2.387-11.91-3.355-25.99-10.902-41.486-20.733-28.876-18.32-62.683-44.228-101.223-63.307 4.407-8.026 9.135-12.05 13.983-13.96 6.228-2.456 14.186-1.912 24.166 1.56 15.198 5.29 33.493 17.21 52.21 28.808l16.007-9.14-.754-3.508c-.613-.38-1.218-.745-1.83-1.127L167.284 65.877c3.303-3.966 9.28-8.136 15.986-10.318 6.207-2.02 12.423-2.145 16.595-1.113l25.715 116.66 18.36-.543 19.59-123.007c3.058-1.567 7.08-2.622 11.513-2.756.477-.014.957-.017 1.44-.01z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBlackHandShieldIcon })
);
