import { useEffect, useRef, useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import type { DraftPlayer } from '../../lib/server/draft';
import type { CustomTag } from '../../lib/tags';
import { useCustomTags, createTag } from '../../hooks/useCustomTags';
import { TAG_ICONS, TAG_ICON_KEYS } from '../../lib/tagIcons';
import { FiHelpCircle } from 'react-icons/fi';

export interface PlayerTagPickerProps {
  player: DraftPlayer;
  canEdit: boolean;
  onToggleTag: (player: DraftPlayer, tagId: number) => void;
}

// Plain object indexing (not a function call) — calling a function to
// resolve a component reference inside render trips the "no components
// created during render" lint rule even when it's just a lookup.
const TagGlyph = ({ tag, size = 13 }: { tag: CustomTag; size?: number }) => {
  const Icon = TAG_ICONS[tag.icon] ?? FiHelpCircle;
  return <Icon size={size} className={tag.color} />;
};

export const PlayerTagPicker = ({
  player,
  canEdit,
  onToggleTag,
}: PlayerTagPickerProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState('');
  const [newIcon, setNewIcon] = useState<string | null>(null);
  const [creatingError, setCreatingError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const { tags: library, refresh } = useCustomTags();
  const activeTagIds = new Set(player.tags.map((t) => t.id));

  useEffect(() => {
    if (!menuOpen) return;
    function onClickAway(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setCreating(false);
      }
    }
    document.addEventListener('mousedown', onClickAway);
    return () => document.removeEventListener('mousedown', onClickAway);
  }, [menuOpen]);

  async function submitNewTag() {
    if (!newName.trim() || !newIcon) return;
    setSaving(true);
    setCreatingError(null);
    try {
      const result = await createTag(newName.trim(), newIcon);
      if ('error' in result) {
        setCreatingError(result.error);
        return;
      }
      await refresh();
      onToggleTag(player, result.id);
      setCreating(false);
      setNewName('');
      setNewIcon(null);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div ref={rootRef} className="relative flex flex-wrap items-center justify-center gap-1.5">
      {player.tags.map((tag) => (
        <button
          key={tag.id}
          type="button"
          disabled={!canEdit}
          onClick={() => onToggleTag(player, tag.id)}
          title={tag.name}
          className={`rounded p-0.5 transition ${canEdit ? 'hover:bg-hover-color' : 'cursor-default'}`}
        >
          <TagGlyph tag={tag} />
        </button>
      ))}

      {canEdit && (
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          title="Add or edit tags"
          className={`flex size-5 items-center justify-center rounded-full border border-border-color text-xs font-semibold text-text-color opacity-0 transition group-hover:opacity-70 hover:bg-hover-color hover:opacity-100 focus:opacity-100 focus-visible:opacity-100 ${
            menuOpen ? 'opacity-100' : ''
          }`}
        >
          +
        </button>
      )}

      {menuOpen && (
        <div className="absolute left-1/2 top-full z-20 mt-1 w-60 -translate-x-1/2 rounded-lg border border-border-color bg-surface-color p-2 text-left shadow-lg">
          {library.length === 0 && !creating && (
            <p className="px-1.5 py-1 text-xs text-text-color opacity-60">
              No tags yet — create one below.
            </p>
          )}

          {library.map((tag) => {
            const active = activeTagIds.has(tag.id);
            return (
              <button
                key={tag.id}
                type="button"
                onClick={() => onToggleTag(player, tag.id)}
                className="flex w-full items-center gap-2 rounded px-1.5 py-1 text-left text-xs transition hover:bg-hover-color"
              >
                <TagGlyph tag={tag} />
                <span className="flex-1 text-text-color">{tag.name}</span>
                {active && <span className="text-success-color">✓</span>}
              </button>
            );
          })}

          <div className="mt-1 border-t border-border-color pt-1">
            {!creating ? (
              <button
                type="button"
                onClick={() => setCreating(true)}
                className="flex w-full items-center gap-2 rounded px-1.5 py-1 text-left text-xs text-text-color opacity-70 transition hover:bg-hover-color hover:opacity-100"
              >
                <FiPlus size={13} />
                New tag
              </button>
            ) : (
              <div className="space-y-1.5 px-1.5 py-1">
                {creatingError && (
                  <p className="text-[10px] text-error-color">{creatingError}</p>
                )}
                <input
                  autoFocus
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Tag name"
                  className="w-full rounded border border-border-color bg-bg-color px-2 py-1 text-xs text-text-color focus:outline-none"
                />
                <div className="grid grid-cols-6 gap-1">
                  {TAG_ICON_KEYS.map((key) => {
                    const Icon = TAG_ICONS[key];
                    const selected = newIcon === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setNewIcon(key)}
                        className={`flex items-center justify-center rounded p-1 transition ${
                          selected
                            ? 'bg-primary text-(--text-on-primary-color)'
                            : 'text-text-color opacity-60 hover:bg-hover-color hover:opacity-100'
                        }`}
                      >
                        <Icon size={13} />
                      </button>
                    );
                  })}
                </div>
                <button
                  type="button"
                  onClick={submitNewTag}
                  disabled={saving || !newName.trim() || !newIcon}
                  className="w-full rounded bg-primary px-2 py-1 text-xs font-semibold text-(--text-on-primary-color) transition hover:bg-hover-color disabled:opacity-40"
                >
                  {saving ? 'Saving…' : 'Create & apply'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
