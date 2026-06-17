import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getLibraryById } from "../services/libraryService";

import {
  createVolume,
  deleteVolume,
  updateVolume,
} from "../services/volumeService";

import Breadcrumb from "../components/Breadcrumb";

function LibraryDetails() {
  const { id } = useParams();

  const [library, setLibrary] = useState(null);

  const [title, setTitle] = useState("");

  useEffect(() => {
    loadLibrary();
  }, [id]);

  async function loadLibrary() {
    const data = await getLibraryById(id);

    setLibrary(data);
  }

  async function handleCreateVolume(event) {
    event.preventDefault();

    if (!title.trim()) return;

    await createVolume({
      title,
      libraryId: Number(id),
      content: "",
    });

    setTitle("");

    await loadLibrary();
  }

  async function handleDeleteVolume(volumeId) {
    const confirmed = window.confirm("Deseja excluir este volume?");

    if (!confirmed) return;

    await deleteVolume(volumeId);

    await loadLibrary();
  }

  async function handleEditVolume(volume) {
    const newTitle = prompt("Novo nome do volume:", volume.title);

    if (!newTitle) return;

    await updateVolume(volume.id, {
      title: newTitle,
      content: volume.content,
    });

    await loadLibrary();
  }

  if (!library) {
    return <h1>Carregando...</h1>;
  }

  const breadcrumbItems = [
    {
      label: "Home",

      path: "/",
    },

    {
      label: library.wall?.name,

      path: `/walls/${library.wallId}`,
    },

    {
      label: library.name,
    },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-4 mb-8">
        <h1 className="text-4xl font-bold mb-2">{library.name}</h1>

        <p className="text-zinc-400">{library.description}</p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Novo Volume</h2>

        <form onSubmit={handleCreateVolume} className="flex gap-4">
          <input
            type="text"
            placeholder="Nome do volume"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3"
          />

          <button
            type="submit"
            className="bg-white text-black px-5 rounded-lg font-medium hover:opacity-90 transition cursor-pointer"
          >
            Criar
          </button>
        </form>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Volumes</h2>

        {library.volumes.length === 0 ? (
          <p className="text-zinc-500">Nenhum volume criado.</p>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {library.volumes.map((volume) => (
              <div
                key={volume.id}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-4"
              >
                <Link to={`/volumes/${volume.id}`}>
                  <h3 className="font-semibold text-lg hover:text-zinc-300">
                    {volume.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-2 line-clamp-3">
                    {volume.content
                      ? volume.content.slice(0, 100) + "..."
                      : "Volume vazio"}
                  </p>
                </Link>

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleEditVolume(volume)}
                    className="text-sm bg-zinc-800 px-3 py-1 rounded hover:bg-zinc-700"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => handleDeleteVolume(volume.id)}
                    className="text-sm bg-red-900 px-3 py-1 rounded hover:opacity-90"
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

export default LibraryDetails;
