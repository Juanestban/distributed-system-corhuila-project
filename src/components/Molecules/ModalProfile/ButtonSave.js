import { Button } from '@chakra-ui/react'
import { mockFun } from '../../../config/mockFun'

export const ButtonSave = ({ onClick = mockFun, ...otherProps }) => (
  <Button
    variant="outline"
    colorScheme="green"
    onClick={onClick}
    {...otherProps}
  >
    Save
  </Button>
)
