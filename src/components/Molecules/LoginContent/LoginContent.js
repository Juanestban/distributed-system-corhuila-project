import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth, useQuerySession } from '../../../hooks'
import { RenderLogin } from './RenderLogin'

const initialVal = { username: '', password: '', fullname: '' }

export const LoginContent = ({ isRegister = false }) => {
  const [session, setSession] = useState(initialVal)
  const [hiddePasword, setHiddePassword] = useState(true)
  const navigation = useHistory()
  const { loading, error, handleAxiosPost } = useQuerySession(
    !isRegister ? 'login' : 'register',
    !isRegister
  )
  const {
    loading: loadReg,
    error: errReg,
    handleAxiosPost: handAxPostReg,
  } = useQuerySession('users', false)
  const { login } = useAuth()

  const handleSession = ({ target: { name, value } }) =>
    setSession({ ...session, [name]: value })

  const handleHidde = () => setHiddePassword(!hiddePasword)

  const handleIsRegister = () =>
    navigation.push(isRegister ? '/login' : '/register')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const condHandlePost = isRegister ? handAxPostReg : handleAxiosPost
    const { fullname, ...loginData } = session
    const { data } = await condHandlePost(
      isRegister ? { fullname, ...loginData } : loginData
    )
    const { token, ...anotherData } = data

    if (data) {
      login(token, anotherData)
      navigation.push('/home')
    }
  }

  return (
    <RenderLogin
      value={session}
      loading={isRegister ? loadReg : loading}
      error={isRegister ? errReg : error}
      isRegister={isRegister}
      handleIsRegister={handleIsRegister}
      handleSession={handleSession}
      handleSubmit={handleSubmit}
      hiddePasword={hiddePasword}
      handleHidde={handleHidde}
    />
  )
}
