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

  const updated = [
    {
      id: volumeData.id,
      title: volumeData.title,
      libraryId: volumeData.libraryId,
    },
    ...recent,
  ].slice(0, limit);

  localStorage.setItem(RECENT_VOLUMES_KEY, JSON.stringify(updated));
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
