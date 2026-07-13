import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useAuth } from '@with-nx/auth';
import { useStore } from '../store/useStore';
import DMToolkitLayout from '../components/DMToolkitLayout';
import AttackControls from '../components/map/AttackControls';
import CombatLog from '../components/map/CombatLog';
import StructurePanel from '../components/map/StructurePanel';
import StructureEventLog from '../components/map/StructureEventLog';

// react-konva renders to an HTML5 canvas and touches `window` at import time
// — must not be part of the SSR bundle.
const MapCanvas = dynamic(() => import('../components/map/MapCanvas'), { ssr: false });

function Map() {
  const { role } = useAuth();
  const canEdit = role === 'family';
  const { getActiveSession, maps, activeMapId, loadMapsForSession, createMap, setActiveMap, loadMapData, subscribeMapRealtime } =
    useStore();
  const [newMapName, setNewMapName] = useState('');
  const [selectedAttackerId, setSelectedAttackerId] = useState<string | null>(null);
  const [selectedDefenderId, setSelectedDefenderId] = useState<string | null>(null);
  const [selectedStructureId, setSelectedStructureId] = useState<string | null>(null);

  const activeSession = getActiveSession();
  const sessionMaps = activeSession ? maps.filter((m) => m.session_id === activeSession.id) : [];
  const activeMap = maps.find((m) => m.id === activeMapId) ?? sessionMaps[0] ?? null;

  useEffect(() => {
    if (activeSession) {
      loadMapsForSession(activeSession.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSession?.id]);

  useEffect(() => {
    if (!activeMap) return;
    loadMapData(activeMap.id);
    const unsubscribe = subscribeMapRealtime(activeMap.id);
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeMap?.id]);

  const handleSelectToken = (tokenId: string) => {
    if (!selectedAttackerId || selectedAttackerId === tokenId) {
      setSelectedAttackerId(tokenId === selectedAttackerId ? null : tokenId);
      return;
    }
    setSelectedDefenderId(tokenId === selectedDefenderId ? null : tokenId);
  };

  const handleClearSelection = () => {
    setSelectedAttackerId(null);
    setSelectedDefenderId(null);
  };

  const handleCreateMap = () => {
    if (!activeSession) return;
    const name = newMapName.trim() || `Map ${sessionMaps.length + 1}`;
    createMap(activeSession.id, name);
    setNewMapName('');
  };

  return (
    <DMToolkitLayout>
      <div className="max-w-7xl mx-auto px-6 py-8">
        {!activeSession ? (
          <div className="h-64 flex items-center justify-center bg-stone-800 border border-stone-700 border-dashed rounded-xl">
            <div className="text-center">
              <p className="text-stone-500 text-sm">No active session.</p>
              <p className="text-stone-600 text-xs mt-1">
                Select a session on the Session page first.
              </p>
            </div>
          </div>
        ) : !activeMap ? (
          <div className="max-w-md mx-auto text-center space-y-4 py-16">
            <p className="text-stone-400 text-sm">No map yet for &ldquo;{activeSession.name}&rdquo;.</p>
            {canEdit && (
              <div className="flex gap-2">
                <input
                  value={newMapName}
                  onChange={(e) => setNewMapName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCreateMap()}
                  placeholder="Map name…"
                  className="flex-1 bg-stone-950 border border-stone-700 rounded-lg px-3 py-1.5 text-sm text-stone-300 placeholder:text-stone-600"
                />
                <button
                  onClick={handleCreateMap}
                  className="px-3 py-1.5 bg-green-800 hover:bg-green-700 text-green-100 text-sm rounded-lg transition-colors"
                >
                  Create Map
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-6">
            <div className="flex-1 space-y-4">
              <h2 className="text-lg font-bold text-stone-100">{activeMap.name}</h2>
              <MapCanvas
                map={activeMap}
                selectedAttackerId={selectedAttackerId}
                selectedDefenderId={selectedDefenderId}
                onSelectToken={handleSelectToken}
                selectedStructureId={selectedStructureId}
                onSelectStructure={(id) => setSelectedStructureId(id === selectedStructureId ? null : id)}
                canEdit={canEdit}
              />
            </div>
            <div className="w-96 shrink-0 space-y-4">
              {canEdit ? (
                <AttackControls
                  mapId={activeMap.id}
                  selectedAttackerId={selectedAttackerId}
                  selectedDefenderId={selectedDefenderId}
                  onClearSelection={handleClearSelection}
                />
              ) : null}
              <CombatLog />
              {canEdit ? (
                <StructurePanel
                  mapId={activeMap.id}
                  selectedStructureId={selectedStructureId}
                  onSelectStructure={setSelectedStructureId}
                />
              ) : null}
              <StructureEventLog />
            </div>
          </div>
        )}
      </div>
    </DMToolkitLayout>
  );
}

// Public: the live map is viewable by anyone. Create-map, token drag, and
// the AttackControls panel are all gated on canEdit (role === 'family').
Map.isPublic = true;

export default Map;
