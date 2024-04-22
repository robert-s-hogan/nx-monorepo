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
        style={{ fill: '#FFA850' }}
        points="512,256 494.558,344.334 17.442,344.334 0,256 0,0 512,0 "
      />
      <path
        style={{ fill: '#D3552B' }}
        d="M256,91.147v307.2c84.831,0,153.6-68.769,153.6-153.6S340.831,91.147,256,91.147z"
      />
      <path
        style={{ fill: '#E86C16' }}
        d="M375.842,244.747c0-84.831-53.655-153.6-119.842-153.6c-84.831,0-153.6,68.769-153.6,153.6
	s68.769,153.6,153.6,153.6C322.186,398.347,375.842,329.578,375.842,244.747z"
      />
      <g>
        <path
          style={{ fill: '#FFE0A2' }}
          d="M512,256c-9.219,18.983-28.68,32.07-51.2,32.07l-33.758,111.965L460.8,512H512V256z"
        />
        <path
          style={{ fill: '#FFE0A2' }}
          d="M409.6,256c-9.218,18.982-28.68,32.07-51.2,32.07c-22.52,0-41.982-13.088-51.2-32.07
		c-9.218,18.982-28.68,32.07-51.2,32.07c-22.52,0-41.982-13.088-51.2-32.07c-9.218,18.982-28.68,32.07-51.2,32.07
		s-41.982-13.088-51.2-32.07c-9.218,18.982-28.68,32.07-51.2,32.07S9.219,274.983,0,256v256h460.8V288.07
		C438.28,288.07,418.818,274.982,409.6,256z"
        />
      </g>
      <g>
        <path
          style={{ fill: '#FFFFFF' }}
          d="M162.04,364.026H145.16c-4.661,0-8.44-3.778-8.44-8.44s3.779-8.44,8.44-8.44h16.879
		c4.661,0,8.44,3.778,8.44,8.44S166.7,364.026,162.04,364.026z"
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d="M418.04,465.301H401.16c-4.661,0-8.44-3.778-8.44-8.44s3.779-8.44,8.44-8.44h16.879
		c4.661,0,8.44,3.778,8.44,8.44S422.7,465.301,418.04,465.301z"
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d="M469.24,431.543H452.36c-4.661,0-8.44-3.778-8.44-8.44c0-4.662,3.779-8.44,8.44-8.44h16.879
		c4.661,0,8.44,3.778,8.44,8.44C477.679,427.765,473.9,431.543,469.24,431.543z"
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d="M366.84,397.785H349.96c-4.661,0-8.44-3.778-8.44-8.44s3.779-8.44,8.44-8.44h16.879
		c4.661,0,8.44,3.778,8.44,8.44S371.5,397.785,366.84,397.785z"
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d="M59.64,397.785H42.76c-4.661,0-8.44-3.778-8.44-8.44s3.779-8.44,8.44-8.44H59.64
		c4.661,0,8.44,3.778,8.44,8.44S64.3,397.785,59.64,397.785z"
        />
      </g>
    </svg>
  );
};

interface SwapiCardDesertProps {
  homeworld: string;
  terrain: string;
}

const SwapiCardsSunset: React.FC<SwapiCardDesertProps> = ({
  homeworld,
  terrain,
}) => {
  return (
    <div className="aspect-ratio-box">
      <h3 className="z-10 absolute right-2 m-0 uppercase p-4 text-2xl font-light pr-6 text-brown">
        {homeworld}{' '}
      </h3>
      <div className="aspect-ratio-svg">
        <Scene />
      </div>
    </div>
  );
};

export default SwapiCardsSunset;
