import { useState } from 'react';

import BootSequence from './hogans-scene/BootSequence';
import CodeRain from './hogans-scene/CodeRain';
import FamilyScene from './hogans-scene/FamilyScene';
import styles from './hogans-scene/HogansScene.module.css';

const HogansHero = () => {
  const [bootDone, setBootDone] = useState(false);

  return (
    <div className={styles.stage}>
      <CodeRain />
      <div className={styles.vignette} />
      <div className={styles.wordmark}>
        <div className={styles.wordmarkWord}>
          the <em>Hogans</em>.os
        </div>
        <div className={styles.wordmarkSub}>family uplink · v2.0.26</div>
      </div>
      <FamilyScene visible={bootDone} />
      <BootSequence onComplete={() => setBootDone(true)} />
    </div>
  );
};

export default HogansHero;
