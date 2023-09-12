
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSteelDoorIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'steel-door'];
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
        <path fill="currentColor" d="M380.384 169.214v-68.276h17.01v-71.39H96v452.905h301.395v-78.11h-17.01v-85.287h17.01v-132.83h-17.01v-17.012zM326.036 47.61a8.505 8.505 0 1 1-8.506 8.506 8.505 8.505 0 0 1 8.506-8.506zm-40.315 0a8.505 8.505 0 1 1-8.505 8.506 8.505 8.505 0 0 1 8.506-8.506zm-41.367 0a8.505 8.505 0 1 1-8.505 8.506 8.505 8.505 0 0 1 8.505-8.506zm-41.378 0a8.505 8.505 0 1 1-8.505 8.506 8.505 8.505 0 0 1 8.505-8.506zm-41.367 0a8.505 8.505 0 1 1-8.506 8.506 8.505 8.505 0 0 1 8.506-8.506zm-47.385 6.89a8.835 8.835 0 0 1 .52-1.68 8.57 8.57 0 0 1 1.776-2.7 8.697 8.697 0 0 1 1.296-1.064 8.388 8.388 0 0 1 1.5-.797 8.91 8.91 0 0 1 1.498-.47 8.6 8.6 0 0 1 7.73 2.32 8.048 8.048 0 0 1 1.062 1.328 8.197 8.197 0 0 1 .777 1.456 8.42 8.42 0 0 1 .467 1.5 9.005 9.005 0 0 1 .18 1.71 8.77 8.77 0 0 1-.158 1.628 9.175 9.175 0 0 1-.5 1.648 8.208 8.208 0 0 1-.776 1.445 8.718 8.718 0 0 1-1.063 1.297 8.505 8.505 0 0 1-14.523-6.017 8.792 8.792 0 0 1 .213-1.605zm8.356 37.508a8.505 8.505 0 1 1-8.506 8.505 8.505 8.505 0 0 1 8.505-8.505zm0 44.408a8.505 8.505 0 1 1-8.506 8.505 8.505 8.505 0 0 1 8.505-8.483zm0 44.42a8.505 8.505 0 1 1-8.506 8.504 8.505 8.505 0 0 1 8.505-8.484zm8.345 276.61a8.92 8.92 0 0 1-.49 1.617 8.06 8.06 0 0 1-.786 1.49 8.505 8.505 0 0 1-1.064 1.296 7.984 7.984 0 0 1-1.34 1.062 8.388 8.388 0 0 1-3.05 1.244 7.75 7.75 0 0 1-1.628.16 8.505 8.505 0 0 1-8.505-8.506 9.026 9.026 0 0 1 .15-1.605v-.14a8.707 8.707 0 0 1 .488-1.55 7.995 7.995 0 0 1 .766-1.415 7.857 7.857 0 0 1 1.064-1.297 9.42 9.42 0 0 1 1.222-1.063l.15-.096a10.11 10.11 0 0 1 1.34-.712l.126-.053a8.697 8.697 0 0 1 1.563-.458 8.4 8.4 0 0 1 3.286 0 8.505 8.505 0 0 1 1.542.457 10.313 10.313 0 0 1 1.435.754l.096.063a8.814 8.814 0 0 1 1.264 1.064 7.974 7.974 0 0 1 1.063 1.34 8.112 8.112 0 0 1 .766 1.457 8.505 8.505 0 0 1 .457 1.467v.138a8.973 8.973 0 0 1 .16 1.605 8.782 8.782 0 0 1-.075 1.7zm-8.346-37.528a8.505 8.505 0 1 1 8.504-8.506 8.505 8.505 0 0 1-8.505 8.527zm0-44.42a8.505 8.505 0 1 1 8.504-8.504 8.505 8.505 0 0 1-8.505 8.526zm0-44.407a8.505 8.505 0 1 1 8.504-8.504 8.505 8.505 0 0 1-8.505 8.526zm-13.822-75.133a32.267 32.267 0 1 1 32.267 32.267 32.3 32.3 0 0 1-32.267-32.235zm53.062 208.38a8.505 8.505 0 1 1 8.505-8.506 8.505 8.505 0 0 1-8.505 8.517zm41.378 0a8.505 8.505 0 1 1 8.506-8.506 8.505 8.505 0 0 1-8.506 8.517zm41.368 0a8.505 8.505 0 1 1 8.505-8.506 8.505 8.505 0 0 1-8.504 8.517zm41.367 0a8.505 8.505 0 1 1 8.505-8.506 8.505 8.505 0 0 1-8.505 8.517zm40.315 0a8.505 8.505 0 1 1 8.505-8.506 8.505 8.505 0 0 1-8.505 8.517zm19.977-34.32H147.17V294.72h199.055v135.308zM194.47 255.99a8.505 8.505 0 1 1 8.505 8.505 8.505 8.505 0 0 1-8.505-8.506zm41.378 0a8.505 8.505 0 1 1 8.505 8.505 8.505 8.505 0 0 1-8.505-8.506zm41.367 0a8.505 8.505 0 1 1 8.506 8.505 8.505 8.505 0 0 1-8.505-8.506zm40.315 0a8.505 8.505 0 1 1 8.506 8.505 8.505 8.505 0 0 1-8.506-8.506zm28.706-49.778H147.17V81.568h199.055v124.644zm25.292 255.658a8.57 8.57 0 0 1-6.017 2.488 8.037 8.037 0 0 1-1.71-.18 8.388 8.388 0 0 1-1.5-.458 9.164 9.164 0 0 1-1.49-.798 7.804 7.804 0 0 1-1.306-1.063 8.505 8.505 0 0 1-1.063-1.287 8.048 8.048 0 0 1-.786-1.478 7.793 7.793 0 0 1-.49-1.616 8.803 8.803 0 0 1-.16-1.628 8.973 8.973 0 0 1 .16-1.605 8.665 8.665 0 0 1 1.287-3.104 7.772 7.772 0 0 1 1.064-1.297 8.686 8.686 0 0 1 1.266-1.064l.095-.063a10.11 10.11 0 0 1 1.34-.714 8.835 8.835 0 0 1 1.69-.51 8.356 8.356 0 0 1 3.285 0 8.697 8.697 0 0 1 1.52.447l.14.053a10.026 10.026 0 0 1 1.34.712l.137.085a9.345 9.345 0 0 1 1.233 1.063 7.92 7.92 0 0 1 1.063 1.34 8.675 8.675 0 0 1 .734 1.37 9.93 9.93 0 0 1 .49 1.564v.117a8.994 8.994 0 0 1 .148 1.616 8.57 8.57 0 0 1-2.488 5.996zm2.307-404a8.314 8.314 0 0 1-.436 1.467v.117a8.92 8.92 0 0 1-.766 1.414 8.325 8.325 0 0 1-2.35 2.35 8.303 8.303 0 0 1-1.5.797 7.91 7.91 0 0 1-1.604.468 7.793 7.793 0 0 1-1.627.16 8.08 8.08 0 0 1-1.712-.182 7.602 7.602 0 0 1-1.583-.488 8.1 8.1 0 0 1-1.414-.754 7.9 7.9 0 0 1-1.297-1.064 8.505 8.505 0 0 1 0-12.024 7.974 7.974 0 0 1 1.34-1.063 8.208 8.208 0 0 1 1.456-.766 8.388 8.388 0 0 1 1.5-.456 8.505 8.505 0 0 1 3.39 0 9.11 9.11 0 0 1 1.596.49 8.112 8.112 0 0 1 1.456.775 8.633 8.633 0 0 1 1.287 1.063 8.165 8.165 0 0 1 1.064 1.34 8.378 8.378 0 0 1 1.17 2.997 7.697 7.697 0 0 1 .16 1.616 8.06 8.06 0 0 1-.16 1.723zM164.18 98.578h165.034v90.624H164.18V98.578zm0 213.153h165.034V413.02H164.18V311.73zM416 169.215h-18.605V117.95H416v51.264zm-18.605 218.118v-51.266H416v51.266h-18.605zM125.768 255.99a15.256 15.256 0 1 1 15.257 15.256 15.256 15.256 0 0 1-15.257-15.257z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSteelDoorIcon);
    