import { useParams } from 'react-router-dom'
import { libraries } from '../data/libraries'

function LibraryDetails() {
  const { id } = useParams()

  const library = libraries.find(
    (item) => item.id === Number(id)
  )

  if(!library){
    return <h1>Biblioteca não encontrada</h1>
  }

  return(
    <div>
      <h1 className='text-4x1 font-bold mb-4'>
        {library.name}
      </h1>

      <p className='text-zinc-400'>
        {library.description}
      </p>
    </div>
  )
}

export default LibraryDetails