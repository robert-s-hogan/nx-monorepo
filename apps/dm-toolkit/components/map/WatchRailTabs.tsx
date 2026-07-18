import AttackPanel from './AttackPanel';
import InvestigatePanel from './InvestigatePanel';
import TokenRoster from './TokenRoster';

export type RailTab = 'attack' | 'investigate' | 'roster';

const TABS: { id: RailTab; label: string; swatch: string }[] = [
  { id: 'attack', label: 'Attack', swatch: 'bg-red-400' },
  { id: 'investigate', label: 'Investigate', swatch: 'bg-teal-400' },
  { id: 'roster', label: 'Roster', swatch: 'bg-sky-400' },
];

interface WatchRailTabsProps {
  mapId: string;
  canEdit: boolean;
  activeTab: RailTab;
  onChangeTab: (tab: RailTab) => void;
  selectedAttackerId: string | null;
  selectedDefenderId: string | null;
  onClearAttackSelection: () => void;
  selectedInvestigatorId: string | null;
  selectedStructureId: string | null;
  onClearCheckSelection: () => void;
}

// Attack/Investigate/Roster used to be three permanently-stacked cards in
// the watch rail — this folds them into one card with tab headers instead,
// same tabbed-card pattern as ActDrawer below. The active tab also drives
// what a token/structure click on the map does (see pages/map.tsx) — Attack
// and Investigate tabs double as the click-mode switch, so there's a single
// control instead of a separate toggle plus separate tabs. Roster is public
// (also shown to no-login preview-link viewers); Attack/Investigate are
// DM-only, so their tabs simply don't exist for a non-canEdit viewer.
export default function WatchRailTabs({
  mapId,
  canEdit,
  activeTab,
  onChangeTab,
  selectedAttackerId,
  selectedDefenderId,
  onClearAttackSelection,
  selectedInvestigatorId,
  selectedStructureId,
  onClearCheckSelection,
}: WatchRailTabsProps) {
  const tabs = canEdit ? TABS : TABS.filter((t) => t.id === 'roster');
  // pages/map.tsx defaults activeTab to 'attack' regardless of role (it
  // doubles as the map click-mode there) — a non-DM viewer has no header to
  // switch away from that default, so force Roster instead of rendering
  // nothing.
  const effectiveTab: RailTab = canEdit ? activeTab : 'roster';

  return (
    <div className="bg-stone-800 border border-stone-700 rounded-xl">
      {tabs.length > 1 && (
        <div className="flex items-center gap-1 px-3 py-2 border-b border-stone-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChangeTab(tab.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === tab.id ? 'bg-stone-700 text-stone-100' : 'text-stone-500 hover:text-stone-300'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${tab.swatch}`} />
              {tab.label}
            </button>
          ))}
        </div>
      )}

      <div className="p-5">
        {effectiveTab === 'attack' && (
          <AttackPanel
            mapId={mapId}
            selectedAttackerId={selectedAttackerId}
            selectedDefenderId={selectedDefenderId}
            onClearSelection={onClearAttackSelection}
          />
        )}
        {effectiveTab === 'investigate' && (
          <InvestigatePanel
            mapId={mapId}
            selectedInvestigatorId={selectedInvestigatorId}
            selectedStructureId={selectedStructureId}
            onClearSelection={onClearCheckSelection}
          />
        )}
        {effectiveTab === 'roster' && <TokenRoster canEdit={canEdit} />}
      </div>
    </div>
  );
}
