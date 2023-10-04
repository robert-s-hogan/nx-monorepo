import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const CustomJHLogo = (props: CommonProps = { className: '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 316.19333 123.27867"
      className={`custom custom-jh-logo ${props.className}`}
      {...props}
    >
      <defs id="defs6">
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath16">
          <path d="M 0,92.459 H 237.145 V 0 H 0 Z" id="path14" />
        </clipPath>
      </defs>
      <g id="g8" transform="matrix(1.3333333,0,0,-1.3333333,0,123.27867)">
        <g id="g10">
          <g id="g12" clipPath="url(#clipPath16)">
            <g id="g18" transform="translate(79.2233,62.5374)">
              <path
                d="m 0,0 c -1.115,-0.071 -1.959,-1.046 -1.959,-2.164 v -45.179 h -62.069 v 10.454 c 0,1.159 -0.94,2.098 -2.098,2.098 -1.158,0 -2.098,-0.939 -2.098,-2.098 V -49.44 c 0,-1.159 0.941,-2.097 2.098,-2.097 H 0.138 c 1.159,0 2.097,0.938 2.097,2.097 V -2.093 C 2.235,-0.888 1.222,0.078 0,0"
                style={{
                  fill: '#555b6e',
                  fillOpacity: 1,
                  fillRule: 'nonzero',
                  stroke: 'none',
                }}
                id="path20"
              />
            </g>
            <g id="g22" transform="translate(93.7702,66.6595)">
              <path
                d="M 0,0 C -0.286,2.375 -2.291,4.219 -4.681,4.339 -4.954,4.354 -5.215,4.343 -5.476,4.314 l -5.886,9.492 c -0.395,0.635 -1.095,1.013 -1.843,0.991 -0.749,-0.022 -1.429,-0.44 -1.784,-1.097 l -26.209,-48.402 h -0.038 l -9.922,18.883 c 0.804,0.881 1.292,2.051 1.292,3.339 0,2.84 -2.393,5.126 -5.275,4.949 -2.446,-0.151 -4.447,-2.122 -4.631,-4.567 -0.091,-1.212 0.255,-2.34 0.895,-3.247 l -9.52,-14.515 h -10.178 v 40.464 h 56.049 c 1.115,0 2.09,0.841 2.165,1.955 0.081,1.221 -0.886,2.241 -2.093,2.241 h -58.219 c -1.158,0 -2.098,-0.94 -2.098,-2.098 V -32.02 c 0,-1.138 0.924,-2.062 2.064,-2.062 h 2.132 v 0.026 h 11.31 c 0.709,0 1.368,0.356 1.756,0.948 l 10.283,15.684 c 0.079,-0.004 0.099,-0.005 0.177,-0.009 l 9.96,-18.959 c -0.896,-1.023 -1.382,-2.42 -1.187,-3.925 0.29,-2.243 2.117,-4.028 4.365,-4.271 2.985,-0.323 5.513,2.006 5.513,4.929 0,1.154 -0.396,2.217 -1.058,3.059 L -13.022,8.522 -9.055,2.126 C -9.578,1.341 -9.883,0.4 -9.883,-0.616 c 0,-2.738 2.222,-4.958 4.961,-4.958 2.943,0 5.284,2.561 4.922,5.574"
                style={{
                  fill: '#e07a5f',
                  fillOpacity: 1,
                  fillRule: 'nonzero',
                  stroke: 'none',
                }}
                id="path24"
              />
            </g>
            <g id="g26" transform="translate(108.0358,21.5101)">
              <path
                d="m 0,0 7.201,8.661 c 3.698,-5.06 8.175,-7.785 13.528,-7.785 7.006,0 10.608,4.185 10.608,12.554 V 48.659 H 7.104 V 59.268 H 43.988 V 14.111 c 0,-16.057 -7.98,-23.94 -22.967,-23.94 C 12.457,-9.829 4.671,-6.326 0,0"
                style={{
                  fill: '#e07a5f',
                  fillOpacity: 1,
                  fillRule: 'nonzero',
                  stroke: 'none',
                }}
                id="path28"
              />
            </g>
            <g id="g30" transform="translate(226.1452,80.7777)">
              <path
                d="m 0,0 v -68.123 h -12.651 v 29.195 h -35.23 V -68.123 H -60.532 V 0 h 12.651 v -28.125 h 35.23 V 0 Z"
                style={{
                  fill: '#e07a5f',
                  fillOpacity: 1,
                  fillRule: 'nonzero',
                  stroke: 'none',
                }}
                id="path32"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: CustomJHLogo })
);
