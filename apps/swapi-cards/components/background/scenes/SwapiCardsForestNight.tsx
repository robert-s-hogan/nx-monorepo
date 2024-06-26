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
        style={{ fill: '#326E7D' }}
        points="512,466.989 256,489.495 0,466.989 0,0 512,0 "
      />
      <g>
        <circle style={{ fill: '#FFFFFF' }} cx="469.802" cy="75.956" r="8.44" />
        <circle style={{ fill: '#FFFFFF' }} cx="368.527" cy="42.198" r="8.44" />
        <circle
          style={{ fill: '#FFFFFF' }}
          cx="436.044"
          cy="109.714"
          r="8.44"
        />
        <circle
          style={{ fill: '#FFFFFF' }}
          cx="334.769"
          cy="177.231"
          r="8.44"
        />
        <circle
          style={{ fill: '#FFFFFF' }}
          cx="368.527"
          cy="210.989"
          r="8.44"
        />
        <circle style={{ fill: '#FFFFFF' }} cx="75.956" cy="143.473" r="8.44" />
        <circle style={{ fill: '#FFFFFF' }} cx="143.473" cy="42.198" r="8.44" />
        <circle
          style={{ fill: '#FFFFFF' }}
          cx="177.231"
          cy="210.989"
          r="8.44"
        />
        <circle style={{ fill: '#FFFFFF' }} cx="42.198" cy="109.714" r="8.44" />
      </g>
      <path
        style={{ fill: '#4393A8' }}
        d="M281.319,40.549H247.56v87.693h33.758c15.132-8.757,25.319-25.106,25.319-43.846
	S296.45,49.306,281.319,40.549z"
      />
      <path
        style={{ fill: '#FFFFFF' }}
        d="M256,84.396c0-18.739,10.187-35.089,25.319-43.846c-7.45-4.311-16.093-6.791-25.319-6.791
	c-27.966,0-50.637,22.671-50.637,50.637s22.671,50.637,50.637,50.637c9.226,0,17.868-2.48,25.319-6.791
	C266.187,119.485,256,103.135,256,84.396z"
      />
      <g>
        <rect
          x="76.89"
          y="419.165"
          style={{ fill: '#59473C' }}
          width="16.879"
          height="56.264"
        />
        <rect
          x="247.56"
          y="419.165"
          style={{ fill: '#59473C' }}
          width="16.879"
          height="56.264"
        />
      </g>
      <rect
        x="418.231"
        y="419.165"
        style={{ fill: '#4D392F' }}
        width="16.879"
        height="56.264"
      />
      <polygon
        style={{ fill: '#53583C' }}
        points="478.242,466.989 455.736,489.495 478.242,512 512,512 512,466.989 "
      />
      <rect
        y="466.989"
        style={{ fill: '#63ABA1', width: '478.242', height: '45.011' }}
      />
      <polygon
        style={{ fill: '#53583C' }}
        points="132.49,361.281 149.333,361.281 114.57,300.887 128,294.957 85.333,220.835 65.641,341.588 
	85.333,427.604 170.667,427.604 "
      />
      <polygon
        style={{ fill: '#63ABA1' }}
        points="85.333,427.604 0,427.604 38.177,361.281 21.333,361.281 59.51,294.957 42.667,294.957 
	85.333,220.835 "
      />
      <polygon
        style={{ fill: '#53583C' }}
        points="303.157,361.281 320,361.281 285.237,300.887 298.667,294.957 256,220.835 236.308,341.588 
	256,427.604 341.333,427.604 "
      />
      <polygon
        style={{ fill: '#63ABA1' }}
        points="256,427.604 170.667,427.604 208.843,361.281 192,361.281 230.177,294.957 213.333,294.957 
	256,220.835 "
      />
      <polygon
        style={{ fill: '#53583C' }}
        points="473.823,361.281 490.667,361.281 455.904,300.887 469.333,294.957 426.667,220.835 
	406.975,341.588 426.667,427.604 512,427.604 "
      />
      <polygon
        style={{ fill: '#63ABA1' }}
        points="426.667,427.604 341.333,427.604 379.51,361.281 362.667,361.281 400.843,294.957 
	384,294.957 426.667,220.835 "
      />
    </svg>
  );
};

export default function SwapiCardsForestNight() {
  return <Scene />;
}
