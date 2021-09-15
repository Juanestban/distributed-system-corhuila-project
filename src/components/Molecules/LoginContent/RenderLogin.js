import React from 'react'
import {
  Heading,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  IconButton,
  Input,
  FormHelperText,
  Button,
} from '@chakra-ui/react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { mockFun } from '../../../config/mockFun'

export const RenderLogin = ({
  value: { username, password },
  loading = false,
  error = false,
  handleSubmit = mockFun,
  handleSession = mockFun,
  hiddePasword = true,
  handleHidde = mockFun,
}) => (
  <>
    <Heading>Login</Heading>
    <form onSubmit={handleSubmit}>
      <FormControl isInvalid={error}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleSession}
          value={username}
        />
        <FormHelperText>put your username unique 🐱</FormHelperText>
      </FormControl>
      <FormControl isInvalid={error}>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={hiddePasword ? 'password' : 'text'}
            name="password"
            onChange={handleSession}
            value={password}
          />
          <InputRightElement>
            <IconButton
              icon={hiddePasword ? <FiEyeOff /> : <FiEye />}
              onClick={handleHidde}
            />
          </InputRightElement>
        </InputGroup>
        <FormHelperText>put your secret password 🖐</FormHelperText>
      </FormControl>
      <FormControl>
        <Button
          w="100%"
          type="submit"
          variant="outline"
          colorScheme="messenger"
          isLoading={loading}
        >
          Log
        </Button>
      </FormControl>
    </form>
  </>
)
