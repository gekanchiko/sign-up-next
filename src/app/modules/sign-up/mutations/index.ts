'use client'

import { useCallback } from 'react'
import { useMutation } from '@tanstack/react-query'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const useSignUpMutation = () => {

  const mutationFn = useCallback(async (body: { email: string; password: string; }) => {
    await delay(2000)
    return body
  }, [])

  return useMutation({
    mutationFn
  })
}