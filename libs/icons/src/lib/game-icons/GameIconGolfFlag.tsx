import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGolfFlagIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'golf-flag'];
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
        d="M193 33v443.55c5.33.678 10.708 1.133 16.123 1.307l-.076-278.337L383.727 136 209.014 72.467 209.002 33H193zm159 352c-17.227 0-31 13.773-31 31s13.773 31 31 31 31-13.773 31-31-13.773-31-31-31zm-104 48c-7.122 0-14.096.16-20.89.445l.013 45.112c6.79.286 13.76.443 20.877.443 34.738 0 66.208-3.574 88.326-9.104 6.035-1.508 11.344-3.186 15.805-4.9-.043 0-.086.004-.13.004-19.54 0-36.49-11.588-44.344-28.23C290.02 434.39 269.646 433 248 433zm-73 5.867c-5.484.983-10.628 2.062-15.326 3.237-11.06 2.764-19.795 6.09-25.035 9.187-4.377 2.588-5.365 4.426-5.576 4.71.21.284 1.2 2.122 5.575 4.71 5.24 3.097 13.975 6.422 25.034 9.186 4.698 1.175 9.842 2.254 15.326 3.237v-34.266zM129.064 456c-.04-.056-.064-.074-.064 0s.023.056.064 0z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGolfFlagIcon })
);
