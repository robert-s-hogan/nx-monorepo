import React from 'react';
import { Group, Path, Text } from 'react-konva';

const CastleIcon = (
  <Group scale={{ x: 0.08, y: 0.08 }}>
    <Path
      data="M463.428,243.633l-36.594-3.25v-0.006l-56.189-5v0.013l-37.824-3.379v-59.42h-49.434h-5.34h-17.84v-44.298
		H305.2v-5.279V94.349v-7.902l-44.993-12.562h-10.463v98.706h-15.776h-5.348h-49.428v59.42l-39.796,3.529l-48.157,4.291v-0.013
		l-51.924,4.618v0.013L0,247.945v148.358l185.033,28.283v1.457l27.214,6.738c14.312,3.535,29.026,5.334,43.753,5.334
		c14.741,0,29.455-1.798,43.757-5.334l27.22-6.738v-1.424L512,396.309V247.945L463.428,243.633z M187.05,410.717L14.032,384.259
		v-79.475H187.05V410.717z M187.05,296.391H14.032v-35.612l20.518-1.819v15.566l18.798-1.117V257.27l23.866-2.126v16.832
		l21.985-1.321V253.21l28.134-2.514v18.298l26.09-1.56v-19.06l33.628-2.983V296.391z M312.944,415.07l-16.556,4.094
		c-26.522,6.56-54.244,6.56-80.769,0l-16.556-4.094V245.404h113.882V415.07z M318.793,206.664v26.717h-26.72h-22.707h-26.72h-22.712
		h-18.702h-8.018v-46.757h26.719v20.04h22.712v-20.04h26.72v20.04h22.707v-20.04h26.72V206.664z M497.974,384.266l-173,26.464
		V304.784h173V384.266z M497.974,296.412h-173v-51.015l33.627,3.004v19.033l26.066,1.567v-18.297l28.137,2.507v17.473l21.982,1.294
		v-16.804l23.889,2.125v16.11l18.774,1.124V258.96l20.524,1.826V296.412z"
      fill="white"
      stroke="grey"
      strokeWidth={1}
      viewBox="0 0 48 48"
    />
  </Group>
);

const TowerIcon = (
  <Group scale={{ x: 0.08, y: 0.08 }}>
    <Path data="M28.282 30.628l-1.791-5.793h-2.456v-11.772l3.816-4.731v-6.934h-4.020v3.27h-2.447v-3.27h-4.064v3.27h-2.403v-3.27h-4.064v3.27h-2.403v-3.27h-4.020v6.934l3.816 4.731v11.772h-2.456l-1.791 5.793z" />
  </Group>
);

const HouseIcon = (
  <Group scale={{ x: 0.6, y: 0.6 }}>
    <Path
      data="M62.79,29.172l-28-28C34.009,0.391,32.985,0,31.962,0s-2.047,0.391-2.828,1.172l-28,28
      c-1.562,1.566-1.484,4.016,0.078,5.578c1.566,1.57,3.855,1.801,5.422,0.234L8,33.617V60c0,2.211,1.789,4,4,4h16V48h8v16h16
      c2.211,0,4-1.789,4-4V33.695l1.195,1.195c1.562,1.562,3.949,1.422,5.516-0.141C64.274,33.188,64.356,30.734,62.79,29.172z"
      fill="white"
      stroke="grey"
      strokeWidth={1}
      viewBox="0 0 48 48"
    />
  </Group>
);

const Structure = ({ id, name, x, y, draggable, dragBoundFunc, className }) => {
  const classShape = () => {
    switch (className) {
      case 'castle':
        return CastleIcon;
      case 'tower':
        return TowerIcon;
      case 'house':
        return HouseIcon;
      default:
        return null;
    }
  };

  return (
    <Group
      id={id}
      x={x}
      y={y}
      draggable={draggable}
      dragBoundFunc={dragBoundFunc}
    >
      {classShape()}
      {/* Uncomment and modify the Text component if you want to display the structure name
      <Text
        x={appropriateX}
        y={appropriateY}
        text={name}
        fontSize={16}
        fontStyle="bold"
        fill="white"
      /> */}
    </Group>
  );
};

export default Structure;
