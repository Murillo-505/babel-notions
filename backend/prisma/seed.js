require('dotenv').config()

const { PrismaClient } = require('@prisma/client')

const { PrismaPg } = require('@prisma/adapter-pg')

const connectionString = process.env.DATABASE_URL

const adapter = new PrismaPg({ connectionString })

const prisma = new PrismaClient({ adapter })

async function main() {
  await prisma.volume.deleteMany()
  await prisma.library.deleteMany()

  await prisma.library.create({
    data: {
      name: 'Filosofia',
      description:
        'Conhecimento filosófico e existencial.',

      volumes: {
        create: [
          {
            title:
              'Existencialismo',
          },
          {
            title:
              'Estoicismo',
          },
        ],
      },
    },
  })

  await prisma.library.create({
    data: {
      name: 'Tecnologia',
      description:
        'Programação, IA e computação.',

      volumes: {
        create: [
          {
            title:
              'JavaScript',
          },
          {
            title: 'React',
          },
        ],
      },
    },
  })

  console.log(
    'Banco populado com sucesso'
  )
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect()
  })