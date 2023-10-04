import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAqueductIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'aqueduct'];
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
        d="M17.537 117.564L17.497 135h476.944v-17.436H17.538zM17.46 153l-.106 47H24a32 32 0 0 1 32-32 32 32 0 0 1 32 32h16.033a32 32 0 0 1-.033-.676 32 32 0 0 1 32-32 32 32 0 0 1 32 32 32 32 0 0 1-.023.676h15.783a32 32 0 0 1 32-32 32 32 0 0 1 32 32h16.033a32 32 0 0 1-.033-.676 32 32 0 0 1 32-32 32 32 0 0 1 32 32 32 32 0 0 1-.024.676h16.33a32 32 0 0 1-.066-1.324 32 32 0 0 1 32-32 32 32 0 0 1 32 32 32 32 0 0 1-.047 1.324H424.1a32 32 0 0 1-.1-2 32 32 0 0 1 32-32 32 32 0 0 1 32 32 32 32 0 0 1-.07 2h6.51v-47H17.46zm-2.136 63l.2 96h8.67A32 80 0 0 1 56 240a32 80 0 0 1 31.84 72h16.353A32 80 0 0 1 136 240a32 80 0 0 1 31.84 72h16.353A32 80 0 0 1 216 240a32 80 0 0 1 31.84 72h16.353A32 80 0 0 1 296 240a32 80 0 0 1 31.84 72h16.353A32 80 0 0 1 376 240a32 80 0 0 1 31.84 72h16.353A32 80 0 0 1 456 240a32 80 0 0 1 31.84 72h7.924l.398-96H15.324zm-.726 112l.677 160H41.05A62.988 144 0 0 1 104 346.537 62.988 144 0 0 1 166.934 488h26.203A62.988 144 0 0 1 256 352a62.988 144 0 0 1 62.813 136h26.324A62.988 144 0 0 1 408 352a62.988 144 0 0 1 62.813 136h24.705l1.353-160H14.6z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAqueductIcon })
);
