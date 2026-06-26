const prisma = require("../config/prisma");

async function listWalls(request, response) {
  const walls = await prisma.wall.findMany({
    include: {
      libraries: {
        include: {
          volumes: true,
        },
      },
    },
  });

  response.json(walls);
}

async function getWall(request, response) {
  const { id } = request.params;

  const wall = await prisma.wall.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      libraries: {
        include: {
          volumes: true,
        },
      },
    },
  });

  response.json(wall);
}

async function createWall(request, response) {
  const { name, description } = request.body;

  const wall = await prisma.wall.create({
    data: {
      name,
      description,
    },
  });

  response.status(201).json(wall);
}

async function updateWall(request, response) {
  const { id } = request.params;
  const { name, description } = request.body;

  const updatedWall = await prisma.wall.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      description,
    },
  });

  response.json(updatedWall);
}

async function deleteWall(request, response) {
  const { id } = request.params;

  await prisma.wall.delete({
    where: {
      id: Number(id),
    },
  });

  response.status(204).send();
}

module.exports = {
  listWalls,
  getWall,
  createWall,
  updateWall,
  deleteWall,
};
