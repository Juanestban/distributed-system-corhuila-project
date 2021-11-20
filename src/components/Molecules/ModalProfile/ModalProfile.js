import { useState, useEffect, useRef, useContext } from 'react'
import axios from 'axios'
import { useToast, Spinner, Box } from '@chakra-ui/react'
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
  const [imgProfile, setImgProfile] = useState(null)
  const inputImgRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const { userStorage } = useContext(AuthContext)
  const { token } = useToken()
  const toast = useToast()

  const handleChange = ({ target: { name, value } }) =>
    setProfile({ ...profile, [name]: value })

  const handleChangeImg = async () => {
    if (inputImgRef.current) {
      const { files } = inputImgRef.current
      const file = files[0]
      const dataForm = new FormData()
      dataForm.append('image', file)

      const { data } = await axios.post(
        `${baseUrl}/images`,
        dataForm,
        configAxiosToken(token, file.type)
      )
      const { imgUrl } = data

      if (file) setImgProfile(imgUrl)
    }
  }

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

    setProfile({ ...profile, username, fullname, rol })
  }, [userStorage])

  return (
    <ModalPersonal
      isOpen={isOpen}
      onClose={onClose}
      header="Profile"
      footer={<ButtonSave onClick={handleSaveInfoProfile} />}
    >
      {loading ? (
        <Box
          w="100%"
          h="100%"
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <Spinner size="lg" />
        </Box>
      ) : (
        <RenderProfile
          profile={profile}
          inputImgRef={inputImgRef}
          imgProfile={imgProfile}
          handleChangeImg={handleChangeImg}
          onChange={handleChange}
          onSubmit={handleSaveInfoProfile}
        />
      )}
    </ModalPersonal>
  )
}
