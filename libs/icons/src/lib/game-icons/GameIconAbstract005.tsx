import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAbstract005Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'abstract-005'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className: propClassName, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`game-icon ${combinedClassNames}`}
      {...otherProps}
    >
      <path
        fill="currentColor"
        d="m256,21-235,119.5562c35.3919,5.4586 74.4386,9.6712 116.0312,12.4842l107.3659-112.0654-90.3284,113.0937c12.7498.7295 25.7697,1.2935 38.9221,1.7625 9.8475-25.2169 34.3058-43.1813 63.0091-43.1813s53.1622,17.9643 63.0096,43.1813c13.1647-.4699 26.1602-1.0316 38.9217-1.7625l-90.3279-113.0937 107.3654,112.0654c41.587-2.8144 80.6158-7.0246 116.0312-12.4842l-235-119.5562zm0,107.8063c-28.4594,0-51.5528,23.0934-51.5528,51.5529s23.0934,51.5533 51.5528,51.5533 51.5534-23.0939 51.5534-51.5533-23.0935-51.5529-51.5534-51.5529zm-234.7062,17.3312 38.4812,56.5466c1.5407-.8526 3.1509-1.5942 4.8471-2.0562 1.6319-.4468 3.3022-.8225 4.9938-.8813 25.372-.8779 56.6476,40.8863 72.1154,97.6722 3.3699,12.3708 5.6611,24.4513 7.05,35.9841l107.2187,157.5971 107.3659-157.7438c1.3916-11.4877 3.6951-23.5207 7.05-35.8374 15.4677-56.7859 46.8905-98.5501 72.2625-97.6722 1.6916.0577 3.3614.4367 4.9937.8813 1.6319.4468 3.0663,1.1026 4.553,1.9096l38.4812-56.4c-33.7423,8.1079-72.561,14.4308-114.7092,18.6529l-108.3937,279.3563 89.8875-277.5937c-11.3745.9461-23.0314,1.723-34.8096,2.35 .6378,3.7318 1.0284,7.5426 1.0284,11.4563 0,37.388-30.3216,67.7096-67.7097,67.7096s-67.7091-30.3215-67.7091-67.7096c0-3.9137.3899-7.7245 1.0279-11.4563-11.7928-.6263-23.422-1.4034-34.8091-2.35l89.8875,277.5937-108.3937-279.3563c-42.1553-4.2201-80.9885-10.5463-114.7096-18.6529zm52.5813,71.0875c-.8775.0987-1.6304.263-2.4967.4418-2.7251.5628-5.3491,1.7202-7.7846,3.3779 19.5365,17.5766 33.2093,78.7508 32.1658,152.0158-.5354,37.6014-4.7916,72.2766-11.6033,99.7279 9.3986,10.5595 19.2169,15.8992 28.6408,13.9534 27.7145-5.7233 41.0052-70.5024 29.5217-144.8188-10.7654-69.6719-39.4306-123.0314-65.8-124.6971-.8789-.0577-1.7658-.0987-2.6437,0zm361.7533,0c-26.3689,1.6657-55.0342,55.0248-65.8,124.6967-11.4835,74.3168 1.8076,139.096 29.5217,144.8187 9.4244,1.9463 19.2422-3.3934 28.6409-13.9528-6.8112-27.4518-11.0676-62.1265-11.6034-99.7284-1.0434-73.2646 12.6294-134.4388 32.1659-152.0154-2.4351-1.6582-5.0596-2.8153-7.7846-3.3783-.8657-.1787-1.6191-.343-2.4966-.4418s-1.7648-.0577-2.6438,0z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAbstract005Icon })
);
