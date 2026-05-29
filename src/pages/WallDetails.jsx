import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getWallById } from '../services/wallService'

function WallDetails() {
  const { id } = useParams()

  const [wall, setWall] = useState(null)

  useEffect(() => {
    async function loadWall() {
      const data = await getWallById(id)

      setWall(data)
    }

    loadWall()
  }, [id])

  if (!wall) {
    return (
      <h1>
        Carregando parede...
      </h1>
    )
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
        <h1 className="text-4xl font-bold">
          {wall.name}
        </h1>

        <p className="text-zinc-400 mt-2">
          {wall.description}
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">
          Bibliotecas
        </h2>

        <div className="grid grid-cols-3 gap-4">
          {wall.libraries.map((library) => (
            <Link
              key={library.id}
              to={`/libraries/${library.id}`}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:bg-zinc-800 transition"
            >

              <h3 className="font-semibold text-lg">
                {library.name}
              </h3>

              <p className="text-zinc-400 text-sm mt-2">
                {library.description}
              </p>

              <p className="text-zinc-500 text-xs mt-4">
                {library.volumes.length}{' '}volumes
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default WallDetails