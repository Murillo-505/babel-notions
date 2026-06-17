require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const app = express();

app.use(cors());
app.use(express.json());

app.get("/libraries", async (request, response) => {
  const libraries = await prisma.library.findMany({
    include: {
      volumes: true,
    },
  });

  response.json(libraries);
});

app.get("/", (request, response) => {
  response.json({
    message: "Notions of Babel API funcionando",

    status: "online",
  });
});

app.get("/libraries/:id", async (request, response) => {
  const { id } = request.params;

  const library = await prisma.library.findUnique({
    where: {
      id: Number(id),
    },

    include: {
      wall: true,

      volumes: true,
    },
  });

  response.json(library);
});

app.get("/volumes/:id", async (request, response) => {
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
});

app.post("/libraries", async (request, response) => {
  const { name, description, wallId } = request.body;

  const library = await prisma.library.create({
    data: {
      name,
      description,
      wallId,
    },
  });

  response.status(201).json(library);
});

app.delete("/libraries/:id", async (request, response) => {
  const { id } = request.params;

  await prisma.volume.deleteMany({
    where: {
      libraryId: Number(id),
    },
  });

  await prisma.library.delete({
    where: {
      id: Number(id),
    },
  });

  response.status(204).send();
});

app.put("/libraries/:id", async (request, response) => {
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
});

app.put("/volumes/:id", async (request, response) => {
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
});

app.get("/walls", async (request, response) => {
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
});

app.get("/walls/:id", async (request, response) => {
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
});

app.post("/walls", async (request, response) => {
  const { name, description } = request.body;

  const wall = await prisma.wall.create({
    data: {
      name,
      description,
    },
  });

  response.status(201).json(wall);
});

app.put("/walls/:id", async (request, response) => {
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
});

app.delete("/walls/:id", async (request, response) => {
  const { id } = request.params;

  await prisma.wall.delete({
    where: {
      id: Number(id),
    },
  });

  response.status(204).send();
});
app.post("/volumes", async (request, response) => {
  const { title, content, libraryId } = request.body;

  const volume = await prisma.volume.create({
    data: {
      title,
      content: content ?? "",
      libraryId,
    },
  });

  response.status(201).json(volume);
});

app.put("/volumes/:id", async (request, response) => {
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
});

app.delete("/volumes/:id", async (request, response) => {
  const { id } = request.params;

  await prisma.volume.delete({
    where: {
      id: Number(id),
    },
  });

  response.status(204).send();
});
app.listen(3000, () => {
  console.log("Servidor rodando http://localhost:3000");
});
