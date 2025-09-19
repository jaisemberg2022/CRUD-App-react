import { useState } from 'react'
import axios, { type AxiosRequestConfig, type AxiosResponse, isAxiosError } from 'axios'

interface UseApiReturn<T> {
  data: T | null,
  loading: boolean,
  error: string | null,
  request: (options: AxiosRequestConfig) => void;
}

export const useApi = <T = unknown>(): UseApiReturn<T> => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const request = async (options: AxiosRequestConfig) => {
    setLoading(true); 
    setError(null)
    
    try {
      const res: AxiosResponse<T> = await axios(options)
      setData(res.data)
    } catch (err: unknown) {
      setError(isAxiosError(err) ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, request }
}
