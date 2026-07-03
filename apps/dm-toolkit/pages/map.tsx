// ── PHASE 3: DM Map ──────────────────────────────────────────────────────────
//
// Install when ready:
//   npm install konva react-konva
//
// This page will become a full canvas-based DM map with:
//   - Draggable / zoomable canvas (Konva Stage + Layer)
//   - MapEntity tokens: enemies, items, landmarks, traps, players
//   - DM-only visibility toggle (fog of war per entity)
//   - Right-click context menu: add entity, edit, remove
//
// Data shape will live in types/index.ts under GameMap / MapEntity.
// Store actions for map will mirror the character/session pattern in store/useStore.ts.
import DMToolkitLayout from '../components/DMToolkitLayout';

export default function Map() {
  return (
    <DMToolkitLayout>
      <div className="max-w-4xl mx-auto px-6 py-16 text-center space-y-6">
        <div className="text-6xl">🗺️</div>
        <h1 className="text-2xl font-bold text-stone-100">DM Map</h1>
        <p className="text-stone-400 max-w-md mx-auto">
          Coming in Phase 3. The map will let you place enemies, items, traps, and
          landmarks on a canvas — with fog-of-war and real-time sync for players.
        </p>

        <div className="bg-stone-800 border border-stone-700 rounded-xl p-6 text-left max-w-md mx-auto">
          <h2 className="text-sm font-bold uppercase text-stone-500 mb-3 tracking-wider">
            Phase 3 Checklist
          </h2>
          <ul className="space-y-2 text-sm text-stone-400">
            {[
              'Install react-konva + konva',
              'GameMap / MapEntity types (in types/index.ts)',
              'Map store slice in useStore.ts',
              'Konva Stage with pan + zoom',
              'Entity token layer (drag to position)',
              'DM visibility toggle per entity',
              'Context menu: add / edit / remove entity',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-stone-600 mt-0.5">○</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DMToolkitLayout>
  );
}
