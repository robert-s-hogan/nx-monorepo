import { useState } from 'react';
import type { ReactNode } from 'react';
import type { Character, RandomSkill } from '../types';
import { useStore } from '../store/useStore';
import { statModifier } from '../lib/dice';
import randomSkillsData from '../data/random_skills.json';

interface Props {
  character: Character;
  onClose: () => void;
}

const STATS = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;

// Design tokens — used in inline styles so they survive print rendering
const T = {
  parchment: '#f2ece0',
  parchmentDark: '#e8dfc9',
  green: '#3a4b20',
  greenMid: '#4e6329',
  greenLight: 'rgba(58,75,32,0.08)',
  ink: '#1c1917',
  inkMid: '#44403c',
  inkLight: '#78716c',
  border: 'rgba(87,83,78,0.28)',
  borderStrong: 'rgba(87,83,78,0.5)',
  white40: 'rgba(255,255,255,0.4)',
  white60: 'rgba(255,255,255,0.6)',
};

function Label({ children }: { children: ReactNode }) {
  return (
    <div style={{
      fontSize: '8px', fontWeight: 700, textTransform: 'uppercase',
      letterSpacing: '0.12em', color: T.green,
      borderBottom: `1.5px solid ${T.greenMid}`,
      paddingBottom: '2px', marginBottom: '7px',
      fontFamily: 'Georgia, serif',
    }}>
      {children}
    </div>
  );
}

