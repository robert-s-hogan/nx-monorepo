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
        style={{ fill: '#D3552B' }}
        d="M478.242,213.802v67.516l-22.505,101.275L512,360.088V180.044
	C493.386,180.044,478.242,195.188,478.242,213.802z"
      />
      <g>
        <path
          style={{ fill: '#E86C16' }}
          d="M444.484,281.319V151.912c0-9.322-7.557-16.879-16.879-16.879c-9.322,0-16.879,7.557-16.879,16.879
		v208.176h67.517v-78.769H444.484z"
        />
        <path
          style={{ fill: '#E86C16' }}
          d="M354.462,292.571H326.33v-67.516c0-18.614-15.144-33.758-33.758-33.758v-39.385
		c0-9.322-7.557-16.879-16.879-16.879s-16.879,7.557-16.879,16.879v73.143h-39.385v-67.516c0-18.614-15.144-33.758-33.758-33.758
		v-22.506c0-18.567-15.191-33.758-33.758-33.758h-33.758v337.582l258.813-45.011L354.462,292.571z"
        />
      </g>
      <path
        style={{ fill: '#FE9528' }}
        d="M28.132,180.044v67.516H0v112.527l84.396,22.505L61.89,146.286
	C43.276,146.286,28.132,161.43,28.132,180.044z"
      />
      <path
        style={{ fill: '#FD8300' }}
        d="M292.571,151.912c0-9.322-7.557-16.879-16.879-16.879s-16.879,7.557-16.879,16.879v73.143H185.67
	v-67.516c0-18.614-15.144-33.758-33.758-33.758v-22.506c0-18.567-15.191-33.758-33.758-33.758H95.648
	c-18.567,0-33.758,15.191-33.758,33.758v281.319h230.681V151.912z"
      />
      <polygon
        style={{ fill: '#FFA850' }}
        points="478.242,360.088 455.736,436.044 478.242,512 512,512 512,360.088 "
      />
      <rect
        y="360.088"
        style={{ fill: '#FEC14D' }}
        width="478.242"
        height="151.912"
      />
      <g>
        <circle style={{ fill: '#FE9528' }} cx="75.956" cy="436.044" r="8.44" />
        <circle style={{ fill: '#FE9528' }} cx="42.198" cy="469.802" r="8.44" />
        <circle
          style={{ fill: '#FE9528' }}
          cx="436.044"
          cy="447.297"
          r="8.44"
        />
      </g>
      <path
        style={{ fill: '#E86C16' }}
        d="M351.648,0l-22.505,39.385l22.505,39.385c21.752,0,39.385-17.633,39.385-39.385S373.4,0,351.648,0z"
      />
      <path
        style={{ fill: '#FE9528' }}
        d="M312.264,39.385c0,21.752,17.633,39.385,39.385,39.385V0C329.897,0,312.264,17.633,312.264,39.385z"
      />
    </svg>
  );
};

interface SwapiCardsCanyonProps {
  homeworld: string;
  terrain: string;
}

function SwapiCardsCanyon({ homeworld, terrain }: SwapiCardsCanyonProps) {
  return (
    <>
      <h3 className="absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-black z-20">
        {homeworld}{' '}
      </h3>
      <Scene />
    </>
  );
}

export default SwapiCardsCanyon;
