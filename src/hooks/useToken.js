import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export const useToken = () => {
  const { token } = useContext(AuthContext)

  return { token }
}
