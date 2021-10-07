import { useState, useEffect } from 'react'
import axios from 'axios'
import { useToast, Spinner } from '@chakra-ui/react'
import { configAxiosToken } from '../../../config/configAxiosToken'
import { baseUrl } from '../../../config/urlApi'
import { initialState } from '../../../config/initialStateProfile'
import { mockFun } from '../../../config/mockFun'
import { ModalPersonal } from '../ModalPersonal/ModalPersonal'
import { useToken } from '../../../hooks'
import { RenderProfile } from './RenderProfile'
import { ButtonSave } from './ButtonSave'

export const ModalProfile = ({ isOpen = false, onClose = mockFun }) => {
  const [profile, setProfile] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const { token } = useToken()
  const toast = useToast()

  const getProfileInfo = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(
        `${baseUrl}/users/profile`,
        configAxiosToken(token)
      )
      const { status, message, ...infoProfile } = data
      setLoading(false)
      setProfile(infoProfile)
    } catch {
      setLoading(false)
      toast({
        title: 'Error to get the info profile',
        status: 'error',
        isClosable: true,
        duration: 4000,
        position: 'bottom-right',
      })
    }
  }

  const handleChange = ({ target: { name, value } }) =>
    setProfile({ ...profile, [name]: value })

  const handleSaveInfoProfile = () => console.log('saving...')

  useEffect(() => {
    getProfileInfo()
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
