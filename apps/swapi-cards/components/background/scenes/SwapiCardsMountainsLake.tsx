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
        style={{ fill: '#7F9058' }}
        points="227.05,206.165 318.749,343.212 273.738,343.212 148.078,183.794 226.848,206.3 "
      />
      <polygon
        style={{ fill: '#95AC66' }}
        points="213.074,220.073 273.738,343.212 273.738,498.871 0,343.209 0,309.451 69.118,206.165 
	69.309,206.3 148.078,183.794 "
      />
      <polygon
        style={{ fill: '#8CE6FE' }}
        points="227.05,206.165 226.848,206.3 213.074,220.073 148.078,183.828 148.078,88.146 "
      />
      <polygon
        style={{ fill: '#D9F7FF' }}
        points="148.078,88.146 213.074,220.073 187.463,245.685 148.078,206.3 108.694,245.685 
	69.309,206.3 69.118,206.165 "
      />
      <polygon
        style={{ fill: '#59473C' }}
        points="442.888,206.158 512,309.449 512,343.209 363.916,421.975 363.916,183.788 442.685,206.293 
	"
      />
      <polygon
        style={{ fill: '#875B51' }}
        points="428.912,220.067 489.576,343.205 341.416,421.975 193.257,343.205 284.956,206.158 
	285.147,206.293 363.916,183.788 "
      />
      <polygon
        style={{ fill: '#8CE6FE' }}
        points="442.888,206.158 442.685,206.293 428.912,220.067 363.916,183.82 363.916,88.139 "
      />
      <polygon
        style={{ fill: '#D9F7FF' }}
        points="363.916,88.139 428.912,220.067 403.301,245.678 363.916,206.293 324.531,245.678 
	285.147,206.293 284.956,206.158 "
      />
      <polygon
        style={{ fill: '#CAED73' }}
        points="512,376.967 256,466.989 0,376.967 0,343.209 512,343.209 "
      />
      <polygon
        style={{ fill: '#55B9D3' }}
        points="512,376.967 512,436.044 500.747,444.484 512,452.923 512,469.802 500.747,478.242 
	512,486.681 512,512 478.242,512 433.231,444.484 478.242,376.967 "
      />
      <polygon
        style={{ fill: '#8CE6FE' }}
        points="478.242,376.967 478.242,512 0,512 0,419.165 11.253,410.725 0,402.286 0,376.967 "
      />
      <g>
        <path
          style={{ fill: '#FFFFFF' }}
          d="M421.978,402.286H0v16.879h421.978c4.662,0,8.44-3.779,8.44-8.44
		C430.418,406.064,426.64,402.286,421.978,402.286z"
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d="M225.055,436.044c-4.662,0-8.44,3.779-8.44,8.44c0,4.661,3.778,8.44,8.44,8.44H512v-16.879H225.055z
		"
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d="M191.297,452.923H90.022c-4.662,0-8.44-3.779-8.44-8.44c0-4.661,3.778-8.44,8.44-8.44h101.275
		c4.662,0,8.44,3.779,8.44,8.44C199.736,449.144,195.959,452.923,191.297,452.923z"
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d="M410.725,469.802c-4.662,0-8.44,3.779-8.44,8.44s3.778,8.44,8.44,8.44H512v-16.879H410.725z"
        />
      </g>
      <path
        style={{ fill: '#FFA850' }}
        d="M256,0v101.275c27.963,0,50.637-22.674,50.637-50.637S283.963,0,256,0z"
      />
      <path
        style={{ fill: '#FECB69' }}
        d="M256,0c12.434,0,22.505,22.674,22.505,50.637S268.434,101.275,256,101.275
	c-27.963,0-50.637-22.674-50.637-50.637S228.037,0,256,0z"
      />
    </svg>
  );
};

interface SwapiCardsMountainsLakeProps {
  homeworld: string;
  terrain: string;
}

function SwapiCardsMountainsLake({
  homeworld,
  terrain,
}: SwapiCardsMountainsLakeProps) {
  return (
    <>
      <h3 className="absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-black z-20">
        {homeworld}{' '}
      </h3>
      <Scene />
    </>
  );
}

export default SwapiCardsMountainsLake;
