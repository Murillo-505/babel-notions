const prisma = require("../config/prisma");

async function getVolume(request, response) {
  const { id } = request.params;

  const volume = await prisma.volume.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      library: {
        include: {
          wall: true,
        },
      },
    },
  });

  response.json(volume);
}

async function createVolume(request, response) {
  const { title, content, libraryId } = request.body;

  const volume = await prisma.volume.create({
    data: {
      title,
      content: content ?? "",
      libraryId,
    },
  });

  response.status(201).json(volume);
}

async function updateVolume(request, response) {
  const { id } = request.params;
  const { title, content } = request.body;

  const updatedVolume = await prisma.volume.update({
    where: {
      id: Number(id),
    },
    data: {
      title,
      content,
    },
  });

  response.json(updatedVolume);
}

async function deleteVolume(request, response) {
  const { id } = request.params;

  await prisma.volume.delete({
    where: {
      id: Number(id),
    },
  });

  response.status(204).send();
}

module.exports = {
  getVolume,
  createVolume,
  updateVolume,
  deleteVolume,
};
