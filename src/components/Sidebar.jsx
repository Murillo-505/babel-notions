import { useSyncExternalStore } from "react";

import { Link, useLocation } from "react-router-dom";

import BookSpine from "./library/BookSpine";

import {
  getFavoriteVolumes,
  getRecentVolumes,
  getVolumeContextLabel,
  getVolumeNavigationState,
  subscribeLocalData,
} from "../services/localDataService";

function SidebarVolumeLink({ volume, isActive, badge }) {
  const context = getVolumeContextLabel(volume);

  return (
    <Link
      to={`/volumes/${volume.id}`}
      state={getVolumeNavigationState(volume)}
      className={`nav-item flex items-center gap-2.5 ${isActive ? "nav-item-active" : "nav-item-inactive"}`}
    >
      <BookSpine
        volume={{ id: volume.id, title: volume.title }}
        readOnly
        size="sm"
      />

      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-1.5 font-medium truncate">
          {badge ? (
            <span className="shrink-0 text-amber-400" aria-hidden="true">
              ★
            </span>
          ) : null}
          <span className="truncate">{volume.title}</span>
        </p>

        {context ? (
          <p className="truncate text-xs text-zinc-500">{context}</p>
        ) : null}
      </div>
    </Link>
  );
}

function Sidebar() {
  const location = useLocation();

  const recentVolumes = useSyncExternalStore(
    subscribeLocalData,
    getRecentVolumes,
    getRecentVolumes,
  );

  const favoriteVolumes = useSyncExternalStore(
    subscribeLocalData,
    getFavoriteVolumes,
    getFavoriteVolumes,
  );

  function navClass(isActive) {
    return `nav-item ${isActive ? "nav-item-active" : "nav-item-inactive"}`;
  }

  const isHallActive = location.pathname === "/";
  const isSettingsActive = location.pathname === "/settings";

  return (
    <aside className="flex h-full w-72 shrink-0 flex-col overflow-hidden border-r border-zinc-800 bg-zinc-900 p-5">
      <Link to="/" className={`mb-8 block ${navClass(isHallActive)}`}>
        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          Saguão
        </p>
        <h1 className="mt-1 text-2xl font-bold">Notions of Babel</h1>
        <p className="text-zinc-500 text-sm">Biblioteca infinita</p>
      </Link>

      <section className="min-h-0 flex-1 space-y-8 overflow-y-auto pr-2">
        <div>
          <h2 className="mb-3 text-xs uppercase tracking-widest text-zinc-500">
            Recentes
          </h2>

          {recentVolumes.length === 0 ? (
            <p className="text-sm text-zinc-500">Nenhum volume recente</p>
          ) : (
            <div className="space-y-2">
              {recentVolumes.map((volume) => (
                <SidebarVolumeLink
                  key={volume.id}
                  volume={volume}
                  isActive={location.pathname === `/volumes/${volume.id}`}
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <h2 className="mb-3 text-xs uppercase tracking-widest text-zinc-500">
            Favoritos
          </h2>

          {favoriteVolumes.length === 0 ? (
            <p className="text-sm text-zinc-500">Nenhum favorito</p>
          ) : (
            <div className="space-y-2">
              {favoriteVolumes.map((volume) => (
                <SidebarVolumeLink
                  key={volume.id}
                  volume={volume}
                  isActive={location.pathname === `/volumes/${volume.id}`}
                  badge
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="mt-4 border-t border-zinc-800 pt-4">
        <Link to="/settings" className={navClass(isSettingsActive)}>
          Configurações
        </Link>
      </section>
    </aside>
  );
}

export default Sidebar;
