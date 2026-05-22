import { useState } from 'react'

function CreateLibraryForm({ onCreate }) {
  const [name, setName] = useState('')

  const [description, setDescription] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!name.trim()) {
      alert(
        'Digite um nome para a biblioteca.'
      )
      return
    }

    onCreate({
      name,
      description,
    })

    setName('')
    setDescription('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 mb-6"
    >
      <h2 className="text-xl font-bold mb-4">
        Nova Biblioteca
      </h2>

      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(event) =>
          setName(event.target.value)
        }
        className="w-full p-3 rounded bg-zinc-800 mb-3"
      />

      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(event) =>
          setDescription(
            event.target.value
          )
        }
        className="w-full p-3 rounded bg-zinc-800 mb-3"
      />

      <button
        type="submit"
        className="bg-blue-600 px-4 py-2 rounded hover:opacity-90 cursor-pointer"
      >
        Criar Biblioteca
      </button>
    </form>
  )
}

export default CreateLibraryForm