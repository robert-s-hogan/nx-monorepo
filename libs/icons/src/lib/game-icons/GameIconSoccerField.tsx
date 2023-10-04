import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSoccerFieldIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'soccer-field'];
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
        d="M23 119v274h466V119H23zm18 18h206v79.016c-18.25 4.135-32 20.537-32 39.984 0 19.447 13.75 35.85 32 39.984V375H41v-62h64V199H41v-62zm224 0h206v62h-64v114h64v62H265v-79.016c18.25-4.135 32-20.537 32-39.984 0-19.447-13.75-35.85-32-39.984V137zM41 217h46v78H41v-78zm384 0h46v78h-46v-78zm-178 17.793v42.414c-8.27-3.467-14-11.6-14-21.207 0-9.606 5.73-17.74 14-21.207zm18 0c8.27 3.467 14 11.6 14 21.207 0 9.606-5.73 17.74-14 21.207v-42.414z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSoccerFieldIcon })
);
