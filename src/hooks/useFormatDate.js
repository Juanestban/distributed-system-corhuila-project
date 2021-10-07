export const useFormatDate = (date = '') => {
  const newDate = new Date(date)
  const fomatedDate = `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`

  return { fomatedDate }
}
