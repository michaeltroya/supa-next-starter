'use client'

import useGetMessage from '@/hooks/useGetMessage'

export const ReactQueryExample = () => {
  const { isLoading, data } = useGetMessage()

  if (isLoading) return <div>Loading...</div>

  return <div>{data?.message}</div>
}
