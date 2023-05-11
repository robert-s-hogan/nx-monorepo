import IconWrapper from './IconWrapper';

const ShoppingCartIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-shopping-cart ${props.className}`}
      {...props}
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l3.5 13h9M10 17H2" />
    </svg>
  );
};

export const ShoppingCart = IconWrapper(ShoppingCartIcon);
