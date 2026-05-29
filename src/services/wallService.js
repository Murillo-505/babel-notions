const API_URL = 'https://babel-notions-api.onrender.com'

export async function getWalls(){
  const response = await fetch(`${API_URL}/walls`)

  return response.json()
}

export async function getWallById(id){
  const response = await fetch(`${API_URL}/walls/${id}`)
 
  return response.json()
}