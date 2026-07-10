import { Fragment } from 'react';
import type { Item } from '../types';
import type { CartStats } from '../lib/derived';
import ShoppingListItemRow from './ShoppingListItemRow';

interface Props {
  activeTab: string;
  groupedListItems: [string, Item[]][];
  cartStats: CartStats;
  onToggleCompletion: (item: Item) => void;
  onEdit: (item: Item) => void;
  onRemove: (item: Item) => void;
  onWatchVideo: (embedUrl: string) => void;
  canEdit: boolean;
}

export default function ShoppingListView({
  activeTab,
  groupedListItems,
  cartStats,
  onToggleCompletion,
  onEdit,
  onRemove,
  onWatchVideo,
  canEdit,
}: Props) {
  return (
    <>
      {cartStats.total > 0 && (
        <div className="cart-bar">
          <div className="cart-bar-track">
            <div
              className="cart-bar-fill"
              style={{
                width: `${cartStats.total > 0 ? (cartStats.picked / cartStats.total) * 100 : 0}%`,
              }}
            />
          </div>
          <div className="cart-bar-text">
            <span>
              {cartStats.picked} of {cartStats.total} picked
            </span>
            <span>
              {cartStats.pickedTotal > 0 && (
                <>
                  <span className="cart-spent">${cartStats.pickedTotal.toFixed(2)}</span> /{' '}
                </>
              )}
              ~${cartStats.listTotal.toFixed(2)}
            </span>
          </div>
        </div>
      )}

      <div className="shopping-list">
        {groupedListItems.map(([cat, catItems]) => (
          <Fragment key={cat}>
            <div className="category-header">{cat}</div>
            {catItems.map((item) => (
              <ShoppingListItemRow
                key={item.id}
                item={item}
                onToggleCompletion={onToggleCompletion}
                onEdit={onEdit}
                onRemove={onRemove}
                onWatchVideo={onWatchVideo}
                canEdit={canEdit}
              />
            ))}
          </Fragment>
        ))}

        {groupedListItems.length === 0 && (
          <div className="status-msg">
            Nothing on your {activeTab} list yet.
            <br />
            Search above to add items.
          </div>
        )}
      </div>
    </>
  );
}