export default function CharacterSheetModal({ character, onClose }: Props) {
  const { updateCharacter } = useStore();
  const [urlInput, setUrlInput] = useState(character.image_url ?? '');
  const [imgError, setImgError] = useState(false);

  const handleUrlBlur = () => {
    const trimmed = urlInput.trim();
    if (trimmed !== (character.image_url ?? '')) {
      updateCharacter(character.id, { image_url: trimmed || undefined });
    }
  };
  const handleUrlChange = (val: string) => { setUrlInput(val); setImgError(false); };
  const imageUrl = urlInput.trim();

  // Effective computed values from status effects
  const statusEffects = character.status_effects ?? [];
  const effectiveAC = statusEffects.reduce((a, s) => a + (s.modifiers?.ac ?? 0), character.armor_class);
  const tempHP = statusEffects.reduce((a, s) => a + (s.modifiers?.temp_hp ?? 0), 0);
  const statBonus = (stat: (typeof STATS)[number]) =>
    statusEffects.reduce((a, s) => a + (s.modifiers?.[stat] ?? 0), 0);

  const STATUS_COLOR = {
    positive: { bg: '#14532d', border: '#166534', text: '#86efac' },
    negative: { bg: '#450a0a', border: '#7f1d1d', text: '#fca5a5' },
    neutral:  { bg: '#292524', border: '#44403c', text: '#d6d3d1' },
  } as const;

  return (
    <>
      <style>{`
        /* Force all backgrounds + colors to survive print */
        #char-print-area, #char-print-area * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
        @media print {
          .no-print { display: none !important; }
          body { visibility: hidden; }
          #char-print-area {
            visibility: visible;
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
          }
          #char-print-area * { visibility: visible; }
          @page { size: landscape; margin: 0.35in; }
        }
      `}</style>

      <div
        className="fixed inset-0 z-50 bg-black/70 flex items-start justify-center overflow-y-auto py-8 px-4"
        onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <div className="w-full max-w-5xl">

          {/* ── TOOLBAR ─────────────────────────────────────────────────────── */}
          <div className="no-print flex items-center gap-3 mb-2">
            <input
              type="url"
              placeholder="Portrait URL — paste a direct image link (e.g. https://i.imgur.com/abc.jpg)"
              value={urlInput}
              onChange={(e) => handleUrlChange(e.target.value)}
              onBlur={handleUrlBlur}
              className="flex-1 px-3 py-2 text-sm border border-stone-600 rounded-lg bg-stone-800 text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
            />
            <button
              onClick={() => window.print()}
              className="px-4 py-2 text-sm font-semibold bg-stone-700 text-stone-100 rounded-lg hover:bg-stone-600 border border-stone-500 whitespace-nowrap"
            >
              Print Sheet
            </button>
            <button onClick={onClose} className="text-stone-400 hover:text-white text-xl leading-none px-1">✕</button>
          </div>
          <p className="no-print text-xs text-stone-600 mb-3 pl-1">
            In the print dialog → More settings → uncheck &quot;Headers and footers&quot; to remove the date and URL.
          </p>

          {/* ── PRINTABLE SHEET ─────────────────────────────────────────────── */}
          <div id="char-print-area" style={{ background: T.parchment, borderRadius: '8px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.6)', fontFamily: 'Georgia, serif', color: T.ink }}>

            {/* ── HEADER ── */}
            <div style={{ background: T.green, padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ color: '#f5f5f4', fontSize: '22px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', lineHeight: 1.1 }}>
                  {character.name}
                </div>
                <div style={{ color: '#a8a29e', fontSize: '12px', fontStyle: 'italic', marginTop: '3px' }}>
                  {character.class} — Level {character.level}
                </div>
              </div>

              {/* Stat pills in header */}
              <div style={{ display: 'flex', gap: '10px' }}>
                {[
                  { label: 'Armor Class', value: String(effectiveAC), sub: effectiveAC !== character.armor_class ? `base ${character.armor_class}` : null },
                  { label: 'Hit Points', value: `${character.hit_points.current}`, sub2: `/${character.hit_points.max}`, tempHp: tempHP > 0 ? `+${tempHP} temp` : null },
                ].map((item) => (
                  <div key={item.label} style={{ textAlign: 'center', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)', borderRadius: '6px', padding: '7px 16px', minWidth: '70px' }}>
                    <div style={{ color: '#a8a29e', fontSize: '8.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>{item.label}</div>
                    <div style={{ color: '#f5f5f4', fontSize: '26px', fontWeight: 700, lineHeight: 1 }}>
                      {item.value}
                      {'sub2' in item && item.sub2 && <span style={{ color: '#a8a29e', fontSize: '15px' }}>{item.sub2}</span>}
                    </div>
                    {item.sub && <div style={{ color: '#a8a29e', fontSize: '8px', marginTop: '1px' }}>{item.sub}</div>}
                    {item.tempHp && <div style={{ color: '#86efac', fontSize: '8px', fontWeight: 700, marginTop: '1px' }}>{item.tempHp}</div>}
                  </div>
                ))}

                {/* Stamina */}
                <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)', borderRadius: '6px', padding: '7px 14px' }}>
                  <div style={{ color: '#a8a29e', fontSize: '8.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Stamina</div>
                  <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '72px' }}>
                    {Array.from({ length: character.stamina.max }).map((_, i) => (
                      <div key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', background: i < character.stamina.current ? '#f5f5f4' : 'transparent', border: '1.5px solid rgba(245,245,244,0.5)', flexShrink: 0 }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── BODY ── */}
            <div style={{ display: 'flex', minHeight: '480px' }}>

              {/* Left column: portrait + background + notes */}
              <div style={{ width: '175px', flexShrink: 0, borderRight: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column' }}>

                {/* Portrait */}
                <div style={{ height: '185px', background: T.parchmentDark, overflow: 'hidden', borderBottom: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  {imageUrl && !imgError ? (
                    <img src={imageUrl} alt={character.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={() => setImgError(true)} />
                  ) : imageUrl && imgError ? (
                    <div style={{ textAlign: 'center', padding: '10px' }}>
                      <div style={{ color: T.inkLight, fontSize: '10px' }}>Image unavailable</div>
                      <div style={{ color: T.inkLight, fontSize: '8.5px', marginTop: '4px', opacity: 0.7 }}>Use a direct .jpg / .png link</div>
                    </div>
                  ) : (
                    <div style={{ color: T.border, fontSize: '52px', userSelect: 'none' }}>⚔</div>
                  )}
                </div>

                {/* Background */}
                <div style={{ padding: '10px 10px 0', flex: character.notes ? 0 : 1 }}>
                  <Label>Background</Label>
                  <p style={{ fontSize: '9.5px', color: T.inkMid, fontStyle: 'italic', lineHeight: 1.55, margin: 0 }}>
                    {`"${character.background}"`}
                  </p>
                </div>

                {/* Notes */}
                {character.notes && (
                  <div style={{ padding: '10px', flex: 1 }}>
                    <Label>Notes</Label>
                    <p style={{ fontSize: '9.5px', color: T.inkMid, lineHeight: 1.55, margin: 0, whiteSpace: 'pre-wrap' }}>
                      {character.notes}
                    </p>
                  </div>
                )}
              </div>

              {/* Right section */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>

                {/* ── STAT BOXES (D&D style) ── */}
                <div style={{ display: 'flex', gap: '8px', padding: '12px 16px', borderBottom: `1px solid ${T.border}`, background: T.greenLight, justifyContent: 'center' }}>
                  {STATS.map((stat) => {
                    const bonus = statBonus(stat);
                    const effectiveMod = statModifier(character.stats[stat] + bonus);
                    const baseMod = statModifier(character.stats[stat]);
                    const buffed = bonus > 0;
                    const nerfed = bonus < 0;
                    return (
                      <div key={stat} style={{
                        textAlign: 'center', flex: 1, maxWidth: '82px',
                        border: `1.5px solid ${nerfed ? '#991b1b' : buffed ? '#166534' : T.green}`,
                        borderRadius: '6px',
                        background: nerfed ? 'rgba(69,10,10,0.06)' : buffed ? 'rgba(20,83,45,0.06)' : T.white40,
                        padding: '5px 6px',
                      }}>
                        <div style={{ fontSize: '8px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: T.green, marginBottom: '2px' }}>{stat}</div>
                        {/* Modifier — prominent */}
                        <div style={{ fontSize: '24px', fontWeight: 700, color: nerfed ? '#dc2626' : buffed ? '#16a34a' : T.ink, lineHeight: 1 }}>
                          {effectiveMod}
                        </div>
                        {/* Raw stat */}
                        <div style={{ borderTop: `1px solid ${T.border}`, marginTop: '4px', paddingTop: '3px', fontSize: '12px', color: T.inkLight }}>
                          {character.stats[stat]}
                        </div>
                        {bonus !== 0 && baseMod !== effectiveMod && (
                          <div style={{ fontSize: '8px', color: T.inkLight, marginTop: '1px' }}>was {baseMod}</div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* ── ABILITY CATEGORIES ── */}
                <div style={{ flex: 1, padding: '12px 16px' }}>
                  <Label>Abilities</Label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                    {character.ability_categories.map((cat, ci) => (
                      <div key={ci} style={{
                        border: `1px solid ${T.border}`,
                        borderTop: `2.5px solid ${T.green}`,
                        borderRadius: '4px',
                        padding: '7px 8px',
                        background: T.white40,
                      }}>
                        {/* Category header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3px', gap: '4px' }}>
                          <div style={{ fontSize: '9.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: T.green, lineHeight: 1.2 }}>
                            {cat.name}
                          </div>
                          {/* XP pips */}
                          <div style={{ display: 'flex', gap: '2px', flexShrink: 0, marginTop: '1px' }}>
                            {Array.from({ length: cat.xp.max }).map((_, i) => (
                              <div key={i} style={{ width: '7px', height: '7px', borderRadius: '50%', background: i < cat.xp.current ? T.green : 'transparent', border: `1px solid ${T.greenMid}` }} />
                            ))}
                          </div>
                        </div>
                        <div style={{ fontSize: '8.5px', fontStyle: 'italic', color: T.inkLight, marginBottom: '5px' }}>
                          {`"${cat.flavor}"`}
                        </div>
                        {/* Abilities */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          {cat.abilities.map((ability) => (
                            <div key={ability.name} style={{ fontSize: '9px', lineHeight: 1.45 }}>
                              <span style={{ fontWeight: 700, color: T.ink }}>{ability.name}:</span>{' '}
                              <span style={{ color: T.inkMid }}>{ability.description}</span>
                              {ability.stamina_cost > 0 && (
                                <span style={{ color: '#92400e', fontWeight: 700, marginLeft: '3px' }}>
                                  [{ability.stamina_cost} ST]
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── FOOTER: status + random skills ── */}
                {(statusEffects.length > 0 || character.random_skills.length > 0) && (
                  <div style={{ borderTop: `1px solid ${T.border}`, padding: '8px 16px', display: 'flex', gap: '20px', background: T.greenLight }}>

                    {statusEffects.length > 0 && (
                      <div>
                        <Label>Status</Label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                          {statusEffects.map((s) => {
                            const c = STATUS_COLOR[s.type];
                            const mods = Object.entries(s.modifiers ?? {})
                              .filter(([, v]) => v !== 0)
                              .map(([k, v]) => `${k === 'temp_hp' ? 'THP' : k.toUpperCase()} ${(v as number) > 0 ? '+' : ''}${v}`)
                              .join(' ');
                            return (
                              <div key={s.id} style={{ background: c.bg, border: `1px solid ${c.border}`, borderRadius: '4px', padding: '2px 8px', fontSize: '9px' }}>
                                <span style={{ color: c.text, fontWeight: 700 }}>{s.name}</span>
                                {mods && <span style={{ color: c.text, opacity: 0.7, marginLeft: '5px' }}>{mods}</span>}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {character.random_skills.length > 0 && (
                      <div style={{ flex: 1 }}>
                        <Label>Random Skills</Label>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          {character.random_skills.map((assigned) => {
                            const skill = (randomSkillsData.skills as RandomSkill[]).find((s) => s.id === assigned.skill_id);
                            return skill ? (
                              <div key={assigned.skill_id} style={{ fontSize: '9px', lineHeight: 1.45 }}>
                                <span style={{ fontWeight: 700, color: T.ink }}>{skill.name}:</span>{' '}
                                <span style={{ color: T.inkMid }}>{skill.effect}</span>
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
