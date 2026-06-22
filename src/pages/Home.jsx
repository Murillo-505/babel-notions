import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import SearchBar from "../components/SearchBar";

import {
  getWalls,
  createWall,
  updateWall,
  deleteWall,
} from "../services/wallService";

function Home() {
  const [search, setSearch] = useState("");

  const [walls, setWalls] = useState([]);

  const [loading, setLoading] = useState(true);

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
    const name = prompt("Nome da parede:");

    if (!name) return;

    const description = prompt("Descrição da parede:");

    await createWall({
      name,

      description: description || "",
    });

    const updatedWalls = await getWalls();

    setWalls(updatedWalls);
  }

  async function handleEditWall(wall) {
    const newName = prompt("Novo nome:", wall.name);

    if (!newName) return;

    const newDescription = prompt("Nova descrição:", wall.description);

    await updateWall(wall.id, {
      name: newName,

      description: newDescription || "",
    });

    const updatedWalls = await getWalls();

    setWalls(updatedWalls);
  }

  async function handleDeleteWall(id) {
    const confirmed = window.confirm(
      "Tem certeza que deseja excluir esta parede?",
    );

    if (!confirmed) return;

    await deleteWall(id);

    const updatedWalls = await getWalls();

    setWalls(updatedWalls);
  }

  if (loading) {
    return <h1 className="text-xl">Carregando paredes...</h1>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">Babel Notions</h1>

      <p className="text-zinc-400 mb-6">
        Organize seu conhecimento em paredes, bibliotecas e volumes.
      </p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <p className="text-zinc-500 text-sm">Paredes</p>

          <h2 className="text-3xl font-bold">{totalWalls}</h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <p className="text-zinc-500 text-sm">Bibliotecas</p>

          <h2 className="text-3xl font-bold">{totalLibraries}</h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <p className="text-zinc-500 text-sm">Volumes</p>

          <h2 className="text-3xl font-bold">{totalVolumes}</h2>
        </div>
      </div>

      <button
        onClick={handleCreateWall}
        className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:opacity-90 transition cursor-pointer mb-6"
      >
        + Nova Parede
      </button>

      <div className="mb-8">
        <SearchBar
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      {searchResults.length > 0 && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 mb-8">
          <h2 className="font-bold text-lg mb-4">Resultados da Busca</h2>

          <div className="space-y-2">
            {searchResults.slice(0, 5).map((result, index) => (
              <Link
                key={index}
                to={`/volumes/${result.volume.id}`}
                className="block p-4 rounded-xl hover:bg-zinc-800 transition border border-transparent hover:border-zinc-700"
              >
                <p className="font-semibold text-lg">
                  📖 {result.volume.title}
                </p>

                <p className="text-zinc-400 text-sm mt-2">
                  {result.volume.content
                    ? result.volume.content.slice(0, 120) + "..."
                    : "Volume sem conteúdo"}
                </p>

                <p className="text-xs text-zinc-500 mt-3">
                  📚 {result.library.name}
                  {" • "}
                  🧱 {result.wall.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-8">
        {filteredWalls.map((wall) => (
          <section
            key={wall.id}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
          >
            <Link
              to={`/walls/${wall.id}`}
              className="block mb-4 hover:opacity-90 transition"
            >
              <h2 className="text-2xl font-bold hover:text-zinc-300">
                {wall.name}
              </h2>

              <p className="text-zinc-400">{wall.description}</p>
            </Link>

            <div className="flex gap-2 mb-4">
              <button
                onClick={() => handleEditWall(wall)}
                className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm transition cursor-pointer"
              >
                Editar
              </button>

              <button
                onClick={() => handleDeleteWall(wall.id)}
                className="bg-red-900 hover:bg-red-800 px-4 py-2 rounded-lg text-sm transition cursor-pointer"
              >
                Excluir
              </button>
            </div>

            {wall.libraries.length === 0 ? (
              <p className="text-zinc-500">Nenhuma biblioteca encontrada.</p>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {wall.libraries.map((library) => (
                  <Link
                    key={library.id}
                    to={`/libraries/${library.id}`}
                    className="bg-zinc-800 hover:bg-zinc-700 transition rounded-xl p-4 border border-zinc-700"
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
