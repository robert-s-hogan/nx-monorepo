import { useRef, useState } from 'react';
import { Circle, Group, Rect, Text } from 'react-konva';
import type Konva from 'konva';
import type { Character, MapToken } from '../../types';
import { distanceInFeet } from '../../lib/grid';

const TOKEN_RADIUS = 24;
const DEFAULT_SPEED_FT = 30; // 5e default when a token's character has none set

interface TokenLayerProps {
  tokens: MapToken[];
  characters: Character[];
  selectedAttackerId: string | null;
  selectedDefenderId: string | null;
  currentTurnTokenId: string | null;
  nextTurnTokenId: string | null;
  onSelect: (tokenId: string) => void;
  onDragMove: (tokenId: string, x: number, y: number) => void;
  onDragEnd: (tokenId: string, x: number, y: number) => void;
  canEdit: boolean;
}

export default function TokenLayer({
  tokens,
  characters,
  selectedAttackerId,
  selectedDefenderId,
  currentTurnTokenId,
  nextTurnTokenId,
  onSelect,
  onDragMove,
  onDragEnd,
  canEdit,
}: TokenLayerProps) {
  // Where each token's drag started — compared against its live position
  // while dragging to show "how far have I moved this turn" in feet, purely
  // advisory (nothing blocks the drag, the DM just sees it).
  const dragStart = useRef<Map<string, { x: number; y: number }>>(new Map());
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [dragFeet, setDragFeet] = useState(0);

  const handleDragStart = (token: MapToken, e: Konva.KonvaEventObject<DragEvent>) => {
    dragStart.current.set(token.id, { x: e.target.x(), y: e.target.y() });
    setDraggingId(token.id);
    setDragFeet(0);
  };

  const handleDragMove = (token: MapToken, e: Konva.KonvaEventObject<DragEvent>) => {
    const start = dragStart.current.get(token.id);
    const x = e.target.x();
    const y = e.target.y();
    if (start) setDragFeet(distanceInFeet(start.x, start.y, x, y));
    onDragMove(token.id, x, y);
  };

  const handleDragEnd = (token: MapToken, e: Konva.KonvaEventObject<DragEvent>) => {
    dragStart.current.delete(token.id);
    setDraggingId(null);
    onDragEnd(token.id, e.target.x(), e.target.y());
  };

  return (
    <>
      {tokens.map((token) => {
        const hpPct = token.hp_max > 0 ? Math.max(0, token.hp_current / token.hp_max) : 0;
        const isAttacker = token.id === selectedAttackerId;
        const isDefender = token.id === selectedDefenderId;
        const ringColor = isAttacker ? '#facc15' : isDefender ? '#ef4444' : 'transparent';
        const isCurrentTurn = token.id === currentTurnTokenId;
        const isNextTurn = token.id === nextTurnTokenId;

        const character = characters.find((c) => c.id === token.character_id) ?? null;
        const speed = character?.speed ?? DEFAULT_SPEED_FT;
        const isDragging = draggingId === token.id;
        const overSpeed = dragFeet > speed;

        return (
          <Group
            key={token.id}
            x={token.x}
            y={token.y}
            draggable={canEdit}
            onClick={() => onSelect(token.id)}
            onTap={() => onSelect(token.id)}
            onDragStart={(e) => handleDragStart(token, e)}
            onDragMove={(e) => handleDragMove(token, e)}
            onDragEnd={(e) => handleDragEnd(token, e)}
          >
            <Circle radius={TOKEN_RADIUS + 3} fill={ringColor} opacity={0.9} />
            <Circle
              radius={TOKEN_RADIUS}
              fill={token.side === 'ally' ? '#4a5e2a' : token.side === 'neutral' ? '#4a2a6e' : '#7a2a2a'}
              stroke="#292524"
              strokeWidth={2}
            />
            {/* Turn-order marker — whose turn it is now (bright, dashed) and
                who's up next (dimmer, thinner), so the DM doesn't have to
                cross-reference the ActivityLog banner while looking at the
                board. Only rendered while combat is active (see MapCanvas). */}
            {isCurrentTurn && (
              <Circle
                radius={TOKEN_RADIUS + 8}
                stroke="#38bdf8"
                strokeWidth={3}
                dash={[8, 5]}
                listening={false}
              />
            )}
            {isNextTurn && (
              <Circle
                radius={TOKEN_RADIUS + 8}
                stroke="#a8a29e"
                strokeWidth={1.5}
                dash={[4, 5]}
                listening={false}
              />
            )}
            <Text
              text={token.label.slice(0, 2).toUpperCase()}
              fontSize={14}
              fill="#f5f5f4"
              width={TOKEN_RADIUS * 2}
              height={TOKEN_RADIUS * 2}
              offsetX={TOKEN_RADIUS}
              offsetY={TOKEN_RADIUS}
              align="center"
              verticalAlign="middle"
            />
            {/* HP bar */}
            <Rect
              y={TOKEN_RADIUS + 6}
              offsetX={TOKEN_RADIUS}
              width={TOKEN_RADIUS * 2}
              height={5}
              fill="#292524"
              cornerRadius={2}
            />
            <Rect
              y={TOKEN_RADIUS + 6}
              offsetX={TOKEN_RADIUS}
              width={TOKEN_RADIUS * 2 * hpPct}
              height={5}
              fill={hpPct > 0.5 ? '#4ade80' : hpPct > 0.2 ? '#facc15' : '#ef4444'}
              cornerRadius={2}
            />
            <Text
              text={token.label}
              y={TOKEN_RADIUS + 14}
              offsetX={TOKEN_RADIUS}
              width={TOKEN_RADIUS * 2}
              fontSize={11}
              fill="#d6d3d1"
              align="center"
            />
            {isDragging && (
              <Text
                text={`${dragFeet} ft (spd ${speed})`}
                y={-TOKEN_RADIUS - 18}
                offsetX={TOKEN_RADIUS}
                width={TOKEN_RADIUS * 2}
                fontSize={12}
                fontStyle="bold"
                fill={overSpeed ? '#ef4444' : '#4ade80'}
                align="center"
              />
            )}
          </Group>
        );
      })}
    </>
  );
}
