const prisma = require("../config/prisma");

async function main() {
  await prisma.volume.deleteMany();
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

            volumes: {
              create: [
                {
                  title: "React",
                  content: "Componentes, props e estados.",
                },

                {
                  title: "Banco de Dados",
                  content: "SQL, PostgreSQL e modelagem.",
                },
              ],
            },
          },

          {
            name: "Filosofia",

            description: "Estudos filosóficos.",

            volumes: {
              create: [
                {
                  title: "Estoicismo",
                  content: "Sêneca, Marco Aurélio e Epicteto.",
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

  console.log("Banco populado com walls");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
