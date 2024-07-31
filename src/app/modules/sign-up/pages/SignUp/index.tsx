import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { FlexRow, Text, If } from '@/app/modules/components'

import SignUpForm from '../../components/SignUpForm'

const SignUp = () => {
  const { t } = useTranslation()
  const [data, setData] = useState<{ email: string; password: string; } | undefined | null>()

  const onSuccess = useCallback(setData, [setData])

  return (
    <FlexRow
      h={{ xs: '100svh' }}
      background={{ xs: 'linear-gradient(#F4F9FF, #E0EDFB)' }}
      direction={{ xs: 'column' }}
      p={{ xs: 24 }}
      style={{ maxHeight: '100svh' }}
    >
      <If condition={!!data}>
        <FlexRow w={{ xs: 'auto' }} mb={{ xs: 20 }}>
          <Text size={{ xs: 28 }} element={'h1'} color={{ xs: '#4A4E71' }} weight={{ xs: 700 }}>
            {t`Completed:`}
          </Text>
        </FlexRow>
        <FlexRow w={{ xs: 'auto' }} mb={{ xs: 8 }}>
          <Text size={{ xs: 18 }} element={'h2'} color={{ xs: '#4A4E71' }}>
            {data?.email}
          </Text>
        </FlexRow>
        <FlexRow w={{ xs: 'auto' }}>
          <Text size={{ xs: 18 }} element={'h2'} color={{ xs: '#4A4E71' }}>
            {data?.password}
          </Text>
        </FlexRow>
      </If>

      <If condition={!data}>
        <FlexRow w={{ xs: 'auto' }} mb={{ xs: 20 }}>
          <Text size={{ xs: 28 }} element={'h1'} color={{ xs: '#4A4E71' }} weight={{ xs: 700 }}>
            {t`Sign up`}
          </Text>
        </FlexRow>

        <FlexRow w={{ xs: '100%', md: 500 }} mb={{ xs: 20 }}>
          <SignUpForm onSuccess={onSuccess} />
        </FlexRow>
      </If>
    </FlexRow>
  )
}

export default SignUp