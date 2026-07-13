import { useState } from 'react';
import { useStore } from '../../store/useStore';

interface AttackControlsProps {
  mapId: string;
  selectedAttackerId: string | null;
  selectedDefenderId: string | null;
  onClearSelection: () => void;
}

export default function AttackControls({
  mapId,
  selectedAttackerId,
  selectedDefenderId,
  onClearSelection,
}: AttackControlsProps) {
  const { characters, tokens, addToken, removeToken, attack, spawnBossOnMap } = useStore();
  const [enemyName, setEnemyName] = useState('');
  const [enemyHp, setEnemyHp] = useState('10');
  const [enemyAc, setEnemyAc] = useState('12');
  const [selectedCharacterId, setSelectedCharacterId] = useState('');
  const [selectedBossId, setSelectedBossId] = useState('');
  const [spawningBoss, setSpawningBoss] = useState(false);
  const [attacking, setAttacking] = useState(false);

  const bossCharacters = characters.filter((c) => c.boss);

  const attackerToken = tokens.find((t) => t.id === selectedAttackerId) ?? null;
  const defenderToken = tokens.find((t) => t.id === selectedDefenderId) ?? null;

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
    });
    setSelectedCharacterId('');
  };

  const handleAddEnemyToken = () => {
    const name = enemyName.trim();
    if (!name) return;
    const hp = parseInt(enemyHp, 10) || 10;
    const ac = parseInt(enemyAc, 10) || 10;
    addToken(mapId, {
      character_id: null,
      label: name,
      x: 100 + Math.random() * 200,
      y: 100 + Math.random() * 200,
      hidden: false,
      hp_current: hp,
      hp_max: hp,
      armor_class: ac,
    });
    setEnemyName('');
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

  const handleAttack = async () => {
    if (!selectedAttackerId || !selectedDefenderId) return;
    setAttacking(true);
    try {
      await attack(mapId, selectedAttackerId, selectedDefenderId);
      onClearSelection();
    } finally {
      setAttacking(false);
    }
  };

  return (
    <div className="bg-stone-800 border border-stone-700 rounded-xl p-5 space-y-4">
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
            {characters.map((c) => (
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
        <div className="flex gap-2">
          <input
            value={enemyName}
            onChange={(e) => setEnemyName(e.target.value)}
            placeholder="Enemy name…"
            className="flex-1 bg-stone-950 border border-stone-700 rounded-lg px-2 py-1.5 text-sm text-stone-300 placeholder:text-stone-600"
          />
          <input
            type="number"
            value={enemyHp}
            onChange={(e) => setEnemyHp(e.target.value)}
            title="HP"
            className="w-16 bg-stone-950 border border-stone-700 rounded-lg px-2 py-1.5 text-sm text-stone-300"
          />
          <input
            type="number"
            value={enemyAc}
            onChange={(e) => setEnemyAc(e.target.value)}
            title="AC"
            className="w-16 bg-stone-950 border border-stone-700 rounded-lg px-2 py-1.5 text-sm text-stone-300"
          />
          <button
            onClick={handleAddEnemyToken}
            disabled={!enemyName.trim()}
            className="px-3 py-1.5 bg-red-900 hover:bg-red-800 disabled:opacity-40 text-red-100 text-xs rounded-lg transition-colors"
          >
            Add
          </button>
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

      <div>
        <h3 className="text-xs font-bold uppercase text-stone-500 tracking-wider mb-2">Attack</h3>
        <div className="text-sm text-stone-400 space-y-1 mb-2">
          <p>
            Attacker:{' '}
            <span className="text-amber-400">{attackerToken?.label ?? 'click a token'}</span>
          </p>
          <p>
            Defender:{' '}
            <span className="text-red-400">{defenderToken?.label ?? 'click a token'}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleAttack}
            disabled={!attackerToken || !defenderToken || attacking}
            className="flex-1 px-3 py-2 bg-red-800 hover:bg-red-700 disabled:opacity-40 text-red-100 text-sm font-bold rounded-lg transition-colors"
          >
            {attacking ? 'Resolving…' : 'Attack'}
          </button>
          <button
            onClick={onClearSelection}
            className="px-3 py-2 bg-stone-900 border border-stone-700 text-stone-400 text-sm rounded-lg transition-colors hover:border-stone-600"
          >
            Clear
          </button>
        </div>
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
                  {t.label} ({t.hp_current}/{t.hp_max} HP, AC {t.armor_class})
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
