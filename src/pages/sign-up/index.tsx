import React from 'react'
import { CssVarsProvider } from '@mui/joy'

import SignUp from '@/app/modules/sign-up/pages/SignUp'
import { ReactQueryProvider } from '@/app/providers'
import { theme } from '@/app/mui-theme'

const SignUpPage = () => {
  return (
    <ReactQueryProvider>
      <CssVarsProvider theme={theme}>
        <SignUp />
      </CssVarsProvider>
    </ReactQueryProvider>
  )
}

export default SignUpPage