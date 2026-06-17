// const API_URL = "http://localhost:3000";
const API_URL = import.meta.env.VITE_API_URL;

export async function createVolume(volume) {
  const response = await fetch(`${API_URL}/volumes`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(volume),
  });

  return response.json();
}

export async function updateVolume(id, volume) {
  const response = await fetch(`${API_URL}/volumes/${id}`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(volume),
  });

  return response.json();
}

export async function deleteVolume(id) {
  await fetch(`${API_URL}/volumes/${id}`, {
    method: "DELETE",
  });
}
