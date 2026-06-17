import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";

function VolumeDetails() {
  const { id } = useParams();

  const [volume, setVolume] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saveStatus, setSaveStatus] = useState("Salvo");
  const [isFavorite, setIsFavorite] = useState(false);

  function saveRecentVolume(volume) {
    const recentVolumes =
      JSON.parse(localStorage.getItem("recentVolumes")) || [];

    const filtered = recentVolumes.filter((item) => item.id !== volume.id);

    const updated = [
      {
        id: volume.id,
        title: volume.title,
        libraryId: volume.libraryId,
      },

      ...filtered,
    ].slice(0, 5);

    localStorage.setItem("recentVolumes", JSON.stringify(updated));
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/volumes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data) return;

        setVolume(data);
        setTitle(data.title);
        setContent(data.content || "");
        saveRecentVolume(data);
        setIsFavorite(checkFavorite(data.id));
      });
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
    await fetch(`${import.meta.env.VITE_API_URL}/volumes/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title,
        content,
      }),
    });

    setSaveStatus("✓ Salvo");
  }

  function checkFavorite(volumeId) {
    const favorites = JSON.parse(localStorage.getItem("favoriteVolumes")) || [];

    return favorites.some((item) => item.id === volumeId);
  }

  function toggleFavorite() {
    const favorites = JSON.parse(localStorage.getItem("favoriteVolumes")) || [];

    if (isFavorite) {
      const updated = favorites.filter((item) => item.id !== volume.id);

      localStorage.setItem("favoriteVolumes", JSON.stringify(updated));

      setIsFavorite(false);

      return;
    }

    const updated = [
      {
        id: volume.id,
        title: title,
        libraryId: volume.libraryId,
      },

      ...favorites,
    ];

    localStorage.setItem("favoriteVolumes", JSON.stringify(updated));

    setIsFavorite(true);
  }

  if (!volume) {
    return <p>Carregando...</p>;
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
    <div className="max-w-4xl mx-auto p-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex justify-between items-center gap-4 mb-6">
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full text-3xl font-bold border-none outline-none bg-transparent"
        />

        <button
          onClick={toggleFavorite}
          className="text-3xl hover:scale-110 transition cursor-pointer"
        >
          {isFavorite ? "★" : "☆"}
        </button>

        <span className="text-sm text-zinc-400 ml-4 whitespace-nowrap">
          {saveStatus}
        </span>
      </div>

      <textarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder="Escreva sua nota..."
        className="w-full min-h-[500px] p-4 border border-zinc-800 rounded-xl resize-none outline-none bg-zinc-900"
      />
    </div>
  );
}

export default VolumeDetails;
