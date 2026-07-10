import Link from 'next/link';
import { useStore } from '../store/useStore';
import DMToolkitLayout from '../components/DMToolkitLayout';
import { getLevelDetailsFor } from '../lib/progression';

const phases = [
  {
    phase: 1,
    label: 'Core Tool',
    status: 'active',
    items: ['JSON character import', 'Digital character cards', 'HP / Stamina / XP tracking', 'Rule-based random skills', 'Session management'],
  },
  {
    phase: 2,
    label: 'Multiplayer',
    status: 'planned',
    items: ['Realtime backend', 'Player login', 'Real-time session sync', 'Shared dice rolls'],
  },
  {
    phase: 3,
    label: 'DM Map',
    status: 'planned',
    items: ['React Konva canvas', 'Enemies, items, traps, landmarks', 'DM-controlled fog of war', 'Click-to-reveal entities'],
  },
];

function Home() {
  const { characters, sessions, campaigns, activeCampaignId } = useStore();

  const activeCampaign = campaigns.find((c) => c.id === activeCampaignId) ?? null;
  const activeCampaignLevel = activeCampaign
    ? getLevelDetailsFor(activeCampaign.progression_system, activeCampaign.current_xp).level
    : null;

  return (
    <DMToolkitLayout>
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        {/* Hero */}
        <div>
          <h1 className="text-4xl font-bold text-stone-100 tracking-tight">
            DM Toolkit
          </h1>
          <p className="mt-2 text-stone-400 text-lg">
            Digital cards, random events, and session control — no data entry required.
          </p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-stone-800 border border-stone-700 rounded-xl p-5">
            <p className="text-3xl font-bold text-stone-100">{characters.length}</p>
            <p className="text-stone-500 text-sm mt-1">Characters</p>
          </div>
          <div className="bg-stone-800 border border-stone-700 rounded-xl p-5">
            <p className="text-3xl font-bold text-stone-100">{sessions.length}</p>
            <p className="text-stone-500 text-sm mt-1">Sessions</p>
          </div>
          <div className="bg-stone-800 border border-stone-700 rounded-xl p-5">
            <p className="text-3xl font-bold text-stone-100">
              {activeCampaignLevel ?? '—'}
            </p>
            <p className="text-stone-500 text-sm mt-1">
              {activeCampaign ? `${activeCampaign.name} Level` : 'No active campaign'}
            </p>
          </div>
        </div>

        {/* Action cards */}
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="/characters"
            className="bg-stone-800 hover:bg-stone-750 border border-stone-700 hover:border-green-700 rounded-xl p-6 transition-all group block"
          >
            <div className="text-2xl mb-3">📋</div>
            <h2 className="font-bold text-stone-100 group-hover:text-green-400 transition-colors">
              Manage Characters
            </h2>
            <p className="text-stone-500 text-sm mt-1">
              Import JSON, view all characters, edit stats.
            </p>
          </Link>

          <Link
            href="/session"
            className="bg-stone-800 hover:bg-stone-750 border border-stone-700 hover:border-green-700 rounded-xl p-6 transition-all group block"
          >
            <div className="text-2xl mb-3">⚔️</div>
            <h2 className="font-bold text-stone-100 group-hover:text-green-400 transition-colors">
              Run Session
            </h2>
            <p className="text-stone-500 text-sm mt-1">
              Select active party, roll dice, trigger random events.
            </p>
          </Link>
        </div>

        {/* Roadmap */}
        <div>
          <h2 className="text-sm font-bold uppercase text-stone-500 tracking-wider mb-4">Roadmap</h2>
          <div className="grid grid-cols-3 gap-4">
            {phases.map((p) => (
              <div
                key={p.phase}
                className={`rounded-xl p-4 border ${
                  p.status === 'active'
                    ? 'bg-green-950 border-green-800'
                    : 'bg-stone-800 border-stone-700 opacity-60'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      p.status === 'active'
                        ? 'bg-green-700 text-green-100'
                        : 'bg-stone-700 text-stone-400'
                    }`}
                  >
                    Phase {p.phase}
                  </span>
                  <span className="text-sm font-semibold text-stone-200">{p.label}</span>
                </div>
                <ul className="space-y-1">
                  {p.items.map((item) => (
                    <li key={item} className="text-xs text-stone-400 flex items-start gap-1.5">
                      <span className={p.status === 'active' ? 'text-green-500' : 'text-stone-600'}>
                        {p.status === 'active' ? '✓' : '○'}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DMToolkitLayout>
  );
}

// Public: pure display, no write actions on this page.
Home.isPublic = true;

export default Home;
