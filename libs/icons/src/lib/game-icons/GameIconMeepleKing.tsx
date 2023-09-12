
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMeepleKingIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'meeple-king'];
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
        <path fill="currentColor" d="M256 28.727l-30.854 30.855-36.058-24.041L199.378 87h113.243l10.291-51.459-36.058 24.041L256 28.727zM189.822 105c-3.877 10.797-5.815 21.922-6.41 32.184 47.396 17.569 95.091 19.4 145.18.064-.591-10.279-2.529-21.428-6.414-32.248H189.822zm154.98 41.05L289.669 311.46l-16-31.998-17.668 53-17.668-53-16 31.998-54.871-164.613-.264-.791c-26.01 12.556-53.086 25.22-75.662 38.12-14.32 8.184-26.805 16.415-36.203 25.26C45.934 218.28 39 228.24 39 239.99c0 5 2.44 9.075 5.19 12.065 2.753 2.99 6.054 5.312 9.812 7.48 7.515 4.336 16.99 7.95 27.412 11.076 15.483 4.646 32.823 8.1 47.9 9.577-14.996 25.84-34.953 49.575-52.447 72.316C56.65 378.786 39 403.99 39 431.99c0 4-.043 7.123.31 10.26.356 3.137 1.257 7.053 4.41 10.156 3.156 3.104 7.017 3.938 10.163 4.28 3.146.345 6.316.304 10.38.304h111.542c8.097 0 14.026.493 20.125-3.43 6.1-3.92 8.324-9.275 12.67-17.275l.088-.16.08-.166s9.723-19.77 21.324-39.389c5.8-9.808 12.097-19.576 17.574-26.498 2.74-3.46 5.304-6.204 7.15-7.754.564-.472.82-.56 1.184-.76.363.2.62.288 1.184.76 1.846 1.55 4.41 4.294 7.15 7.754 5.477 6.922 11.774 16.69 17.574 26.498 11.6 19.618 21.324 39.389 21.324 39.389l.08.164.088.16c4.346 8 6.55 13.323 12.61 17.254 6.058 3.93 11.974 3.45 19.957 3.45H448c4 0 7.12.044 10.244-.303 3.123-.347 6.997-1.21 10.12-4.332 3.12-3.122 3.983-6.999 4.33-10.122.347-3.122.306-6.244.306-10.244 0-28-17.65-53.203-37.867-79.486-17.493-22.74-37.45-46.475-52.447-72.316 15.077-1.478 32.417-4.93 47.9-9.577 10.422-3.125 19.897-6.739 27.412-11.074 3.758-2.168 7.059-4.49 9.81-7.48 2.754-2.99 5.192-7.065 5.192-12.065 0-11.75-6.934-21.71-16.332-30.554-9.398-8.846-21.883-17.077-36.203-25.26-22.576-12.9-49.652-25.567-75.662-38.123zM190.3 158.433l35.369 106.107 16-31.998L256 275.537l14.332-42.996 16 31.998 35.277-105.828c-44.795 14.197-88.786 12.909-131.31-.28z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMeepleKingIcon);
    