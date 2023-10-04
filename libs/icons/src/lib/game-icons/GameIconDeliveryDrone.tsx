import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDeliveryDroneIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'delivery-drone'];
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
        d="M407 24.98v14.04h16V25zM88.99 25v14.03H105V25zM487 57H344.9v15.96H487zm-320 0H25v15.98h142zm256 33.93h-16.1v27.97l13.7.1h2.4zm-318 .1H88.97v28.07H105zm272 45.87l-.1 32.1h-78.5l-16-32h-52.8l-16 32.1-78.6-.1v-32H55.03l-12.04 48L199 214.4V208c.1-31.4 25.7-56.9 57.1-57 31.3 0 57 25.6 56.9 57 0 4.1.1 6.4.1 6.4L469 185.1 457 137zM256.1 169c-21.6 0-39 17.4-39.1 39.1.1 21.5 17.5 38.9 39.1 38.9s39-17.4 38.9-39c.1-21.5-17.3-39-38.9-39zm-.2 14c13.8 0 25 11.3 25.1 25 0 13.7-11.3 25.1-25 25-13.7 0-25.1-11.3-25-24.9 0-13.8 11.3-25 24.9-25.1zm-54.7 40.5L215 279h82l13.9-55.4c-6.8 23.9-28.8 41.4-54.8 41.4-26.1 0-48.1-17.6-54.9-41.5zm-35.8 4.2L60.35 321.1l83.85 107.7c5-5 11.3-8.8 18.2-11.1L100.2 318l87.9-73-3.4-13.4zm181.3.2l-19.4 3.8-3.3 13.4 87.8 73-62.2 99.6c7 2.3 13.2 6.2 18.3 11.3l83.8-107.8zM176 433.6c-15 0-26.9 11.9-26.9 26.7 0 14.9 11.9 26.7 27 26.8 14.9-.1 26.9-12 26.9-26.8-.1-14.8-11.9-26.7-27-26.7zm159.9 0c-14.9.1-27 11.9-26.9 26.8 0 14.7 11.9 26.6 27 26.6 15 0 27-11.8 26.9-26.7.1-14.8-11.9-26.7-27-26.7z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDeliveryDroneIcon })
);
