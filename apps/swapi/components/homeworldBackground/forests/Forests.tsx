import { useState, useEffect } from 'react';
import forestsStyles from './forests.module.css';

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
    <div
      className={`w-96 h-96 relative lg:w-80 xl:w-72 ${forestsStyles.bgForests} -z-1`}
    >
      {findTerrain && (
        <div className={`absolute w-96 h-96 z-5 bg-${terrain}`}></div>
      )}
      <div className="forest-row-one h-96 w-96 absolute -left-24 lg:top-8 z-2">
        <div
          className={`${forestsStyles.forestTree} absolute ${forestsStyles.treeOne}`}
        >
          <div className={`${forestsStyles.topOne}`}></div>
          <div className={`${forestsStyles.trunkOne}`}></div>
          <div className={`${forestsStyles.trunkOneBottom}`}></div>
          <div className={`${forestsStyles.branchOneRight}`}>
            <div className={`${forestsStyles.branchOneR}`}></div>
            <div
              className={`${forestsStyles.branchOneR} ${forestsStyles.branch2r}`}
            ></div>
          </div>
          <div className={`${forestsStyles.branchOneLeft}`}>
            <div className={`${forestsStyles.branchOneL}`}></div>
            <div
              className={`${forestsStyles.branchOneL} ${forestsStyles.branch2l}`}
            ></div>
          </div>
        </div>
        <div
          className={`${forestsStyles.forestTree} absolute ${forestsStyles.treeTwo}`}
        >
          <div className={`${forestsStyles.topTwo}`}></div>
          <div className={`${forestsStyles.trunkTwo}`}></div>
          <div className={`${forestsStyles.trunkTwoBottom}`}></div>
          <div className={`${forestsStyles.branchTwoRight}`}>
            <div
              className={`${forestsStyles.branchTwoR} ${forestsStyles.branchRf}`}
            ></div>
            <div
              className={`${forestsStyles.branchTwoR} ${forestsStyles.branchRs}`}
            ></div>
            <div
              className={`${forestsStyles.branchTwoR} ${forestsStyles.branchRt}`}
            ></div>
          </div>
          <div className={`${forestsStyles.branchTwoLeft}`}>
            <div
              className={`${forestsStyles.branchTwoL} ${forestsStyles.branchLf}`}
            ></div>
            <div
              className={`${forestsStyles.branchTwoL} ${forestsStyles.branchLs}`}
            ></div>
            <div
              className={`${forestsStyles.branchTwoL} ${forestsStyles.branchLt}`}
            ></div>
          </div>
        </div>
        <div
          className={`${forestsStyles.forestTree} absolute ${forestsStyles.treeThree}`}
        >
          <div className={`${forestsStyles.topThree}`}></div>
          <div className={`${forestsStyles.trunkThree}`}></div>
          <div className={`${forestsStyles.trunkThreeBottom}`}></div>
          <div className={`${forestsStyles.branchThreeRight}`}>
            <div className={`${forestsStyles.branchThreeR}`}></div>
            <div
              className={`${forestsStyles.branchThreeR} ${forestsStyles.branchThreeRs}`}
            ></div>
          </div>
          <div className={`${forestsStyles.branchThreeLeft}`}>
            <div className={`${forestsStyles.branchThreeL}`}></div>
            <div
              className={`${forestsStyles.branchThreeL} ${forestsStyles.branchThreeLs}`}
            ></div>
          </div>
        </div>
        <div
          className={`${forestsStyles.forestTree} absolute ${forestsStyles.treeFour}`}
        >
          <div className={`${forestsStyles.topFour}`}></div>
          <div className={`${forestsStyles.trunkFour}`}></div>
          <div className={`${forestsStyles.trunkFourBottom}`}></div>
        </div>
        <div
          className={`${forestsStyles.forestTree} absolute ${forestsStyles.treeFive}`}
        >
          <div className={`${forestsStyles.topFive}`}></div>
          <div className={`${forestsStyles.trunkFive}`}></div>
          <div className={`${forestsStyles.trunkFiveBottom}`}></div>
          <div className={`${forestsStyles.branchFiveRight}`}>
            <div className={`${forestsStyles.branchFiveR}`}></div>
            <div
              className={`${forestsStyles.branchFiveR} ${forestsStyles.branchFiveRs}`}
            ></div>
          </div>
          <div className={`${forestsStyles.branchFiveLeft}`}>
            <div className={`${forestsStyles.branchFiveL}`}></div>
            <div
              className={`${forestsStyles.branchFiveL} ${forestsStyles.branchFiveLs}`}
            ></div>
          </div>
        </div>
      </div>
      <div className="forest-row-two h-96 w-96 absolute -left-48 top-24 2xl:top-36 2xl:-left-24 z-2">
        <div
          className={`${forestsStyles.forestTree} absolute ${forestsStyles.treeOne}`}
        >
          <div className={`${forestsStyles.topOne}`}></div>
          <div className={`${forestsStyles.trunkOne}`}></div>
          <div className={`${forestsStyles.trunkOneBottom}`}></div>
          <div className={`${forestsStyles.branchOneRight}`}>
            <div className={`${forestsStyles.branchOneR}`}></div>
            <div
              className={`${forestsStyles.branchOneR} ${forestsStyles.branch2r}`}
            ></div>
          </div>
          <div className={`${forestsStyles.branchOneLeft}`}>
            <div className={`${forestsStyles.branchOneL}`}></div>
            <div
              className={`${forestsStyles.branchOneL} ${forestsStyles.branch2l}`}
            ></div>
          </div>
        </div>
        <div
          className={`${forestsStyles.forestTree} absolute ${forestsStyles.treeTwo}`}
        >
          <div className={`${forestsStyles.topTwo}`}></div>
          <div className={`${forestsStyles.trunkTwo}`}></div>
          <div className={`${forestsStyles.trunkTwoBottom}`}></div>
          <div className={`${forestsStyles.branchTwoRight}`}>
            <div
              className={`${forestsStyles.branchTwoR} ${forestsStyles.branchRf}`}
            ></div>
            <div
              className={`${forestsStyles.branchTwoR} ${forestsStyles.branchRs}`}
            ></div>
            <div
              className={`${forestsStyles.branchTwoR} ${forestsStyles.branchRt}`}
            ></div>
          </div>
          <div className={`${forestsStyles.branchTwoLeft}`}>
            <div
              className={`${forestsStyles.branchTwoL} ${forestsStyles.branchLf}`}
            ></div>
            <div
              className={`${forestsStyles.branchTwoL} ${forestsStyles.branchLs}`}
            ></div>
            <div
              className={`${forestsStyles.branchTwoL} ${forestsStyles.branchLt}`}
            ></div>
          </div>
        </div>
        <div
          className={`${forestsStyles.forestTree} absolute ${forestsStyles.treeThree}`}
        >
          <div className={`${forestsStyles.topThree}`}></div>
          <div className={`${forestsStyles.trunkThree}`}></div>
          <div className={`${forestsStyles.trunkThreeBottom}`}></div>
          <div className={`${forestsStyles.branchThreeRight}`}>
            <div className={`${forestsStyles.branchThreeR}`}></div>
            <div
              className={`${forestsStyles.branchThreeR} ${forestsStyles.branchThreeRs}`}
            ></div>
          </div>
          <div className={`${forestsStyles.branchThreeLeft}`}>
            <div className={`${forestsStyles.branchThreeL}`}></div>
            <div
              className={`${forestsStyles.branchThreeL} ${forestsStyles.branchThreeLs}`}
            ></div>
          </div>
        </div>
        <div
          className={`${forestsStyles.forestTree} absolute ${forestsStyles.treeFour}`}
        >
          <div className={`${forestsStyles.topFour}`}></div>
          <div className={`${forestsStyles.trunkFour}`}></div>
          <div className={`${forestsStyles.trunkFourBottom}`}></div>
        </div>
        <div
          className={`${forestsStyles.forestTree} absolute ${forestsStyles.treeFive}`}
        >
          <div className={`${forestsStyles.topFive}`}></div>
          <div className={`${forestsStyles.trunkFive}`}></div>
          <div className={`${forestsStyles.trunkFiveBottom}`}></div>
          <div className={`${forestsStyles.branchFiveRight}`}>
            <div className={`${forestsStyles.branchFiveR}`}></div>
            <div
              className={`${forestsStyles.branchFiveR} ${forestsStyles.branchFiveRs}`}
            ></div>
          </div>
          <div className={`${forestsStyles.branchFiveLeft}`}>
            <div className={`${forestsStyles.branchFiveL}`}></div>
            <div
              className={`${forestsStyles.branchFiveL} ${forestsStyles.branchFiveLs}`}
            ></div>
          </div>
        </div>
      </div>
      <div className="forest-row-three h-96 w-96 absolute -left-2 2xl:-left-24 top-48 z-3">
        <div
          className={`${forestsStyles.ForestTree} absolute ${forestsStyles.treeOne}`}
        >
          <div className={`${forestsStyles.topOne}`}></div>
          <div className={`${forestsStyles.trunkOne}`}></div>
          <div className={`${forestsStyles.trunkOneBottom}`}></div>
          <div className={`${forestsStyles.branchOneRight}`}>
            <div className={`${forestsStyles.branchOneR}`}></div>
            <div
              className={`${forestsStyles.branchOneR} ${forestsStyles.branch2r}`}
            ></div>
          </div>
          <div className={`${forestsStyles.branchOneLeft}`}>
            <div className={`${forestsStyles.branchOneL}`}></div>
            <div
              className={`${forestsStyles.branchOneL} ${forestsStyles.branch2l}`}
            ></div>
          </div>
        </div>
        <div
          className={`${forestsStyles.forestTree} absolute ${forestsStyles.treeTwo}`}
        >
          <div className={`${forestsStyles.topTwo}`}></div>
          <div className={`${forestsStyles.trunkTwo}`}></div>
          <div className={`${forestsStyles.trunkTwoBottom}`}></div>
          <div className={`${forestsStyles.branchTwoRight}`}>
            <div
              className={`${forestsStyles.branchTwoR} ${forestsStyles.branchRf}`}
            ></div>
            <div
              className={`${forestsStyles.branchTwoR} ${forestsStyles.branchRs}`}
            ></div>
            <div
              className={`${forestsStyles.branchTwoR} ${forestsStyles.branchRt}`}
            ></div>
          </div>
          <div className={`${forestsStyles.branchTwoLeft}`}>
            <div
              className={`${forestsStyles.branchTwoL} ${forestsStyles.branchLf}`}
            ></div>
            <div
              className={`${forestsStyles.branchTwoL} ${forestsStyles.branchLs}`}
            ></div>
            <div
              className={`${forestsStyles.branchTwoL}${forestsStyles.branchLt}`}
            ></div>
          </div>
        </div>
        <div
          className={`${forestsStyles.ForestTree} absolute${forestsStyles.treeThree}`}
        >
          <div className={`${forestsStyles.topThree}`}></div>
          <div className={`${forestsStyles.trunkThree}`}></div>
          <div className={`${forestsStyles.trunkThreeBottom}`}></div>
          <div className={`${forestsStyles.branchThreeRight}`}>
            <div className={`${forestsStyles.branchThreeR}`}></div>
            <div
              className={`${forestsStyles.branchThreeR} ${forestsStyles.branchThreeRs}`}
            ></div>
          </div>
          <div className={`${forestsStyles.branchThreeLeft}`}>
            <div className={`${forestsStyles.branchThreeL}`}></div>
            <div
              className={`${forestsStyles.branchThreeL} ${forestsStyles.branchThreeLs}`}
            ></div>
          </div>
        </div>
        <div
          className={`${forestsStyles.forestTree} absolute ${forestsStyles.treeFour}`}
        >
          <div className={`${forestsStyles.topFour}`}></div>
          <div className={`${forestsStyles.trunkFour}`}></div>
          <div className={`${forestsStyles.trunkFourBottom}`}></div>
        </div>
        <div
          className={`${forestsStyles.forestTree} absolute ${forestsStyles.treeFive}`}
        >
          <div className={`${forestsStyles.topFive}`}></div>
          <div className={`${forestsStyles.trunkFive}`}></div>
          <div className={`${forestsStyles.trunkFiveBottom}`}></div>
          <div className={`${forestsStyles.branchFiveRight}`}>
            <div className={`${forestsStyles.branchFiveR}`}></div>
            <div
              className={`${forestsStyles.branchFiveR} ${forestsStyles.branchFiveRs}`}
            ></div>
          </div>
          <div className={`${forestsStyles.branchFiveLeft}`}>
            <div className={`${forestsStyles.branchFiveL}`}></div>
            <div
              className={`${forestsStyles.branchFiveL} ${forestsStyles.branchFiveLs}`}
            ></div>
          </div>
        </div>
      </div>
      <div className="forest-row-four h-96 w-96 absolute -right-24 top-24 z-2">
        <div
          className={`${forestsStyles.forestTree} absolute ${forestsStyles.treeOne}`}
        >
          <div className={`${forestsStyles.topOne}`}></div>
          <div className={`${forestsStyles.trunkOne}`}></div>
          <div className={`${forestsStyles.trunkOneBottom}`}></div>
          <div className={`${forestsStyles.branchOneRight}`}>
            <div className={`${forestsStyles.branchOneR}`}></div>
            <div
              className={`${forestsStyles.branchOneR} ${forestsStyles.branch2r}`}
            ></div>
          </div>
          <div className={`${forestsStyles.branchOneLeft}`}>
            <div className={`${forestsStyles.branchOneL}`}></div>
            <div
              className={`${forestsStyles.branchOneL} ${forestsStyles.branch2l}`}
            ></div>
          </div>
        </div>
        <div
          className={`${forestsStyles.forestTree} absolute ${forestsStyles.treeTwo}`}
        >
          <div className={`${forestsStyles.topTwo}`}></div>
          <div className={`${forestsStyles.trunkTwo}`}></div>
          <div className={`${forestsStyles.trunkTwoBottom}`}></div>
          <div className={`${forestsStyles.branchTwoRight}`}>
            <div
              className={`${forestsStyles.branchTwoR} ${forestsStyles.branchRf}`}
            ></div>
            <div
              className={`${forestsStyles.branchTwoR} ${forestsStyles.branchRs}`}
            ></div>
            <div
              className={`${forestsStyles.branchTwoR} ${forestsStyles.branchRt}`}
            ></div>
          </div>
          <div className={`${forestsStyles.branchTwoLeft}`}>
            <div
              className={`${forestsStyles.branchTwoL} ${forestsStyles.branchLf}`}
            ></div>
            <div
              className={`${forestsStyles.branchTwoL}${forestsStyles.branchLs}`}
            ></div>
            <div
              className={`${forestsStyles.branchTwoL} ${forestsStyles.branchLt}`}
            ></div>
          </div>
        </div>
        <div
          className={`${forestsStyles.forestTree} absolute ${forestsStyles.treeThree}`}
        >
          <div className={`${forestsStyles.topThree}`}></div>
          <div className={`${forestsStyles.trunkThree}`}></div>
          <div className={`${forestsStyles.trunkThreeBottom}`}></div>
          <div className={`${forestsStyles.branchThreeRight}`}>
            <div className={`${forestsStyles.branchThreeR}`}></div>
            <div
              className={`${forestsStyles.branchThreeR} ${forestsStyles.branchThreeRs}`}
            ></div>
          </div>
          <div className={`${forestsStyles.branchThreeLeft}`}>
            <div className={`${forestsStyles.branchThreeL}`}></div>
            <div
              className={`${forestsStyles.branchThreeL} ${forestsStyles.branchThreeLs}`}
            ></div>
          </div>
        </div>
        <div
          className={`${forestsStyles.forestTree} absolute ${forestsStyles.treeFour}`}
        >
          <div className={`${forestsStyles.topFour}`}></div>
          <div className={`${forestsStyles.trunkFour}`}></div>
          <div className={`${forestsStyles.trunkFourBottom}`}></div>
        </div>
        <div
          className={`${forestsStyles.forestTree} absolute ${forestsStyles.treeFive}`}
        >
          <div className={`${forestsStyles.topFive}`}></div>
          <div className={`${forestsStyles.trunkFive}`}></div>
          <div className={`${forestsStyles.trunkFiveBottom}`}></div>
          <div className={`${forestsStyles.branchFiveRight}`}>
            <div className={`${forestsStyles.branchFiveR}`}></div>
            <div
              className={`${forestsStyles.branchFiveR} ${forestsStyles.branchFiveRs}`}
            ></div>
          </div>
          <div className={`${forestsStyles.branchFiveLeft}`}>
            <div className={`${forestsStyles.branchFiveL}`}></div>
            <div
              className={`${forestsStyles.branchFiveL} ${forestsStyles.branchFiveLs}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forests;
