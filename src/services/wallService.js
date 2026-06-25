// const API_URL = "http://localhost:3000";
const API_URL = import.meta.env.VITE_API_URL;
console.log(
  'API_URL:',
  import.meta.env.VITE_API_URL
)

export async function getWalls() {
  const response = await fetch(`${API_URL}/walls`);

  const text = await response.text();

  console.log(text);

  const data = JSON.parse(text);

  return data;

  return data;
}

export async function getWallById(id) {
  const response = await fetch(`${API_URL}/walls/${id}`);

  const text = await response.text();

  console.log(text);

  const data = JSON.parse(text);

  return data;

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

  const text = await response.text();

  console.log(text);

  const data = JSON.parse(text);

  return data;

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

  const text = await response.text();

  console.log(text);

  const data = JSON.parse(text);

  return data;

  return data;
}

export async function deleteWall(id) {
  await fetch(`${API_URL}/walls/${id}`, {
    method: "DELETE",
  });
}
