import { useContext } from 'react'
import { ShortenUrlContext } from '../contexts/ShortenUrlContext'

export const useShortUrlContext = () => useContext(ShortenUrlContext)

// export const useShortUrlCtxEvent = () => {
//   const { handleEdit, handleDelete } = useContext(ShortenUrlContext)

//   return {handleEdit, handleDelete}
// }

// export const useShortUrlContext = () => useContext(ShortenUrlContext)
