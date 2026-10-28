import { useRef, useState } from 'react';
import { copyToClipboard } from '@with-nx/utils';
import { parseRecipeText, RECIPE_FORMAT_TEMPLATE, ParsedRecipe } from '../lib/recipeParser';

interface Props {
  onParsed: (parsed: ParsedRecipe) => void;
}

export default function QuickImportPanel({ onParsed }: Props) {
  const [pasteText, setPasteText] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [copied, setCopied] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const doParse = (text: string) => {
    if (!text.trim()) return;
    onParsed(parseRecipeText(text));
    setShowAlert(true);
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = (ev.target?.result as string) ?? '';
      setPasteText(text);
      doParse(text);
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="rc-panel mb-4">
      <div className="rc-panel-head">
        Quick Import — Paste or Upload
      </div>
      <div className="rc-panel-body">
        <p className="rc-hint mb-2">
          Paste a recipe from anywhere, or upload a .txt file. We&apos;ll fill in the fields below automatically.
        </p>
        <div className="flex items-center justify-between gap-2 mb-2">
          <p className="rc-hint">
            Reformatting with an AI first? Copy the expected format below and give it to the AI.
          </p>
          <button
            type="button"
            onClick={() => copyToClipboard(RECIPE_FORMAT_TEMPLATE, setCopied)}
            className="rc-btn rc-btn-small shrink-0"
          >
            {copied ? 'Copied!' : 'Copy Format'}
          </button>
        </div>
        <textarea
          rows={6}
          value={pasteText}
          onChange={(e) => setPasteText(e.target.value)}
          placeholder="Paste recipe text here..."
          className="rc-input mb-2"
        />
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => doParse(pasteText)}
            className="rc-btn rc-btn-primary rc-btn-small"
          >
            Parse &amp; Fill Form
          </button>
          <label className="rc-btn rc-btn-small">
            Upload .txt file
            <input ref={fileRef} type="file" accept=".txt,.md" onChange={handleFile} className="hidden" />
          </label>
          <button
            type="button"
            onClick={() => {
              setPasteText('');
              setShowAlert(false);
            }}
            className="rc-muted underline"
          >
            Clear
          </button>
        </div>
        {showAlert && (
          <div className="rc-alert">
            Fields filled — review and save below.
          </div>
        )}
      </div>
    </div>
  );
}
