import { Tr, Td, Link } from '@chakra-ui/react'

export const ShortenUrl = ({ longUrl, date = '', shortUrl }) => {
  const newDate = new Date(date)
  const prettyDate = `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`

  return (
    <Tr>
      <Td>{longUrl}</Td>
      <Td>
        <Link target="_blank" href={shortUrl}>
          {shortUrl}
        </Link>
      </Td>
      <Td>{prettyDate}</Td>
    </Tr>
  )
}
