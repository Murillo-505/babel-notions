require('dotenv').config()

const express = require('express')
const cors = require('cors')

const { PrismaClient } = require('@prisma/client')
const { PrismaPg } = require('@prisma/adapter-pg')

const connectionString = process.env.DATABASE_URL
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

const app = express()

app.use(cors())
app.use(express.json())

app.get(
  '/libraries',
  async (request, response) => {
    const libraries =
      await prisma.library.findMany({
        include: {
          volumes: true,
        },
      })

    response.json(libraries)
  }
)

app.get('/', (request, response) => {
  response.json({
    message:
      'Notions of Babel API funcionando',

    status: 'online',
  })
})

app.get(
  '/libraries/:id',
  async (request, response) => {
    const { id } =
      request.params

    const library =
      await prisma.library.findUnique({
        where: {
          id: Number(id),
        },

        include: {
          volumes: true,
        },
      })

    response.json(library)
  }
)

app.post(
  '/libraries',
  async (request, response) => {
    const { name, description } =
      request.body

    const library =
      await prisma.library.create({
        data: {
          name,
          description,
        },
      })

    response.status(201).json(library)
  }
)

app.delete(
  '/libraries/:id',
  async (request, response) => {
    const { id } =
      request.params

    await prisma.volume.deleteMany({
      where: {
        libraryId: Number(id),
      },
    })

    await prisma.library.delete({
      where: {
        id: Number(id),
      },
    })

    response.status(204).send()
  }
)

app.put(
  '/libraries/:id',
  async (request, response) => {
    const { id } =
      request.params

    const { name, description } =
      request.body

    const updatedLibrary =
      await prisma.library.update({
        where: {
          id: Number(id),
        },

        data: {
          name,
          description,
        },
      })

    response.json(updatedLibrary)
  }
)

app.listen(3000, () => {
  console.log(
    'Servidor rodando http://localhost:3000'
  )
})