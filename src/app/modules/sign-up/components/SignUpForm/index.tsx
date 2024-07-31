import React, { useCallback, useState, memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Form, Formik, FormikProps } from 'formik'
import Button from '@mui/joy/Button'

import { FlexRow } from '@/app/modules/common/components'
import { FormInputField } from '@/app/modules/common/components/FormFields'

import DynamicValidationNotes from './DynamicValidationNotes'
import { validationSchema, dynamicErrorKeys } from './validationSchema'
import { useSignUpMutation } from '../../mutations'

export interface FormFields {
  email: string;
  password: string;
}

interface SignUpFormProps {
  onSuccess: (data: any) => void
}

const SignUpForm = (props: SignUpFormProps) => {
  const { onSuccess } = props
  const { t } = useTranslation()
  const [dynamicErrors, setDynamicErrors] = useState<string[]>([])
  const { data, mutate: doSignUp, isPending, isSuccess } = useSignUpMutation()

  useEffect(() => {
    if (isSuccess && data) onSuccess(data)
  }, [data, isSuccess, onSuccess])

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
    doSignUp(values)
  }, [doSignUp])

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
                  loading={isPending}
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