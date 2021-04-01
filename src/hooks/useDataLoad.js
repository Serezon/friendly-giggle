import { useState } from 'react'

const useDataLoad = () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  return {
    data,
    setData,
    isLoading,
    setLoading,
    error,
    setError,
  }
}

export default useDataLoad
