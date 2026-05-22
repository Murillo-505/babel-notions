const express = require('express')
const cors = require('cors')

const { PrismaClient } = require('@prisma/client')

const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3')

const adapter = new PrismaBetterSqlite3({ url: 'file:./dev.db' })

const prisma = new PrismaClient({ adapter})

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

app.listen(3000, () => {
  console.log(
    'Servidor rodando http://localhost:3000'
  )
})