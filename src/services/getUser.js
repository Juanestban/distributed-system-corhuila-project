import axios from 'axios'
import { baseUrl } from '../config/urlApi'
import { configAxiosToken } from '../config/configAxiosToken'

export const getUserService = async (token, id) => {
  const { data } = await axios.get(
    `${baseUrl}/users/${id}`,
    configAxiosToken(token)
  )

  return { user: data }
}
