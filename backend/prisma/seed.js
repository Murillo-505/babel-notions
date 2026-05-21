const { PrismaClient } = require('@prisma/client')

const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3')

const adapter = new PrismaBetterSqlite3({ url: 'file:./dev.db' })

const prisma = new PrismaClient({ adapter })

async function main() {
  await prisma.volume.deleteMany()
  await prisma.library.deleteMany()

  await prisma.library.create({
    data: {
      name: 'Filosofia',
      description: 'Conhecimento filosófico e existencial.',

      volumes: {
        create: [
          {
            title: 'Existencialismo',
            description: 'Pensamento existencial.',
          },

          {
            title: 'Estoicismo',
            description: 'Virtude e autocontrole.',
          },
        ],
      },
    },
  })

  await prisma.library.create({
    data: {
      name: 'Tecnologia',
      description: 'Programação, IA e computação.',

      volumes: {
        create: [
          {
            title: 'JavaScript',
            description: 'Lógica e frontend.',
          },

          {
            title: 'React',
            description: 'Componentização.',
          },
        ],
      },
    },
  })

  console.log('Banco populado com sucesso')
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect()
  })