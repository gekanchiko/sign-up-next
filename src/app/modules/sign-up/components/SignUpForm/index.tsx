import React from 'react'
import { useTranslation } from 'react-i18next'
import { Form, Formik } from 'formik'
import Button from '@mui/joy/Button'

import { FlexRow } from '@/app/modules/components'
import { FormInputField } from '@/app/modules/components/FormFields'

import { validationSchema } from './validationSchema'

const SignUpForm = () => {
  const { t } = useTranslation()

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={() => {}}
      validationSchema={validationSchema}
    >
      {() => (
        <Form style={{ width: '100%' }}>
          <FlexRow>
            <FormInputField
              hideErrors
              type="text"
              name="email"
              placeholder={t`Type your email`}
              style={{
                border: '1px solid reds',
              }}
            />
          </FlexRow>
          <FlexRow>
            <FormInputField
              hideErrors
              type="password"
              name="password"
              placeholder={t`Create your password`}
            />
          </FlexRow>
          <FlexRow>
            <FlexRow w={{ xs: 240 }}>
              <Button
                fullWidth
                size="md"
                type="submit"
                loading={false}
              >
                {t`Sign up`}
              </Button>
            </FlexRow>
          </FlexRow>
        </Form>
      )}
    </Formik>
  )
}

export default SignUpForm