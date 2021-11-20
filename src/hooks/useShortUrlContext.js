import { useContext } from 'react'
import { ShortenUrlContext } from '../contexts/ShortenUrlContext'

export const useShortUrlContext = () => useContext(ShortenUrlContext)
