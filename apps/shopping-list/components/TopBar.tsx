import { toClassSlug } from '../lib/constants';
import type { StoreSummary } from '../lib/derived';

interface Props {
  activeTab: string;
  searchQuery: string;
  storeSummaries: StoreSummary[];
  onHome: () => void;
  onSearchChange: (value: string) => void;
  onToggleTab: (store: string) => void;
}

export default function TopBar({
  activeTab,
  searchQuery,
  storeSummaries,
  onHome,
  onSearchChange,
  onToggleTab,
}: Props) {
  return (
    <>
      <button type="button" className="home-btn" onClick={onHome}>
        🛒 My Groceries
      </button>

      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={activeTab ? `Search ${activeTab}…` : 'Search all stores…'}
          className="search-bar"
        />
      </div>

      <div className="tabs-container">
        {storeSummaries.map(({ store, count }) => (
          <button
            key={store}
            className={`tab ${activeTab === store ? 'active' : ''} store-${toClassSlug(store)}`}
            onClick={() => onToggleTab(store)}
          >
            {store}
            {count > 0 && <span className="tab-badge">{count}</span>}
          </button>
        ))}
      </div>
    </>
  );
}
