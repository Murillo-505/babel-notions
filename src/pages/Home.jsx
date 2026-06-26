import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import LoadingSkeleton from "../components/LoadingSkeleton";

import { useSearch } from "../context/SearchContext";

import {
  getWalls,
  createWall,
  updateWall,
  deleteWall,
} from "../services/wallService";

function Home() {
  const { search } = useSearch();

  const [walls, setWalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openInput, setOpenInput] = useState(false);
  const [newWallName, setNewWallName] = useState("");
  const [newWallDescription, setNewWallDescription] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    async function loadWalls() {
      const data = await getWalls();

      setWalls(data);
      setLoading(false);
    }

    loadWalls();
  }, []);

  const filteredWalls = walls
    .map((wall) => {
      const searchTerm = search.toLowerCase();

      const filteredLibraries = wall.libraries.filter((library) => {
        const matchLibraryName = library.name
          .toLowerCase()
          .includes(searchTerm);

        const matchDescription = library.description
          ?.toLowerCase()
          .includes(searchTerm);

        const matchVolume = library.volumes?.some((volume) =>
          volume.title.toLowerCase().includes(searchTerm),
        );

        return matchLibraryName || matchDescription || matchVolume;
      });

      const matchWall = wall.name.toLowerCase().includes(searchTerm);

      return {
        ...wall,
        libraries: matchWall ? wall.libraries : filteredLibraries,
      };
    })
    .filter(
      (wall) =>
        wall.libraries.length > 0 ||
        wall.name.toLowerCase().includes(search.toLowerCase()),
    );

  const totalWalls = walls.length;

  const totalLibraries = walls.reduce(
    (total, wall) => total + wall.libraries.length,
    0,
  );

  const totalVolumes = walls.reduce(
    (total, wall) =>
      total +
      wall.libraries.reduce(
        (libraryTotal, library) => libraryTotal + library.volumes.length,
        0,
      ),
    0,
  );

  const searchResults =
    search.length < 2
      ? []
      : walls.flatMap((wall) =>
          wall.libraries.flatMap((library) =>
            library.volumes
              .filter(
                (volume) =>
                  volume.title.toLowerCase().includes(search.toLowerCase()) ||
                  volume.content?.toLowerCase().includes(search.toLowerCase()),
              )
              .map((volume) => ({
                volume,
                library,
                wall,
              })),
          ),
        );

  async function handleCreateWall() {
    if (!newWallName.trim()) return;

    await createWall({
      name: newWallName,
      description: newWallDescription.trim() || "",
    });

    setOpenInput(false);
    setNewWallName("");
    setNewWallDescription("");

    const updatedWalls = await getWalls();

    setWalls(updatedWalls);
  }

  function startEditWall(wall) {
    setEditingId(wall.id);
    setEditName(wall.name);
    setEditDescription(wall.description || "");
    setDeletingId(null);
  }

  function cancelEditWall() {
    setEditingId(null);
    setEditName("");
    setEditDescription("");
  }

  async function saveEditWall(wallId) {
    if (!editName.trim()) return;

    await updateWall(wallId, {
      name: editName,
      description: editDescription || "",
    });

    cancelEditWall();

    const updatedWalls = await getWalls();

    setWalls(updatedWalls);
  }

  async function confirmDeleteWall(id) {
    await deleteWall(id);

    setDeletingId(null);

    const updatedWalls = await getWalls();

    setWalls(updatedWalls);
  }

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div>
      <p className="text-zinc-400 mb-6">
        Organize seu conhecimento em paredes, bibliotecas e volumes.
      </p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="card p-5">
          <p className="text-zinc-500 text-sm">Paredes</p>
          <h2 className="text-3xl font-bold">{totalWalls}</h2>
        </div>

        <div className="card p-5">
          <p className="text-zinc-500 text-sm">Bibliotecas</p>
          <h2 className="text-3xl font-bold">{totalLibraries}</h2>
        </div>

        <div className="card p-5">
          <p className="text-zinc-500 text-sm">Volumes</p>
          <h2 className="text-3xl font-bold">{totalVolumes}</h2>
        </div>
      </div>

      <button
        onClick={() => setOpenInput(!openInput)}
        className="btn-primary mb-6"
      >
        {`+ ${openInput ? "Cancelar" : "Nova Parede"}`}
      </button>

      {openInput && (
        <div className="mb-8 space-y-4 w-96">
          <input
            type="text"
            placeholder="Nome da parede"
            value={newWallName}
            onChange={(event) => setNewWallName(event.target.value)}
            className="input"
          />

          <input
            type="text"
            placeholder="Descrição da parede"
            value={newWallDescription}
            onChange={(event) => setNewWallDescription(event.target.value)}
            className="input"
          />

          <button onClick={handleCreateWall} className="btn-primary">
            Criar Parede
          </button>
        </div>
      )}

      {searchResults.length > 0 && (
        <div className="card p-4 mb-8">
          <h2 className="font-bold text-lg mb-4">Resultados da Busca</h2>

          <div className="space-y-2">
            {searchResults.slice(0, 5).map((result) => (
              <Link
                key={result.volume.id}
                to={`/volumes/${result.volume.id}`}
                className="block p-4 rounded-xl hover:bg-zinc-800 transition-colors duration-200 border border-transparent hover:border-zinc-700 cursor-pointer"
              >
                <p className="font-semibold text-lg">{result.volume.title}</p>

                <p className="text-zinc-400 text-sm mt-2">
                  {result.volume.content
                    ? result.volume.content.slice(0, 120) + "..."
                    : "Volume sem conteúdo"}
                </p>

                <p className="text-xs text-zinc-500 mt-3">
                  {result.library.name}
                  {" • "}
                  {result.wall.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-8">
        {filteredWalls.map((wall) => (
          <section key={wall.id} className="card">
            {editingId === wall.id ? (
              <div className="mb-4 space-y-3">
                <input
                  type="text"
                  value={editName}
                  onChange={(event) => setEditName(event.target.value)}
                  className="input"
                  placeholder="Nome da parede"
                />

                <input
                  type="text"
                  value={editDescription}
                  onChange={(event) => setEditDescription(event.target.value)}
                  className="input"
                  placeholder="Descrição da parede"
                />

                <div className="flex gap-2">
                  <button
                    onClick={() => saveEditWall(wall.id)}
                    className="btn-primary"
                  >
                    Salvar
                  </button>

                  <button onClick={cancelEditWall} className="btn-secondary">
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to={`/walls/${wall.id}`}
                  className="block mb-4 hover:opacity-90 transition-opacity duration-200"
                >
                  <h2 className="text-2xl font-bold hover:text-zinc-300">
                    {wall.name}
                  </h2>

                  <p className="text-zinc-400">{wall.description}</p>
                </Link>

                <div className="flex gap-2 mb-4 items-center flex-wrap">
                  <button
                    onClick={() => startEditWall(wall)}
                    className="btn-secondary"
                  >
                    Editar
                  </button>

                  {deletingId === wall.id ? (
                    <>
                      <span className="text-sm text-zinc-400">
                        Tem certeza?
                      </span>

                      <button
                        onClick={() => confirmDeleteWall(wall.id)}
                        className="btn-danger"
                      >
                        Sim, excluir
                      </button>

                      <button
                        onClick={() => setDeletingId(null)}
                        className="btn-secondary"
                      >
                        Cancelar
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        setDeletingId(wall.id);
                        cancelEditWall();
                      }}
                      className="btn-danger"
                    >
                      Excluir
                    </button>
                  )}
                </div>
              </>
            )}

            {wall.libraries.length === 0 ? (
              <p className="text-zinc-500">Nenhuma biblioteca encontrada.</p>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {wall.libraries.map((library) => (
                  <Link
                    key={library.id}
                    to={`/libraries/${library.id}`}
                    className="bg-zinc-800 hover:bg-zinc-700 transition-colors duration-200 rounded-xl p-4 border border-zinc-700 cursor-pointer"
                  >
                    <h3 className="font-semibold text-lg">{library.name}</h3>

                    <p className="text-zinc-400 text-sm mt-1">
                      {library.description}
                    </p>

                    <p className="text-xs text-zinc-500 mt-3">
                      {library.volumes.length} volumes
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

export default Home;
