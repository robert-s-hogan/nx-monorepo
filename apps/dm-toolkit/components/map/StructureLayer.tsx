import { Group, Rect, Text } from 'react-konva';
import type { MapStructure } from '../../types';

interface StructureLayerProps {
  structures: MapStructure[];
  selectedStructureId: string | null;
  selectedCheckStructureId: string | null;
  onSelect: (structureId: string) => void;
  onDragEnd: (structureId: string, x: number, y: number) => void;
  canEdit: boolean;
}

export default function StructureLayer({
  structures,
  selectedStructureId,
  selectedCheckStructureId,
  onSelect,
  onDragEnd,
  canEdit,
}: StructureLayerProps) {
  return (
    <>
      {structures.map((structure) => {
        const isSelected = structure.id === selectedStructureId;
        // Teal matches TokenLayer's investigate-selection ring — same
        // "this is the Investigate target" color language for both halves
        // of the click-person-then-structure flow.
        const isCheckTarget = structure.id === selectedCheckStructureId;
        // Unrevealed structures show as a plain fog marker to everyone
        // (including the DM view here — canEdit still authors/rolls checks
        // via the structure's id, it just doesn't need the name spoiled on
        // the canvas either until the DM explicitly reveals it).
        const label = structure.revealed ? structure.name : '?';

        return (
          <Group
            key={structure.id}
            x={structure.x}
            y={structure.y}
            draggable={canEdit}
            onClick={() => onSelect(structure.id)}
            onTap={() => onSelect(structure.id)}
            onDragEnd={(e) => onDragEnd(structure.id, e.target.x(), e.target.y())}
          >
            <Rect
              width={structure.width}
              height={structure.height}
              fill={structure.revealed ? '#57534e' : '#292524'}
              stroke={isCheckTarget ? '#2dd4bf' : isSelected ? '#facc15' : '#78716c'}
              strokeWidth={isCheckTarget || isSelected ? 3 : 1.5}
              cornerRadius={4}
              opacity={0.9}
            />
            <Text
              text={label}
              width={structure.width}
              height={structure.height}
              align="center"
              verticalAlign="middle"
              fontSize={12}
              fill="#e7e5e4"
            />
          </Group>
        );
      })}
    </>
  );
}
