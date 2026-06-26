const prisma = require("../config/prisma");

async function main() {
  await prisma.volume.deleteMany();
  await prisma.shelf.deleteMany();
  await prisma.library.deleteMany();
  await prisma.wall.deleteMany();

  await prisma.wall.create({
    data: {
      name: "Faculdade",

      description: "Conteúdos acadêmicos e estudos.",

      libraries: {
        create: [
          {
            name: "Computação",

            description: "Conteúdo de programação e tecnologia.",

            shelves: {
              create: [
                {
                  name: "Frontend",
                  description: "Frameworks e interfaces.",

                  volumes: {
                    create: [
                      {
                        title: "React",
                        content: "Componentes, props e estados.",
                      },
                    ],
                  },
                },

                {
                  name: "Backend",
                  description: "Servidores e persistência.",

                  volumes: {
                    create: [
                      {
                        title: "Banco de Dados",
                        content: "SQL, PostgreSQL e modelagem.",
                      },
                    ],
                  },
                },
              ],
            },
          },

          {
            name: "Filosofia",

            description: "Estudos filosóficos.",

            shelves: {
              create: [
                {
                  name: "Estoicismo",
                  description: "Filósofos estoicos.",

                  volumes: {
                    create: [
                      {
                        title: "Sêneca",
                        content:
                          "Cartas morais e reflexões sobre a vida.",
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.wall.create({
    data: {
      name: "Pessoal",

      description: "Interesses e desenvolvimento pessoal.",
    },
  });

  await prisma.wall.create({
    data: {
      name: "Projetos",

      description: "Projetos pessoais e ideias.",
    },
  });

  console.log("Banco populado com walls, estantes, prateleiras e volumes");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
