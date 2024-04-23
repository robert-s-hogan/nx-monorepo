const Scene = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 500" // Adjusted to the aspect ratio of the container
      preserveAspectRatio="xMidYMid meet" // This will center the SVG in the viewbox
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
      }}
    >
      <path
        style={{ fill: '#FFA850' }}
        d="M256,0v101.275c27.963,0,50.637-22.674,50.637-50.637S283.963,0,256,0z"
      />
      <path
        style={{ fill: '#FECB69' }}
        d="M256,0c12.434,0,22.505,22.674,22.505,50.637S268.434,101.275,256,101.275
      c-27.963,0-50.637-22.674-50.637-50.637S228.037,0,256,0z"
      />
      <path
        style={{ fill: '#326E7D' }}
        d="M142.662,190.644c-4.197-24.396-27.884-44.358-52.64-44.358l-3.95-22.989
      c-3.151-18.297-20.919-33.274-39.486-33.274H12.828l88.447,275.13l67.516-22.505L142.662,190.644z"
      />
      <path
        style={{ fill: '#4393A8' }}
        d="M108.904,190.644l26.129,152.002l-88.106,56.826L0,376.967V90.022h12.828
      c18.567,0,36.335,14.977,39.486,33.274l3.95,22.989C81.02,146.286,104.707,166.248,108.904,190.644z"
      />
      <polygon
        style={{ fill: '#326E7D' }}
        points="512,90.022 512,376.967 478.242,399.473 444.484,216.334 478.242,90.022 "
      />
      <path
        style={{ fill: '#4393A8' }}
        d="M478.242,90.022v309.451l-13.174,0.003l-121.859-56.83l26.129-152.002
      c4.197-24.396,27.884-44.358,52.64-44.358l3.95-22.989c3.151-18.297,20.919-33.274,39.486-33.274H478.242z"
      />
      <polygon
        style={{ fill: '#8CE6FE' }}
        points="369.338,190.644 397.548,343.209 342.027,359.717 342.309,190.644 "
      />
      <g>
        <polygon
          style={{ fill: '#B3EFFF' }}
          points="342.309,190.644 364.533,348.464 239.487,365.714 114.44,343.209 142.662,190.644 
          180.044,190.644 188.484,201.897 196.923,190.644 213.802,190.644 222.242,201.897 230.681,190.644 	"
        />
        <path
          style={{ fill: '#B3EFFF' }}
          d="M431.31,343.212h-33.758v56.264l67.516-22.505C465.068,358.322,449.958,343.212,431.31,343.212z"
        />
      </g>
      <path
        style={{ fill: '#D9F7FF' }}
        d="M431.31,376.97c0-18.648-15.11-33.758-33.758-33.758l-316.866-0.003
      c-18.648,0-33.758,15.11-33.758,33.758l192.191,22.508L431.31,376.97z"
      />
      <polygon
        style={{ fill: '#66DEFE' }}
        points="512,376.967 512,436.044 500.747,444.484 512,452.923 512,469.802 500.747,479.179 
      512,486.681 512,512 478.242,512 433.231,444.484 478.242,376.967 "
      />
      <polygon
        style={{ fill: '#B3EFFF' }}
        points="478.242,376.967 478.242,512 0,512 0,419.165 11.253,410.725 0,402.286 0,376.967 "
      />
      <g>
        <path
          style={{ fill: '#FFFFFF' }}
          d="M421.978,402.286H0v16.879h421.978c4.661,0,8.44-3.779,8.44-8.44
          C430.418,406.064,426.639,402.286,421.978,402.286z"
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d="M225.055,436.044c-4.661,0-8.44,3.779-8.44,8.44c0,4.661,3.779,8.44,8.44,8.44H512v-16.879H225.055z
          "
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d="M191.297,452.923H90.022c-4.661,0-8.44-3.779-8.44-8.44c0-4.661,3.779-8.44,8.44-8.44h101.275
          c4.661,0,8.44,3.779,8.44,8.44C199.736,449.144,195.958,452.923,191.297,452.923z"
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d="M410.725,469.802c-4.661,0-8.44,3.779-8.44,8.44s3.779,8.44,8.44,8.44H512v-16.879H410.725z"
        />
      </g>
      <g>
        <path
          style={{ fill: '#8CE6FE' }}
          d="M356.423,301.011H264.44v-73.893c0-4.661-3.779-8.44-8.44-8.44c-4.661,0-8.44,3.779-8.44,8.44
          v73.893h-50.637V190.644h-16.879v110.367h-25.026c-4.661,0-8.44,3.779-8.44,8.44s3.779,8.44,8.44,8.44h201.405
          c4.661,0,8.44-3.779,8.44-8.44S361.084,301.011,356.423,301.011z"
        />
        <path
          style={{ fill: '#8CE6FE' }}
          d="M213.802,190.644v51.29c0,4.661,3.779,8.44,8.44,8.44c4.661,0,8.44-3.779,8.44-8.44v-51.29H213.802z
          "
        />
      </g>
    </svg>
  );
};

interface SwapiCardsTaigaProps {
  homeworld: string;
  terrain: string;
}

function SwapiCardsTaiga({ homeworld, terrain }: SwapiCardsTaigaProps) {
  return (
    <>
      <h3 className="absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-black z-20">
        {homeworld}{' '}
      </h3>
      <Scene />
    </>
  );
}

export default SwapiCardsTaiga;