import { useEffect, useMemo } from 'react'
import { useField } from 'formik'
import Input from '@mui/joy/Input'
import { v4 as uuidv4 } from 'uuid'

import { FlexRow, Text } from '../..'
import { ErrorContainer } from './styles'

type InputFieldProps = {
  type: 'text' | 'number' | 'password',
  name: string,
  placeholder: string,
  style?: object,
  autofocus?: boolean,
  hideErrors?: boolean,
}

const inputId: string = `${uuidv4()}`

const FormInputField = (props: InputFieldProps) => {
  const { autofocus, type, name, placeholder, style, hideErrors, } = props
  const [field, meta,] = useField(name)

  useEffect(() => {
    if (autofocus) {
      const inputEl = document.getElementById(inputId)
      if (inputEl) {
        inputEl.focus()
        // @ts-ignore
        inputEl.select()
      }
    }
    // eslint-disable-next-line
  }, [])

  const hasErrorAfterBlur = useMemo(() => meta.touched && !!meta.error, [meta.error, meta.touched])

  return (
    <FlexRow position={{ xs: 'relative' }} mb={{ xs: 25 }}>
      <FlexRow>
        <Input
          id={inputId}
          type={type}
          placeholder={placeholder}
          style={{ width: '100%', ...style }}
          error={hasErrorAfterBlur}
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