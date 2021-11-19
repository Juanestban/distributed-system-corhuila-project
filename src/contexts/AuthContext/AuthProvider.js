import { createContext, useEffect, useMemo } from 'react'
import { mockFun } from '../../config/mockFun'
import { useStorage } from '../../hooks'
import { keyStorage } from '../../config/keyStorage'
import { getUserService } from '../../services/getUser'

export const AuthContext = createContext({
  userStorage: null,
  token: null,
  login: mockFun,
  register: mockFun,
  logout: mockFun,
})

const { authToken, userKeySorage } = keyStorage

export default function AuthProvider({ children }) {
  const [token, handleToken, handleRemoveToken] = useStorage(
    null,
    authToken,
    true
  )
  const [userStorage, handleUser, handleRemoveUser] = useStorage(
    {},
    userKeySorage
  )

  const auth = useMemo(
    () => ({
      login: (token, userData) => {
        handleToken(token)
        handleUser(userData)
      },
      register: (token, userData) => {
        handleToken(token)
        handleUser(userData)
      },
      logout: () => {
        handleRemoveToken()
        handleRemoveUser()
      },
    }),
    []
  )

  useEffect(() => {
    console.log(token)
    ;(async () => {
      const { user } = await getUserService(token, userStorage.id)
      handleUser(user)
    })()
  }, [token])

  return (
    <AuthContext.Provider value={{ userStorage, token, ...auth }}>
      {children}
    </AuthContext.Provider>
  )
}
