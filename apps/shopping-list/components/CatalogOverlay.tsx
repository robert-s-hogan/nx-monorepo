import { Fragment, useEffect, useRef } from 'react';
import type { Item } from '../types';
import { toClassSlug } from '../lib/constants';

interface Props {
  items: Item[];
  catalogGroups: [string, Item[]][];
  catalogQuery: string;
  catalogDeleteId: number | null;
  onQueryChange: (value: string) => void;
  onClose: () => void;
  onEdit: (item: Item) => void;
  onRequestDelete: (id: number) => void;
  onConfirmDelete: (id: number) => void;
  onCancelDelete: () => void;
}

export default function CatalogOverlay({
  items,
  catalogGroups,
  catalogQuery,
  catalogDeleteId,
  onQueryChange,
  onClose,
  onEdit,
  onRequestDelete,
  onConfirmDelete,
  onCancelDelete,
}: Props) {
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  return (
    <div className="catalog-overlay">
      <div className="catalog-header">
        <button type="button" className="catalog-back" onClick={onClose}>
          ‹ Back
        </button>
        <span className="catalog-title">Catalog</span>
        <span className="catalog-count">{items.length} items</span>
      </div>
      <div className="catalog-search-wrap">
        <input
          ref={searchRef}
          className="catalog-search"
          type="text"
          value={catalogQuery}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search all items…"
        />
      </div>
      <div className="catalog-list">
        {catalogGroups.map(([store, storeItems]) => (
          <Fragment key={store}>
            <div className={`catalog-store-header store-${toClassSlug(store)}`}>
              {store} <span className="catalog-store-count">{storeItems.length}</span>
            </div>
            {storeItems.map((item) => (
              <div key={item.id} className="catalog-item">
                <div className="catalog-item-info">
                  <span className="catalog-item-name">{item.name}</span>
                  <span className="catalog-item-meta">
                    {item.estimated_cost != null && `$${Number(item.estimated_cost).toFixed(2)}`}
                    {item.category && ` · ${item.category}`}
                  </span>
                </div>
                <div className="catalog-item-actions">
                  {catalogDeleteId === item.id ? (
                    <>
                      <button
                        type="button"
                        className="catalog-delete-yes"
                        onClick={() => onConfirmDelete(item.id)}
                      >
                        Delete
                      </button>
                      <button type="button" className="catalog-delete-cancel" onClick={onCancelDelete}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="catalog-edit-btn"
                        onClick={() => onEdit(item)}
                        title="Edit"
                      >
                        ✏︎
                      </button>
                      <button
                        type="button"
                        className="catalog-delete-btn"
                        onClick={() => onRequestDelete(item.id)}
                        title="Delete"
                      >
                        🗑
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </Fragment>
        ))}
        {catalogGroups.length === 0 && <div className="status-msg">No items found.</div>}
      </div>
    </div>
  );
}
