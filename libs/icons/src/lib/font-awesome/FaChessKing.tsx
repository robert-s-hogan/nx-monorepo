import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FaChessKingIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'chessking'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={`fa chessking ${combinedClassNames}`}
      {...props}
    >
      {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --> */}
      <g fill="currentColor">
        <path d="M248 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V56H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v40H59.6C26.7 144 0 170.7 0 203.6c0 8.2 1.7 16.3 4.9 23.8L59.1 352h52.3L49 208.2c-.6-1.5-1-3-1-4.6c0-6.4 5.2-11.6 11.6-11.6H224 388.4c6.4 0 11.6 5.2 11.6 11.6c0 1.6-.3 3.2-1 4.6L336.5 352h52.3l54.2-124.6c3.3-7.5 4.9-15.6 4.9-23.8c0-32.9-26.7-59.6-59.6-59.6H248V104h32c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V24zM101.2 432H346.8l16.6 32H84.7l16.6-32zm283.7-30.7c-5.5-10.6-16.5-17.3-28.4-17.3H91.5c-12 0-22.9 6.7-28.4 17.3L36.6 452.5c-3 5.8-4.6 12.2-4.6 18.7C32 493.8 50.2 512 72.8 512H375.2c22.5 0 40.8-18.2 40.8-40.8c0-6.5-1.6-12.9-4.6-18.7l-26.5-51.2z" />
      </g>
    </svg>
  );
};

export default IconWrapper(FaChessKingIcon);
