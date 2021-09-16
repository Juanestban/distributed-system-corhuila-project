export const configAxiosToken = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
