import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import SearchBar from '../components/SearchBar'

import { getWalls } from '../services/wallService'

function Home() {
  const [search, setSearch] = useState('')

  const [walls, setWalls] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadWalls() {
      const data = await getWalls()

      setWalls(data)
      setLoading(false)
    }

    loadWalls()
  }, [])

  const filteredWalls =
    walls.map((wall) => ({
      ...wall,

      libraries:
        wall.libraries.filter(
          (library) =>
            library.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )
        ),
    }))

  if (loading) {
    return (
      <h1 className="text-xl">
        Carregando paredes...
      </h1>
    )
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">
        Babel Notions
      </h1>

      <p className="text-zinc-400 mb-6">
        Organize seu conhecimento em paredes, bibliotecas e volumes.
      </p>

      <div className="mb-8">
        <SearchBar
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />
      </div>

      <div className="space-y-8">
        {filteredWalls.map((wall) => (
          <section
            key={wall.id}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
          >
            <Link
              to={`/walls/${wall.id}`}
              className="block mb-4 hover:opacity-90 transition"
            >
              <h2 className="text-2xl font-bold hover:text-zinc-300">
                {wall.name}
              </h2>

              <p className="text-zinc-400">
                {wall.description}
              </p>
            </Link>

            {wall.libraries.length === 0 ? (
              <p className="text-zinc-500">
                Nenhuma biblioteca encontrada.
              </p>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {wall.libraries.map((library) => (
                  <Link
                    key={library.id}
                    to={`/libraries/${library.id}`}
                    className="bg-zinc-800 hover:bg-zinc-700 transition rounded-xl p-4 border border-zinc-700"
                  >
                    <h3 className="font-semibold text-lg">
                      {library.name}
                    </h3>

                    <p className="text-zinc-400 text-sm mt-1">
                      {library.description}
                    </p>

                    <p className="text-xs text-zinc-500 mt-3">
                      {library.volumes.length}{' '}volumes
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}

export default Home