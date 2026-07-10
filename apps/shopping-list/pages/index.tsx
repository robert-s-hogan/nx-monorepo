import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '@with-nx/auth';

import { useStore } from '../store/useStore';
import type { Item } from '../types';
import {
  getStores,
  getStoreSummaries,
  getListItems,
  getGroupedListItems,
  hasActiveItems as computeHasActiveItems,
  getCatalogGroups,
  getCartStats,
  getSearchResults,
  getGroupedSearchResults,
} from '../lib/derived';

import ShoppingListLayout from '../components/ShoppingListLayout';
import TopBar from '../components/TopBar';
import HomeDashboard from '../components/HomeDashboard';
import ShoppingListView from '../components/ShoppingListView';
import SearchResultsView from '../components/SearchResultsView';
import CatalogOverlay from '../components/CatalogOverlay';
import ItemFormModal, { ItemFormState } from '../components/ItemFormModal';
import ImportModal from '../components/ImportModal';
import VideoModal from '../components/VideoModal';

const EMPTY_FORM: ItemFormState = {
  name: '',
  storeSlug: '',
  cost: '',
  size: '',
  unitNote: '',
  videoUrl: '',
  category: '',
};

function Home() {
  const { role } = useAuth();
  const canEdit = role === 'family';
  const {
    items,
    loading,
    error,
    storeOptions,
    fetchItems,
    subscribeRealtime,
    ensureStoreOptions,
    addToList,
    toggleCompletion,
    removeFromList,
    deleteItem,
    resetList,
    importItems,
    saveItem,
  } = useStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('');

  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [form, setForm] = useState<ItemFormState>(EMPTY_FORM);
  const [formSaving, setFormSaving] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const [videoOverlayUrl, setVideoOverlayUrl] = useState('');
  const [confirmReset, setConfirmReset] = useState(false);

  const [showCatalog, setShowCatalog] = useState(false);
  const [catalogQuery, setCatalogQuery] = useState('');
  const [catalogDeleteId, setCatalogDeleteId] = useState<number | null>(null);

  const [showImport, setShowImport] = useState(false);
  const [importText, setImportText] = useState('');
  const [importError, setImportError] = useState('');
  const [importSaving, setImportSaving] = useState(false);

  useEffect(() => {
    fetchItems();
    const unsubscribe = subscribeRealtime();
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (videoOverlayUrl) setVideoOverlayUrl('');
      else if (showForm) closeForm();
      else if (showImport) closeImport();
      else if (showCatalog) setShowCatalog(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoOverlayUrl, showForm, showImport, showCatalog]);

  const stores = useMemo(() => getStores(items), [items]);
  const storeSummaries = useMemo(() => getStoreSummaries(items, stores), [items, stores]);
  const listItems = useMemo(() => getListItems(items, activeTab), [items, activeTab]);
  const groupedListItems = useMemo(() => getGroupedListItems(listItems), [listItems]);
  const hasActiveItems = useMemo(() => computeHasActiveItems(items), [items]);
  const catalogGroups = useMemo(() => getCatalogGroups(items, catalogQuery), [items, catalogQuery]);
  const cartStats = useMemo(() => getCartStats(listItems), [listItems]);
  const searchResults = useMemo(
    () => getSearchResults(items, searchQuery, activeTab),
    [items, searchQuery, activeTab]
  );
  const groupedSearchResults = useMemo(
    () => getGroupedSearchResults(searchResults),
    [searchResults]
  );

  function toggleTab(store: string) {
    setActiveTab((current) => (current === store ? '' : store));
    setSearchQuery('');
  }

  function handleHome() {
    setActiveTab('');
    setSearchQuery('');
    setShowCatalog(false);
  }

  async function handleAddToList(item: Item) {
    await addToList(item);
    setSearchQuery('');
    setActiveTab(item.stores?.store_slug || '');
  }

  async function openForm(item: Item | null = null) {
    const options = await ensureStoreOptions();
    setEditingItem(item);
    setForm({
      name: item?.name ?? '',
      storeSlug: item?.stores?.store_slug ?? activeTab ?? options[0]?.store_slug ?? '',
      cost: item?.estimated_cost != null ? String(item.estimated_cost) : '',
      size: item?.purchase_size ?? '',
      unitNote: item?.unit_price_note ?? '',
      videoUrl: item?.video_url ?? '',
      category: item?.category ?? '',
    });
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
    setEditingItem(null);
    setConfirmDelete(false);
  }

  async function saveForm() {
    if (!form.name.trim() || !form.storeSlug) return;
    setFormSaving(true);
    try {
      await saveItem(
        {
          name: form.name,
          storeSlug: form.storeSlug,
          estimatedCost: form.cost,
          purchaseSize: form.size,
          unitPriceNote: form.unitNote,
          videoUrl: form.videoUrl,
          category: form.category,
        },
        editingItem?.id
      );
      closeForm();
    } finally {
      setFormSaving(false);
    }
  }

  async function handleDeleteItem(id: number) {
    await deleteItem(id);
    setCatalogDeleteId(null);
    setConfirmDelete(false);
    if (showForm) closeForm();
  }

  async function handleResetList() {
    await resetList();
    setConfirmReset(false);
  }

  async function openImport() {
    await ensureStoreOptions();
    setImportText('');
    setImportError('');
    setShowImport(true);
  }

  function closeImport() {
    setShowImport(false);
    setImportError('');
  }

  async function handleImport() {
    setImportError('');
    let rows: unknown;
    try {
      rows = JSON.parse(importText);
      if (!Array.isArray(rows)) throw new Error('Must be a JSON array [ … ]');
    } catch {
      setImportError('Invalid JSON — paste an array of objects.');
      return;
    }
    setImportSaving(true);
    try {
      await importItems(
        rows as {
          name: string;
          store_slug: string;
          estimated_cost?: number | null;
          purchase_size?: string | null;
          unit_price_note?: string | null;
          category?: string | null;
          video_url?: string | null;
        }[]
      );
      closeImport();
    } catch (e) {
      setImportError(e instanceof Error ? e.message : 'Import failed.');
    } finally {
      setImportSaving(false);
    }
  }

  return (
    <ShoppingListLayout>
      <main>
        <TopBar
          activeTab={activeTab}
          searchQuery={searchQuery}
          storeSummaries={storeSummaries}
          onHome={handleHome}
          onSearchChange={setSearchQuery}
          onToggleTab={toggleTab}
        />

        {error ? (
          <div className="status-msg error">Error: {error}</div>
        ) : loading && items.length === 0 ? (
          <div className="status-msg">Loading…</div>
        ) : searchQuery ? (
          <SearchResultsView
            activeTab={activeTab}
            groupedSearchResults={groupedSearchResults}
            onAddToList={handleAddToList}
            canEdit={canEdit}
          />
        ) : !activeTab ? (
          <HomeDashboard
            storeSummaries={storeSummaries}
            hasActiveItems={hasActiveItems}
            confirmReset={confirmReset}
            onToggleTab={toggleTab}
            onOpenImport={openImport}
            onOpenCatalog={() => {
              setCatalogQuery('');
              setShowCatalog(true);
            }}
            onRequestReset={() => setConfirmReset(true)}
            onConfirmReset={handleResetList}
            onCancelReset={() => setConfirmReset(false)}
            canEdit={canEdit}
          />
        ) : (
          <ShoppingListView
            activeTab={activeTab}
            groupedListItems={groupedListItems}
            cartStats={cartStats}
            onToggleCompletion={toggleCompletion}
            onEdit={openForm}
            onRemove={removeFromList}
            onWatchVideo={setVideoOverlayUrl}
            canEdit={canEdit}
          />
        )}
      </main>

      {canEdit && (
        <button type="button" className="fab" onClick={() => openForm()}>
          +
        </button>
      )}

      {canEdit && showForm && (
        <ItemFormModal
          editingItem={editingItem}
          storeOptions={storeOptions}
          form={form}
          saving={formSaving}
          confirmDelete={confirmDelete}
          onChange={setForm}
          onClose={closeForm}
          onSave={saveForm}
          onRequestDelete={() => setConfirmDelete(true)}
          onConfirmDelete={() => editingItem && handleDeleteItem(editingItem.id)}
          onCancelDelete={() => setConfirmDelete(false)}
        />
      )}

      {canEdit && showImport && (
        <ImportModal
          importText={importText}
          importError={importError}
          importSaving={importSaving}
          onTextChange={setImportText}
          onClose={closeImport}
          onImport={handleImport}
        />
      )}

      {showCatalog && (
        <CatalogOverlay
          items={items}
          catalogGroups={catalogGroups}
          catalogQuery={catalogQuery}
          catalogDeleteId={catalogDeleteId}
          onQueryChange={setCatalogQuery}
          onClose={() => setShowCatalog(false)}
          onEdit={(item) => {
            setShowCatalog(false);
            openForm(item);
          }}
          onRequestDelete={setCatalogDeleteId}
          onConfirmDelete={handleDeleteItem}
          onCancelDelete={() => setCatalogDeleteId(null)}
          canEdit={canEdit}
        />
      )}

      {videoOverlayUrl && (
        <VideoModal embedUrl={videoOverlayUrl} onClose={() => setVideoOverlayUrl('')} />
      )}
    </ShoppingListLayout>
  );
}

// Public: the list and catalog are browsable by anyone. Every write
// affordance above is gated on canEdit (role === 'family').
Home.isPublic = true;

export default Home;
