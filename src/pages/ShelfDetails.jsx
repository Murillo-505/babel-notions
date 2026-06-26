import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import LoadingSkeleton from "../components/LoadingSkeleton";
import CreateEntityForm from "../components/CreateEntityForm";
import BookSpine from "../components/library/BookSpine";

import { getShelfById } from "../services/shelfService";
import { createVolume } from "../services/volumeService";

import Breadcrumb from "../components/Breadcrumb";

function ShelfDetails() {
  const { id } = useParams();

  const [shelf, setShelf] = useState(null);
  const [volumeTitle, setVolumeTitle] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    loadShelf();
  }, [id]);

  async function loadShelf() {
    const data = await getShelfById(id);

    setShelf(data);
  }

  async function handleCreateVolume(event) {
    event.preventDefault();

    if (!volumeTitle.trim()) return;

    await createVolume({
      title: volumeTitle,
      shelfId: Number(id),
      content: "",
    });

    setVolumeTitle("");
    setShowCreateForm(false);

    await loadShelf();
  }

  if (!shelf) {
    return <LoadingSkeleton />;
  }

  const library = shelf.library;

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
      path: `/estantes/${library.id}`,
    },
    {
      label: shelf.name,
    },
  ];

  return (
    <div className="min-w-0 max-w-full">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-4 mb-8">
        <h1 className="text-4xl font-bold">{shelf.name}</h1>

        <p className="text-zinc-400 mt-2">{shelf.description}</p>
      </div>

      <CreateEntityForm
        entityName="Volume"
        isOpen={showCreateForm}
        onToggle={() => setShowCreateForm(!showCreateForm)}
        onSubmit={handleCreateVolume}
      >
        <input
          type="text"
          placeholder="Nome do volume"
          value={volumeTitle}
          onChange={(event) => setVolumeTitle(event.target.value)}
          className="input-sm"
        />
      </CreateEntityForm>

      <section>
        <h2 className="text-2xl font-bold mb-4">Volumes</h2>

        {(shelf.volumes ?? []).length === 0 ? (
          <div className="library-shelf-detail">
            <div className="library-shelf-surface library-shelf-surface-lg flex min-h-[6.5rem] flex-wrap items-end">
              <span className="px-2 pb-2 text-sm italic text-zinc-600">
                Nenhum volume nesta prateleira
              </span>
            </div>
          </div>
        ) : (
          <div className="library-shelf-detail">
            <div className="library-shelf-surface library-shelf-surface-lg flex min-h-[6.5rem] flex-wrap items-end gap-1 px-2 pb-2 pt-3">
              {(shelf.volumes ?? []).map((volume) => (
                <BookSpine
                  key={volume.id}
                  volume={volume}
                  showLabel
                  size="lg"
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default ShelfDetails;
