const API_URL = import.meta.env.VITE_API_URL;

export async function getShelfById(id) {
  const response = await fetch(`${API_URL}/shelves/${id}`);

  const data = await response.json();

  return data;
}

export async function createShelf(shelf) {
  const response = await fetch(`${API_URL}/shelves`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(shelf),
  });

  return response.json();
}

export async function deleteShelf(id) {
  await fetch(`${API_URL}/shelves/${id}`, {
    method: "DELETE",
  });
}

export async function updateShelf(id, shelf) {
  const response = await fetch(`${API_URL}/shelves/${id}`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(shelf),
  });

  return response.json();
}
