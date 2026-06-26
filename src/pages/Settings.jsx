import { useEffect, useState, useSyncExternalStore } from "react";

import { Link } from "react-router-dom";

import {
  clearFavoriteVolumes,
  clearRecentVolumes,
  getFavoriteVolumes,
  getRecentLimit,
  getRecentVolumes,
  RECENT_LIMIT_OPTIONS,
  setRecentLimit,
  subscribeLocalData,
} from "../services/localDataService";

const API_URL = import.meta.env.VITE_API_URL;

function Settings() {
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

  const recentCount = recentVolumes.length;
  const favoriteCount = favoriteVolumes.length;

  const [recentLimit, setRecentLimitState] = useState(getRecentLimit());
  const [confirmClearRecent, setConfirmClearRecent] = useState(false);
  const [confirmClearFavorites, setConfirmClearFavorites] = useState(false);
  const [apiStatus, setApiStatus] = useState("checking");

  useEffect(() => {
    async function checkApi() {
      try {
        const response = await fetch(`${API_URL}/`);

        if (!response.ok) {
          setApiStatus("offline");
          return;
        }

        setApiStatus("online");
      } catch {
        setApiStatus("offline");
      }
    }

    checkApi();
  }, []);

  function handleRecentLimitChange(event) {
    const limit = Number(event.target.value);

    setRecentLimit(limit);
    setRecentLimitState(limit);
  }

  function handleClearRecent() {
    clearRecentVolumes();
    setConfirmClearRecent(false);
  }

  function handleClearFavorites() {
    clearFavoriteVolumes();
    setConfirmClearFavorites(false);
  }

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Configurações</h1>

        <p className="text-zinc-400">
          Preferências locais do navegador e informações do app.
        </p>
      </div>

      <section className="card space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-1">Sidebar</h2>

          <p className="text-zinc-400 text-sm">
            Dados salvos apenas neste navegador.
          </p>
        </div>

        <div>
          <label
            htmlFor="recent-limit"
            className="block text-sm font-medium text-zinc-300 mb-2"
          >
            Limite de volumes recentes
          </label>

          <select
            id="recent-limit"
            value={recentLimit}
            onChange={handleRecentLimitChange}
            className="input max-w-xs cursor-pointer"
          >
            {RECENT_LIMIT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option} volumes
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-4 pt-2 border-t border-zinc-800">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="font-medium">Volumes recentes</p>

              <p className="text-zinc-500 text-sm">
                {recentCount} {recentCount === 1 ? "item" : "itens"} na sidebar
              </p>
            </div>

            {confirmClearRecent ? (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-zinc-400">Tem certeza?</span>

                <button
                  onClick={handleClearRecent}
                  className="btn-danger"
                  disabled={recentCount === 0}
                >
                  Sim, limpar
                </button>

                <button
                  onClick={() => setConfirmClearRecent(false)}
                  className="btn-secondary"
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setConfirmClearFavorites(false);
                  setConfirmClearRecent(true);
                }}
                className="btn-secondary"
                disabled={recentCount === 0}
              >
                Limpar recentes
              </button>
            )}
          </div>

          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="font-medium">Favoritos</p>

              <p className="text-zinc-500 text-sm">
                {favoriteCount}{" "}
                {favoriteCount === 1 ? "favorito" : "favoritos"} na sidebar
              </p>
            </div>

            {confirmClearFavorites ? (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-zinc-400">Tem certeza?</span>

                <button
                  onClick={handleClearFavorites}
                  className="btn-danger"
                  disabled={favoriteCount === 0}
                >
                  Sim, limpar
                </button>

                <button
                  onClick={() => setConfirmClearFavorites(false)}
                  className="btn-secondary"
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setConfirmClearRecent(false);
                  setConfirmClearFavorites(true);
                }}
                className="btn-secondary"
                disabled={favoriteCount === 0}
              >
                Limpar favoritos
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="card space-y-4">
        <h2 className="text-xl font-bold">Sobre</h2>

        <dl className="space-y-3 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-zinc-500">App</dt>
            <dd className="text-zinc-200">Notions of Babel</dd>
          </div>

          <div className="flex justify-between gap-4">
            <dt className="text-zinc-500">Versão</dt>
            <dd className="text-zinc-200">0.0.0</dd>
          </div>

          <div className="flex justify-between gap-4">
            <dt className="text-zinc-500">API</dt>
            <dd>
              {apiStatus === "checking" && (
                <span className="text-zinc-400">Verificando...</span>
              )}

              {apiStatus === "online" && (
                <span className="text-green-400">Online</span>
              )}

              {apiStatus === "offline" && (
                <span className="text-red-400">Offline</span>
              )}
            </dd>
          </div>

          <div className="flex justify-between gap-4">
            <dt className="text-zinc-500">Endpoint</dt>
            <dd className="text-zinc-400 truncate max-w-xs text-right">
              {API_URL || "Não configurado"}
            </dd>
          </div>
        </dl>

        <Link
          to="/"
          className="inline-block text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
        >
          Ir para Home
        </Link>
      </section>
    </div>
  );
}

export default Settings;
