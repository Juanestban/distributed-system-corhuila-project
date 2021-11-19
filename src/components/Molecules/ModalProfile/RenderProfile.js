import { Text, FormLabel } from '@chakra-ui/react'
import { Input, FormControl } from './styles'
import { initialState } from '../../../config/initialStateProfile'
import { mockFun } from '../../../config/mockFun'
import { PreviewImgProfile } from '../PreviewImgProfile'

export const RenderProfile = ({
  profile = initialState,
  onChange = mockFun,
  inputImgRef = null,
  imgProfile = null,
  handleChangeImg = mockFun,
  onSubmit = mockFun,
}) => (
  <form onSubmit={onSubmit}>
    <FormControl style={{ display: 'flex', justifyContent: 'center' }}>
      <PreviewImgProfile
        imgProfile={imgProfile}
        inputImgRef={inputImgRef}
        handleChangeImg={handleChangeImg}
      />
    </FormControl>
    <FormControl>
      <FormLabel htmlFor="username" m="0" w="200px">
        username:
      </FormLabel>
      <Input
        id="username"
        name="username"
        value={profile.username}
        readOnly
        style={{ cursor: 'default' }}
      />
    </FormControl>
    <FormControl>
      <FormLabel htmlFor="fullname" m="0" w="200px">
        fullname:
      </FormLabel>
      <Input
        id="fullname"
        name="fullname"
        value={profile.fullname}
        onChange={onChange}
        placeholder="put your fullname"
      />
    </FormControl>
    <FormControl>
      <FormLabel m="0" w="200px">
        rol:
      </FormLabel>
      <Input
        value={profile.rol.toLowerCase()}
        readOnly
        style={{ cursor: 'default' }}
      />
    </FormControl>
    <FormControl>
      <FormLabel htmlFor="password" m="0" w="200px">
        password:
      </FormLabel>
      <Input
        id="password"
        name="password"
        type="password"
        value={profile.password}
        onChange={onChange}
      />
    </FormControl>
  </form>
)
