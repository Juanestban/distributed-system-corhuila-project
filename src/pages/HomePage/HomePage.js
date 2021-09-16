import React, { useState } from 'react'
import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  useToast,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { Helmet } from 'react-helmet-async'
import { ShortenUrlList } from '../../components/Organims'
import axios from 'axios'
import { baseUrl } from '../../config/urlApi'
import { configAxiosToken } from '../../config/configAxiosToken'
import { useToken } from '../../hooks'

export default function HomePage() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const { token } = useToken()
  const toast = useToast()

  const handleUrl = ({ target: { value } }) => setUrl(value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      await axios.post(
        `${baseUrl}/shortenUrls`,
        { longUrl: url },
        configAxiosToken(token)
      )
      setLoading(false)
      setUrl('')
    } catch {
      setLoading(false)
      toast({
        title: 'error with petition',
        description:
          "your url hasn't the correct format, Example: https://example.com",
        duration: 5500,
        isClosable: true,
        position: 'bottom-right',
        status: 'error',
      })
    }
  }

  return (
    <>
      <Helmet>
        <title>Shorten Url - Home</title>
      </Helmet>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputGroup borderRadius="3px">
            <Input
              type="text"
              value={url}
              placeholder="Example: https://example.com"
              onChange={handleUrl}
              borderRadius="3px"
            />
            <InputRightElement>
              <IconButton
                type="submit"
                borderRadius="3px"
                icon={<FiSearch />}
                isLoading={loading}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </form>

      <ShortenUrlList />
    </>
  )
}
