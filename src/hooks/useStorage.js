import { useState } from 'react'

export const useStorage = (initialValue = null, keyStore, isToken = false) => {
  const [item, setItem] = useState(() => {
    try {
      const itemWithoutParse = localStorage.getItem(keyStore)
      const itemParsed = !isToken
        ? JSON.parse(itemWithoutParse)
        : itemWithoutParse

      return itemParsed !== null ? itemParsed : initialValue
    } catch {
      return initialValue
    }
  })

  const handleItem = (value) => {
    try {
      const valTransformed =
        typeof value === 'string' ? value : JSON.stringify(value)

      localStorage.setItem(keyStore, valTransformed)
      setItem(value)
    } catch {
      setItem(initialValue)
    }
  }

  const handleRemoteItem = () => {
    localStorage.removeItem(keyStore)
    setItem(initialValue)
  }

  return [item, handleItem, handleRemoteItem]
}
