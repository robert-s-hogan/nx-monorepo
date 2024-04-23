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
      <polygon
        style={{ fill: '#66DEFE' }}
        points="163.165,140.997 196.923,298.198 118.154,298.198 118.154,187.347 "
      />
      <polygon
        style={{ fill: '#8CE6FE' }}
        points="393.846,187.347 393.846,298.198 315.077,298.198 348.835,140.997 "
      />
      <polygon
        style={{ fill: '#55B9D3' }}
        points="348.835,140.997 348.835,298.198 270.359,298.198 270.359,64.872 326.33,64.872 "
      />
      <rect
        x="222.242"
        y="85.363"
        style={{ fill: '#66DEFE' }}
        width="81.875"
        height="212.834"
      />
      <polygon
        style={{ fill: '#8CE6FE' }}
        points="256,64.872 256,298.198 163.165,298.198 163.165,140.997 185.67,64.872 "
      />
      <polygon
        style={{ fill: '#B3EFFF' }}
        points="326.33,64.872 304.117,85.352 256,85.352 256,0 "
      />
      <path
        style={{ fill: '#D9F7FF' }}
        d="M304.117,85.352c0,0.011-48.117,44.392-48.117,44.392l-70.33-64.872L256,0L304.117,85.352z"
      />
      <polygon
        style={{ fill: '#66DEFE' }}
        points="512,275.692 512,334.769 500.747,343.209 512,351.648 512,402.286 500.747,410.725 
	512,419.165 512,436.044 500.747,444.484 512,452.923 512,512 478.242,512 410.725,393.846 478.242,275.692 "
      />
      <polygon
        style={{ fill: '#B3EFFF' }}
        points="478.242,275.692 478.242,376.97 466.989,394.409 478.242,410.725 478.242,512 0,512 
	0,486.681 11.253,478.242 0,469.802 0,317.89 11.253,309.451 0,301.011 0,275.692 "
      />
      <path
        style={{ fill: '#FFFFFF' }}
        d="M421.978,301.011H0v16.879h421.978c4.661,0,8.44-3.779,8.44-8.44S426.639,301.011,421.978,301.011z"
      />
      <g>
        <polygon
          style={{ fill: '#66DEFE' }}
          points="168.791,433.234 33.758,433.234 33.758,478.242 191.297,478.242 	"
        />
        <polygon
          style={{ fill: '#66DEFE' }}
          points="298.198,376.97 393.846,376.97 393.846,410.725 281.319,410.726 	"
        />
      </g>
      <g>
        <path
          style={{ fill: '#FFFFFF' }}
          d="M225.055,469.802H0v16.879h225.055c4.661,0,8.44-3.779,8.44-8.44S229.716,469.802,225.055,469.802z"
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d="M225.055,334.769c-4.661,0-8.44,3.779-8.44,8.44s3.779,8.44,8.44,8.44H512v-16.879H225.055z"
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d="M191.297,351.648H90.022c-4.661,0-8.44-3.779-8.44-8.44s3.779-8.44,8.44-8.44h101.275
		c4.661,0,8.44,3.779,8.44,8.44S195.958,351.648,191.297,351.648z"
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d="M410.725,436.044c-4.661,0-8.44,3.779-8.44,8.44c0,4.661,3.779,8.44,8.44,8.44H512v-16.879H410.725z
		"
        />
      </g>
      <polygon
        style={{ fill: '#55B9D3' }}
        points="444.484,376.97 427.604,410.726 478.242,410.725 478.242,376.97 "
      />
      <path
        style={{ fill: '#FFFFFF' }}
        d="M256,402.286c-4.661,0-8.44,3.779-8.44,8.44c0,4.661,3.779,8.44,8.44,8.44h256v-16.879H256z"
      />
    </svg>
  );
};

interface SwapiCardsIcebergProps {
  homeworld: string;
  terrain: string;
}

function SwapiCardsIceberg({ homeworld, terrain }: SwapiCardsIcebergProps) {
  return (
    <>
      <h3 className="absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-black z-20">
        {homeworld}{' '}
      </h3>
      <Scene />
    </>
  );
}

export default SwapiCardsIceberg;