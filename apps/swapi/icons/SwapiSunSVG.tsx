interface SwapiSunSVGProps {
  primaryColor?: string;
  secondaryColor?: string;
  className: string;
}

const SwapiSunSVG: React.FC<SwapiSunSVGProps> = ({
  primaryColor = '#f72485',
  secondaryColor = 'hsl(333, 100%, 50%)',
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 176 176"
      className={`${className} order-first md:order-last mb-10 md:mb-0`}
    >
      <g>
        <defs>
          <linearGradient
            id="gradient"
            x1="0.49751243781094523"
            x2="0.5024875621890548"
            y1="0"
            y2="1"
          >
            <stop offset="0" stopColor={primaryColor} stopOpacity="1"></stop>
            <stop offset="1" stopColor={secondaryColor} stopOpacity="1"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 88.064 0.975 C 136.161 0.975 175.152 39.966 175.152 88.064 C 175.152 88.126 175.152 88.187 175.152 88.249 L 0.975 88.249 C 0.975 88.187 0.975 88.126 0.975 88.064 C 0.975 39.966 39.966 0.975 88.064 0.975 Z M 88.064 175.152 C 73.399 175.152 59.58 171.527 47.455 165.125 L 128.672 165.125 C 116.547 171.527 102.729 175.152 88.064 175.152 Z M 175.096 91.22 C 175.029 93.093 174.903 94.95 174.72 96.791 L 1.407 96.791 C 1.224 94.95 1.098 93.093 1.031 91.22 Z M 174.373 99.762 C 174.087 101.892 173.724 103.997 173.287 106.076 L 2.84 106.076 C 2.403 103.997 2.04 101.892 1.754 99.762 Z M 171.816 112.018 C 171.206 114.157 170.515 116.262 169.748 118.331 L 6.379 118.331 C 5.612 116.262 4.922 114.157 4.311 112.018 Z M 167.291 124.273 C 166.246 126.556 165.105 128.786 163.873 130.958 L 12.254 130.958 C 11.022 128.786 9.881 126.556 8.836 124.273 Z M 155.162 143.585 C 152.538 146.753 149.694 149.731 146.653 152.498 L 29.474 152.498 C 26.433 149.731 23.589 146.753 20.965 143.585 Z"
          fill="url(#gradient)"
        ></path>
      </g>
    </svg>
  );
};

export default SwapiSunSVG;
