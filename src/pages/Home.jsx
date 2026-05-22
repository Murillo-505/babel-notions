import { useEffect, useState } from 'react'

import LibraryCard from '../components/LibraryCard'
import SearchBar from '../components/SearchBar'
import CreateLibraryForm from '../components/CreateLibraryForm'

import { getLibraries, createLibrary } from '../services/libraryService'

function Home() {
  const [search, setSearch] = useState('')
  const [libraries, setLibraries] = useState([])

  useEffect(() => {
    async function loadLibraries() {
      const data = await getLibraries()
      setLibraries(data)
    }

    loadLibraries()
  }, [])

  const filteredLibraries = libraries.filter(
    (library) =>
      library.name
        .toLowerCase()
        .includes(search.toLowerCase())
  )

  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">
        Biblioteca
      </h1>

      <p className="text-zinc-400 mb-6">
        Explore suas coleções de conhecimento.
      </p>

      <CreateLibraryForm
        onCreate={ handleCreateLibrary }
      />

      <div className="mb-6">
        <SearchBar
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filteredLibraries.map((library) => (
          <LibraryCard
            key={library.id}
            id={library.id}
            name={library.name}
            description={library.description}
          />
        ))}
      </div>
    </div>
  )

  async function handleCreateLibrary(library) {
    await createLibrary(library)

    const updatedLibraries = await getLibraries()

    setLibraries(updatedLibraries)
  }
}

export default Home