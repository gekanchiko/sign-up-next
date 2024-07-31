import { useCallback, useEffect, useMemo, useState, useRef } from 'react'
import { FormikProps, useField } from 'formik'
import Input from '@mui/joy/Input'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { v4 as uuidv4 } from 'uuid'
import { isEmpty } from 'lodash'

import { FlexRow, Text } from '../..'

type InputFieldProps = {
  type: 'text' | 'number' | 'password',
  name: string,
  placeholder: string,
  formProps: FormikProps<any>,
  style?: object,
  autofocus?: boolean,
  hideErrors?: boolean
}

const inputId: string = `${uuidv4()}`

const FormInputField = (props: InputFieldProps) => {
  const { autofocus, type, name, placeholder, style, hideErrors, formProps } = props
  const isPasswordField = type === 'password'
  const { submitCount } = formProps

  const [isVisible, setIsVisible] = useState(!isPasswordField)
  const [field, meta] = useField(name)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus()
    }
    // eslint-disable-next-line
  }, [])

  const handleOnVisibilityClick = useCallback(() => {
    setIsVisible(isVisible => !isVisible)
    inputRef.current?.focus()
  }, [])

  const VisibilityIconComponent = useMemo(
    () => isVisible ? VisibilityOffIcon : VisibilityIcon,
    [isVisible]
  )

  const hasErrorAfterBlur = useMemo(
    () =>
      (submitCount > 0 || !isEmpty(field.value)) &&
      meta.touched &&
      !!meta.error,
    [field.value, meta.error, meta.touched, submitCount]
  )

  return (
    <FlexRow position={{ xs: 'relative' }} mb={{ xs: 25 }}>
      <FlexRow>
        <Input
          slotProps={{ input: { ref: inputRef } }}
          id={`${inputId}-${name}`}
          type={isPasswordField && isVisible ? 'text' : type}
          placeholder={placeholder}
          style={{ width: '100%', ...style }}
          error={hasErrorAfterBlur}
          onFocus={(e) => {
            if (e.currentTarget) {
              setTimeout(() => {
                e.currentTarget?.setSelectionRange(
                  e.currentTarget?.value?.length - 1,
                  e.currentTarget?.value?.length
                )
              }, 50)
            }
          }}
          endDecorator={
            isPasswordField && (
              <VisibilityIconComponent
                onClick={handleOnVisibilityClick}
                style={{ cursor: 'pointer' }}
              />
            )
          }
          {...field}
        />
      </FlexRow>
      {!hideErrors && hasErrorAfterBlur && (
        <FlexRow
          w={{ xs: 'auto' }}
          p={{ xs: '6px 12px' }}
          position={{ xs: 'absolute' }}
          style={{ bottom: 0, insetInlineStart: 0, transform: 'translateY(100%)' }}
        >
          <Text size={{ xs: 12 }} color={{ xs: '#FF8080' }}>
            {meta.error}
          </Text>
        </FlexRow>
      )}
    </FlexRow>
  )
}

export default FormInputField