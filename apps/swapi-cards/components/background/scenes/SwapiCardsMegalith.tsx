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
        style={{ fill: '#E86C16' }}
        d="M391.611,0v99.632c27.513,0,49.816-22.303,49.816-49.816S419.124,0,391.611,0z"
      />
      <path
        style={{ fill: '#FE9528' }}
        d="M408.216,49.816C408.216,22.303,400.781,0,391.611,0c-27.513,0-49.816,22.303-49.816,49.816
	s22.303,49.816,49.816,49.816C400.781,99.632,408.216,77.329,408.216,49.816z"
      />
      <polygon
        style={{ fill: '#BFDB74' }}
        points="474.638,260.151 452.497,386.076 474.638,512 507.849,512 507.849,260.151 "
      />
      <rect
        x="4.151"
        y="260.151"
        style={{ fill: '#CAED73' }}
        width="470.487"
        height="251.849"
      />
      <polygon
        style={{ fill: '#4393A8' }}
        points="122.261,175.822 87.898,159.98 73.7,269.195 103.784,378.408 136.995,378.408 "
      />
      <polygon
        style={{ fill: '#55B9D3' }}
        points="74.236,153.682 52.096,175.822 37.362,378.408 103.784,378.408 87.898,159.98 "
      />
      <polygon
        style={{ fill: '#4393A8' }}
        points="459.904,175.822 437.764,153.682 425.495,159.338 411.32,268.874 441.427,378.408 
	474.638,378.408 "
      />
      <polygon
        style={{ fill: '#55B9D3' }}
        points="389.739,175.822 375.005,378.408 441.427,378.408 425.495,159.338 "
      />
      <polygon
        style={{ fill: '#4393A8' }}
        points="313.917,107.187 279.119,85.355 279.119,265.092 305.263,444.83 338.474,444.83 "
      />
      <path
        style={{ fill: '#55B9D3' }}
        d="M260.982,73.976l-33.211,66.422c-18.266,0-34.295,14.905-35.62,33.123L172.419,444.83h132.843
	L279.119,85.355L260.982,73.976z"
      />
      <g>
        <circle
          style={{ fill: '#4393A8' }}
          cx="272.052"
          cy="370.101"
          r="8.303"
        />
        <circle
          style={{ fill: '#4393A8' }}
          cx="238.841"
          cy="403.312"
          r="8.303"
        />
      </g>
      <g>
        <path
          style={{ fill: '#AAC36D' }}
          d="M139.209,453.881c-4.586,0-8.303-3.716-8.303-8.303v-11.07c0-4.586,3.716-8.303,8.303-8.303
		c4.586,0,8.303,3.716,8.303,8.303v11.07C147.511,450.165,143.795,453.881,139.209,453.881z"
        />
        <path
          style={{ fill: '#AAC36D' }}
          d="M371.684,453.881c-4.586,0-8.303-3.716-8.303-8.303v-11.07c0-4.586,3.716-8.303,8.303-8.303
		s8.303,3.716,8.303,8.303v11.07C379.987,450.165,376.271,453.881,371.684,453.881z"
        />
        <path
          style={{ fill: '#AAC36D' }}
          d="M440.32,487.092c-4.586,0-8.303-3.716-8.303-8.303v-11.07c0-4.586,3.716-8.303,8.303-8.303
		s8.303,3.716,8.303,8.303v11.07C448.623,483.376,444.906,487.092,440.32,487.092z"
        />
        <path
          style={{ fill: '#AAC36D' }}
          d="M105.998,487.092c-4.586,0-8.303-3.716-8.303-8.303v-11.07c0-4.586,3.716-8.303,8.303-8.303
		s8.303,3.716,8.303,8.303v11.07C114.301,483.376,110.584,487.092,105.998,487.092z"
        />
      </g>
    </svg>
  );
};

export default function SwapiCardsMegalith() {
  return <Scene />;
}
