const prisma = require("../config/prisma");

async function listLibraries(request, response) {
  const libraries = await prisma.library.findMany({
    include: {
      shelves: {
        include: {
          volumes: true,
        },
      },
    },
  });

  response.json(libraries);
}

async function getLibrary(request, response) {
  const { id } = request.params;

  const library = await prisma.library.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      wall: true,
      shelves: {
        include: {
          volumes: true,
        },
      },
    },
  });

  response.json(library);
}

async function createLibrary(request, response) {
  const { name, description, wallId } = request.body;

  const library = await prisma.library.create({
    data: {
      name,
      description,
      wallId,
    },
  });

  response.status(201).json(library);
}

async function updateLibrary(request, response) {
  const { id } = request.params;
  const { name, description } = request.body;

  const updatedLibrary = await prisma.library.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      description,
    },
  });

  response.json(updatedLibrary);
}

async function deleteLibrary(request, response) {
  const { id } = request.params;
  const libraryId = Number(id);

  const shelves = await prisma.shelf.findMany({
    where: { libraryId },
    select: { id: true },
  });

  const shelfIds = shelves.map((shelf) => shelf.id);

  if (shelfIds.length > 0) {
    await prisma.volume.deleteMany({
      where: {
        shelfId: { in: shelfIds },
      },
    });
  }

  await prisma.shelf.deleteMany({
    where: { libraryId },
  });

  await prisma.library.delete({
    where: {
      id: libraryId,
    },
  });

  response.status(204).send();
}

module.exports = {
  listLibraries,
  getLibrary,
  createLibrary,
  updateLibrary,
  deleteLibrary,
};
