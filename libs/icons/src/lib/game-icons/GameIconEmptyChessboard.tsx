import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconEmptyChessboardIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'empty-chessboard'];
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
        d="M21 21v58.75h58.75V21H21zm58.75 58.75v58.75h58.75V79.75H79.75zm58.75 0h58.75V21H138.5v58.75zm58.75 0v58.75H256V79.75h-58.75zm58.75 0h58.75V21H256v58.75zm58.75 0v58.75h58.75V79.75h-58.75zm58.75 0h58.75V21H373.5v58.75zm58.75 0v58.75H491V79.75h-58.75zm0 58.75H373.5v58.75h58.75V138.5zm0 58.75V256H491v-58.75h-58.75zm0 58.75H373.5v58.75h58.75V256zm0 58.75v58.75H491v-58.75h-58.75zm0 58.75H373.5v58.75h58.75V373.5zm0 58.75V491H491v-58.75h-58.75zm-58.75 0h-58.75V491h58.75v-58.75zm-58.75 0V373.5H256v58.75h58.75zm-58.75 0h-58.75V491H256v-58.75zm-58.75 0V373.5H138.5v58.75h58.75zm-58.75 0H79.75V491h58.75v-58.75zm-58.75 0V373.5H21v58.75h58.75zm0-58.75h58.75v-58.75H79.75v58.75zm0-58.75V256H21v58.75h58.75zm0-58.75h58.75v-58.75H79.75V256zm0-58.75V138.5H21v58.75h58.75zm58.75 0h58.75V138.5H138.5v58.75zm58.75 0V256H256v-58.75h-58.75zm58.75 0h58.75V138.5H256v58.75zm58.75 0V256h58.75v-58.75h-58.75zm0 58.75H256v58.75h58.75V256zm0 58.75v58.75h58.75v-58.75h-58.75zm-58.75 0h-58.75v58.75H256v-58.75zm-58.75 0V256H138.5v58.75h58.75z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconEmptyChessboardIcon })
);
