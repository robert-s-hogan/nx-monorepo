
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconShrugIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'shrug'];
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
        <path fill="currentColor" d="M256 29c-11.642 0-22.985 7.432-32.006 21.607C214.974 64.783 209 85.247 209 108s5.973 43.217 14.994 57.393C233.014 179.568 244.358 187 256 187s22.985-7.432 32.006-21.607C297.026 151.217 303 130.753 303 108s-5.973-43.217-14.994-57.393C278.986 36.432 267.642 29 256 29zm-80 131c-32 0-48 144-48 144 0-16-16-64-32-96-16 0-76.002 16-76 26v22l60-16s32 128 48 128 48-112 48-112l16 234h128l16-234s32 112 48 112 48-128 48-128l60 16v-22c.027-10-60-26-76-26-16 32-32 80-32 96 0 0-16-144-48-144 0 0-10.902.02-25.727 1.74-2.092 4.725-4.453 9.187-7.082 13.317C291.945 192.73 275.287 205 256 205c-19.286 0-35.944-12.27-47.19-29.943-2.63-4.13-4.99-8.592-7.083-13.317C186.902 160.02 176 160 176 160z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconShrugIcon);
    