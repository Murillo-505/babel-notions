const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const libraries = [
  {
    id: 1,
    name: 'Filosofia',
    description:
      'Conhecimento filosófico e existencial.',
  },

  {
    id: 2,
    name: 'Tecnologia',
    description:
      'Programação, IA e computação.',
  },

  {
    id: 3,
    name: 'Ocultismo',
    description:
      'Símbolos, rituais e mistérios.',
  },
]

app.get('/libraries', (request, response) => {
  const { id } = request.params

  const library = libraries.find((item) => item.id === Number(id))
  
  response.json(libraries)
})

app.listen(3000, () => {
  console.log(
    'Servidor rodando em http://localhost:3000'
  )
})