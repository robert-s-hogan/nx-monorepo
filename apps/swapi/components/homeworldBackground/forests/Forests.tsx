import { useState, useEffect } from 'react';
// import './forests.css';

interface Props {
  homeworld: string;
  terrain: string | null;
}

const Forests: React.FC<Props> = (props) => {
  const { homeworld, terrain } = props;

  const [findTerrain, setfindTerrain] = useState('');

  async function selectTerrain(terrain: string) {
    const tempFemale = terrain.search('rainforest');
    if (tempFemale === 0) {
      setfindTerrain('rainforest');
    }
  }

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
    selectTerrain(terrain);
  }, [homeworld, terrain]);

  return (
    <div className="w-96 h-96 relative lg:w-80 xl:w-72 bg-forests -z-1">
      {findTerrain && (
        <div className={`absolute w-96 h-96 z-5 bg-${terrain}`}></div>
      )}
      <h3 className="z-20 absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-black">
        {homeworldName}
      </h3>
      <div className="forest-row-one h-96 w-96 absolute -left-24 lg:top-8  z-2">
        <div className="forest-tree absolute tree-one">
          <div className="top-one"></div>
          <div className="trunk-one"></div>
          <div className="trunk-one-bottom"></div>
          <div className="branch-one-right">
            <div className="branch-one-r"></div>
            <div className="branch-one-r branch-2r"></div>
          </div>
          <div className="branch-one-left">
            <div className="branch-one-l"></div>
            <div className="branch-one-l branch-2l"></div>
          </div>
        </div>
        <div className="forest-tree absolute tree-two">
          <div className="top-two"></div>
          <div className="trunk-two"></div>
          <div className="trunk-two-bottom"></div>
          <div className="branch-two-right">
            <div className="branch-two-r branch-rf"></div>
            <div className="branch-two-r branch-rs"></div>
            <div className="branch-two-r branch-rt"></div>
          </div>
          <div className="branch-two-left">
            <div className="branch-two-l branch-lf"></div>
            <div className="branch-two-l branch-ls"></div>
            <div className="branch-two-l branch-lt"></div>
          </div>
        </div>
        <div className="forest-tree absolute tree-three">
          <div className="top-three"></div>
          <div className="trunk-three"></div>
          <div className="trunk-three-bottom"></div>
          <div className="branch-three-right">
            <div className="branch-three-r"></div>
            <div className="branch-three-r branch-three-rs"></div>
          </div>
          <div className="branch-three-left">
            <div className="branch-three-l"></div>
            <div className="branch-three-l branch-three-ls"></div>
          </div>
        </div>
        <div className="forest-tree absolute tree-four">
          <div className="top-four"></div>
          <div className="trunk-four"></div>
          <div className="trunk-four-bottom"></div>
        </div>
        <div className="forest-tree absolute tree-five">
          <div className="top-five"></div>
          <div className="trunk-five"></div>
          <div className="trunk-five-bottom"></div>
          <div className="branch-five-right">
            <div className="branch-five-r"></div>
            <div className="branch-five-r branch-five-rs"></div>
          </div>
          <div className="branch-five-left">
            <div className="branch-five-l"></div>
            <div className="branch-five-l branch-five-ls"></div>
          </div>
        </div>
      </div>
      <div className="forest-row-two h-96 w-96 absolute -left-48 top-24 2xl:top-36 2xl:-left-24 z-2">
        <div className="forest-tree absolute tree-one">
          <div className="top-one"></div>
          <div className="trunk-one"></div>
          <div className="trunk-one-bottom"></div>
          <div className="branch-one-right">
            <div className="branch-one-r"></div>
            <div className="branch-one-r branch-2r"></div>
          </div>
          <div className="branch-one-left">
            <div className="branch-one-l"></div>
            <div className="branch-one-l branch-2l"></div>
          </div>
        </div>
        <div className="forest-tree absolute tree-two">
          <div className="top-two"></div>
          <div className="trunk-two"></div>
          <div className="trunk-two-bottom"></div>
          <div className="branch-two-right">
            <div className="branch-two-r branch-rf"></div>
            <div className="branch-two-r branch-rs"></div>
            <div className="branch-two-r branch-rt"></div>
          </div>
          <div className="branch-two-left">
            <div className="branch-two-l branch-lf"></div>
            <div className="branch-two-l branch-ls"></div>
            <div className="branch-two-l branch-lt"></div>
          </div>
        </div>
        <div className="forest-tree absolute tree-three">
          <div className="top-three"></div>
          <div className="trunk-three"></div>
          <div className="trunk-three-bottom"></div>
          <div className="branch-three-right">
            <div className="branch-three-r"></div>
            <div className="branch-three-r branch-three-rs"></div>
          </div>
          <div className="branch-three-left">
            <div className="branch-three-l"></div>
            <div className="branch-three-l branch-three-ls"></div>
          </div>
        </div>
        <div className="forest-tree absolute tree-four">
          <div className="top-four"></div>
          <div className="trunk-four"></div>
          <div className="trunk-four-bottom"></div>
        </div>
        <div className="forest-tree absolute tree-five">
          <div className="top-five"></div>
          <div className="trunk-five"></div>
          <div className="trunk-five-bottom"></div>
          <div className="branch-five-right">
            <div className="branch-five-r"></div>
            <div className="branch-five-r branch-five-rs"></div>
          </div>
          <div className="branch-five-left">
            <div className="branch-five-l"></div>
            <div className="branch-five-l branch-five-ls"></div>
          </div>
        </div>
      </div>
      <div className="forest-row-three h-96 w-96 absolute -left-2 2xl:-left-24 top-48 z-3">
        <div className="forest-tree absolute tree-one">
          <div className="top-one"></div>
          <div className="trunk-one"></div>
          <div className="trunk-one-bottom"></div>
          <div className="branch-one-right">
            <div className="branch-one-r"></div>
            <div className="branch-one-r branch-2r"></div>
          </div>
          <div className="branch-one-left">
            <div className="branch-one-l"></div>
            <div className="branch-one-l branch-2l"></div>
          </div>
        </div>
        <div className="forest-tree absolute tree-two">
          <div className="top-two"></div>
          <div className="trunk-two"></div>
          <div className="trunk-two-bottom"></div>
          <div className="branch-two-right">
            <div className="branch-two-r branch-rf"></div>
            <div className="branch-two-r branch-rs"></div>
            <div className="branch-two-r branch-rt"></div>
          </div>
          <div className="branch-two-left">
            <div className="branch-two-l branch-lf"></div>
            <div className="branch-two-l branch-ls"></div>
            <div className="branch-two-l branch-lt"></div>
          </div>
        </div>
        <div className="forest-tree absolute tree-three">
          <div className="top-three"></div>
          <div className="trunk-three"></div>
          <div className="trunk-three-bottom"></div>
          <div className="branch-three-right">
            <div className="branch-three-r"></div>
            <div className="branch-three-r branch-three-rs"></div>
          </div>
          <div className="branch-three-left">
            <div className="branch-three-l"></div>
            <div className="branch-three-l branch-three-ls"></div>
          </div>
        </div>
        <div className="forest-tree absolute tree-four">
          <div className="top-four"></div>
          <div className="trunk-four"></div>
          <div className="trunk-four-bottom"></div>
        </div>
        <div className="forest-tree absolute tree-five">
          <div className="top-five"></div>
          <div className="trunk-five"></div>
          <div className="trunk-five-bottom"></div>
          <div className="branch-five-right">
            <div className="branch-five-r"></div>
            <div className="branch-five-r branch-five-rs"></div>
          </div>
          <div className="branch-five-left">
            <div className="branch-five-l"></div>
            <div className="branch-five-l branch-five-ls"></div>
          </div>
        </div>
      </div>
      <div className="forest-row-four h-96 w-96 absolute -right-24 top-24 z-2">
        <div className="forest-tree absolute tree-one">
          <div className="top-one"></div>
          <div className="trunk-one"></div>
          <div className="trunk-one-bottom"></div>
          <div className="branch-one-right">
            <div className="branch-one-r"></div>
            <div className="branch-one-r branch-2r"></div>
          </div>
          <div className="branch-one-left">
            <div className="branch-one-l"></div>
            <div className="branch-one-l branch-2l"></div>
          </div>
        </div>
        <div className="forest-tree absolute tree-two">
          <div className="top-two"></div>
          <div className="trunk-two"></div>
          <div className="trunk-two-bottom"></div>
          <div className="branch-two-right">
            <div className="branch-two-r branch-rf"></div>
            <div className="branch-two-r branch-rs"></div>
            <div className="branch-two-r branch-rt"></div>
          </div>
          <div className="branch-two-left">
            <div className="branch-two-l branch-lf"></div>
            <div className="branch-two-l branch-ls"></div>
            <div className="branch-two-l branch-lt"></div>
          </div>
        </div>
        <div className="forest-tree absolute tree-three">
          <div className="top-three"></div>
          <div className="trunk-three"></div>
          <div className="trunk-three-bottom"></div>
          <div className="branch-three-right">
            <div className="branch-three-r"></div>
            <div className="branch-three-r branch-three-rs"></div>
          </div>
          <div className="branch-three-left">
            <div className="branch-three-l"></div>
            <div className="branch-three-l branch-three-ls"></div>
          </div>
        </div>
        <div className="forest-tree absolute tree-four">
          <div className="top-four"></div>
          <div className="trunk-four"></div>
          <div className="trunk-four-bottom"></div>
        </div>
        <div className="forest-tree absolute tree-five">
          <div className="top-five"></div>
          <div className="trunk-five"></div>
          <div className="trunk-five-bottom"></div>
          <div className="branch-five-right">
            <div className="branch-five-r"></div>
            <div className="branch-five-r branch-five-rs"></div>
          </div>
          <div className="branch-five-left">
            <div className="branch-five-l"></div>
            <div className="branch-five-l branch-five-ls"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forests;
