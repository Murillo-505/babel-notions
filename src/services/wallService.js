// const API_URL = "http://localhost:3000";
const API_URL = import.meta.env.VITE_API_URL;

export async function getWalls() {
  const response = await fetch(`${API_URL}/walls`);

  return response.json();
}

export async function getWallById(id) {
  const response = await fetch(`${API_URL}/walls/${id}`);

  return response.json();
}

export async function createWall(wall) {
  const response = await fetch(`${API_URL}/walls`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(wall),
  });

  return response.json();
}

export async function updateWall(id, wall) {
  const response = await fetch(`${API_URL}/walls/${id}`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(wall),
  });

  return response.json();
}

export async function deleteWall(id) {
  await fetch(`${API_URL}/walls/${id}`, {
    method: "DELETE",
  });
}
