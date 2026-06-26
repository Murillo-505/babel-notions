const RECENT_VOLUMES_KEY = "recentVolumes";
const FAVORITE_VOLUMES_KEY = "favoriteVolumes";
const RECENT_LIMIT_KEY = "recentVolumesLimit";

const DEFAULT_RECENT_LIMIT = 5;
const RECENT_LIMIT_OPTIONS = [3, 5, 10];

const listeners = new Set();

let recentSnapshot = [];
let favoritesSnapshot = [];

function readRecentFromStorage() {
  return JSON.parse(localStorage.getItem(RECENT_VOLUMES_KEY)) || [];
}

function readFavoritesFromStorage() {
  return JSON.parse(localStorage.getItem(FAVORITE_VOLUMES_KEY)) || [];
}

function syncSnapshots() {
  recentSnapshot = readRecentFromStorage();
  favoritesSnapshot = readFavoritesFromStorage();
}

function notifyLocalDataChanged() {
  syncSnapshots();
  listeners.forEach((listener) => listener());
}

syncSnapshots();

export function buildVolumeEntry(volumeData, titleOverride) {
  const shelf = volumeData.shelf;
  const library = shelf?.library;
  const wall = library?.wall;

  return {
    id: volumeData.id,
    title: titleOverride ?? volumeData.title,
    wallId: wall?.id ?? volumeData.wallId ?? null,
    libraryId: library?.id ?? volumeData.libraryId ?? shelf?.libraryId ?? null,
    shelfId: volumeData.shelfId ?? shelf?.id ?? null,
    wallName: wall?.name ?? volumeData.wallName ?? null,
    libraryName: library?.name ?? volumeData.libraryName ?? null,
    shelfName: shelf?.name ?? volumeData.shelfName ?? null,
  };
}

export function getVolumeContextLabel(entry) {
  return [entry.wallName, entry.libraryName, entry.shelfName]
    .filter(Boolean)
    .join(" · ");
}

export function getVolumeNavigationState(entry) {
  return {
    wallId: entry.wallId ?? null,
    libraryId: entry.libraryId ?? null,
    shelfId: entry.shelfId ?? null,
  };
}

export function subscribeLocalData(callback) {
  listeners.add(callback);

  return () => {
    listeners.delete(callback);
  };
}

export function getRecentLimit() {
  const stored = Number(localStorage.getItem(RECENT_LIMIT_KEY));

  if (RECENT_LIMIT_OPTIONS.includes(stored)) {
    return stored;
  }

  return DEFAULT_RECENT_LIMIT;
}

export function setRecentLimit(limit) {
  localStorage.setItem(RECENT_LIMIT_KEY, String(limit));

  const recent = readRecentFromStorage();
  const trimmed = recent.slice(0, limit);

  localStorage.setItem(RECENT_VOLUMES_KEY, JSON.stringify(trimmed));
  notifyLocalDataChanged();
}

export function getRecentVolumes() {
  return recentSnapshot;
}

export function getFavoriteVolumes() {
  return favoritesSnapshot;
}

export function saveRecentVolume(volumeData) {
  const recent = readRecentFromStorage().filter(
    (item) => item.id !== volumeData.id,
  );
  const limit = getRecentLimit();

  const updated = [buildVolumeEntry(volumeData), ...recent].slice(0, limit);

  localStorage.setItem(RECENT_VOLUMES_KEY, JSON.stringify(updated));
  notifyLocalDataChanged();
}

export function updateStoredVolumeMetadata(volumeId, { title }) {
  let changed = false;

  const recent = readRecentFromStorage().map((item) => {
    if (item.id !== volumeId) return item;

    changed = true;
    return { ...item, title };
  });

  const favorites = readFavoritesFromStorage().map((item) => {
    if (item.id !== volumeId) return item;

    changed = true;
    return { ...item, title };
  });

  if (!changed) return;

  localStorage.setItem(RECENT_VOLUMES_KEY, JSON.stringify(recent));
  localStorage.setItem(FAVORITE_VOLUMES_KEY, JSON.stringify(favorites));
  notifyLocalDataChanged();
}

export function saveFavoriteVolume(volumeData, titleOverride) {
  const favorites = readFavoritesFromStorage().filter(
    (item) => item.id !== volumeData.id,
  );

  const updated = [
    buildVolumeEntry(volumeData, titleOverride),
    ...favorites,
  ];

  localStorage.setItem(FAVORITE_VOLUMES_KEY, JSON.stringify(updated));
  notifyLocalDataChanged();
}

export function removeFavoriteVolume(volumeId) {
  const updated = readFavoritesFromStorage().filter(
    (item) => item.id !== volumeId,
  );

  localStorage.setItem(FAVORITE_VOLUMES_KEY, JSON.stringify(updated));
  notifyLocalDataChanged();
}

export function removeStoredVolume(volumeId) {
  const recent = readRecentFromStorage().filter((item) => item.id !== volumeId);
  const favorites = readFavoritesFromStorage().filter(
    (item) => item.id !== volumeId,
  );

  localStorage.setItem(RECENT_VOLUMES_KEY, JSON.stringify(recent));
  localStorage.setItem(FAVORITE_VOLUMES_KEY, JSON.stringify(favorites));
  notifyLocalDataChanged();
}

export function clearRecentVolumes() {
  localStorage.setItem(RECENT_VOLUMES_KEY, JSON.stringify([]));
  notifyLocalDataChanged();
}

export function clearFavoriteVolumes() {
  localStorage.setItem(FAVORITE_VOLUMES_KEY, JSON.stringify([]));
  notifyLocalDataChanged();
}

export function notifyRecentChanged() {
  notifyLocalDataChanged();
}

export function notifyFavoritesChanged() {
  notifyLocalDataChanged();
}

export { RECENT_LIMIT_OPTIONS, DEFAULT_RECENT_LIMIT };
