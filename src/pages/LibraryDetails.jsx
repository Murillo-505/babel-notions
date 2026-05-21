import { useParams, Link } from 'react-router-dom'

import { libraries } from '../data/libraries'
import VolumeCard from '../components/VolumeCard'

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
      <Link to={"/"} className='text-zinc-400 hover:text-white transition'>
        ← Voltar
      </Link>

      <div>
        <h1 className='text-4x1 font-bold mb-4'>
          {library.name}
        </h1>

        <p className='text-zinc-400'>
          {library.description}
        </p>
      </div>

      <section>
        <h2 className='text-2xl font-bold mb-4'>
          Volumes
        </h2>

        <div>
          {library.volumes.map((volume) => (
            <VolumeCard 
              key={volume.id}
              title={volume.title}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default LibraryDetails