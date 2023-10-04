import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFamasIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'famas'];
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
        d="M466.674 16.34L435.78 47.232l14.326 14.326L481 30.664 466.674 16.34zM34.418 445.184l46.577 46.577a13.32 13.32 0 0 0 20.618-2.213l60.15-93.456 51.144-21.74s2.487-22.322 3.033-30.12c.763-10.805 3.966-22.05 11.633-29.718l162.948-162.95a21.086 21.086 0 0 0 0-29.82l-42.563-42.564a17.516 17.516 0 0 0-24.772 0l-170.87 170.87a10.736 10.736 0 0 0 0 15.184l22.775 22.775L34.427 428.675a11.67 11.67 0 0 0-.01 16.51zm153.614-182.737c-5.962-5.963-4.907-16.68 2.392-23.98l125.273-125.274c7.262-7.262 18.018-8.354 23.98-2.392l6.31 6.31L194.344 268.76l-6.31-6.31zm118.933 97.288l20.41-20.41 12.416-32.892-18.385-55.515 7.328-7.33 20.364 61.488a4.636 4.636 0 0 1-.057 3.09l-13.31 35.405a4.636 4.636 0 0 1-1.063 1.65l-22.512 22.51c-.282.283-23.952 18.885-23.952 18.885-22.107-10.37-32.467-38.345-26.12-56.56 2.827-8.12.04-12.98-4.643-15.194l20.798-20.797zm-78.224 30.47l39.353 39.353-28.228 44.617-61.817-61.817zM423.837 65.375l8.13 8.13-29.737 29.734-8.13-8.128 29.708-29.708z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFamasIcon })
);
