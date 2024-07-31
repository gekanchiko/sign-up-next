import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TFunction } from 'i18next'
import { Form, Formik, FormikProps } from 'formik'
import { isEmpty } from 'lodash'
import Button from '@mui/joy/Button'

import { FlexRow, Text } from '@/app/modules/components'
import { FormInputField } from '@/app/modules/components/FormFields'

import { validationSchema, dynamicErrorKeys } from './validationSchema'

interface FormFields {
  email: string;
  password: string;
}

const getErrorNameFromKey = (key: string, t: TFunction) => {
  if (key === dynamicErrorKeys.has8CharsNoSpaces) return t`Has at least 8 characters (no spaces)`
  if (key === dynamicErrorKeys.hasUpperAndLower) return t`Uppercase and lowercase letters`
  if (key === dynamicErrorKeys.has1Digit) return t`1 digit minimum`
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
              {Object.values(dynamicErrorKeys).map((errorKey: string, idx) => {
                const hasMargin = idx < Object.keys(dynamicErrorKeys).length - 1
                const isSatisfied = !isEmpty(values.password) && !dynamicErrors.includes(errorKey)
                const isValidationFailed = submitCount > 0 && !isSatisfied
                // console.log(errorKey, values.password, isSatisfied, isValidationFailed)
                const ruleTextColor = isSatisfied ?
                  '#27B274' :
                  (isValidationFailed ? '#FF8080' : '#4A4E71')

                return (
                  <FlexRow key={errorKey} w={{ xs: 'auto' }} mb={{ xs: hasMargin ? 4 : 0 }}>
                    <Text size={{ xs: 12 }} color={{ xs: ruleTextColor }}>
                      {getErrorNameFromKey(errorKey, t)}
                    </Text>
                  </FlexRow>
                )
              })}
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

export default SignUpForm