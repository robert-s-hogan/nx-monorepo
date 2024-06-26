const Scene = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 125 125" // Adjusted to the aspect ratio of the container
      preserveAspectRatio="xMidYMid meet" // This will center the SVG in the viewbox
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
      }}
    >
      <defs>
        <clipPath id="clipPath">
          <circle
            id="Ellipse_54"
            data-name="Ellipse 54"
            cx="64.551"
            cy="64.551"
            r="64.551"
            transform="translate(331.399 204.494)"
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="Jupiter" transform="translate(-331.399 -204.494)">
        <g id="Group_72" data-name="Group 72">
          <circle
            id="Ellipse_53"
            data-name="Ellipse 53"
            cx="64.551"
            cy="64.551"
            r="64.551"
            transform="translate(331.399 204.494)"
            fill="#f4d0b1"
          />
          <g id="Group_71" data-name="Group 71">
            <g id="Group_70" data-name="Group 70" clipPath="url(#clipPath)">
              <path
                id="Path_80"
                data-name="Path 80"
                d="M330.159,214.5A1021.437,1021.437,0,0,1,540.3,228.515"
                fill="none"
                stroke="#dcb98e"
                strokeMiterlimit="10"
                strokeWidth="6.236"
                opacity="0.5"
              />
              <path
                id="Path_81"
                data-name="Path 81"
                d="M323.839,320.642a1021.438,1021.438,0,0,1,210.146,14.014"
                fill="none"
                stroke="#dcb98e"
                strokeMiterlimit="10"
                strokeWidth="6.236"
                opacity="0.5"
              />
              <path
                id="Path_82"
                data-name="Path 82"
                d="M306.743,333.544a1021.431,1021.431,0,0,1,210.51,6.564"
                fill="none"
                stroke="#da5423"
                strokeMiterlimit="10"
                strokeWidth="10.834"
              />
              <path
                id="Path_83"
                data-name="Path 83"
                d="M313.462,286.841l31.253,3.735a420.454,420.454,0,0,0,99.566,0l31.254-3.734"
                fill="none"
                stroke="#ef8f4d"
                strokeMiterlimit="10"
                strokeWidth="9.931"
              />
              <path
                id="Path_84"
                data-name="Path 84"
                d="M475.535,248.952l-31.254-3.734a420.4,420.4,0,0,0-99.566,0l-31.253,3.734"
                fill="none"
                stroke="#dcb98e"
                strokeMiterlimit="10"
                strokeWidth="9.931"
                opacity="0.3"
              />
              <path
                id="Path_85"
                data-name="Path 85"
                d="M475.535,260.237,444.281,256.5a420.508,420.508,0,0,0-99.566,0l-31.253,3.734"
                fill="none"
                stroke="#dcb98e"
                strokeMiterlimit="10"
                strokeWidth="3.611"
                opacity="0.3"
              />
              <path
                id="Path_86"
                data-name="Path 86"
                d="M475.535,239.37l-31.254-3.734a420.4,420.4,0,0,0-99.566,0l-31.253,3.734"
                fill="none"
                stroke="#ef8f4d"
                strokeMiterlimit="10"
                strokeWidth="1.806"
              />
              <path
                id="Path_87"
                data-name="Path 87"
                d="M475.535,222.818l-31.254-3.734a420.4,420.4,0,0,0-99.566,0l-31.253,3.734"
                fill="none"
                stroke="#ef8f4d"
                strokeMiterlimit="10"
                strokeWidth="6.32"
              />
              <path
                id="Path_88"
                data-name="Path 88"
                d="M313.462,276.043l31.253,3.734a420.4,420.4,0,0,0,99.566,0l31.254-3.734"
                fill="none"
                stroke="#ef8f4d"
                strokeMiterlimit="10"
                strokeWidth="1.806"
              />
            </g>
          </g>
          <circle
            id="Ellipse_57"
            data-name="Ellipse 57"
            cx="0.748"
            cy="0.748"
            r="0.748"
            transform="translate(371.961 276.912)"
            fill="#ffffff"
          />
          <circle
            id="Ellipse_58"
            data-name="Ellipse 58"
            cx="0.748"
            cy="0.748"
            r="0.748"
            transform="translate(413.891 276.912)"
            fill="#ffffff"
          />
          <path
            id="Path_89"
            data-name="Path 89"
            d="M395.951,333.6A64.549,64.549,0,0,0,439.23,221.154a64.31,64.31,0,0,1,16.661,43.28c0,35.65-33.6,68.495-69.248,68.495"
            opacity="0.2"
            // style={{ 'mix-blend-mode': 'darken;isolation: isolate' }}
          />
          <path
            id="Path_90"
            data-name="Path 90"
            d="M460.5,269.045"
            fill="none"
          />
          <path
            id="Path_91"
            data-name="Path 91"
            d="M331.4,269.045"
            fill="none"
          />
          <ellipse
            id="Ellipse_59"
            data-name="Ellipse 59"
            cx="6.342"
            cy="13.184"
            rx="6.342"
            ry="13.184"
            transform="matrix(0.059, -0.998, 0.998, 0.059, 352.542, 303.227)"
            fill="#ef8f4d"
            stroke="#f3cda6"
            strokeMiterlimit="10"
            strokeWidth="2.349"
          />
        </g>
      </g>
    </svg>
  );
};

export default function SwapiCardsGasGiant() {
  return <Scene />;
}
