const API_URL = 'http://localhost:3000'

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