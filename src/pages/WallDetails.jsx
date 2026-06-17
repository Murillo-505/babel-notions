import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import { getWallById } from "../services/wallService";

import {
  createLibrary,
  updateLibrary,
  deleteLibrary,
} from "../services/libraryService";

import Breadcrumb from "../components/Breadcrumb";

function WallDetails() {
  const { id } = useParams();

  const [wall, setWall] = useState(null);

  const [name, setName] = useState("");

  const [description, setDescription] = useState("");

  useEffect(() => {
    loadWall();
  }, [id]);

  async function loadWall() {
    const data = await getWallById(id);

    setWall(data);
  }

  async function handleCreateLibrary(event) {
    event.preventDefault();

    if (!name.trim()) return;

    await createLibrary({
      name,
      description,
      wallId: Number(id),
    });

    setName("");
    setDescription("");

    await loadWall();
  }

  async function handleEditLibrary(library) {
    const newName = prompt("Novo nome da biblioteca:", library.name);

    if (!newName) return;

    const newDescription = prompt("Nova descrição:", library.description);

    await updateLibrary(library.id, {
      name: newName,

      description: newDescription || "",
    });

    await loadWall();
  }

  async function handleDeleteLibrary(libraryId) {
    const confirmed = window.confirm("Deseja excluir esta biblioteca?");

    if (!confirmed) return;

    await deleteLibrary(libraryId);

    await loadWall();
  }

  if (!wall) {
    return <h1>Carregando parede...</h1>;
  }

  const breadcrumbItems = [
    {
      label: "Home",

      path: "/",
    },

    {
      label: wall.name,
    },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-4 mb-8">
        <h1 className="text-4xl font-bold">{wall.name}</h1>

        <p className="text-zinc-400 mt-2">{wall.description}</p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Nova Biblioteca</h2>

        <form onSubmit={handleCreateLibrary} className="space-y-4">
          <input
            type="text"
            placeholder="Nome da biblioteca"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3"
          />

          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3"
          />

          <button
            type="submit"
            className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:opacity-90 transition cursor-pointer"
          >
            Criar Biblioteca
          </button>
        </form>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Bibliotecas</h2>

        {wall.libraries.length === 0 ? (
          <p className="text-zinc-500">Nenhuma biblioteca cadastrada.</p>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {wall.libraries.map((library) => (
              <div
                key={library.id}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:bg-zinc-800 transition"
              >
                <Link to={`/libraries/${library.id}`}>
                  <h3 className="font-semibold text-lg hover:text-zinc-300">
                    {library.name}
                  </h3>

                  <p className="text-zinc-400 text-sm mt-2">
                    {library.description}
                  </p>

                  <p className="text-zinc-500 text-xs mt-4">
                    {library.volumes.length} volumes
                  </p>
                </Link>

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleEditLibrary(library)}
                    className="text-sm bg-zinc-800 px-3 py-1 rounded hover:bg-zinc-700 transition cursor-pointer"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => handleDeleteLibrary(library.id)}
                    className="text-sm bg-red-900 px-3 py-1 rounded hover:opacity-90 transition cursor-pointer"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default WallDetails;
