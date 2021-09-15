import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth, useQuerySession } from '../../../hooks'
import { RenderLogin } from './RenderLogin'

const initialVal = { username: '', password: '' }

export const LoginContent = () => {
  const [session, setSession] = useState(initialVal)
  const [hiddePasword, setHiddePassword] = useState(true)
  const navigation = useHistory()
  const { loading, error, handleAxiosPost } = useQuerySession('login')
  const { login } = useAuth()

  const handleSession = ({ target: { name, value } }) =>
    setSession({ ...session, [name]: value })

  const handleHidde = () => setHiddePassword(!hiddePasword)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await handleAxiosPost(session)

    if (data) {
      login(data.token)
      navigation.push('/home')
    }
  }

  return (
    <RenderLogin
      value={session}
      loading={loading}
      error={error}
      handleSession={handleSession}
      handleSubmit={handleSubmit}
      hiddePasword={hiddePasword}
      handleHidde={handleHidde}
    />
  )
}
