import { useEffect, useState } from 'react'

import LibraryCard from '../components/LibraryCard'
import SearchBar from '../components/SearchBar'
import CreateLibraryForm from '../components/CreateLibraryForm'

import { getLibraries, createLibrary, deleteLibrary, updateLibrary } from '../services/libraryService'

function Home() {
  const [search, setSearch] = useState('')
  const [libraries, setLibraries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadLibraries() {
      const data = await getLibraries()
      setLibraries(data)
      setLoading(false)
    }

    loadLibraries()
  }, [])

  const filteredLibraries = libraries.filter(
    (library) =>
      library.name
        .toLowerCase()
        .includes(search.toLowerCase())
  )

  if (loading) {
    return (
      <h1 className="text-xl">
        Carregando bibliotecas...
      </h1>
    )
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">
        Biblioteca
      </h1>

      <p className="text-zinc-400 mb-6">
        Explore suas coleções de conhecimento.
      </p>

      <CreateLibraryForm
        onCreate={handleCreateLibrary}
      />

      <div className="mb-6">
        <SearchBar
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />
      </div>

      {filteredLibraries.length === 0 ? (
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <h2 className="text-xl font-bold mb-2">
            Nenhuma biblioteca encontrada
          </h2>

          <p className="text-zinc-400">
            Tente outra pesquisa ou crie uma nova biblioteca.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {filteredLibraries.map(
            (library) => (
              <LibraryCard
                key={library.id}
                id={library.id}
                name={library.name}
                description={library.description}
                onDelete={handleDeleteLibrary}
                onEdit={handleEditLibrary}
              />
            )
          )}
        </div>
      )}
    </div>
  )

  async function handleCreateLibrary(library) {
    await createLibrary(library)
    const updatedLibraries = await getLibraries()
    setLibraries(updatedLibraries)
  }

  async function handleDeleteLibrary(id) {
    const confirmed = window.confirm(
      'Tem certeza que deseja excluir esta biblioteca?'
    )
    if (!confirmed) {
      return
    }
    await deleteLibrary(id)
    const updatedLibraries = await getLibraries()
    setLibraries(updatedLibraries)

    alert(
      'Biblioteca removida com sucesso!'
    )
  }

  async function handleEditLibrary(library) {
    const newName = prompt(
        'Novo nome:', library.name
      )
    if (!newName) return
    const newDescription = prompt(
        'Nova descrição:', library.description
      )
    await updateLibrary(library.id ,{
        name: newName,
        description: newDescription,
      }
    )

    const updatedLibraries = await getLibraries()
    setLibraries(updatedLibraries)
  }
}

export default Home