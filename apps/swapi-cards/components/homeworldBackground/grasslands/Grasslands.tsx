import { useState, useEffect } from 'react';
import SwapiCardsGround from '../../SwapiCardsGround';
import SwapiCardsHill from '../../SwapiCardsHill';
import SwapiCardsTree from '../../SwapiCardsTree';

interface Props {
  homeworld: string;
  terrain: string | null;
}

const Grasslands: React.FC<Props> = (props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div className="h-96 w-96 lg:w-80 xl:w-72 bg-sky">
      <h3 className="z-10 absolute right-2 m-0 uppercase p-4 text-2xl font-light pr-6 text-brown">
        {homeworldName}
      </h3>
      <div className="content-wrapper w-96 h-96 relative lg:w-80 xl:w-72 ">
        <SwapiCardsGround color="--lg" />

        <SwapiCardsHill
          color="--dg"
          className="hill2 top-0 right-7 w-96 h-full"
        />
        <SwapiCardsHill
          color="--lg"
          className="hill1 bottom-32 left-7 w-64 h-full"
        />

        <SwapiCardsTree
          backgroundColor="var(--tree-two-trunk)"
          trunkColor="var(--tree-two-trunk)"
          topRounded="rounded-[100%_36%_51%_42%/100%_100%_33%_21%]"
          bottomRounded="rounded-[30%_70%_53%_47%/76%_69%_31%_24%]"
          rotateDeg="45deg"
          style={{ left: '30%', top: '5%' }}
        />
        <SwapiCardsTree
          backgroundColor="var(--tree-two-trunk)"
          trunkColor="var(--tree-two-trunk)"
          topRounded="rounded-[100%_36%_51%_42%/100%_100%_33%_21%]"
          bottomRounded="rounded-[30%_70%_53%_47%/76%_69%_31%_24%]"
          rotateDeg="45deg"
          style={{ left: '60%', top: '15%' }}
        />
        <SwapiCardsTree
          backgroundColor="var(--tree-two-trunk)"
          trunkColor="var(--tree-two-trunk)"
          topRounded="rounded-[100%_36%_51%_42%/100%_100%_33%_21%]"
          bottomRounded="rounded-[30%_70%_53%_47%/76%_69%_31%_24%]"
          rotateDeg="45deg"
          style={{ left: '0%', top: '25%' }}
        />
      </div>
    </div>
  );
};

export default Grasslands;
