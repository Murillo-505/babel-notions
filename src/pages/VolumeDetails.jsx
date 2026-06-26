import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";
import LoadingSkeleton from "../components/LoadingSkeleton";
import VolumeActionsMenu from "../components/VolumeActionsMenu";

import VolumeEditor from "../components/VolumeEditor";

import {
  getFavoriteVolumes,
  removeFavoriteVolume,
  saveFavoriteVolume,
  saveRecentVolume,
  removeStoredVolume,
  updateStoredVolumeMetadata,
} from "../services/localDataService";

import {
  deleteVolume,
  getVolumeById,
  updateVolume,
} from "../services/volumeService";

function VolumeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [volume, setVolume] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saveStatus, setSaveStatus] = useState("Salvo");
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    async function loadVolume() {
      const data = await getVolumeById(id);

      if (!data) return;

      setVolume(data);
      setTitle(data.title);
      setContent(data.content || "");

      saveRecentVolume(data);
      setIsFavorite(checkFavorite(data.id));
    }

    loadVolume();
  }, [id]);

  useEffect(() => {
    if (!volume) return;

    setSaveStatus("Salvando...");

    const timeout = setTimeout(() => {
      handleAutoSave();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [title, content]);

  async function handleAutoSave() {
    await updateVolume(id, {
      title,
      content,
    });

    updateStoredVolumeMetadata(id, { title });

    setSaveStatus("Salvo");
  }

  function checkFavorite(volumeId) {
    return getFavoriteVolumes().some((item) => item.id === volumeId);
  }

  function toggleFavorite() {
    if (isFavorite) {
      removeFavoriteVolume(volume.id);
      setIsFavorite(false);
      return;
    }

    saveFavoriteVolume(volume, title);
    setIsFavorite(true);
  }

  function downloadFile(filename, mimeType, fileContent) {
    const blob = new Blob([fileContent], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = filename;
    link.click();

    URL.revokeObjectURL(url);
  }

  function handleExportText() {
    downloadFile(`${title}.txt`, "text/plain", `${title}\n\n${content}`);
  }

  function handleExportMarkdown() {
    downloadFile(`${title}.md`, "text/markdown", content);
  }

  async function handleConfirmDelete() {
    await deleteVolume(id);

    removeStoredVolume(id);

    navigate(`/shelves/${volume.shelfId}`);
  }

  if (!volume) {
    return <LoadingSkeleton />;
  }

  const library = volume.shelf.library;

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
      label: volume.shelf.name,
      path: `/shelves/${volume.shelfId}`,
    },
    {
      label: title,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex justify-between items-center gap-4 mb-6">
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full text-3xl font-bold border-none outline-none bg-transparent focus:ring-0"
        />

        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={toggleFavorite}
            className={`flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/80 text-xl transition-colors duration-200 hover:border-zinc-600 hover:bg-zinc-800 cursor-pointer ${
              isFavorite ? "text-amber-400" : "text-zinc-400 hover:text-amber-400"
            }`}
            aria-label={
              isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
            }
          >
            {isFavorite ? "★" : "☆"}
          </button>

          <VolumeActionsMenu
            isDeleting={isDeleting}
            onExportText={handleExportText}
            onExportMarkdown={handleExportMarkdown}
            onStartDelete={() => setIsDeleting(true)}
            onCancelDelete={() => setIsDeleting(false)}
            onConfirmDelete={handleConfirmDelete}
          />
        </div>

        <span className="text-sm text-zinc-400 ml-2 whitespace-nowrap">
          {saveStatus}
        </span>
      </div>

      <VolumeEditor
        value={content}
        onChange={(nextContent) => {
          setContent(nextContent);
        }}
        placeholder="Escreva sua nota... Use negrito, itálico, ## títulos e - listas."
      />
    </div>
  );
}

export default VolumeDetails;
