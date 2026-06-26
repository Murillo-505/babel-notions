import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import LoadingSkeleton from "../components/LoadingSkeleton";
import EntityActionsMenu from "../components/EntityActionsMenu";

import { getWallById } from "../services/wallService";

import {
  createLibrary,
  updateLibrary,
  deleteLibrary,
} from "../services/libraryService";

import Breadcrumb from "../components/Breadcrumb";
import CreateEntityForm from "../components/CreateEntityForm";
import BookshelfPreview from "../components/library/BookshelfPreview";

function WallDetails() {
  const { id } = useParams();

  const [wall, setWall] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

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
    setShowCreateForm(false);

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
    <div className="min-w-0 max-w-full">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-4 mb-8">
        <h1 className="text-4xl font-bold">{wall.name}</h1>

        <p className="text-zinc-400 mt-2">{wall.description}</p>
      </div>

      <CreateEntityForm
        entityName="Estante"
        isOpen={showCreateForm}
        onToggle={() => setShowCreateForm(!showCreateForm)}
        onSubmit={handleCreateLibrary}
      >
        <input
          type="text"
          placeholder="Nome da estante"
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
      </CreateEntityForm>

      <section>
        <h2 className="text-2xl font-bold mb-4">Estantes</h2>

        {wall.libraries.length === 0 ? (
          <p className="text-zinc-500">Nenhuma estante cadastrada.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-1 xl:grid-cols-2">
            {wall.libraries.map((library) => (
              <div key={library.id} className="library-bookshelf relative p-3">
                {editingId === library.id ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={editName}
                      onChange={(event) => setEditName(event.target.value)}
                      className="input-sm"
                      placeholder="Nome da estante"
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
                    <div className="absolute top-3 right-3 z-10">
                      <EntityActionsMenu
                        ariaLabel="Ações da estante"
                        isDeleting={deletingId === library.id}
                        onStartEdit={() => startEditLibrary(library)}
                        onStartDelete={() => {
                          setDeletingId(library.id);
                          cancelEditLibrary();
                        }}
                        onCancelDelete={() => setDeletingId(null)}
                        onConfirmDelete={() => confirmDeleteLibrary(library.id)}
                      />
                    </div>

                    <Link
                      to={`/estantes/${library.id}`}
                      className="block cursor-pointer pr-10"
                    >
                      <h3 className="mb-3 truncate px-1 font-semibold text-lg hover:text-zinc-300">
                        {library.name}
                      </h3>

                      <BookshelfPreview library={library} />
                    </Link>
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
