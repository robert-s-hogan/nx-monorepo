
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbstract045Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abstract-045'];
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
        <path fill="currentColor" d="m126.6029,21c-58.5338,0-105.6029,47.0641-105.6029,105.6031v258.7938c0,58.539 47.0691,105.6031 105.6029,105.6031h45.3846v-54.3438h37.4529v54.3438h27.4658v-54.3438h38.1875v54.3438h27.4659v-54.3438h37.7467v54.3438h45.0909c58.5338,0 105.6029-47.0641 105.6029-105.6031v-258.7938c0-58.539-47.0691-105.6031-105.6029-105.6031h-45.0909v54.7844h-37.7467v-54.7844h-27.4659v54.7844h-38.1875v-54.7844h-27.4658v54.7844h-37.4529v-54.7844h-45.3846zm129.3972,76.9625c87.2954,0 158.1846,70.7428 158.1846,158.0375s-70.8892,158.1843-158.1846,158.1843-158.1846-70.8897-158.1846-158.1843 70.8891-158.0375 158.1846-158.0375zm0,28.9343c-64.7322,0-118.2901,47.5947-127.6346,109.7157h255.2692c-9.3446-62.121-62.9025-109.7157-127.6346-109.7157zm-127.6346,148.4906c9.3445,62.1433 62.9025,109.8625 127.6346,109.8625s118.29-47.7192 127.6346-109.8625h-255.2692z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbstract045Icon);
    