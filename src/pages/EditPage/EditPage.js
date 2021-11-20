import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import { useToken } from '../../hooks'
import { baseUrl } from '../../config/urlApi'
import { configAxiosToken } from '../../config/configAxiosToken'

export default function EditPage() {
  const [originalUrl, setOriginalUrl] = useState('')
  const navigation = useHistory()
  const { idUrl } = useParams()
  const { token } = useToken()
  const toast = useToast()

  const handleChange = ({ target: { value } }) => setOriginalUrl(value)

  const getUrlOriginal = async () => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/shortenUrls/${idUrl}`,
        configAxiosToken(token)
      )
      setOriginalUrl(data.longUrl)
    } catch {
      toast({
        title: 'Error to find original url',
        description: "this id hasn't exist",
        duration: 4000,
        isClosable: true,
        status: 'error',
        position: 'bottom-right',
      })
      navigation.push('/home')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(
      `${baseUrl}/shortenUrls/${idUrl}`,
      {
        longUrl: originalUrl,
      },
      configAxiosToken(token)
    )
    navigation.goBack()
  }

  useEffect(() => {
    if (!idUrl) navigation.push('/')
    else getUrlOriginal()
  }, [])

  return (
    <Container display="flex" justifyContent="center" pt="10">
      <Box
        w="md"
        border="2px"
        borderColor="whiteAlpha.100"
        borderRadius="md"
        p="4"
      >
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Original url</FormLabel>
            <Input
              type="text"
              id="original-url"
              value={originalUrl}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              variant="outline"
              colorScheme="messenger"
              style={{ marginTop: 10 }}
            >
              update original url
            </Button>
          </FormControl>
        </form>
      </Box>
    </Container>
  )
}
