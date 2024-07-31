import { string, object } from 'yup'
import { isUndefined, isNull } from 'lodash'

export const dynamicErrorKeys = {
  has8CharsNoSpaces: 'has-8-chars-no-spaces',
  hasUpperAndLower: 'has-upper-and-lower',
  has1Digit: 'has-1-digit'
}

export const validationSchema = object().shape({
  email: string().email('The email is not correct').required('Mandatory'),
  password: string()
    .test(
      dynamicErrorKeys.has8CharsNoSpaces,
      dynamicErrorKeys.has8CharsNoSpaces,
      (value) => {
        if (isUndefined(value)) return true
        return !isNull(/^.[^\s]{7,}$/.exec(value))
      })
    .test(
      dynamicErrorKeys.hasUpperAndLower,
      dynamicErrorKeys.hasUpperAndLower,
      (value) => {
        if (isUndefined(value)) return true
        return !isNull(/[A-Z]/.exec(value)) && !isNull(/[a-z]/.exec(value))
      })
    .test(
      dynamicErrorKeys.has1Digit,
      dynamicErrorKeys.has1Digit,
      (value) => {
        if (isUndefined(value)) return true
        return !isNull(/[0-9]/.exec(value))
      })
    .required('Mandatory')
})