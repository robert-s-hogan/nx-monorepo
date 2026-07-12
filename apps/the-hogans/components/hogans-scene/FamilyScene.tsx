import { useState } from 'react';

import styles from './HogansScene.module.css';
import { personas } from './personas';
import FigureSlot from './FigureSlot';
import TerminalPanel from './TerminalPanel';

interface FamilySceneProps {
  visible: boolean;
}

const FamilyScene = ({ visible }: FamilySceneProps) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx((current) => (current === idx ? null : idx));
  };

  return (
    <div className={`${styles.scene} ${visible ? styles.sceneIn : ''}`}>
      <div className={styles.sceneGround} />
      {personas.map((persona, idx) => (
        <FigureSlot key={persona.name} persona={persona} index={idx} active={openIdx === idx} onToggle={toggle} />
      ))}
      <TerminalPanel persona={openIdx !== null ? personas[openIdx] : null} onClose={() => setOpenIdx(null)} />
    </div>
  );
};

export default FamilyScene;
