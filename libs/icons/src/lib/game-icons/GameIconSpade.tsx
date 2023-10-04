import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSpadeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'spade'];
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
        d="M173.844 15.563v.03l52.22 192.157c7.035-3.16 14.752-6.03 22.686-8.406 8.894-2.663 18.006-4.683 26.72-5.72L227 15.565l-53.156-.002zm240.03 183.968c-13.045 15.41-48.86 31.746-91.874 45.845 1.64 16.418 2.707 35.075 2.72 53.344.01 18.658-1.105 36.594-4.25 51.155-1.574 7.28-3.61 13.75-6.75 19.28-3.143 5.53-7.815 10.59-14.564 12.376-6.75 1.786-13.316-.275-18.812-3.5-5.497-3.223-10.55-7.79-15.594-13.31-10.087-11.045-20.125-26.058-29.563-42.22-9.477-16.23-18.235-33.37-25.218-48.688-45.532 8.43-85.193 11.69-102.126 6.313 27.59 101.65 71.632 175.738 120.312 216.094H388.75c47.247-52.587 62.203-160.075 25.125-296.69zm-127.843 12.064c-.745.007-1.525.022-2.31.062-8.694.44-19.32 2.508-29.626 5.594-10.308 3.086-20.344 7.183-28.063 11.313-5.254 2.81-8.667 5.522-10.905 7.53 5.213 15.886 19.636 48.602 36.22 77 9.044 15.492 18.7 29.674 27.218 39 4.258 4.664 8.254 8.075 11.218 9.813 2.965 1.74 4.307 1.64 4.595 1.563.288-.077 1.42-.62 3.094-3.564 1.67-2.944 3.424-7.837 4.75-13.97 2.648-12.262 3.823-29.34 3.81-47.217-.02-33.398-4.27-69.712-7.842-85.564-2.73-.895-6.933-1.61-12.157-1.562z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSpadeIcon })
);
