import { styled } from '@mui/joy/styles'

export const ErrorContainer = styled('div')(
  () => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    transform: 'translateY(100%)',
    fontSize: '14px'
  }))