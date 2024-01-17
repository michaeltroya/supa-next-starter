'use client'

import useGetMessage from '@/hooks/useGetMessage'

const ReactQueryExample = () => {
  const { isLoading, data } = useGetMessage()

  if (isLoading) return <div>Loading...</div>

  return <div>{data?.message}</div>
}

export default ReactQueryExample
