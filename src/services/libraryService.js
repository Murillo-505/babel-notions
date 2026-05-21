import { libraries } from '../data/libraries'

export async function getLibraries() {
  return libraries
}

export async function getLibraryById(id) {
  return libraries.find(
    (library) => library.id === Number(id)
  )
}