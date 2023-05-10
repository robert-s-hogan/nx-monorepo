const ShieldOffIcon: React.FC = (props) => {
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
      className={`feather feather-shield-off ${props.className}`}
      {...props}
    >
      <path d="M5.36 3.07L12 6.92M12 6.92L18.64 3.07M12 6.92V14a6.01 6.01 0 0 0-4 5.66V20h8v-1.34A6.01 6.01 0 0 0 12 14V6.92z" />
    </svg>
  );
};

export const ShieldOff = IconWrapper(ShieldOffIcon);
