import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import LoadingSkeleton from "../components/LoadingSkeleton";

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
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [deletingId, setDeletingId] = useState(null);

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

  function startEditLibrary(library) {
    setEditingId(library.id);
    setEditName(library.name);
    setEditDescription(library.description || "");
    setDeletingId(null);
  }

  function cancelEditLibrary() {
    setEditingId(null);
    setEditName("");
    setEditDescription("");
  }

  async function saveEditLibrary(libraryId) {
    if (!editName.trim()) return;

    await updateLibrary(libraryId, {
      name: editName,
      description: editDescription || "",
    });

    cancelEditLibrary();
    await loadWall();
  }

  async function confirmDeleteLibrary(libraryId) {
    await deleteLibrary(libraryId);

    setDeletingId(null);
    await loadWall();
  }

  if (!wall) {
    return <LoadingSkeleton />;
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

      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">Nova Biblioteca</h2>

        <form onSubmit={handleCreateLibrary} className="space-y-4">
          <input
            type="text"
            placeholder="Nome da biblioteca"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="input-sm"
          />

          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="input-sm"
          />

          <button type="submit" className="btn-primary">
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
              <div key={library.id} className="card-sm-hover">
                {editingId === library.id ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={editName}
                      onChange={(event) => setEditName(event.target.value)}
                      className="input-sm"
                      placeholder="Nome da biblioteca"
                    />

                    <textarea
                      value={editDescription}
                      onChange={(event) =>
                        setEditDescription(event.target.value)
                      }
                      className="input-sm"
                      placeholder="Descrição"
                    />

                    <div className="flex gap-2">
                      <button
                        onClick={() => saveEditLibrary(library.id)}
                        className="btn-primary"
                      >
                        Salvar
                      </button>

                      <button
                        onClick={cancelEditLibrary}
                        className="btn-secondary-sm"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
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

                    <div className="flex gap-2 mt-4 items-center flex-wrap">
                      <button
                        onClick={() => startEditLibrary(library)}
                        className="btn-secondary-sm"
                      >
                        Editar
                      </button>

                      {deletingId === library.id ? (
                        <>
                          <span className="text-xs text-zinc-400">
                            Tem certeza?
                          </span>

                          <button
                            onClick={() => confirmDeleteLibrary(library.id)}
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
                            setDeletingId(library.id);
                            cancelEditLibrary();
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

export default WallDetails;
