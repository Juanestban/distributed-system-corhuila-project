import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth, useQuerySession } from '../../../hooks'
import { RenderLogin } from './RenderLogin'

const initialVal = { username: '', password: '' }

export const LoginContent = ({ isRegister = false }) => {
  const [session, setSession] = useState(initialVal)
  const [hiddePasword, setHiddePassword] = useState(true)
  const [isReg, setIsReg] = useState(isRegister)
  const navigation = useHistory()
  const { loading, error, handleAxiosPost } = useQuerySession('login')
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
    const { data } = await condHandlePost(session)
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
      isRegister={isReg}
      handleIsRegister={handleIsRegister}
      handleSession={handleSession}
      handleSubmit={handleSubmit}
      hiddePasword={hiddePasword}
      handleHidde={handleHidde}
    />
  )
}
