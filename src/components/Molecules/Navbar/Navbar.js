import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Heading, Button, useDisclosure } from '@chakra-ui/react'
import { Header, ContentTitle } from './styles'
import { useAuth } from '../../../hooks'
import { ModalProfile } from '../ModalProfile/ModalProfile'

export const Navbar = () => {
  const navigation = useHistory()
  const { logout } = useAuth()
  const [pathname, setPathname] = useState(navigation.location.pathname)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const styleButton = { variant: 'ghost' }

  const handleNavigation = () => navigation.push('/home')

  const handleProfile = () => onOpen()

  const handleLogout = () => {
    logout()
    navigation.push('/')
  }

  useEffect(() => {
    const unlisten = navigation.listen(({ pathname }) => {
      setPathname(pathname)
    })

    return () => {
      unlisten()
    }
  }, [pathname])

  return (
    <Header>
      <div className="content-header">
        <ContentTitle>
          <Heading fontSize="3xl">Shorten Url</Heading>
        </ContentTitle>
        {pathname !== '/login' && pathname !== '/register' && (
          <nav>
            <ul>
              <li>
                <Button {...styleButton} onClick={handleNavigation}>
                  Home
                </Button>
              </li>
              <li>
                <Button {...styleButton} onClick={handleProfile}>
                  Profile
                </Button>
              </li>
              <li>
                <Button {...styleButton} onClick={handleLogout}>
                  Logout
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
      <ModalProfile isOpen={isOpen} onClose={onClose} />
    </Header>
  )
}
