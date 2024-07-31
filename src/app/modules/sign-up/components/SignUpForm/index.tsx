import React, { useCallback, useState, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Form, Formik, FormikProps } from 'formik'
import Button from '@mui/joy/Button'

import { FlexRow } from '@/app/modules/components'
import { FormInputField } from '@/app/modules/components/FormFields'

import DynamicValidationNotes from './DynamicValidationNotes'
import { validationSchema, dynamicErrorKeys } from './validationSchema'

export interface FormFields {
  email: string;
  password: string;
}

const SignUpForm = () => {
  const { t } = useTranslation()
  const [dynamicErrors, setDynamicErrors] = useState<string[]>([])

  const onValidate = useCallback((values: FormFields) => {
    validationSchema(t)
      .validate(values, { abortEarly: false })
      .then(() => setDynamicErrors([]))
      .catch((err) => setDynamicErrors(
        err.errors.filter((error: string) =>
          Object.values(dynamicErrorKeys).includes(error)))
      )
  }, [t])

  const onSubmit = useCallback((values: FormFields) => {
    // eslint-disable-next-line
    console.log(values)
  }, [])

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema(t)}
      validate={onValidate}
    >
      {(formProps: FormikProps<any>) => {
        const { submitCount, values } = formProps

        return (
          <Form style={{ width: '100%' }}>
            <FlexRow>
              <FormInputField
                hideErrors
                type="text"
                name="email"
                placeholder={t`Type your email`}
                formProps={formProps}
              />
            </FlexRow>
            <FlexRow>
              <FormInputField
                hideErrors
                type="password"
                name="password"
                placeholder={t`Create your password`}
                formProps={formProps}
              />
            </FlexRow>
            <FlexRow direction={{ xs: 'column' }} align={{ xs: 'start' }} p={{ xs: '0 12px' }}>
              <DynamicValidationNotes
                dynamicErrors={dynamicErrors}
                values={values}
                submitCount={submitCount}
              />
            </FlexRow>
            <FlexRow mt={{ xs: 30 }}>
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
        )
      }}
    </Formik>
  )
}

export default memo(SignUpForm)