import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Spinner,
} from '@chakra-ui/react'
import axios from 'axios'
import { ShortenUrl } from '..'
import { baseUrl } from '../../../config/urlApi'
import { useToken } from '../../../hooks'
import { configAxiosToken } from '../../../config/configAxiosToken'

export const ShortenUrlList = () => {
  const [urls, setUrls] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { token } = useToken()

  const getAllUrls = async () => {
    try {
      setError(false)
      setLoading(true)
      const { data } = await axios.get(
        `${baseUrl}/shortenUrls`,
        configAxiosToken(token)
      )
      setLoading(false)
      setUrls(data)
    } catch {
      setLoading(false)
      setError(true)
    }
  }

  useEffect(() => {
    getAllUrls()
  }, [])

  return (
    <Box p="4">
      <Box
        display="flex"
        alignItems="end"
        flexDir="column"
        justifyContent="center"
      >
        <Button colorScheme="cyan" onClick={getAllUrls}>
          Reload
        </Button>
      </Box>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Url before</Th>
            <Th>Url shorted</Th>
            <Th>created</Th>
          </Tr>
        </Thead>
        <Tbody>
          {urls.length > 0 &&
            !error &&
            urls.map((url) => <ShortenUrl key={url.id} {...url} />)}
        </Tbody>
      </Table>
      <Box pt="4" display="flex" justifyContent="center">
        {loading && <Spinner size="lg" />}
        {error && <Text color="red">Has been an error</Text>}
        {!loading && !error && urls.length === 0 && <Text>Not Content</Text>}
      </Box>
    </Box>
  )
}
