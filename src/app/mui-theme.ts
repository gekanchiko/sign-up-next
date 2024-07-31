import { extendTheme, InputOwnerState } from '@mui/joy'
import { isEmpty } from 'lodash'

const getStatus = (ownerState: InputOwnerState & Record<string, unknown>): boolean[] => {
  const isError = !ownerState.focused && !!ownerState.error
  const isSuccess = !ownerState.error && !ownerState.focused && !isEmpty(ownerState.value)
  return [ownerState.focused, isError, isSuccess]
}

const inputColors = {
  Text: {
    Neutral: '#6F91BC',
    Focus: '#151D51',
    Error: '#FF8080',
    Success: '#27B274',
  },
  Borders: {
    Neutral: '#151D5133',
    Focus: '#151D51',
    Error: '#FF8080',
    Success: '#27B274',
  }
}

export const theme = extendTheme({
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
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
        root: ({ ownerState }) => {
          const [isFocused, isError, isSuccess] = getStatus(ownerState)
          return {
            background: '#FFFFFF',
            overflow: 'hidden',
            borderRadius: 10,
            border: `1px solid ${inputColors.Borders.Neutral}`,
            boxShadow: 'none',
            '&:before': {
              boxShadow: 'none',
            },
            ...(ownerState.disabled && {
              background: '#E8E9ED'
            }),
            ...(isFocused && {
              border: `1px solid ${inputColors.Borders.Focus}`
            }),
            ...(isError && {
              border: `1px solid ${inputColors.Borders.Error}`
            }),
            ...(isSuccess && {
              border: `1px solid ${inputColors.Borders.Success}`
            })
          }
        },
        input: ({ ownerState }) => {
          const [isFocused, isError, isSuccess] = getStatus(ownerState)
          return {
            background: 'transparent',
            padding: '10px, 10px, 10px, 20px',
            height: 48,
            color: inputColors.Text.Neutral,
            ...(isFocused && {
              color: inputColors.Text.Focus
            }),
            ...(isError && {
              color: inputColors.Text.Error
            }),
            ...(isSuccess && {
              color: inputColors.Text.Success
            })
          }
        },
        endDecorator: ({ ownerState }) => {
          const [isFocused, isError, isSuccess] = getStatus(ownerState)
          return {
            background: 'transparent',
            padding: 0,
            margin: 0,
            '& > svg': {
              color: inputColors.Text.Neutral,
              ...(isFocused && {
                color: inputColors.Text.Focus
              }),
              ...(isError && {
                color: inputColors.Text.Error
              }),
              ...(isSuccess && {
                color: inputColors.Text.Success
              })
            }
          }
        }
      }
    }
  }
})