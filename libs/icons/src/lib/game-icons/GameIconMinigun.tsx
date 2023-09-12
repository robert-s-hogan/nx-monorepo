
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMinigunIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'minigun'];
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
        <path fill="currentColor" d="M66.793 194.227v38.177h95.234v52.21h31.422c-1.602 52-10.98 87.324-23.327 109.21-6.947 12.313-14.558 20.39-22.42 25.315-21.22-11.84-39.07-38.882-39.07-71.007h-18.69c0 53.26 38.992 97.638 82.565 96.084 21.786-.777 43.438-14.208 58.672-41.21 14.588-25.856 24.16-64.12 25.75-118.392h23.34v-90.388H66.793zm347.11 3.918v17.96H298.958v45.202H413.9v17.957h18.69v-17.957h23.53v17.957h18.687v-17.957h19.426v-45.203H474.81v-17.96h-18.69v17.96h-23.528v-17.96h-18.69zm-395.22 52.95v83.874H143.34v-83.876H18.682zm193.467 33.52h26.08c-1.602 52-10.98 87.323-23.328 109.21-12.94 22.936-28.18 31.183-43.062 31.714-4.085.145-8.238-.4-12.365-1.526 8.788-2.515 17.46-8.28 25.584-18.694.45-.76.9-1.53 1.34-2.312 14.59-25.857 24.16-64.12 25.75-118.393zM45.164 348.133c0 53.26 38.99 97.638 82.563 96.084 2.977-.106 5.953-.458 8.91-1.04-23.16-4.283-43.785-21.112-56.307-44.448-9.903-13.495-16.476-31.11-16.476-50.597h-18.69z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMinigunIcon);
    