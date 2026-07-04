import { Circle, Group, Rect, Text } from 'react-konva';
import type { MapToken } from '../../types';

const TOKEN_RADIUS = 24;

interface TokenLayerProps {
  tokens: MapToken[];
  selectedAttackerId: string | null;
  selectedDefenderId: string | null;
  onSelect: (tokenId: string) => void;
  onDragMove: (tokenId: string, x: number, y: number) => void;
  onDragEnd: (tokenId: string, x: number, y: number) => void;
}

export default function TokenLayer({
  tokens,
  selectedAttackerId,
  selectedDefenderId,
  onSelect,
  onDragMove,
  onDragEnd,
}: TokenLayerProps) {
  return (
    <>
      {tokens.map((token) => {
        const hpPct = token.hp_max > 0 ? Math.max(0, token.hp_current / token.hp_max) : 0;
        const isAttacker = token.id === selectedAttackerId;
        const isDefender = token.id === selectedDefenderId;
        const ringColor = isAttacker ? '#facc15' : isDefender ? '#ef4444' : 'transparent';

        return (
          <Group
            key={token.id}
            x={token.x}
            y={token.y}
            draggable
            onClick={() => onSelect(token.id)}
            onTap={() => onSelect(token.id)}
            onDragMove={(e) => onDragMove(token.id, e.target.x(), e.target.y())}
            onDragEnd={(e) => onDragEnd(token.id, e.target.x(), e.target.y())}
          >
            <Circle radius={TOKEN_RADIUS + 3} fill={ringColor} opacity={0.9} />
            <Circle
              radius={TOKEN_RADIUS}
              fill={token.character_id ? '#4a5e2a' : '#7a2a2a'}
              stroke="#292524"
              strokeWidth={2}
            />
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
          </Group>
        );
      })}
    </>
  );
}
