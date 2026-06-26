import { useEffect, useState, useSyncExternalStore } from "react";

import { Link, useLocation } from "react-router-dom";

import {
  getFavoriteVolumes,
  getRecentVolumes,
  subscribeLocalData,
} from "../services/localDataService";

import { getWalls } from "../services/wallService";

function Sidebar() {
  const [walls, setWalls] = useState([]);

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

  useEffect(() => {
    async function loadWalls() {
      const data = await getWalls();

      setWalls(data);
    }

    loadWalls();
  }, [location.pathname]);

  function navClass(isActive) {
    return `nav-item ${isActive ? "nav-item-active" : "nav-item-inactive"}`;
  }

  const isHomeActive = location.pathname === "/";
  const isSettingsActive = location.pathname === "/settings";

  return (
    <aside className="w-72 h-screen sticky top-0 bg-zinc-900 border-r border-zinc-800 p-5 flex flex-col overflow-hidden">
      <Link to="/" className={`mb-8 block ${navClass(isHomeActive)}`}>
        <h1 className="text-2xl font-bold">Notions of Babel</h1>

        <p className="text-zinc-500 text-sm">Biblioteca infinita</p>
      </Link>

      <section className="flex-1 pr-2 space-y-8 overflow-y-auto">
        <div>
          <h2 className="text-xs uppercase text-zinc-500 mb-3 tracking-widest">
            Paredes
          </h2>

          <div className="space-y-2 overflow-y-auto max-h-[calc(30vh)]">
            {walls.map((wall) => {
              const isActive = location.pathname === `/walls/${wall.id}`;

              return (
                <Link
                  key={wall.id}
                  to={`/walls/${wall.id}`}
                  className={navClass(isActive)}
                >
                  <p className="font-medium">{wall.name}</p>

                  <p className="text-xs text-zinc-500 truncate">
                    {wall.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-xs uppercase text-zinc-500 mb-3 tracking-widest">
            Recentes
          </h2>

          {recentVolumes.length === 0 ? (
            <p className="text-zinc-500 text-sm">Nenhum volume recente</p>
          ) : (
            <div className="space-y-2">
              {recentVolumes.map((volume) => {
                const isActive = location.pathname === `/volumes/${volume.id}`;

                return (
                  <Link
                    key={volume.id}
                    to={`/volumes/${volume.id}`}
                    className={navClass(isActive)}
                  >
                    <p className="font-medium truncate">{volume.title}</p>

                    <p className="text-xs text-zinc-500">Volume recente</p>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        <div>
          <h2 className="text-xs uppercase text-zinc-500 mb-3 tracking-widest">
            Favoritos
          </h2>

          {favoriteVolumes.length === 0 ? (
            <p className="text-zinc-500 text-sm">Nenhum favorito</p>
          ) : (
            <div className="space-y-2">
              {favoriteVolumes.map((volume) => {
                const isActive = location.pathname === `/volumes/${volume.id}`;

                return (
                  <Link
                    key={volume.id}
                    to={`/volumes/${volume.id}`}
                    className={navClass(isActive)}
                  >
                    <p className="font-medium truncate">{volume.title}</p>

                    <p className="text-xs text-zinc-500">Favorito</p>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="pt-4 border-t border-zinc-800 mt-4">
        <Link to="/settings" className={navClass(isSettingsActive)}>
          Configurações
        </Link>
      </section>
    </aside>
  );
}

export default Sidebar;
