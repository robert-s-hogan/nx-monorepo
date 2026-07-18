import { useState } from 'react';
import AddTokenPanel from './AddTokenPanel';
import StructurePanel from './StructurePanel';

type Tab = 'token' | 'structure';

const TABS: { id: Tab; label: string; swatch: string }[] = [
  { id: 'token', label: 'Add Token', swatch: 'bg-green-400' },
  { id: 'structure', label: 'Structures', swatch: 'bg-amber-400' },
];

interface ActDrawerProps {
  mapId: string;
  selectedStructureId: string | null;
  onSelectStructure: (structureId: string | null) => void;
}

// Full-width, DM-only drawer at the bottom of the map page: only the tab
// currently in use claims vertical space, instead of Add Token/Structures
// both being permanently stacked (see the approved layout mockup — this is
// that "act drawer" concept built for real). Purely authoring content —
// Attack and Investigate both live in the watch rail instead, since rolling
// a check now happens by clicking tokens/structures on the map, same
// gesture as an attack.
export default function ActDrawer({
  mapId,
  selectedStructureId,
  onSelectStructure,
}: ActDrawerProps) {
  const [activeTab, setActiveTab] = useState<Tab>('token');
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="bg-stone-800 border border-stone-700 rounded-xl">
      <div className="flex items-center gap-1 px-3 py-2">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === tab.id && !collapsed
                ? 'bg-stone-700 text-stone-100'
                : 'text-stone-500 hover:text-stone-300'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${tab.swatch}`} />
            {tab.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setCollapsed((c) => !c)}
          className="ml-auto text-xs text-stone-500 hover:text-stone-300 px-2 py-1"
        >
          {collapsed ? 'Expand ⌄' : 'Collapse ⌃'}
        </button>
      </div>

      {!collapsed && (
        <div className="px-4 pb-4 pt-1 border-t border-stone-700">
          {activeTab === 'token' && <AddTokenPanel mapId={mapId} />}
          {activeTab === 'structure' && (
            <StructurePanel
              mapId={mapId}
              selectedStructureId={selectedStructureId}
              onSelectStructure={onSelectStructure}
            />
          )}
        </div>
      )}
    </div>
  );
}
