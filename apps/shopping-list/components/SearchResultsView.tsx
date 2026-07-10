import type { Item } from '../types';
import type { SearchResultGroup } from '../lib/derived';
import { toClassSlug } from '../lib/constants';

interface Props {
  activeTab: string;
  groupedSearchResults: SearchResultGroup[];
  onAddToList: (item: Item) => void;
  canEdit: boolean;
}

export default function SearchResultsView({
  activeTab,
  groupedSearchResults,
  onAddToList,
  canEdit,
}: Props) {
  if (groupedSearchResults.length === 0) {
    return (
      <div className="status-msg">No results{activeTab ? ` in ${activeTab}` : ''}.</div>
    );
  }

  return (
    <div className="shopping-list">
      {groupedSearchResults.map((group) =>
        group.items.length > 1 ? (
          <div key={group.name} className="compare-card">
            <div className="compare-name">{group.name}</div>
            {group.items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                className="compare-row"
                disabled={!canEdit}
                onClick={canEdit ? () => onAddToList(item) : undefined}
              >
                <div className="compare-row-left">
                  <span className={`compare-store store-${toClassSlug(item.stores?.store_slug ?? '')}`}>
                    {item.stores?.store_slug}
                  </span>
                  {item.purchase_size && <span className="compare-size">{item.purchase_size}</span>}
                </div>
                <div className="compare-row-right">
                  {i === 0 && <span className="best-badge">Best</span>}
                  <span className="compare-price">
                    {item.estimated_cost != null ? `$${Number(item.estimated_cost).toFixed(2)}` : '—'}
                  </span>
                  {canEdit && <span className="add-icon">+</span>}
                </div>
              </button>
            ))}
          </div>
        ) : (
          (() => {
            const item = group.items[0];
            return (
              <button
                key={item.id}
                type="button"
                className="item search-result"
                disabled={!canEdit}
                onClick={canEdit ? () => onAddToList(item) : undefined}
              >
                <div className="item-content">
                  <strong className="item-title">{item.name}</strong>
                  <div className="details-row">
                    {!activeTab && item.stores?.store_slug && (
                      <span className={`detail-item store-tag store-${toClassSlug(item.stores.store_slug)}`}>
                        {item.stores.store_slug}
                      </span>
                    )}
                    {item.estimated_cost != null && (
                      <span className="detail-item">${Number(item.estimated_cost).toFixed(2)}</span>
                    )}
                    {item.purchase_size && <span className="detail-item">{item.purchase_size}</span>}
                  </div>
                </div>
                {canEdit && <div className="add-icon">+</div>}
              </button>
            );
          })()
        )
      )}
    </div>
  );
}
