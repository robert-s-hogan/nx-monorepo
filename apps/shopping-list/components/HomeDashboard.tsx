import { toClassSlug } from '../lib/constants';
import type { StoreSummary } from '../lib/derived';

interface Props {
  storeSummaries: StoreSummary[];
  hasActiveItems: boolean;
  confirmReset: boolean;
  onToggleTab: (store: string) => void;
  onOpenImport: () => void;
  onOpenCatalog: () => void;
  onRequestReset: () => void;
  onConfirmReset: () => void;
  onCancelReset: () => void;
  canEdit: boolean;
}

export default function HomeDashboard({
  storeSummaries,
  hasActiveItems,
  confirmReset,
  onToggleTab,
  onOpenImport,
  onOpenCatalog,
  onRequestReset,
  onConfirmReset,
  onCancelReset,
  canEdit,
}: Props) {
  return (
    <>
      <div className="store-cards">
        {storeSummaries.map((summary) => (
          <button
            key={summary.store}
            type="button"
            className={`store-card store-card-${toClassSlug(summary.store)}`}
            onClick={() => onToggleTab(summary.store)}
          >
            <div className="store-card-info">
              <div className="store-card-name">{summary.store}</div>
              <div className="store-card-stats">
                {summary.count > 0
                  ? `${summary.count} item${summary.count !== 1 ? 's' : ''} · ~$${summary.total.toFixed(2)}`
                  : 'Nothing on list'}
              </div>
            </div>
            <div className="store-card-arrow">›</div>
          </button>
        ))}
      </div>

      <div className="home-actions">
        {canEdit && (
          <button type="button" className="import-trigger" onClick={onOpenImport}>
            ↓ Import JSON
          </button>
        )}
        <button type="button" className="catalog-trigger" onClick={onOpenCatalog}>
          ☰ Catalog
        </button>
        {canEdit &&
          hasActiveItems &&
          (confirmReset ? (
            <div className="reset-confirm">
              <span>Clear all lists?</span>
              <button type="button" className="reset-yes" onClick={onConfirmReset}>
                Yes, clear
              </button>
              <button type="button" className="reset-cancel" onClick={onCancelReset}>
                Cancel
              </button>
            </div>
          ) : (
            <button type="button" className="reset-trigger" onClick={onRequestReset}>
              New trip ↺
            </button>
          ))}
      </div>
    </>
  );
}
