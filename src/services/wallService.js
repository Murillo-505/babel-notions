const API_URL = "http://localhost:3000";
// const API_URL = import.meta.env.VITE_API_URL;

export async function getWalls() {
  const response = await fetch(`${API_URL}/walls`);

  const data = await response.json();

  return data;
}

export async function getWallById(id) {
  const response = await fetch(`${API_URL}/walls/${id}`);

  const data = await response.json();

  return data;
}

export async function createWall(wall) {
  const response = await fetch(`${API_URL}/walls`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(wall),
  });

  const data = await response.json();

  return data;
}

export async function updateWall(id, wall) {
  const response = await fetch(`${API_URL}/walls/${id}`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(wall),
  });

  const data = await response.json();

  return data;
}

export async function deleteWall(id) {
  await fetch(`${API_URL}/walls/${id}`, {
    method: "DELETE",
  });
}
