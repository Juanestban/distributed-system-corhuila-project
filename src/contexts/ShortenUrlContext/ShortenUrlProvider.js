import { createContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
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
  handleUpdate: mockFun,
})

export default function ShortenUrlProvider({ children }) {
  const [urls, setUrls] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { token } = useToken()
  const toast = useToast()
  const navigation = useHistory()
  const toastDefaultProps = {
    isClosable: true,
    duration: 4000,
    position: 'bottom-right',
  }

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

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${baseUrl}/shortenUrls/${id}`,
        configAxiosToken(token)
      )
      toast({
        title: 'url deleted url',
        status: 'success',
        ...toastDefaultProps,
      })

      getAllUrls()
    } catch (e) {
      toast({
        title: 'Error to delete url',
        status: 'error',
        ...toastDefaultProps,
      })
    }
  }

  const handleUpdate = (id) => navigation.push(`/edit/${id}`)

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
        handleUpdate,
      }}
    >
      {children}
    </ShortenUrlContext.Provider>
  )
}
