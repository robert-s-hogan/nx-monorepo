import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLoveInjectionIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'love-injection'];
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
        d="M110.814 19.584C86.886 19.1 66.43 42.18 74.574 72.572 33.3 61.514 1.52 106.864 33.804 137.152c27.285 25.595 75.65 12.207 105.592 13.594l35.608 35.61-20.8 20.798c-5.792-2.507-11.9-3.718-17.956-3.72-1.102 0-2.2.038-3.297.117-14.61 1.05-28.493 9.07-36.325 22.636-12.533 21.7-5.02 49.73 16.682 62.26l9.343-16.186c-12.953-7.48-17.322-23.778-9.84-36.73 7.204-12.477 22.578-16.98 35.274-10.622l.79.79 165.18 165.185c22 22 51.77 20.233 71.514 6.043l89.446 89.447 13.215-13.213-89.543-89.545c5.476-7.808 8.98-17.067 9.432-27.056.633-13.987-5.028-29.007-17.884-41.863l-166.363-166.37.516-.298c-7.48-12.954-3.115-29.253 9.84-36.73 12.957-7.48 29.25-3.115 36.73 9.84l16.185-9.345c-7.83-13.564-21.715-21.583-36.325-22.63-1.095-.08-2.195-.12-3.297-.118-7.712.003-15.515 1.955-22.636 6.066-20.796 12.005-28.546 38.234-18.14 59.498l-18.528 18.53-34.986-34.986c-1.04-30.028 11.983-81.578-14.238-106.203-8.923-8.378-18.818-12.176-28.182-12.366zm107.64 149.752L375.837 326.73l-49.754 49.754-157.39-157.39 49.76-49.758zm.837 26.373l-13.214 13.214L336.584 339.43l13.215-13.215L219.29 195.71z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLoveInjectionIcon })
);
