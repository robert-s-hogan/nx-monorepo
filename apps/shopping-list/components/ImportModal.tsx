interface Props {
  importText: string;
  importError: string;
  importSaving: boolean;
  onTextChange: (value: string) => void;
  onClose: () => void;
  onImport: () => void;
}

const PLACEHOLDER = `[
  {
    "name": "Whole Milk",
    "store_slug": "Costco",
    "estimated_cost": 7.40,
    "purchase_size": "2-gallon pack",
    "unit_price_note": "$3.70/gal",
    "category": "Dairy & Eggs"
  }
]`;

export default function ImportModal({
  importText,
  importError,
  importSaving,
  onTextChange,
  onClose,
  onImport,
}: Props) {
  return (
    <>
      <button type="button" className="form-backdrop" onClick={onClose} aria-label="Close import" />
      <div className="form-sheet">
        <div className="form-header">
          <h2 className="form-title">Import Items</h2>
          <button type="button" className="form-close" onClick={onClose}>
            ×
          </button>
        </div>
        <p className="import-hint">
          Paste a JSON array. Each object needs at least <code>name</code> and <code>store_slug</code>.
        </p>
        <textarea
          className="field-input import-textarea"
          value={importText}
          onChange={(e) => onTextChange(e.target.value)}
          placeholder={PLACEHOLDER}
          spellCheck={false}
        />
        {importError && <div className="import-error">{importError}</div>}
        <button
          type="button"
          className="save-btn"
          onClick={onImport}
          disabled={importSaving || !importText.trim()}
        >
          {importSaving ? 'Importing…' : 'Import'}
        </button>
      </div>
    </>
  );
}
