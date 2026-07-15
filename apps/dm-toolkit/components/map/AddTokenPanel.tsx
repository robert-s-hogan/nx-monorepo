import { useState } from 'react';
import { useStore } from '../../store/useStore';
import DiePicker from './DiePicker';
import { generateEnemyDraft } from '../../lib/rulesets/enemyGen';
import type { Character, CharacterStats } from '../../types';

const HIT_DICE = [6, 8, 10, 12];

const BLANK_STATS: CharacterStats = { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };

// Minimal NPC preset — only the fields a reusable monster stat block
// actually needs (name/hp/ac/speed). The rest are filled with harmless
// defaults since Character requires them, but they're PC-only mechanics
// (ability categories, stamina) an NPC has no use for.
function blankNpc(name: string, hp: number, ac: number, speed: number): Omit<Character, 'id' | 'random_skills'> {
  return {
    name,
    class: 'NPC',
    level: 1,
    background: '',
    stats: BLANK_STATS,
    armor_class: ac,
    speed,
    hit_points: { max: hp, current: hp },
    stamina: { max: 0, current: 0 },
    ability_categories: [],
    character_type: 'npc',
  };
}

interface AddTokenPanelProps {
  mapId: string;
}

export default function AddTokenPanel({ mapId }: AddTokenPanelProps) {
  const { characters, tokens, addToken, addCharacter, removeToken, spawnBossOnMap } = useStore();
  const [enemyName, setEnemyName] = useState('');
  const [enemyFlavor, setEnemyFlavor] = useState('');
  const [enemyHpDieSides, setEnemyHpDieSides] = useState(8);
  const [enemyHpRoll, setEnemyHpRoll] = useState<number | null>(null);
  const [enemyAc, setEnemyAc] = useState('12');
  const [selectedCharacterId, setSelectedCharacterId] = useState('');
  const [selectedNpcId, setSelectedNpcId] = useState('');
  const [npcSide, setNpcSide] = useState<'ally' | 'neutral' | 'enemy'>('enemy');
  const [selectedBossId, setSelectedBossId] = useState('');
  const [spawningBoss, setSpawningBoss] = useState(false);

  const [addingNpc, setAddingNpc] = useState(false);
  const [newNpcName, setNewNpcName] = useState('');
  const [newNpcHp, setNewNpcHp] = useState('10');
  const [newNpcAc, setNewNpcAc] = useState('12');
  const [newNpcSpeed, setNewNpcSpeed] = useState('30');

  const bossCharacters = characters.filter((c) => c.boss);
  const pcCharacters = characters.filter((c) => (c.character_type ?? 'pc') === 'pc');
  const npcCharacters = characters.filter((c) => c.character_type === 'npc');

  const handleAddCharacterToken = () => {
    const character = characters.find((c) => c.id === selectedCharacterId);
    if (!character) return;
    addToken(mapId, {
      character_id: character.id,
      label: character.name,
      x: 100 + Math.random() * 200,
      y: 100 + Math.random() * 200,
      hidden: false,
      hp_current: character.hit_points.current,
      hp_max: character.hit_points.max,
      armor_class: character.armor_class,
      side: 'ally',
    });
    setSelectedCharacterId('');
  };

  // The same reusable NPC (e.g. "Goblin") gets spawned as either side
  // depending on the session — side is chosen here, not fixed on the
  // character record.
  const handleAddNpcToken = () => {
    const character = characters.find((c) => c.id === selectedNpcId);
    if (!character) return;
    addToken(mapId, {
      character_id: character.id,
      label: character.name,
      x: 100 + Math.random() * 200,
      y: 100 + Math.random() * 200,
      hidden: false,
      hp_current: character.hit_points.current,
      hp_max: character.hit_points.max,
      armor_class: character.armor_class,
      side: npcSide,
    });
    setSelectedNpcId('');
  };

  const handleCreateNpc = async () => {
    const name = newNpcName.trim();
    if (!name) return;
    const hp = parseInt(newNpcHp, 10) || 10;
    const ac = parseInt(newNpcAc, 10) || 10;
    const speed = parseInt(newNpcSpeed, 10) || 30;
    await addCharacter(blankNpc(name, hp, ac, speed));
    setNewNpcName('');
    setNewNpcHp('10');
    setNewNpcAc('12');
    setNewNpcSpeed('30');
    setAddingNpc(false);
  };

  // Fills in a flavorful name + description — the HP die and its roll are
  // left alone since that's a manual step, same "every roll is manual"
  // convention as the attack roll.
  const handleGenerateEnemy = () => {
    const draft = generateEnemyDraft();
    setEnemyName(draft.name);
    setEnemyFlavor(draft.flavor);
  };

  const handleAddEnemyToken = () => {
    const name = enemyName.trim();
    if (!name || enemyHpRoll === null) return;
    const ac = parseInt(enemyAc, 10) || 10;
    addToken(mapId, {
      character_id: null,
      label: name,
      flavor_text: enemyFlavor.trim() || null,
      x: 100 + Math.random() * 200,
      y: 100 + Math.random() * 200,
      hidden: false,
      hp_current: enemyHpRoll,
      hp_max: enemyHpRoll,
      armor_class: ac,
      side: 'enemy',
    });
    setEnemyName('');
    setEnemyFlavor('');
    setEnemyHpRoll(null);
  };

  const handleSpawnBoss = async () => {
    if (!selectedBossId) return;
    setSpawningBoss(true);
    try {
      await spawnBossOnMap(mapId, selectedBossId);
      setSelectedBossId('');
    } finally {
      setSpawningBoss(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xs font-bold uppercase text-stone-500 tracking-wider mb-2">
          Add Token
        </h3>
        <div className="flex gap-2 mb-2">
          <select
            value={selectedCharacterId}
            onChange={(e) => setSelectedCharacterId(e.target.value)}
            className="flex-1 bg-stone-950 border border-stone-700 rounded-lg px-2 py-1.5 text-sm text-stone-300"
          >
            <option value="">Select character…</option>
            {pcCharacters.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleAddCharacterToken}
            disabled={!selectedCharacterId}
            className="px-3 py-1.5 bg-green-800 hover:bg-green-700 disabled:opacity-40 text-green-100 text-xs rounded-lg transition-colors"
          >
            Add
          </button>
        </div>

        {/* NPCs — reused across sessions as either side since there are
            only ~15-20 physical miniatures to go around. */}
        <div className="flex gap-2 mb-2">
          <select
            value={selectedNpcId}
            onChange={(e) => setSelectedNpcId(e.target.value)}
            className="flex-1 bg-stone-950 border border-stone-700 rounded-lg px-2 py-1.5 text-sm text-stone-300"
          >
            <option value="">Select NPC…</option>
            {npcCharacters.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} ({c.hit_points.max} HP, AC {c.armor_class})
              </option>
            ))}
          </select>
          <div className="flex rounded-lg border border-stone-700 overflow-hidden shrink-0">
            <button
              type="button"
              onClick={() => setNpcSide('ally')}
              className={`px-2 py-1.5 text-xs transition-colors ${
                npcSide === 'ally' ? 'bg-green-800 text-green-100' : 'bg-stone-950 text-stone-500 hover:text-stone-300'
              }`}
            >
              Ally
            </button>
            <button
              type="button"
              onClick={() => setNpcSide('neutral')}
              className={`px-2 py-1.5 text-xs transition-colors ${
                npcSide === 'neutral' ? 'bg-violet-800 text-violet-100' : 'bg-stone-950 text-stone-500 hover:text-stone-300'
              }`}
            >
              Neutral
            </button>
            <button
              type="button"
              onClick={() => setNpcSide('enemy')}
              className={`px-2 py-1.5 text-xs transition-colors ${
                npcSide === 'enemy' ? 'bg-red-900 text-red-100' : 'bg-stone-950 text-stone-500 hover:text-stone-300'
              }`}
            >
              Enemy
            </button>
          </div>
          <button
            onClick={handleAddNpcToken}
            disabled={!selectedNpcId}
            className="px-3 py-1.5 bg-stone-700 hover:bg-stone-600 disabled:opacity-40 text-stone-200 text-xs rounded-lg transition-colors"
          >
            Add
          </button>
        </div>

        {addingNpc ? (
          <div className="flex gap-2 mb-2 bg-stone-900 border border-stone-700 rounded-lg p-2">
            <input
              value={newNpcName}
              onChange={(e) => setNewNpcName(e.target.value)}
              placeholder="Name"
              autoFocus
              className="flex-1 bg-stone-950 border border-stone-700 rounded-lg px-2 py-1.5 text-sm text-stone-300 placeholder:text-stone-600"
            />
            <input
              type="number"
              value={newNpcHp}
              onChange={(e) => setNewNpcHp(e.target.value)}
              title="HP"
              className="w-14 bg-stone-950 border border-stone-700 rounded-lg px-2 py-1.5 text-sm text-stone-300"
            />
            <input
              type="number"
              value={newNpcAc}
              onChange={(e) => setNewNpcAc(e.target.value)}
              title="AC"
              className="w-14 bg-stone-950 border border-stone-700 rounded-lg px-2 py-1.5 text-sm text-stone-300"
            />
            <input
              type="number"
              step={5}
              value={newNpcSpeed}
              onChange={(e) => setNewNpcSpeed(e.target.value)}
              title="Speed (ft)"
              className="w-14 bg-stone-950 border border-stone-700 rounded-lg px-2 py-1.5 text-sm text-stone-300"
            />
            <button
              onClick={handleCreateNpc}
              disabled={!newNpcName.trim()}
              className="px-3 py-1.5 bg-green-800 hover:bg-green-700 disabled:opacity-40 text-green-100 text-xs rounded-lg transition-colors"
            >
              Save
            </button>
            <button
              onClick={() => setAddingNpc(false)}
              className="px-2 py-1.5 bg-stone-800 border border-stone-700 text-stone-400 text-xs rounded-lg transition-colors"
            >
              ✕
            </button>
          </div>
        ) : (
          <button
            onClick={() => setAddingNpc(true)}
            className="w-full text-xs py-1 mb-2 border border-dashed border-stone-600 hover:border-amber-700 text-stone-600 hover:text-amber-500 rounded-lg transition-colors"
          >
            + New reusable NPC
          </button>
        )}

        <div className="space-y-1.5">
          <div className="flex gap-2">
            <input
              value={enemyName}
              onChange={(e) => setEnemyName(e.target.value)}
              placeholder="One-off enemy name…"
              className="flex-1 bg-stone-950 border border-stone-700 rounded-lg px-2 py-1.5 text-sm text-stone-300 placeholder:text-stone-600"
            />
            <button
              type="button"
              onClick={handleGenerateEnemy}
              title="Generate a random name + flavor"
              className="px-2.5 py-1.5 bg-stone-700 hover:bg-stone-600 text-stone-200 text-xs rounded-lg transition-colors"
            >
              🎲
            </button>
          </div>
          {enemyFlavor && <p className="text-xs text-stone-500 italic">{enemyFlavor}</p>}
          <div className="flex gap-2 items-center">
            <DiePicker sides={enemyHpDieSides} value={enemyHpRoll} onSelect={setEnemyHpRoll} />
            <div className="flex gap-1">
              {HIT_DICE.map((sides) => (
                <button
                  key={sides}
                  type="button"
                  onClick={() => {
                    setEnemyHpDieSides(sides);
                    setEnemyHpRoll(null);
                  }}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors ${
                    enemyHpDieSides === sides
                      ? 'bg-stone-700 text-stone-200'
                      : 'text-stone-600 hover:text-stone-400'
                  }`}
                >
                  d{sides}
                </button>
              ))}
            </div>
            <span className="text-xs text-stone-500">
              {enemyHpRoll !== null ? `${enemyHpRoll} HP` : 'roll HP'}
            </span>
            <input
              type="number"
              value={enemyAc}
              onChange={(e) => setEnemyAc(e.target.value)}
              title="AC"
              className="w-14 ml-auto bg-stone-950 border border-stone-700 rounded-lg px-2 py-1.5 text-sm text-stone-300"
            />
            <button
              onClick={handleAddEnemyToken}
              disabled={!enemyName.trim() || enemyHpRoll === null}
              className="px-3 py-1.5 bg-red-900 hover:bg-red-800 disabled:opacity-40 text-red-100 text-xs rounded-lg transition-colors"
            >
              Add
            </button>
          </div>
        </div>

        {bossCharacters.length > 0 && (
          <div className="flex gap-2 mt-2">
            <select
              value={selectedBossId}
              onChange={(e) => setSelectedBossId(e.target.value)}
              className="flex-1 bg-stone-950 border border-amber-800 rounded-lg px-2 py-1.5 text-sm text-stone-300"
            >
              <option value="">Spawn boss…</option>
              {bossCharacters.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} (scales from party lvl {c.boss!.base_party_level})
                </option>
              ))}
            </select>
            <button
              onClick={handleSpawnBoss}
              disabled={!selectedBossId || spawningBoss}
              className="px-3 py-1.5 bg-amber-800 hover:bg-amber-700 disabled:opacity-40 text-amber-100 text-xs rounded-lg transition-colors"
            >
              {spawningBoss ? 'Spawning…' : 'Spawn'}
            </button>
          </div>
        )}
      </div>

      {tokens.length > 0 && (
        <div>
          <h3 className="text-xs font-bold uppercase text-stone-500 tracking-wider mb-2">
            Tokens
          </h3>
          <div className="space-y-1">
            {tokens.map((t) => (
              <div
                key={t.id}
                className="flex items-center justify-between px-2 py-1.5 bg-stone-900 border border-stone-700 rounded-lg text-sm text-stone-300"
              >
                <span>
                  <span
                    className={
                      t.side === 'ally'
                        ? 'text-green-400'
                        : t.side === 'neutral'
                        ? 'text-violet-400'
                        : 'text-red-400'
                    }
                  >
                    ●
                  </span>{' '}
                  {t.label} ({t.hp_current}/{t.hp_max} HP, AC {t.armor_class})
                  {t.flavor_text && <span className="block text-xs text-stone-500 italic">{t.flavor_text}</span>}
                </span>
                <button
                  onClick={() => removeToken(mapId, t.id)}
                  className="text-stone-600 hover:text-red-400 transition-colors"
                  title="Remove token"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
