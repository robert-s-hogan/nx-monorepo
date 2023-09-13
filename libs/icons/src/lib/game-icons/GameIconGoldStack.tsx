
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconGoldStackIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'gold-stack'];
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
        <path fill="currentColor" d="M313.824 61.625l-67.865 118.24L176 96l-4.08 129.77L56.162 105.264 112 272l-81.986-63.115 19.865 113.77L18 311.724V391h7.514l16-48h40l16-48h40l16-48h40l16-48h92.972l16 48h40l16 48h40l16 48h40l16 48H494V241.285l-77.783 39.547L480 144l-125.797 83.758L400 128l-74.926 66.87zM222.486 217l-10 30h87.028l-10-30zm-56 48l-10 30h87.028l-10-30zm86 0L256 275.54l3.514-10.54zm26 0l-10 30h87.028l-10-30zm-168 48l-10 30h87.028l-10-30zm86 0L200 323.54l3.514-10.54zm26 0l-10 30h87.028l-10-30zm86 0L312 323.54l3.514-10.54zm26 0l-10 30h87.028l-10-30zm-280 48l-10 30h87.028l-10-30zm86 0L144 371.54l3.514-10.54zm26 0l-10 30h87.028l-10-30zm86 0L256 371.54l3.514-10.54zm26 0l-10 30h87.028l-10-30zm86 0L368 371.54l3.514-10.54zm26 0l-10 30h87.028l-10-30zM18 409v30h57.514l-10-30zm66.486 0L88 419.54 91.514 409zm26 0l-10 30h87.028l-10-30zm86 0L200 419.54l3.514-10.54zm26 0l-10 30h87.028l-10-30zm86 0L312 419.54l3.514-10.54zm26 0l-10 30h87.028l-10-30zm86 0L424 419.54l3.514-10.54zm26 0l-10 30H494v-30zm-418 48L32 467.54 35.514 457zm26 0l-10 30h87.028l-10-30zm86 0L144 467.54l3.514-10.54zm26 0l-10 30h87.028l-10-30zm86 0L256 467.54l3.514-10.54zm26 0l-10 30h87.028l-10-30zm86 0l3.344 10.033.342-.01L371.514 457zm26 0l-10 30h87.028l-10-30zm86 0l2.287 6.863 2.477-.07 2.264-6.793z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconGoldStackIcon);
    