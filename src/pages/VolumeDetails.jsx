import {
  useEffect,
  useState,
} from 'react'

import { useParams } from 'react-router-dom'

function VolumeDetails() {
  const { id } = useParams()

  const [volume, setVolume] =
    useState(null)

  const [title, setTitle] =
    useState('')

  const [content, setContent] =
    useState('')

  const [saveStatus, setSaveStatus] =
    useState('Salvo')

  useEffect(() => {
    fetch(
      `https://babel-notions-api.onrender.com/volumes/${id}`
    )
      .then((response) =>
        response.json()
      )
      .then((data) => {
        if (!data) return

        setVolume(data)
        setTitle(data.title)
        setContent(
          data.content || ''
        )
      })
  }, [id])

  useEffect(() => {
    if (!volume) return

    setSaveStatus(
      'Salvando...'
    )

    const timeout =
      setTimeout(() => {
        handleAutoSave()
      }, 1000)

    return () =>
      clearTimeout(timeout)
  }, [title, content])

  async function handleAutoSave() {
    await fetch(
      `https://babel-notions-api.onrender.com/volumes/${id}`,
      {
        method: 'PUT',

        headers: {
          'Content-Type':
            'application/json',
        },

        body:
          JSON.stringify({
            title,
            content,
          }),
      }
    )

    setSaveStatus(
      '✓ Salvo'
    )
  }

  if (!volume) {
    return (
      <p>
        Carregando...
      </p>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          value={title}
          onChange={(event) =>
            setTitle(
              event.target.value
            )
          }
          className="w-full text-3xl font-bold border-none outline-none bg-transparent"
        />

        <span className="text-sm text-zinc-400 ml-4 whitespace-nowrap">
          {saveStatus}
        </span>
      </div>

      <textarea
        value={content}
        onChange={(event) =>
          setContent(
            event.target.value
          )
        }
        placeholder="Escreva sua nota..."
        className="w-full min-h-[500px] p-4 border border-zinc-800 rounded-xl resize-none outline-none bg-zinc-900"
      />
    </div>
  )
}

export default VolumeDetails