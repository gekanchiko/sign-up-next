import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'
import DialogTitle from '@mui/joy/DialogTitle'
import DialogContent from '@mui/joy/DialogContent'
import ModalClose from '@mui/joy/ModalClose'

import { FlexRow, Text } from '@/app/modules/components'

import SignUpForm from '../../components/SignUpForm'

const SignUp = () => {
  const { t } = useTranslation()
  const [data, setData] = useState<{ email: string; password: string; } | undefined | null>()
  const [open, setOpen] = React.useState<boolean>(false)

  const onSuccess = useCallback((data: any) => {
    setData(data)
    setOpen(true)
  }, [setData])

  return (
    <FlexRow
      h={{ xs: '100svh' }}
      background={{ xs: 'linear-gradient(#F4F9FF, #E0EDFB)' }}
      direction={{ xs: 'column' }}
      p={{ xs: 24 }}
      style={{ maxHeight: '100svh' }}
    >
      <FlexRow w={{ xs: 'auto' }} mb={{ xs: 20 }}>
        <Text size={{ xs: 28 }} element={'h1'} color={{ xs: '#4A4E71' }} weight={{ xs: 700 }}>
          {t`Sign up`}
        </Text>
      </FlexRow>

      <FlexRow w={{ xs: '100%', md: 500 }} mb={{ xs: 20 }}>
        <SignUpForm onSuccess={onSuccess} />
      </FlexRow>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog variant="plain">
          <ModalClose />
          <DialogTitle>
            <FlexRow w={{ xs: 'auto' }} mb={{ xs: 20 }}>
              <Text size={{ xs: 28 }} element={'h1'} color={{ xs: '#4A4E71' }} weight={{ xs: 700 }}>
                {t`Completed:`}
              </Text>
            </FlexRow>
          </DialogTitle>
          <DialogContent>
            <FlexRow align={{ xs: 'start' }} direction={{ xs: 'column' }}>
              <FlexRow w={{ xs: 'auto' }} mb={{ xs: 8 }}>
                <Text size={{ xs: 14 }} element={'h2'} color={{ xs: '#4A4E71' }}>
                  {data?.email}
                </Text>
              </FlexRow>
              <FlexRow w={{ xs: 'auto' }}>
                <Text size={{ xs: 14 }} element={'h2'} color={{ xs: '#4A4E71' }}>
                  {data?.password}
                </Text>
              </FlexRow>
            </FlexRow>
          </DialogContent>
        </ModalDialog>
      </Modal>
    </FlexRow>
  )
}

export default SignUp