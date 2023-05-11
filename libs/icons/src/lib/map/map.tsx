import IconWrapper from './IconWrapper';

const MapIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-map ${props.className}`}
    >
      <path d="M20 3.78l-8-3.78-8 3.78c-.34.16-.62.44-.78.78L3.78 12l-1.56 8.44c-.06.33.02.66.23.91.22.25.55.39.89.39.1 0 .21-.01.31-.04L12 18.22l7.33 3.49c.1.05.21.08.31.08.34 0 .67-.14.89-.39.21-.25.3-.58.23-.91L20 12.78l2.22-8c.16-.34-.04-.72-.38-.9zM12 16.45L4.4 19.4l1.14-6.2L4.4 7.02 12 4.07l7.6 2.95-1.14 6.2 1.14 6.2L12 16.45z"></path>
    </svg>
  );
};

export const Map = IconWrapper(MapIcon);
