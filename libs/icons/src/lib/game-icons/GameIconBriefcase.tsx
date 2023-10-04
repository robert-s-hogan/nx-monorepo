import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBriefcaseIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'briefcase'];
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
        d="M224.05 95.703c-7.08-.04-11.694 4.704-14.484 8.793-2.79 4.09-4.604 8.582-6.086 12.932-1.16 3.41-2.072 6.75-2.76 9.572h18.63c.357-1.242.74-2.505 1.17-3.77 1.185-3.48 2.706-6.816 3.916-8.59.498-.73.652-.846.712-.93l61.676.337c.063.084.25.225.764.97 1.208 1.755 2.72 5.04 3.904 8.467.407 1.18.768 2.356 1.11 3.516h18.656c-.69-2.773-1.597-6.045-2.75-9.387-1.484-4.3-3.304-8.75-6.096-12.804-2.792-4.055-7.357-8.72-14.363-8.757l-64-.35zM96 145c-5 0-11.05 2.777-15.637 7.363C75.777 156.95 73 163 73 168v21.275L132.816 279h12.758v-16h50v16H311v-16h50v16h18.184L439 189.275V168c0-5-2.777-11.05-7.363-15.637C427.05 147.777 421 145 416 145H96zm-23 76.725V376c0 5 2.777 11.05 7.363 15.637C84.95 396.223 91 399 96 399h320c5 0 11.05-2.777 15.637-7.363C436.223 387.05 439 381 439 376V221.725L388.816 297H361v41.188h-50V297H195.574v41.188h-50V297h-22.39L73 221.725zM163.574 281v39.188h14V281h-14zM329 281v39.188h14V281h-14z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBriefcaseIcon })
);
