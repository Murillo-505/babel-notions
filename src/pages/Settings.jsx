import { useEffect, useState } from "react";

function Settings() {
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [recentCount, setRecentCount] = useState(0);

  useEffect(() => {
    const favorites =
      JSON.parse(
        localStorage.getItem("favoriteVolumes")
      ) || [];

    const recent =
      JSON.parse(
        localStorage.getItem("recentVolumes")
      ) || [];

    setFavoritesCount(favorites.length);
    setRecentCount(recent.length);
  }, []);

  function clearFavorites() {
    const confirmed = window.confirm(
      "Deseja remover todos os favoritos?"
    );

    if (!confirmed) return;

    localStorage.removeItem(
      "favoriteVolumes"
    );

    setFavoritesCount(0);
  }

  function clearRecent() {
    const confirmed = window.confirm(
      "Deseja limpar o histórico recente?"
    );

    if (!confirmed) return;

    localStorage.removeItem(
      "recentVolumes"
    );

    setRecentCount(0);
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">
        Configurações
      </h1>

      <p className="text-zinc-400 mb-8">
        Informações e gerenciamento do Babel
        Notions.
      </p>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <p className="text-zinc-500 text-sm">
            Favoritos
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {favoritesCount}
          </h2>

          <button
            onClick={clearFavorites}
            className="mt-4 bg-red-900 hover:bg-red-800 px-4 py-2 rounded-lg text-sm transition cursor-pointer"
          >
            Limpar favoritos
          </button>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <p className="text-zinc-500 text-sm">
            Recentes
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {recentCount}
          </h2>

          <button
            onClick={clearRecent}
            className="mt-4 bg-red-900 hover:bg-red-800 px-4 py-2 rounded-lg text-sm transition cursor-pointer"
          >
            Limpar recentes
          </button>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4">
          Informações do Sistema
        </h2>

        <div className="space-y-3 text-zinc-300">
          <p>
            <strong>Projeto:</strong>{" "}
            Babel Notions
          </p>

          <p>
            <strong>Versão:</strong> 1.0
          </p>

          <p>
            <strong>Frontend:</strong>{" "}
            React + Vite
          </p>

          <p>
            <strong>Backend:</strong>{" "}
            Node.js + Express
          </p>

          <p>
            <strong>Banco:</strong>{" "}
            PostgreSQL + Prisma
          </p>

          <p>
            <strong>API:</strong>{" "}
            {import.meta.env.VITE_API_URL}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Settings;