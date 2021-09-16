import React from 'react'
import { Tr, Td } from '@chakra-ui/react'

export const ShortenUrl = ({ longUrl, date = '', shortUrl }) => {
  const newDate = new Date(date)
  const prettyDate = `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`

  return (
    <Tr>
      <Td>{longUrl}</Td>
      <Td>{shortUrl}</Td>
      <Td>{prettyDate}</Td>
    </Tr>
  )
}
