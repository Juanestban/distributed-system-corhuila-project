import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useToast, Spinner } from '@chakra-ui/react'
import { configAxiosToken } from '../../../config/configAxiosToken'
import { baseUrl } from '../../../config/urlApi'
import { initialState } from '../../../config/initialStateProfile'
import { mockFun } from '../../../config/mockFun'
import { AuthContext } from '../../../contexts/AuthContext'
import { ModalPersonal } from '../ModalPersonal/ModalPersonal'
import { useToken } from '../../../hooks'
import { RenderProfile } from './RenderProfile'
import { ButtonSave } from './ButtonSave'

export const ModalProfile = ({ isOpen = false, onClose = mockFun }) => {
  const [profile, setProfile] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const { userStorage } = useContext(AuthContext)
  const { token } = useToken()
  const toast = useToast()

  const handleChange = ({ target: { name, value } }) =>
    setProfile({ ...profile, [name]: value })

  const handleSaveInfoProfile = async () => {
    try {
      setLoading(true)
      await axios.put(
        `${baseUrl}/users/${userStorage.id}`,
        profile,
        configAxiosToken(token)
      )
      setLoading(false)
      toast({
        title: 'user data updated',
        status: 'success',
        isClosable: true,
        duration: 4000,
        position: 'bottom-right',
      })
    } catch {
      setLoading(false)
      toast({
        title: 'error to try update information',
        status: 'error',
        isClosable: true,
        duration: 3000,
        position: 'bottom-right',
      })
    }
  }

  useEffect(() => {
    const { username, fullname, rol } = userStorage
    console.log(userStorage)
    setProfile({ ...profile, username, fullname, rol })
  }, [])

  return (
    <ModalPersonal
      isOpen={isOpen}
      onClose={onClose}
      header="Profile"
      footer={<ButtonSave onClick={handleSaveInfoProfile} />}
    >
      {loading ? (
        <Spinner size="lg" />
      ) : (
        <RenderProfile profile={profile} onChange={handleChange} />
      )}
    </ModalPersonal>
  )
}
