import { Tr, Link, IconButton } from '@chakra-ui/react'
import { FiTrash, FiEdit } from 'react-icons/fi'
import { mockFun } from '../../../config/mockFun'
import { useFormatDate } from '../../../hooks'
import { Td } from './styles'

export const ShortenUrl = ({
  id,
  longUrl,
  date = '',
  shortUrl,
  onDelete = mockFun,
  onUpdate = mockFun,
}) => {
  const { fomatedDate } = useFormatDate(date)

  return (
    <Tr>
      <Td>
        <Link target="_blank" href={longUrl}>
          {longUrl}
        </Link>
      </Td>
      <Td>
        <Link target="_blank" href={shortUrl}>
          {shortUrl}
        </Link>
      </Td>
      <Td>{fomatedDate}</Td>
      <Td style={{ textAlign: 'center' }}>
        <IconButton
          icon={<FiEdit />}
          size="md"
          color="green.400"
          variant="ghost"
          onClick={() => onUpdate(id)}
        />
        <IconButton
          icon={<FiTrash />}
          size="md"
          color="red.500"
          variant="ghost"
          onClick={() => onDelete(id)}
        />
      </Td>
    </Tr>
  )
}

/* <IconButton
  icon={!isEditing ? <FiEdit /> : <FiCheck />}
  size="md"
  color={`${!isEditing ? 'blue' : 'green'}.500`}
  variant="ghost"
  onClick={onEdit}
/> */
