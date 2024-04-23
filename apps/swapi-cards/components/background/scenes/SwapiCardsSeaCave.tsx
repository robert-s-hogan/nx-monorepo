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
        style={{ fill: '#A3DC93' }}
        points="478.242,71.768 455.736,139.285 512,116.779 512,71.768 "
      />
      <path
        style={{ fill: '#CAED73' }}
        d="M266.127,71.768c-24.756,0-45.011,20.255-45.011,45.011l257.125,22.505V71.768H266.127z"
      />
      <polygon
        style={{ fill: '#FE9528' }}
        points="443.358,116.779 358.4,116.779 335.895,386.844 465.864,386.844 "
      />
      <path
        style={{ fill: '#FEC14D' }}
        d="M221.117,116.779c-18.567,0-33.758,15.191-33.758,33.758v22.505
	c-18.614,0-33.758,15.144-33.758,33.758v180.044h204.8V116.779L221.117,116.779L221.117,116.779z"
      />
      <path
        style={{ fill: '#4D392F' }}
        d="M257.125,195.549c-28.277,0-51.2,22.923-51.2,51.2v136.369h102.4V246.749
	C308.325,218.472,285.402,195.549,257.125,195.549z"
      />
      <path
        style={{ fill: '#FFA850' }}
        d="M443.358,116.779v90.022c-18.614,0-33.758,15.144-33.758,33.758v146.286h91.147l-22.505-270.066
	L443.358,116.779L443.358,116.779z"
      />
      <polygon
        style={{ fill: '#FD8300' }}
        points="512,116.779 478.242,116.779 478.242,386.844 512,309.763 "
      />
      <path
        style={{ fill: '#4B8D8F' }}
        d="M512,309.763c-9.219,18.983-28.68,32.07-51.2,32.07l-33.758,84.396l33.758,84.396H512V309.763z"
      />
      <path
        style={{ fill: '#63ABA1' }}
        d="M409.6,309.763c-9.218,18.982-28.68,32.07-51.2,32.07c-22.52,0-41.982-13.088-51.2-32.07
	c-9.218,18.982-28.68,32.07-51.2,32.07c-22.52,0-41.982-13.088-51.2-32.07c-9.218,18.982-28.68,32.07-51.2,32.07
	s-41.982-13.088-51.2-32.07c-9.218,18.982-28.68,32.07-51.2,32.07S9.219,328.746,0,309.763v200.862h460.8V341.833
	C438.28,341.834,418.818,328.745,409.6,309.763z"
      />
      <g>
        <path
          style={{ fill: '#FFFFFF' }}
          d="M162.04,417.789H145.16c-4.662,0-8.44-3.778-8.44-8.44s3.778-8.44,8.44-8.44h16.879
		c4.662,0,8.44,3.778,8.44,8.44S166.702,417.789,162.04,417.789z"
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d="M469.24,485.306H452.36c-4.662,0-8.44-3.778-8.44-8.44s3.778-8.44,8.44-8.44h16.879
		c4.662,0,8.44,3.778,8.44,8.44S473.902,485.306,469.24,485.306z"
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d="M366.84,451.547H349.96c-4.662,0-8.44-3.778-8.44-8.44s3.778-8.44,8.44-8.44h16.879
		c4.662,0,8.44,3.778,8.44,8.44S371.502,451.547,366.84,451.547z"
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d="M59.64,451.547H42.76c-4.662,0-8.44-3.778-8.44-8.44s3.778-8.44,8.44-8.44H59.64
		c4.662,0,8.44,3.778,8.44,8.44S64.302,451.547,59.64,451.547z"
        />
      </g>
      <path
        style={{ fill: '#4D392F' }}
        d="M153.6,32.352c-3.232,0-6.18-1.847-7.592-4.753c-2.797-5.764-8.513-9.344-14.913-9.344
	c-4.662,0-8.44-3.778-8.44-8.44s3.778-8.44,8.44-8.44c8.415,0,16.432,3.236,22.505,8.742c6.073-5.506,14.091-8.742,22.505-8.742
	c4.662,0,8.44,3.778,8.44,8.44s-3.778,8.44-8.44,8.44c-6.401,0-12.116,3.581-14.913,9.344
	C159.78,30.506,156.832,32.352,153.6,32.352z"
      />
      <path
        style={{ fill: '#59473C' }}
        d="M51.2,80.207c-3.232,0-6.18-1.847-7.592-4.753c-2.797-5.764-8.513-9.344-14.913-9.344
	c-4.662,0-8.44-3.778-8.44-8.44s3.778-8.44,8.44-8.44c8.415,0,16.432,3.236,22.505,8.742c6.073-5.506,14.091-8.742,22.505-8.742
	c4.662,0,8.44,3.778,8.44,8.44s-3.778,8.44-8.44,8.44c-6.401,0-12.116,3.581-14.913,9.344C57.38,78.361,54.432,80.207,51.2,80.207z"
      />
    </svg>
  );
};

interface SwapiCardsSeaCaveProps {
  homeworld: string;
  terrain: string;
}

function SwapiCardsSeaCave({ homeworld, terrain }: SwapiCardsSeaCaveProps) {
  return (
    <>
      <h3 className="absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-black z-20">
        {homeworld}{' '}
      </h3>
      <Scene />
    </>
  );
}

export default SwapiCardsSeaCave;