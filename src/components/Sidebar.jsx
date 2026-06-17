import { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { getWalls } from "../services/wallService";

function Sidebar() {
  const [walls, setWalls] = useState([]);
  const [recentVolumes, setRecentVolumes] = useState([]);
  const [favoriteVolumes, setFavoriteVolumes] = useState([]);

  const location = useLocation();

  useEffect(() => {
    async function loadWalls() {
      const data = await getWalls();

      setWalls(data);
    }
    loadWalls();

    const recent = JSON.parse(localStorage.getItem("recentVolumes")) || [];
    setRecentVolumes(recent);

    const favorites = JSON.parse(localStorage.getItem("favoriteVolumes")) || [];
    setFavoriteVolumes(favorites);
  }, [location.pathname]);

  return (
    <aside className="w-72 h-screen sticky top-0 bg-zinc-900 border-r border-zinc-800 p-5 flex flex-col overflow-hidden">
      <Link to="/" className="mb-8">
        <h1 className="text-2xl font-bold">Babel Notions</h1>

        <p className="text-zinc-500 text-sm">Biblioteca infinita</p>
      </Link>

      <section className="flex-1 overflow-y-auto pr-2 space-y-8">
        <div>
          <h2 className="text-xs uppercase text-zinc-500 mb-3 tracking-widest">
            Paredes
          </h2>

          <div className="space-y-2">
            {walls.map((wall) => {
              const isActive = location.pathname === `/walls/${wall.id}`;

              return (
                <Link
                  key={wall.id}
                  to={`/walls/${wall.id}`}
                  className={`
                      block rounded-xl px-4 py-3 transition cursor-pointer
                      ${
                        isActive
                          ? "bg-zinc-700 text-white"
                          : "hover:bg-zinc-800 text-zinc-300"
                      }
                    `}
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
                    className={`
                        block rounded-xl px-4 py-3 transition cursor-pointer
                        ${
                          isActive
                            ? "bg-zinc-700 text-white"
                            : "hover:bg-zinc-800 text-zinc-300"
                        }
                      `}
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
                    className={`
                block rounded-xl px-4 py-3 transition cursor-pointer
                ${
                  isActive
                    ? "bg-zinc-700 text-white"
                    : "hover:bg-zinc-800 text-zinc-300"
                }
              `}
                  >
                    <p className="font-medium truncate">★ {volume.title}</p>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="pt-4 border-t border-zinc-800 mt-4">
        <Link
          to="/settings"
          className="text-zinc-400 hover:text-white transition cursor-pointer"
        >
          ⚙ Configurações
        </Link>
      </section>
    </aside>
  );
}

export default Sidebar;
