import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import LoadingSkeleton from "../components/LoadingSkeleton";
import EntityActionsMenu from "../components/EntityActionsMenu";
import CreateEntityForm from "../components/CreateEntityForm";

import { getLibraryById } from "../services/libraryService";
import { createShelf, deleteShelf, updateShelf } from "../services/shelfService";

import Breadcrumb from "../components/Breadcrumb";
import ShelfRow from "../components/library/ShelfRow";

function LibraryDetails() {
  const { id } = useParams();

  const [library, setLibrary] = useState(null);
  const [shelfName, setShelfName] = useState("");
  const [shelfDescription, setShelfDescription] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    loadLibrary();
  }, [id]);

  async function loadLibrary() {
    const data = await getLibraryById(id);

    setLibrary(data);
  }

  async function handleCreateShelf(event) {
    event.preventDefault();

    if (!shelfName.trim()) return;

    await createShelf({
      name: shelfName,
      description: shelfDescription,
      libraryId: Number(id),
    });

    setShelfName("");
    setShelfDescription("");
    setShowCreateForm(false);

    await loadLibrary();
  }

  function startEditShelf(shelf) {
    setEditingId(shelf.id);
    setEditName(shelf.name);
    setEditDescription(shelf.description || "");
    setDeletingId(null);
  }

  function cancelEditShelf() {
    setEditingId(null);
    setEditName("");
    setEditDescription("");
  }

  async function saveEditShelf(shelfId) {
    if (!editName.trim()) return;

    await updateShelf(shelfId, {
      name: editName,
      description: editDescription || "",
    });

    cancelEditShelf();
    await loadLibrary();
  }

  async function confirmDeleteShelf(shelfId) {
    await deleteShelf(shelfId);

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
    <div className="min-w-0 max-w-full">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-4 mb-8">
        <h1 className="text-4xl font-bold">{library.name}</h1>

        <p className="text-zinc-400 mt-2">{library.description}</p>
      </div>

      <CreateEntityForm
        entityName="Prateleira"
        isOpen={showCreateForm}
        onToggle={() => setShowCreateForm(!showCreateForm)}
        onSubmit={handleCreateShelf}
      >
        <input
          type="text"
          placeholder="Nome da prateleira"
          value={shelfName}
          onChange={(event) => setShelfName(event.target.value)}
          className="input-sm"
        />

        <textarea
          placeholder="Descrição"
          value={shelfDescription}
          onChange={(event) => setShelfDescription(event.target.value)}
          className="input-sm"
        />
      </CreateEntityForm>

      <section>
        <h2 className="text-2xl font-bold mb-4">Prateleiras</h2>

        {(library.shelves ?? []).length === 0 ? (
          <p className="text-zinc-500">Nenhuma prateleira cadastrada.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {(library.shelves ?? []).map((shelf) => (
              <div key={shelf.id} className="library-bookshelf relative p-3">
                {editingId === shelf.id ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={editName}
                      onChange={(event) => setEditName(event.target.value)}
                      className="input-sm"
                      placeholder="Nome da prateleira"
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
                        onClick={() => saveEditShelf(shelf.id)}
                        className="btn-primary"
                      >
                        Salvar
                      </button>

                      <button
                        onClick={cancelEditShelf}
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
                        ariaLabel="Ações da prateleira"
                        isDeleting={deletingId === shelf.id}
                        onStartEdit={() => startEditShelf(shelf)}
                        onStartDelete={() => {
                          setDeletingId(shelf.id);
                          cancelEditShelf();
                        }}
                        onCancelDelete={() => setDeletingId(null)}
                        onConfirmDelete={() => confirmDeleteShelf(shelf.id)}
                      />
                    </div>

                    <Link
                      to={`/shelves/${shelf.id}`}
                      className="block cursor-pointer pr-10"
                    >
                      <h3 className="mb-3 truncate px-1 font-semibold text-lg hover:text-zinc-300">
                        {shelf.name}
                      </h3>

                      <div className="library-bookshelf-body p-3">
                        <ShelfRow shelf={shelf} readOnly />
                      </div>
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

export default LibraryDetails;
