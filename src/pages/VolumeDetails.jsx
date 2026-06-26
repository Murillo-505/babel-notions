import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";
import LoadingSkeleton from "../components/LoadingSkeleton";

import VolumeEditor from "../components/VolumeEditor";

import {
  getFavoriteVolumes,
  notifyFavoritesChanged,
  saveRecentVolume,
} from "../services/localDataService";

import { getVolumeById, updateVolume } from "../services/volumeService";

function VolumeDetails() {
  const { id } = useParams();

  const [volume, setVolume] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saveStatus, setSaveStatus] = useState("Salvo");
  const [isFavorite, setIsFavorite] = useState(false);

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

    setSaveStatus("Salvo");
  }

  function checkFavorite(volumeId) {
    return getFavoriteVolumes().some((item) => item.id === volumeId);
  }

  function toggleFavorite() {
    const favorites = getFavoriteVolumes();

    if (isFavorite) {
      const updated = favorites.filter((item) => item.id !== volume.id);

      localStorage.setItem("favoriteVolumes", JSON.stringify(updated));

      setIsFavorite(false);
      notifyFavoritesChanged();

      return;
    }

    const updated = [
      {
        id: volume.id,
        title,
        libraryId: volume.libraryId,
      },
      ...favorites,
    ];

    localStorage.setItem("favoriteVolumes", JSON.stringify(updated));

    setIsFavorite(true);
    notifyFavoritesChanged();
  }

  function handleExport() {
    const text = `${title}

${content}`;

    const blob = new Blob([text], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = `${title}.txt`;
    link.click();

    URL.revokeObjectURL(url);
  }

  if (!volume) {
    return <LoadingSkeleton />;
  }

  const breadcrumbItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: volume.library?.wall?.name,
      path: `/walls/${volume.library?.wallId}`,
    },
    {
      label: volume.library?.name,
      path: `/libraries/${volume.libraryId}`,
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

        <button
          onClick={toggleFavorite}
          className={`text-3xl transition-colors duration-200 cursor-pointer ${
            isFavorite ? "text-amber-400" : "text-zinc-400 hover:text-amber-400"
          }`}
          aria-label={
            isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
          }
        >
          {isFavorite ? "★" : "☆"}
        </button>

        <button onClick={handleExport} className="btn-secondary">
          Exportar
        </button>

        <span className="text-sm text-zinc-400 ml-2 whitespace-nowrap">
          {saveStatus}
        </span>
      </div>

      <VolumeEditor
        //editorRef={contentRef}
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
