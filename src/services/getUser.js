import axios from 'axios'
import { baseUrl } from '../config/urlApi'
import { configAxiosToken } from '../config/configAxiosToken'

export const getUserService = async (token) => {
  const { data } = await axios.get(
    `${baseUrl}/users/profile`,
    configAxiosToken(token)
  )

  return { user: data }
}
