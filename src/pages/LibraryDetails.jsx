import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import LoadingSkeleton from "../components/LoadingSkeleton";

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
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [deletingId, setDeletingId] = useState(null);

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

  function startEditVolume(volume) {
    setEditingId(volume.id);
    setEditTitle(volume.title);
    setDeletingId(null);
  }

  function cancelEditVolume() {
    setEditingId(null);
    setEditTitle("");
  }

  async function saveEditVolume(volume) {
    if (!editTitle.trim()) return;

    await updateVolume(volume.id, {
      title: editTitle,
      content: volume.content,
    });

    cancelEditVolume();
    await loadLibrary();
  }

  async function confirmDeleteVolume(volumeId) {
    await deleteVolume(volumeId);

    setDeletingId(null);
    await loadLibrary();
  }

  if (!library) {
    return <LoadingSkeleton />;
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

      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">Novo Volume</h2>

        <form onSubmit={handleCreateVolume} className="flex gap-4">
          <input
            type="text"
            placeholder="Nome do volume"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="input-sm flex-1"
          />

          <button type="submit" className="btn-primary">
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
              <div key={volume.id} className="card-sm">
                {editingId === volume.id ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(event) => setEditTitle(event.target.value)}
                      className="input-sm"
                      placeholder="Nome do volume"
                    />

                    <div className="flex gap-2">
                      <button
                        onClick={() => saveEditVolume(volume)}
                        className="btn-primary"
                      >
                        Salvar
                      </button>

                      <button
                        onClick={cancelEditVolume}
                        className="btn-secondary-sm"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
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

                    <div className="flex gap-2 mt-4 items-center flex-wrap">
                      <button
                        onClick={() => startEditVolume(volume)}
                        className="btn-secondary-sm"
                      >
                        Editar
                      </button>

                      {deletingId === volume.id ? (
                        <>
                          <span className="text-xs text-zinc-400">
                            Tem certeza?
                          </span>

                          <button
                            onClick={() => confirmDeleteVolume(volume.id)}
                            className="btn-danger-sm"
                          >
                            Sim, excluir
                          </button>

                          <button
                            onClick={() => setDeletingId(null)}
                            className="btn-secondary-sm"
                          >
                            Cancelar
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => {
                            setDeletingId(volume.id);
                            cancelEditVolume();
                          }}
                          className="btn-danger-sm"
                        >
                          Excluir
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default LibraryDetails;
