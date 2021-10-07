import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { configAxiosToken } from '../../config/configAxiosToken'
import { baseUrl } from '../../config/urlApi'
import { useToken } from '../../hooks'
import { mockFun } from '../../config/mockFun'

export const ShortenUrlContext = createContext({
  urls: [],
  loading: false,
  error: false,
  getAllUrls: mockFun,
  handleDelete: mockFun,
})

export default function ShortenUrlProvider({ children }) {
  const [urls, setUrls] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { token } = useToken()

  const getAllUrls = async () => {
    try {
      setError(false)
      setLoading(true)
      const { data } = await axios.get(
        `${baseUrl}/shortenUrls`,
        configAxiosToken(token)
      )
      setLoading(false)
      setUrls(data)
    } catch {
      setLoading(false)
      setError(true)
    }
  }

  const handleDelete = () => {
    console.log('delete missing')
  }

  useEffect(() => {
    getAllUrls()
  }, [])

  return (
    <ShortenUrlContext.Provider
      value={{
        urls,
        loading,
        error,
        getAllUrls,
        handleDelete,
      }}
    >
      {children}
    </ShortenUrlContext.Provider>
  )
}
