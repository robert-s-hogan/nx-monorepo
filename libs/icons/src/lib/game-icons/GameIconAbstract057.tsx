
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAbstract057Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'abstract-057'];
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
        <path fill="currentColor" d="m257.0263,21.0016c-.05.4061-.084.6004-.1456,1.0281-.9611,6.4481-2.7109,15.4196-4.4062,26.7311-1.6948,11.3115-3.3271,25.0067-4.2596,40.6841s-1.1722,33.4094.2962,51.9934c1.088,14.8826 3.3013,30.5151 6.3154,46.9997s6.9221,33.7488 10.8686,51.9934c.5449,2.443 1.0637,4.8583 1.6159,7.3438 3.7078,16.8351 7.1571,33.8909 9.9874,50.9653s4.9514,34.2857 6.0216,51.1122c1.4867,24.794.5412,47.7377-1.7624,67.5621s-5.86,36.4357-9.5467,49.3496c-2.9703,10.386-6.0351,18.3615-8.6657,24.0874 64.4714-.379 125.4041-5.5764 179.6272-14.8343v-29.5217c0-10.31 8.2592-18.5061 18.5056-18.5061h29.522v-34.956c-35.3598-6.1472-62.2747-36.8937-62.2747-74.0245s26.9149-67.9992 62.2747-74.1714v-160.8271h-29.522c-10.2464,0-18.5056-8.1961-18.5056-18.5061v-29.5217c-23.2785-3.9743-47.8006-7.2495-73.2904-9.6937v79.4589c26.5962,9.1828 45.6781,34.3203 45.6781,64.0371 0,23.8014-12.2985,44.7283-30.8441,56.8402v110.8899h-17.184v-102.8118c-2.9972.9166-6.0944,1.5594-9.2533,2.0562v171.1083h-17.3306v-170.5207c-3.1571-.3135-6.2398-.8844-9.2534-1.6157v67.2683h-17.3311v-74.1714c-20.5807-11.6537-34.5152-33.7046-34.5152-59.0434 0-29.2442 18.5668-54.0596 44.5026-63.5965v-83.2776c-21.8643-1.2179-44.2479-1.8906-67.1217-1.9094zm-8.3716.1467c-64.4713.3789-125.4041,5.5764-179.6272,14.8343v29.5217c0,10.31-8.2593,18.5061-18.5057,18.5061h-29.5219v34.956c35.3146,6.2304 62.2746,37.0905 62.2746,74.1714s-26.96,67.8193-62.2746,74.0245v160.8271h29.5219c10.2464,0 18.5057,8.1961 18.5057,18.5061v29.5217c56.0847,9.5759 119.3003,14.9419 186.2363,14.9811 .1081-.8685.16-1.3796.2962-2.3499 .9955-7.2602 2.7204-17.3503 4.4057-30.1092 1.2432-9.3734 2.4126-20.1464 3.2318-32.1654h-106.9244c-13.6736,0-24.6748-10.1213-24.6748-22.7654 0-11.854 9.7045-21.6008 22.1777-22.7655 .831-.0778 1.6412,0 2.4971,0h107.8052c-.155-4.4852-.5658-9.0457-.8808-13.6593h-106.9244c-13.6736,0-24.6748-10.1213-24.6748-22.7655 0-11.854 9.7045-21.6008 22.1777-22.7655 .831-.0778 1.6412,0 2.4971,0h101.4898c-.5938-3.4522-1.237-6.9032-1.9096-10.4281-.2069-1.1012-.5182-2.2698-.7342-3.3781h-98.846c-13.6736,0-24.6748-10.1213-24.6748-22.7655 0-11.854 9.7045-21.6008 22.1777-22.7654 .831-.0778 1.6412,0 2.4971,0h89.2995c-.4511-2.198-.8545-4.423-1.3221-6.6093-4.0523-18.3911-7.8696-37.0288-10.722-55.6653s-4.8132-37.2329-5.4342-55.2246c-.6918-22.6816.8033-43.4123 3.3784-61.0996 2.5671-17.6873 6.2293-32.3435 9.8403-43.6216 2.5596-7.9943 5.0694-14.2033 7.3437-18.9468zm-94.8806,32.606c25.8916,0 46.9997,21.1082 46.9997,46.9997s-21.108,46.8528-46.9997,46.8528-46.8526-20.9613-46.8526-46.8528 20.961-46.9997 46.8526-46.9997zm-16.0095,29.6686c-10.9016,0-19.6806,8.7795-19.6806,19.6811s8.779,19.828 19.6806,19.828 19.8282-8.9263 19.8282-19.828-8.9262-19.6811-19.8282-19.6811zm209.7361,34.5154c-28.6153,0-51.8463,23.2296-51.8463,51.8465s23.2315,51.8466 51.8463,51.8466c28.6172,0 51.8468-23.2297 51.8468-51.8466s-23.2296-51.8465-51.8468-51.8465zm-13.5124,21.003c12.265,0 22.1782,9.9136 22.1782,22.178s-9.9132,22.178-22.1782,22.178c-12.2636,0-22.1777-9.9136-22.1777-22.178s9.9141-22.178 22.1777-22.178z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAbstract057Icon);
    