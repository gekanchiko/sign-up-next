import React from 'react'
import { isEmpty } from 'lodash'
import { CssVarsProvider, extendTheme } from '@mui/joy'

import SignUp from '@/app/modules/sign-up/pages/SignUp'

const theme = extendTheme({
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          height: 48,
          borderRadius: 24,
          padding: '15px, 32px, 15px, 32px',
          ...(ownerState.color === 'primary' && {
            background: 'linear-gradient(to right, #70C3FF, #4B65FF)'
          })
        })
      }
    },
    JoyInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          const error = !ownerState.focused && ownerState.error
          const success = !ownerState.error && !ownerState.focused && !isEmpty(ownerState.value)

          return {
            overflow: 'hidden',
            borderRadius: 10,
            border: '1px solid #151D5133',
            boxShadow: 'none',
            '&:before': {
              boxShadow: 'none',
            },
            ...(ownerState.focused && {
              border: '1px solid #151D51'
            }),
            ...(error && {
              border: '1px solid #FF8080'
            }),
            ...(success && {
              border: '1px solid #27B274'
            })
          }
        },
        input: ({ ownerState, theme }) => {
          const error = !ownerState.focused && ownerState.error
          const success = !ownerState.error && !ownerState.focused && !isEmpty(ownerState.value)
          return {
            background: '#FFFFFF',
            padding: '10px, 10px, 10px, 20px',
            height: 48,
            color: '#6F91BC',
            ...(ownerState.focused && {
              color: '#4A4E71'
            }),
            ...(error && {
              color: '#FF8080'
            }),
            ...(success && {
              color: '#27B274'
            })
          }
        }
      }
    }
  }
})

const SignUpPage = () => {
  return (
    <CssVarsProvider theme={theme}>
      <SignUp />
    </CssVarsProvider>
  )
}

export default SignUpPage