import { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useToken } from '.'
import { baseUrl } from '../config/urlApi'
import { configAxiosToken } from '../config/configAxiosToken'

export const useQuerySession = (url = '', isLogin = true) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const toast = useToast()
  const { token } = useToken()
  const toastProps = {
    position: 'bottom-right',
    duration: 3500,
  }

  const handleAxiosPost = async (dataToSend = {}) => {
    try {
      setLoading(true)
      setError(false)
      const { data } = await axios.post(
        `${baseUrl}/${url}`,
        dataToSend,
        configAxiosToken(token)
      )
      setLoading(false)
      toast({
        ...toastProps,
        title: isLogin ? 'sucessfull login' : 'successfull register',
        description: 'Welcome to Shorten Url',
        status: 'success',
      })

      return { data }
    } catch (e) {
      setLoading(false)
      setError(true)

      toast({
        ...toastProps,
        title: isLogin ? 'error to try login' : 'error to try register',
        description: e.message ? e.message : 'has been error while try login',
        status: 'error',
      })
      return { data: null }
    }
  }

  return { loading, error, handleAxiosPost }
}
