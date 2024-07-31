import React from 'react'
import { useTranslation } from 'react-i18next'

import { FlexRow, Text } from '@/app/modules/components'

import SignUpForm from '../../components/SignUpForm'

const SignUp = () => {
  const { t } = useTranslation()

  return (
    <FlexRow
      h={{ xs: '100vh' }}
      background={{ xs: 'linear-gradient(#F4F9FF, #E0EDFB)' }}
      direction={{ xs: 'column' }}
      p={{ xs: 24 }}
    >
      <FlexRow w={{ xs: 'auto' }} mb={{ xs: 20 }}>
        <Text size={{ xs: 28 }} element={'h1'} color={{ xs: '#4A4E71' }} weight={{ xs: 700 }}>
          {t`Sign up`}
        </Text>
      </FlexRow>

      <FlexRow w={{ xs: '100%', md: 500 }} mb={{ xs: 20 }}>
        <SignUpForm />
      </FlexRow>
    </FlexRow>
  )
}

export default SignUp