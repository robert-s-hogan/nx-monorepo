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
    <div className="mb-4 border border-blue-600 rounded">
      <div className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-t">
        Quick Import — Paste or Upload
      </div>
      <div className="p-4">
        <p className="text-gray-500 text-sm mb-2">
          Paste a recipe from anywhere, or upload a .txt file. We&apos;ll fill in the fields below automatically.
        </p>
        <div className="flex items-center justify-between gap-2 mb-2">
          <p className="text-gray-500 text-sm">
            Reformatting with an AI first? Copy the expected format below and give it to the AI.
          </p>
          <button
            type="button"
            onClick={() => copyToClipboard(RECIPE_FORMAT_TEMPLATE, setCopied)}
            className="shrink-0 border border-gray-300 hover:bg-gray-100 px-3 py-1.5 rounded text-sm"
          >
            {copied ? 'Copied!' : 'Copy Format'}
          </button>
        </div>
        <textarea
          rows={6}
          value={pasteText}
          onChange={(e) => setPasteText(e.target.value)}
          placeholder="Paste recipe text here..."
          className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
        />
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => doParse(pasteText)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded"
          >
            Parse &amp; Fill Form
          </button>
          <label className="border border-gray-300 hover:bg-gray-100 px-3 py-1.5 rounded cursor-pointer">
            Upload .txt file
            <input ref={fileRef} type="file" accept=".txt,.md" onChange={handleFile} className="hidden" />
          </label>
          <button
            type="button"
            onClick={() => {
              setPasteText('');
              setShowAlert(false);
            }}
            className="text-gray-500 hover:text-gray-700 underline"
          >
            Clear
          </button>
        </div>
        {showAlert && (
          <div className="bg-green-100 text-green-800 rounded px-3 py-2 mt-2">
            Fields filled — review and save below.
          </div>
        )}
      </div>
    </div>
  );
}
