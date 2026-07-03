import type { Item } from '../types';
import { toEmbedUrl } from '../lib/constants';

interface Props {
  item: Item;
  onToggleCompletion: (item: Item) => void;
  onEdit: (item: Item) => void;
  onRemove: (item: Item) => void;
  onWatchVideo: (embedUrl: string) => void;
}

export default function ShoppingListItemRow({
  item,
  onToggleCompletion,
  onEdit,
  onRemove,
  onWatchVideo,
}: Props) {
  return (
    <div
      className={`item ${item.is_completed ? 'completed' : ''}`}
      role="button"
      tabIndex={0}
      onClick={() => onToggleCompletion(item)}
      onKeyDown={(e) => e.key === 'Enter' && onToggleCompletion(item)}
    >
      <div className="item-content">
        <div className="title-row">
          <strong className="item-title">{item.name}</strong>
          {item.estimated_cost != null && (
            <span className="price-badge cost">${Number(item.estimated_cost).toFixed(2)}</span>
          )}
        </div>
        <div className="details-row">
          {item.purchase_size && <span className="detail-item">{item.purchase_size}</span>}
          {item.unit_price_note && <span className="detail-item">{item.unit_price_note}</span>}
        </div>
      </div>
      <div className="item-actions">
        {item.video_url && (
          <button
            type="button"
            className="video-btn"
            onClick={(e) => {
              e.stopPropagation();
              onWatchVideo(toEmbedUrl(item.video_url ?? ''));
            }}
            title="Watch picking guide"
          >
            ▶
          </button>
        )}
        <button
          className="edit-btn"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(item);
          }}
          title="Edit item"
        >
          ✏︎
        </button>
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(item);
          }}
          title="Remove from list"
        >
          ×
        </button>
      </div>
    </div>
  );
}
