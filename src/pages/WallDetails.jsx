import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getWallById } from '../services/wallService'
import { createLibrary } from '../services/libraryService'

function WallDetails() {
  const { id } = useParams()

  const [wall, setWall] =
    useState(null)

  const [name, setName] =
    useState('')

  const [
    description,
    setDescription,
  ] = useState('')

  useEffect(() => {
    loadWall()
  }, [id])

  async function loadWall() {
    const data =
      await getWallById(id)

    setWall(data)
  }

  async function handleCreateLibrary(
    event
  ) {
    event.preventDefault()

    if (!name.trim()) return

    await createLibrary({
      name,
      description,
      wallId: Number(id),
    })

    setName('')
    setDescription('')

    await loadWall()
  }

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

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">
          Nova Biblioteca
        </h2>

        <form
          onSubmit={
            handleCreateLibrary
          }
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Nome da biblioteca"
            value={name}
            onChange={(event) =>
              setName(
                event.target.value
              )
            }
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3"
          />

          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(event) =>
              setDescription(
                event.target.value
              )
            }
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3"
          />

          <button
            type="submit"
            className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:opacity-90 transition"
          >
            Criar Biblioteca
          </button>
        </form>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">
          Bibliotecas
        </h2>

        {wall.libraries.length ===
          0 ? (
          <p className="text-zinc-500">
            Nenhuma biblioteca
            cadastrada.
          </p>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {wall.libraries.map(
              (library) => (
                <Link
                  key={library.id}
                  to={`/libraries/${library.id}`}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:bg-zinc-800 transition"
                >
                  <h3 className="font-semibold text-lg">
                    {library.name}
                  </h3>

                  <p className="text-zinc-400 text-sm mt-2">
                    {
                      library.description
                    }
                  </p>

                  <p className="text-zinc-500 text-xs mt-4">
                    {
                      library
                        .volumes
                        .length
                    }{' '}
                    volumes
                  </p>
                </Link>
              )
            )}
          </div>
        )}
      </section>
    </div>
  )
}

export default WallDetails