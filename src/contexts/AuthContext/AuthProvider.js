import React, { createContext, useEffect, useMemo } from 'react'
import { mockFun } from '../../config/mockFun'
import { useStorage } from '../../hooks'
import { keyStorage } from '../../config/keyStorage'

export const AuthContext = createContext({
  token: null,
  login: mockFun,
  register: mockFun,
  logout: mockFun,
})

const { authToken } = keyStorage

export default function AuthProvider({ children }) {
  const [token, handleToken, handleRemoveToken] = useStorage(
    null,
    authToken,
    true
  )

  const auth = useMemo(
    () => ({
      login: (token) => handleToken(token),
      register: (token) => {
        console.log('register', token)
      },
      logout: () => handleRemoveToken(),
    }),
    []
  )

  useEffect(() => {
    console.log(token)
  }, [token])

  return (
    <AuthContext.Provider value={{ token, ...auth }}>
      {children}
    </AuthContext.Provider>
  )
}
