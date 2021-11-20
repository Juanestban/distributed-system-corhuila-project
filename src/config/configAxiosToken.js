export const configAxiosToken = (token, ContentType = 'application/json') => ({
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': ContentType,
  },
})
