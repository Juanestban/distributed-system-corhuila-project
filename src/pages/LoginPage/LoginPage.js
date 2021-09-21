import { Helmet } from 'react-helmet-async'
import { Container, Box } from '@chakra-ui/react'
import { LoginContent } from '../../components/Molecules'

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Shorten Url - Login</title>
      </Helmet>
      <Container h="88vh" display="flex" alignItems="center">
        <Box borderWidth="1px" borderRadius="3px" p="5" w="100%">
          <LoginContent />
        </Box>
      </Container>
    </>
  )
}
