import React from 'react'
import { Container, Box } from '@chakra-ui/react'
import { LoginContent } from '../../components/Molecules'

export default function LoginPage() {
  return (
    <Container h="100vh" display="flex" alignItems="center">
      <Box borderWidth="1px" borderRadius="3px" p="5" w="100%">
        <LoginContent />
      </Box>
    </Container>
  )
}
