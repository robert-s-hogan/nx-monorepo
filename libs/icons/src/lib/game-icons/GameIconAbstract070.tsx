
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbstract070Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abstract-070'];
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
        <path fill="currentColor" d="m108.4747,490.9677c-29.6718-.5556-59.461-5.4589-87.4747-14.2826v-47.8397c35.0727,19.4171 79.6753,29.9296 124.1576,28.4265 23.7806-.699 48.3717-5.1394 73.5422-9.984 25.2272-4.9374 51.26-10.5088 78.3039-13.4506 67.6549-7.2503 136.6874,4.0181 193.9963,29.6745v4.0213c-59.8574-21.1903-127.8687-26.3143-189.4109-14.5599-24.4619,4.6225-48.4437,11.8599-73.3658,18.8586-24.8139,7.0523-50.817,13.8708-79.0094,17.1946-10.5775,1.2049-21.3786,1.8419-32.0976,1.9413-2.903.0288-5.7362.0577-8.6416,0zm382.5253-61.1517c-35.042-19.3462-79.5838-29.7881-123.9813-28.2878-23.7805.699-48.3717,5.1394-73.5421,9.984-25.2272,4.9374-51.26,10.3702-78.304,13.3119-67.7367,7.2591-136.8227-3.9866-194.1726-29.6745v-3.8827c59.8927,21.2334 127.9955,26.3237 189.5872,14.56 24.462-4.6226 48.4437-11.8599 73.3659-18.8586 24.8141-7.0522 50.817-13.8708 79.0094-17.1945 42.6172-4.8546 87.1816-.7084 128.0375,12.0639v47.9784zm-382.5253-54.4957c-29.6718-.5448-59.461-5.3574-87.4747-14.1439v-47.9784c35.0727,19.4171 79.6753,29.9296 124.1576,28.4265 23.7806-.699 48.3717-5.1394 73.5422-9.984 25.2272-4.9374 51.26-10.3701 78.3039-13.3119 67.6549-7.2503 136.6874,3.9139 193.9963,29.5358v4.0213c-59.8574-21.1903-127.8687-26.3142-189.4109-14.5599-24.4619,4.6226-48.4437,11.8599-73.3658,18.8586-24.8139,7.0522-50.817,13.8708-79.0094,17.1946-10.5775,1.2049-21.3786,1.8419-32.0976,1.9413-2.903.0288-5.7362.0504-8.6416,0zm382.5253-61.1517c-35.042-19.3464-79.5838-29.7882-123.9813-28.2878-23.7805.699-48.3717,5.1394-73.5421,9.9839-25.2272,4.9374-51.26,10.3702-78.304,13.3119-67.7367,7.2591-136.8227-3.9865-194.1726-29.6745v-3.8826c59.8927,21.2333 127.9955,26.3237 189.5872,14.5598 24.462-4.6224 48.4437-11.8598 73.3659-18.8586 24.8141-7.0522 50.817-13.8708 79.0094-17.1945 42.6172-4.8546 87.1816-.7084 128.0375,12.0639v47.9785zm-382.5253-54.4957c-29.6718-.5448-59.461-5.3573-87.4747-14.1439v-47.9784c35.0727,19.4171 79.6753,29.9296 124.1576,28.4265 23.7806-.699 48.3717-5.1394 73.5422-9.9839 25.2272-4.9374 51.26-10.3701 78.3039-13.3119 67.6549-7.2503 136.6874,3.9139 193.9963,29.5358v4.0213c-59.8574-21.1903-127.8687-26.3142-189.4109-14.5599-24.4619,4.6224-48.4437,11.8599-73.3658,18.8586-24.8139,7.0522-50.817,13.8707-79.0094,17.1945-10.5775,1.2049-21.3786,1.8419-32.0976,1.9413-2.903.0288-5.7362.0504-8.6416,0zm382.5253-61.1517c-35.042-19.3464-79.5838-29.7881-123.9813-28.2878-23.7805.699-48.3717,5.1394-73.5421,9.9839-25.2273,4.9374-51.26,10.3701-78.304,13.3119-67.7367,7.2591-136.8227-3.9865-194.1726-29.6745v-3.8826c59.8927,21.2333 127.9955,26.3237 189.5872,14.5598 24.4619-4.6225 48.4437-11.8599 73.3659-18.8586 24.8139-7.0522 50.817-13.8707 79.0094-17.1945 42.6172-4.8546 87.1816-.7084 128.0375,12.064v47.9784zm-382.5253-54.4957c-29.6718-.5448-59.461-5.3573-87.4747-14.1439v-47.9784c35.0727,19.4171 79.6753,29.9296 124.1576,28.4265 23.7806-.699 48.3717-5.1394 73.5422-9.984 25.2272-4.9374 51.26-10.3701 78.3039-13.3119 67.6549-7.2503 136.6874,3.9139 193.9963,29.5359v4.0213c-59.8574-21.1903-127.8687-26.3142-189.4109-14.56-24.4619,4.6226-48.4437,11.8599-73.3658,18.8586-24.8139,7.0522-50.817,13.8708-79.0094,17.1945-10.5775,1.2049-21.3786,1.8419-32.0976,1.9413-2.903.0288-5.7362.0504-8.6416,0zm382.5253-61.1517c-35.042-19.3463-79.5838-29.7881-123.9813-28.2878-23.7805.699-48.3715,5.1394-73.5421,9.984-25.2272,4.9374-51.26,10.5088-78.304,13.4506-67.7367,7.2591-136.8227-4.0908-194.1726-29.8132v-3.8827c59.8927,21.2333 127.9955,26.3237 189.5872,14.5599 24.462-4.6226 48.4437-11.8599 73.3659-18.8586 24.8141-7.0523 50.817-13.7322 79.0094-17.0559 42.6172-4.8546 87.1816-.7084 128.0375,12.064v47.8397z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbstract070Icon);
    