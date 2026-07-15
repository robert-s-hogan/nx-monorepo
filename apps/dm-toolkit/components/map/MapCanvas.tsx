import { useState } from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import type Konva from 'konva';
import { useStore } from '../../store/useStore';
import TokenLayer from './TokenLayer';
import StructureLayer from './StructureLayer';
import GridLayer from './GridLayer';
import { snapToGridCenter, snapToGridLine } from '../../lib/grid';
import type { GameMap } from '../../types';

const MIN_SCALE = 0.3;
const MAX_SCALE = 3;

interface MapCanvasProps {
  map: GameMap;
  selectedAttackerId: string | null;
  selectedDefenderId: string | null;
  onSelectToken: (tokenId: string) => void;
  selectedStructureId: string | null;
  onSelectStructure: (structureId: string) => void;
  canEdit: boolean;
}

export default function MapCanvas({
  map,
  selectedAttackerId,
  selectedDefenderId,
  onSelectToken,
  selectedStructureId,
  onSelectStructure,
  canEdit,
}: MapCanvasProps) {
  const {
    tokens,
    characters,
    broadcastTokenDrag,
    commitTokenPosition,
    structures,
    commitStructurePosition,
  } = useStore();
  const [scale, setScale] = useState(1);
  const [showGrid, setShowGrid] = useState(true);

  const currentTurnTokenId = map.combat_active ? map.turn_order[map.current_turn_index] ?? null : null;
  const nextTurnTokenId =
    map.combat_active && map.turn_order.length > 1
      ? map.turn_order[(map.current_turn_index + 1) % map.turn_order.length] ?? null
      : null;

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
          {showGrid && <GridLayer width={map.width} height={map.height} />}
          <StructureLayer
            structures={structures}
            selectedStructureId={selectedStructureId}
            onSelect={onSelectStructure}
            onDragEnd={(structureId, x, y) =>
              commitStructurePosition(map.id, structureId, snapToGridLine(x), snapToGridLine(y))
            }
            canEdit={canEdit}
          />
          <TokenLayer
            tokens={tokens}
            characters={characters}
            selectedAttackerId={selectedAttackerId}
            selectedDefenderId={selectedDefenderId}
            currentTurnTokenId={currentTurnTokenId}
            nextTurnTokenId={nextTurnTokenId}
            onSelect={onSelectToken}
            onDragMove={broadcastTokenDrag}
            onDragEnd={(tokenId, x, y) =>
              commitTokenPosition(map.id, tokenId, snapToGridCenter(x), snapToGridCenter(y))
            }
            canEdit={canEdit}
          />
        </Layer>
      </Stage>
      <div className="flex items-center justify-between px-3 py-1.5 border-t border-stone-800">
        <p className="text-xs text-stone-600">
          Scroll to zoom, drag background to pan, drag a token to move it. Click a token to select
          attacker, then defender.
        </p>
        <button
          onClick={() => setShowGrid((g) => !g)}
          className="text-xs text-stone-500 hover:text-stone-300 border border-stone-700 hover:border-stone-600 rounded px-2 py-0.5 transition-colors shrink-0 ml-2"
        >
          {showGrid ? 'Hide grid' : 'Show grid'}
        </button>
      </div>
    </div>
  );
}
