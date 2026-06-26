const prisma = require("../config/prisma");

async function listShelves(request, response) {
  const shelves = await prisma.shelf.findMany({
    include: {
      volumes: true,
    },
  });

  response.json(shelves);
}

async function getShelf(request, response) {
  const { id } = request.params;

  const shelf = await prisma.shelf.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      library: {
        include: {
          wall: true,
        },
      },
      volumes: true,
    },
  });

  response.json(shelf);
}

async function createShelf(request, response) {
  const { name, description, libraryId } = request.body;

  const shelf = await prisma.shelf.create({
    data: {
      name,
      description: description ?? "",
      libraryId,
    },
  });

  response.status(201).json(shelf);
}

async function updateShelf(request, response) {
  const { id } = request.params;
  const { name, description } = request.body;

  const updatedShelf = await prisma.shelf.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      description,
    },
  });

  response.json(updatedShelf);
}

async function deleteShelf(request, response) {
  const { id } = request.params;

  await prisma.volume.deleteMany({
    where: {
      shelfId: Number(id),
    },
  });

  await prisma.shelf.delete({
    where: {
      id: Number(id),
    },
  });

  response.status(204).send();
}

module.exports = {
  listShelves,
  getShelf,
  createShelf,
  updateShelf,
  deleteShelf,
};
