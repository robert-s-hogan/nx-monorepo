import { useState } from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import type Konva from 'konva';
import { useStore } from '../../store/useStore';
import TokenLayer from './TokenLayer';
import type { GameMap } from '../../types';

const MIN_SCALE = 0.3;
const MAX_SCALE = 3;

interface MapCanvasProps {
  map: GameMap;
  selectedAttackerId: string | null;
  selectedDefenderId: string | null;
  onSelectToken: (tokenId: string) => void;
}

export default function MapCanvas({
  map,
  selectedAttackerId,
  selectedDefenderId,
  onSelectToken,
}: MapCanvasProps) {
  const { tokens, broadcastTokenDrag, commitTokenPosition } = useStore();
  const [scale, setScale] = useState(1);

  const handleWheel = (e: Konva.KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();
    const direction = e.evt.deltaY > 0 ? -1 : 1;
    setScale((s) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, s + direction * 0.1)));
  };

  return (
    <div className="border border-stone-700 rounded-xl overflow-hidden bg-stone-950">
      <Stage
        width={800}
        height={600}
        scaleX={scale}
        scaleY={scale}
        draggable
        onWheel={handleWheel}
      >
        <Layer>
          <Rect x={0} y={0} width={map.width} height={map.height} fill="#1c1917" />
          <TokenLayer
            tokens={tokens}
            selectedAttackerId={selectedAttackerId}
            selectedDefenderId={selectedDefenderId}
            onSelect={onSelectToken}
            onDragMove={broadcastTokenDrag}
            onDragEnd={(tokenId, x, y) => commitTokenPosition(map.id, tokenId, x, y)}
          />
        </Layer>
      </Stage>
      <p className="text-xs text-stone-600 px-3 py-1.5 border-t border-stone-800">
        Scroll to zoom, drag background to pan, drag a token to move it. Click a token to select
        attacker, then defender.
      </p>
    </div>
  );
}
