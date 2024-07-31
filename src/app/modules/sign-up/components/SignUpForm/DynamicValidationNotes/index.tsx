import React, { memo } from 'react'
import { isEmpty } from 'lodash'
import { TFunction } from 'i18next'
import { useTranslation } from 'react-i18next'

import { FlexRow, Text } from '@/app/modules/components'

import { dynamicErrorKeys } from '../validationSchema'
import { FormFields } from '../../SignUpForm'

const dynamicErrorValues = Object.values(dynamicErrorKeys)

const getErrorNameFromKey = (key: string, t: TFunction) => {
  if (key === dynamicErrorKeys.has8CharsNoSpaces) return t`Has at least 8 characters (no spaces)`
  if (key === dynamicErrorKeys.hasUpperAndLower) return t`Uppercase and lowercase letters`
  if (key === dynamicErrorKeys.has1Digit) return t`1 digit minimum`
}

interface DynamicValidationNotesProps {
  values: FormFields;
  submitCount: number;
  dynamicErrors: string[];
}

const DynamicValidationNotes = (props: DynamicValidationNotesProps) => {
  const { values, submitCount, dynamicErrors } = props
  const { t } = useTranslation()

  return dynamicErrorValues.map((errorKey: string, idx) => {
    const hasMargin = idx < dynamicErrorValues.length - 1
    const isSatisfied = !isEmpty(values.password) && !dynamicErrors.includes(errorKey)
    const isValidationFailed = submitCount > 0 && !isSatisfied
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
  })
}

export default memo(DynamicValidationNotes)