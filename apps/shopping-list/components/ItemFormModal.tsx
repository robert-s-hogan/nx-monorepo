import { useEffect, useRef } from 'react';
import type { Item, StoreOption } from '../types';
import { CATEGORIES } from '../lib/constants';

export interface ItemFormState {
  name: string;
  storeSlug: string;
  cost: string;
  size: string;
  unitNote: string;
  videoUrl: string;
  category: string;
}

interface Props {
  editingItem: Item | null;
  storeOptions: StoreOption[];
  form: ItemFormState;
  saving: boolean;
  confirmDelete: boolean;
  onChange: (form: ItemFormState) => void;
  onClose: () => void;
  onSave: () => void;
  onRequestDelete: () => void;
  onConfirmDelete: () => void;
  onCancelDelete: () => void;
}

export default function ItemFormModal({
  editingItem,
  storeOptions,
  form,
  saving,
  confirmDelete,
  onChange,
  onClose,
  onSave,
  onRequestDelete,
  onConfirmDelete,
  onCancelDelete,
}: Props) {
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  return (
    <>
      <button type="button" className="form-backdrop" onClick={onClose} aria-label="Close form" />
      <div className="form-sheet">
        <div className="form-header">
          <h2 className="form-title">{editingItem ? 'Edit Item' : 'New Item'}</h2>
          <button type="button" className="form-close" onClick={onClose}>
            ×
          </button>
        </div>

        <label className="field-label">
          Name
          <input
            ref={nameRef}
            className="field-input"
            type="text"
            value={form.name}
            onChange={(e) => onChange({ ...form, name: e.target.value })}
            placeholder="e.g. Whole Milk"
          />
        </label>

        <label className="field-label">
          Store
          <select
            className="field-input"
            value={form.storeSlug}
            onChange={(e) => onChange({ ...form, storeSlug: e.target.value })}
          >
            {storeOptions.map((opt) => (
              <option key={opt.id} value={opt.store_slug}>
                {opt.store_slug}
              </option>
            ))}
          </select>
        </label>

        <label className="field-label">
          Estimated cost
          <input
            className="field-input"
            type="text"
            inputMode="decimal"
            value={form.cost}
            onChange={(e) => onChange({ ...form, cost: e.target.value })}
            placeholder="0.00"
          />
        </label>

        <label className="field-label">
          Purchase size
          <input
            className="field-input"
            type="text"
            value={form.size}
            onChange={(e) => onChange({ ...form, size: e.target.value })}
            placeholder="e.g. 2-pack of 1-gallon jugs"
          />
        </label>

        <label className="field-label">
          Unit price note
          <input
            className="field-input"
            type="text"
            value={form.unitNote}
            onChange={(e) => onChange({ ...form, unitNote: e.target.value })}
            placeholder="e.g. $3.70 per gallon"
          />
        </label>

        <label className="field-label">
          Category
          <select
            className="field-input"
            value={form.category}
            onChange={(e) => onChange({ ...form, category: e.target.value })}
          >
            <option value="">— None —</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        <label className="field-label">
          Picking guide video URL
          <input
            className="field-input"
            type="url"
            value={form.videoUrl}
            onChange={(e) => onChange({ ...form, videoUrl: e.target.value })}
            placeholder="https://youtube.com/…"
            onKeyDown={(e) => e.key === 'Enter' && onSave()}
          />
        </label>

        <button type="button" className="save-btn" onClick={onSave} disabled={saving || !form.name.trim()}>
          {saving ? 'Saving…' : 'Save'}
        </button>

        {editingItem &&
          (confirmDelete ? (
            <div className="form-delete-confirm">
              <span>Delete permanently?</span>
              <button type="button" className="delete-confirm-yes" onClick={onConfirmDelete}>
                Yes, delete
              </button>
              <button type="button" className="delete-confirm-cancel" onClick={onCancelDelete}>
                Cancel
              </button>
            </div>
          ) : (
            <button type="button" className="form-delete-btn" onClick={onRequestDelete}>
              Delete item
            </button>
          ))}
      </div>
    </>
  );
}
