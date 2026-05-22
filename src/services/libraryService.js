const API_URL = 'https://babel-notions-api.onrender.com'

export async function getLibraries() {
  const response = await fetch(`${API_URL}/libraries`)

  const data = await response.json()

  return data
}

export async function getLibraryById(id) {
  const response = await fetch(`${API_URL}/libraries/${id}`)

  const data = await response.json()

  return data
}

export async function createLibrary(library) {
  const response =
    await fetch(
      `${API_URL}/libraries`,
      {
        method: 'POST',

        headers: {
          'Content-Type':
            'application/json',
        },

        body: JSON.stringify(
          library
        ),
      }
    )

  return response.json()
}

export async function deleteLibrary(id) {
  await fetch(
    `${API_URL}/libraries/${id}`,
    {
      method: 'DELETE',
    }
  )
}

export async function updateLibrary(id, library) {
  const response =
    await fetch(
      `${API_URL}/libraries/${id}`,
      {
        method: 'PUT',

        headers: {
          'Content-Type':
            'application/json',
        },

        body: JSON.stringify(
          library
        ),
      }
    )
  return response.json()
}