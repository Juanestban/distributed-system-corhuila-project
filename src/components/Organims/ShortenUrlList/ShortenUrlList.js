import {
  Box,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Spinner,
} from '@chakra-ui/react'
import { ShortenUrl } from '..'
import { useShortUrlContext } from '../../../hooks'

export const ShortenUrlList = () => {
  const {
    urls,
    loading,
    error,
    handleDelete,
    handleUpdate,
  } = useShortUrlContext()

  return (
    <Box p="4">
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Url before</Th>
            <Th>Url shorted</Th>
            <Th>Created</Th>
            <Th style={{ textAlign: 'center' }}>Events</Th>
          </Tr>
        </Thead>
        <Tbody>
          {urls.length > 0 &&
            !error &&
            urls.map((url) => (
              <ShortenUrl
                key={url.id}
                {...url}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            ))}
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
