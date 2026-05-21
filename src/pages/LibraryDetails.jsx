import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import VolumeCard from '../components/VolumeCard'
import { getLibraryById } from '../services/libraryService'

function LibraryDetails() {
  const { id } = useParams()

  const [library, setLibrary] =
    useState(null)

  useEffect(() => {
    async function loadLibrary() {
      const data =
        await getLibraryById(id)

      setLibrary(data)
    }

    loadLibrary()
  }, [id])

  if (!library) {
    return <h1>Carregando...</h1>
  }

  return (
    <div>
      <Link
        to="/"
        className="text-zinc-400 hover:text-white transition"
      >
        ← Voltar
      </Link>

      <div className="mt-4 mb-8">
        <h1 className="text-4xl font-bold mb-2">
          {library.name}
        </h1>

        <p className="text-zinc-400">
          {library.description}
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">
          Volumes
        </h2>

        <div className="grid grid-cols-3 gap-4">
          {library.volumes.map((volume) => (
            <VolumeCard
              key={volume.id}
              title={volume.title}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default LibraryDetails