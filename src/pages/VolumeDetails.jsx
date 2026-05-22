import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function VolumeDetails() {
  const { id } = useParams()
  const [volume, setVolume] = useState(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(
      `http://babel-notions-api.onrender.com/volumes/${id}`
    )
      .then((response) =>
        response.json()
      )
      .then((data) => {
        console.log(data)

        if (!data) return
        
        setVolume(data)
        setTitle(data.title)
        setContent(data.content || '')
      })
  }, [id])

  async function handleSave() {
    await fetch(
      `http://babel-notions-api.onrender.com/volumes/${id}`,
      {
        method: 'PUT',

        headers: {
          'Content-Type':
            'application/json',
        },

        body: JSON.stringify({
          title,
          content,
        }),
      }
    )
    alert('Nota salva')
  }
  if (!volume) {
    return (
      <p>Carregando...</p>
    )
  }
  return (
    <div className="max-w-4xl mx-auto p-8">
      <input
        type="text"
        value={title}
        onChange={(event) =>
          setTitle(
            event.target.value
          )
        }
        className="w-full text-3xl font-bold border-none outline-none mb-6"
      />

      <textarea
        value={content}
        onChange={(event) =>
          setContent(
            event.target.value
          )
        }
        placeholder="Escreva sua nota..."
        className="w-full min-h-[500px] p-4 border rounded-xl resize-none outline-none"
      />

      <button
        onClick={handleSave}
        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        Salvar
      </button>
    </div>
  )
}

export default VolumeDetails
