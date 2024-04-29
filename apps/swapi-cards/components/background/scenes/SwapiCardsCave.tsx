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
      <g>
        <path
          style={{ fill: '#875B51' }}
          d="M444.484,236.308c-26.412,0-47.824,21.412-47.824,47.824v194.11h104.088l-22.505-241.934H444.484z"
        />
        <path
          style={{ fill: '#875B51' }}
          d="M101.275,478.242V284.217c0-21.516-14.211-39.711-33.758-45.719L45.011,478.242H101.275z"
        />
      </g>
      <path
        style={{ fill: '#705147' }}
        d="M478.242,0h-33.758l-16.879,22.505L410.725,0H309.451l-16.879,22.505L275.692,0h-95.648
	l-22.505,22.505L135.033,0h-33.758L84.396,22.505L67.516,0H0v444.484l67.516,22.505v-228.49c-4.448-1.367-9.17-2.105-14.066-2.105
	l-19.692-0.086V67.516h309.451v135.033c0,9.322,7.557,16.879,16.879,16.879s16.879-7.557,16.879-16.879V67.516h123.78L478.242,0z"
      />
      <polygon
        style={{ fill: '#59473C' }}
        points="512,0 478.242,0 478.242,478.242 512,444.484 "
      />
      <g>
        <path
          style={{ fill: '#875B51' }}
          d="M67.516,0v135.033c0,9.322,7.557,16.879,16.879,16.879s16.879-7.557,16.879-16.879V0H67.516z"
        />
        <path
          style={{ fill: '#875B51' }}
          d="M410.725,0v135.033c0,9.322,7.557,16.879,16.879,16.879c9.322,0,16.879-7.557,16.879-16.879V0
		H410.725z"
        />
        <path
          style={{ fill: '#875B51' }}
          d="M275.692,0v135.033c0,9.322,7.557,16.879,16.879,16.879s16.879-7.557,16.879-16.879V0H275.692z"
        />
        <path
          style={{ fill: '#875B51' }}
          d="M135.033,0v196.923c0,12.43,10.076,22.506,22.505,22.506s22.505-10.076,22.505-22.506V0H135.033z"
        />
      </g>
      <path
        style={{ fill: '#705147' }}
        d="M202.549,331.956c0-12.43-10.076-22.505-22.505-22.505l-11.253,157.538h33.758V331.956z"
      />
      <path
        style={{ fill: '#875B51' }}
        d="M180.044,275.692c0-12.43-10.076-22.505-22.505-22.505s-22.505,10.076-22.505,22.505v191.297h45.011
	V275.692z"
      />
      <path
        style={{ fill: '#4D392F' }}
        d="M396.659,315.077h-33.758l47.824,151.912h33.758V362.901
	C444.484,336.489,423.072,315.077,396.659,315.077z"
      />
      <path
        style={{ fill: '#705147' }}
        d="M362.901,315.077c-26.412,0-47.824,21.412-47.824,47.824h-19.692
	c-26.412,0-47.824,21.412-47.824,47.824v56.264h163.165V362.901C410.725,336.489,389.314,315.077,362.901,315.077z"
      />
      <polygon
        style={{ fill: '#D3552B' }}
        points="478.242,444.484 455.736,478.242 478.242,512 512,512 512,444.484 "
      />
      <rect
        y="444.484"
        style={{ fill: '#E86C16', width: '478.242', height: '67.516' }}
      />
      <g>
        <path
          style={{ fill: '#D3552B' }}
          d="M45.011,486.681H33.758c-4.661,0-8.44-3.778-8.44-8.44s3.779-8.44,8.44-8.44h11.253
		c4.661,0,8.44,3.778,8.44,8.44S49.672,486.681,45.011,486.681z"
        />
        <path
          style={{ fill: '#D3552B' }}
          d="M191.297,486.681h-11.253c-4.661,0-8.44-3.778-8.44-8.44s3.779-8.44,8.44-8.44h11.253
		c4.661,0,8.44,3.778,8.44,8.44S195.958,486.681,191.297,486.681z"
        />
        <path
          style={{ fill: '#D3552B' }}
          d="M433.231,486.681h-11.253c-4.661,0-8.44-3.778-8.44-8.44s3.779-8.44,8.44-8.44h11.253
		c4.661,0,8.44,3.778,8.44,8.44S437.892,486.681,433.231,486.681z"
        />
        <path
          style={{ fill: '#D3552B' }}
          d="M112.527,486.681h-11.253c-4.661,0-8.44-3.778-8.44-8.44s3.779-8.44,8.44-8.44h11.253
		c4.661,0,8.44,3.778,8.44,8.44S117.188,486.681,112.527,486.681z"
        />
        <path
          style={{ fill: '#D3552B' }}
          d="M478.242,486.681h-11.253c-4.661,0-8.44-3.778-8.44-8.44s3.779-8.44,8.44-8.44h11.253
		c4.661,0,8.44,3.778,8.44,8.44S482.903,486.681,478.242,486.681z"
        />
      </g>
    </svg>
  );
};

export default function SwapiCardsCave() {
  return <Scene />;
}
