const ShoppingBagIcon: React.FC = (props) => {
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
      className={`feather feather-shopping-bag ${props.className}`}
      {...props}
    >
      <path d="M2 6h20v14H2zM6 8h12M6 12h12M6 16h12" />
      <circle cx="10" cy="10.5" r="1" />
      <circle cx="17" cy="10.5" r="1" />
    </svg>
  );
};

export const ShoppingBag = IconWrapper(ShoppingBagIcon);
