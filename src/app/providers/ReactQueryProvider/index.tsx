'use client'

import React, { ReactNode, useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const ReactQueryProvider = (props: { children: ReactNode }) => {
  const { children } = props
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider