import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useAuth } from '@with-nx/auth';
import { useStore } from '../store/useStore';
import { fetchSessionById } from '../lib/api';
import { supabase } from '../lib/supabaseClient';
import DMToolkitLayout from '../components/DMToolkitLayout';
import MapStatusBar from '../components/map/MapStatusBar';
import TokenRoster from '../components/map/TokenRoster';
import ActivityLog from '../components/map/ActivityLog';
import ActDrawer from '../components/map/ActDrawer';
import type { GameMap } from '../types';

// react-konva renders to an HTML5 canvas and touches `window` at import time
// — must not be part of the SSR bundle.
const MapCanvas = dynamic(() => import('../components/map/MapCanvas'), { ssr: false });

function Map() {
  const { role } = useAuth();
  const router = useRouter();
  // /map?session=<id> is the no-login preview link (see
  // supabase/migrations/0011_session_active_map.sql) — it follows a
  // session's active_map_id rather than this browser's own DM-only
  // activeSessionId/activeMapId state, and is always read-only.
  const shareSessionId = typeof router.query.session === 'string' ? router.query.session : null;
  const canEdit = !shareSessionId && role === 'family';
  const { getActiveSession, maps, activeMapId, loadMapsForSession, createMap, setActiveMap, loadMapData, subscribeMapRealtime } =
    useStore();
  const [newMapName, setNewMapName] = useState('');
  const [selectedAttackerId, setSelectedAttackerId] = useState<string | null>(null);
  const [selectedDefenderId, setSelectedDefenderId] = useState<string | null>(null);
  const [selectedStructureId, setSelectedStructureId] = useState<string | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);

  const [shareSessionFound, setShareSessionFound] = useState<boolean | null>(null);
  const [shareMapId, setShareMapId] = useState<string | null>(null);

  const activeSession = getActiveSession();
  const sessionMaps = activeSession ? maps.filter((m) => m.session_id === activeSession.id) : [];
  const ownActiveMap = maps.find((m) => m.id === activeMapId) ?? sessionMaps[0] ?? null;

  // Share mode: look up the session publicly (no auth), load its maps (the
  // GET is open, same as the rest of the map page), and track its
  // active_map_id live so a DM switching maps mid-session doesn't leave an
  // already-open preview link stale.
  useEffect(() => {
    if (!shareSessionId) return;
    let cancelled = false;
    fetchSessionById(shareSessionId).then((session) => {
      if (cancelled) return;
      setShareSessionFound(!!session);
      setShareMapId(session?.active_map_id ?? null);
    });
    loadMapsForSession(shareSessionId);

    const channel = supabase
      .channel(`session-${shareSessionId}`)
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'sessions', filter: `id=eq.${shareSessionId}` },
        (payload) => setShareMapId((payload.new.active_map_id as string) ?? null)
      )
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shareSessionId]);

  const activeMap = shareSessionId ? maps.find((m) => m.id === shareMapId) ?? null : ownActiveMap;

  useEffect(() => {
    if (!shareSessionId && activeSession) {
      loadMapsForSession(activeSession.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shareSessionId, activeSession?.id]);

  useEffect(() => {
    if (!activeMap) return;
    loadMapData(activeMap.id);
    const unsubscribe = subscribeMapRealtime(activeMap.id);
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeMap?.id]);

  // Self-heals sessions.active_map_id drifting from what the DM's own
  // browser actually has active — covers sessions/maps created before this
  // column existed (nothing ever backfilled them), and there's currently no
  // map-switcher UI that calls setActiveMap directly either. Runs only for
  // the real DM, never in share mode.
  useEffect(() => {
    if (shareSessionId || !canEdit || !activeSession || !activeMap) return;
    if (activeSession.active_map_id !== activeMap.id) {
      setActiveMap(activeMap.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shareSessionId, canEdit, activeSession?.id, activeSession?.active_map_id, activeMap?.id]);

  const handleCopyPreviewLink = async () => {
    if (!activeSession) return;
    const url = `${window.location.origin}/map?session=${activeSession.id}`;
    await navigator.clipboard.writeText(url);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

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

  const renderMainView = (map: GameMap) => (
    <div className="space-y-4">
      <MapStatusBar mapId={map.id} canEdit={canEdit} />

      <div className="flex gap-6">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-stone-100">{map.name}</h2>
            {canEdit && (
              <button
                onClick={handleCopyPreviewLink}
                className="text-xs px-2.5 py-1 bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-400 rounded-lg transition-colors"
              >
                {linkCopied ? 'Copied!' : '🔗 Copy preview link'}
              </button>
            )}
          </div>
          <MapCanvas
            map={map}
            selectedAttackerId={selectedAttackerId}
            selectedDefenderId={selectedDefenderId}
            onSelectToken={handleSelectToken}
            selectedStructureId={selectedStructureId}
            onSelectStructure={(id) => setSelectedStructureId(id === selectedStructureId ? null : id)}
            canEdit={canEdit}
          />
        </div>
        <div className="w-96 shrink-0 space-y-4">
          <TokenRoster canEdit={canEdit} />
          <ActivityLog />
        </div>
      </div>

      {canEdit && (
        <ActDrawer
          mapId={map.id}
          selectedAttackerId={selectedAttackerId}
          selectedDefenderId={selectedDefenderId}
          onClearSelection={handleClearSelection}
          selectedStructureId={selectedStructureId}
          onSelectStructure={setSelectedStructureId}
        />
      )}
    </div>
  );

  return (
    <DMToolkitLayout>
      <div className="max-w-7xl mx-auto px-6 py-8">
        {shareSessionId ? (
          shareSessionFound === false ? (
            <div className="h-64 flex items-center justify-center bg-stone-800 border border-stone-700 border-dashed rounded-xl">
              <div className="text-center">
                <p className="text-stone-500 text-sm">This preview link doesn&apos;t point at a real session.</p>
              </div>
            </div>
          ) : !activeMap ? (
            <div className="h-64 flex items-center justify-center bg-stone-800 border border-stone-700 border-dashed rounded-xl">
              <div className="text-center">
                <p className="text-stone-500 text-sm">The DM hasn&apos;t set an active map for this session yet.</p>
                <p className="text-stone-600 text-xs mt-1">This page updates automatically once they do.</p>
              </div>
            </div>
          ) : (
            renderMainView(activeMap)
          )
        ) : !activeSession ? (
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
          renderMainView(activeMap)
        )}
      </div>
    </DMToolkitLayout>
  );
}

// Public: the live map, status bar, roster, and activity log are all
// viewable by anyone. Create-map, token drag, and the act drawer (add
// token / attack / structures) are gated on canEdit (role === 'family').
Map.isPublic = true;

export default Map;
