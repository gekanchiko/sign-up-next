import { ReactNode } from 'react'
import { styled } from '@mui/joy/styles'

import {
  DecorationType,
  AlignType,
  LetterSpacingType,
  LineHeightType,
  SizeType,
  WeightType,
  TransformationType,
  ColorType
} from './propTypes'

type TextProps = {
  children: string | ReactNode,
  style?: object,
  size: SizeType,
  weight?: WeightType,
  lineHeight?: LineHeightType,
  align?: AlignType,
  decoration?: DecorationType,
  letterSpacing?: LetterSpacingType,
  transform?: TransformationType,
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p',
  color?: ColorType
}

const Text = (props: TextProps) => {
  const {
    element = 'p',
    style = {},
    children,
    ...restProps
  } = props
  const El = styled(element)(({ theme, inlist }) => {
    const {
      size = { xs: 14 },
      decoration = { xs: 'unset' },
      letterSpacing = { xs: 'unset' },
      lineHeight = { xs: 'normal' },
      transform = { xs: 'unset' },
      weight = { xs: 'normal' },
      align = { xs: 'start' },
      color = { xs: '#fff' }
    }: TextProps = inlist

    return {
      fontFamily: 'sans-serif',
      margin: 0,
      [theme.breakpoints.up('xs')]: {
        fontSize: size?.xs,
        fontWeight: weight?.xs,
        textDecoration: decoration?.xs,
        textAlign: align?.xs,
        textTransform: transform?.xs,
        letterSpacing: letterSpacing?.xs,
        lineHeight: lineHeight?.xs,
        color: color?.xs,
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: size?.sm || size?.xs,
        fontWeight: weight?.sm || weight?.xs,
        textDecoration: decoration?.sm || decoration?.xs,
        textAlign: align?.sm || align?.xs,
        textTransform: transform?.sm || transform?.xs,
        letterSpacing: letterSpacing?.sm || letterSpacing?.xs,
        lineHeight: lineHeight?.sm || lineHeight?.xs,
        color: color?.sm || color?.xs,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: size?.md || size?.sm || size?.xs,
        fontWeight: weight?.md || weight?.sm || weight?.xs,
        textDecoration: decoration?.md || decoration?.sm || decoration?.xs,
        textAlign: align?.md || align?.sm || align?.xs,
        textTransform: transform?.md || transform?.sm || transform?.xs,
        letterSpacing: letterSpacing?.md || letterSpacing?.sm || letterSpacing?.xs,
        lineHeight: lineHeight?.md || lineHeight?.sm || lineHeight?.xs,
        color: color?.md || color?.sm || color?.xs,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: size?.lg || size?.md || size?.sm || size?.xs,
        fontWeight: weight?.lg || weight?.md || weight?.sm || weight?.xs,
        textDecoration:
          decoration?.lg ||
          decoration?.md ||
          decoration?.sm ||
          decoration?.xs,
        textAlign: align?.lg || align?.md || align?.sm || align?.xs,
        textTransform: transform?.lg || transform?.md || transform?.sm || transform?.xs,
        letterSpacing:
          letterSpacing?.lg ||
          letterSpacing?.md ||
          letterSpacing?.sm ||
          letterSpacing?.xs,
        lineHeight: lineHeight?.lg || lineHeight?.md || lineHeight?.sm || lineHeight?.xs,
        color: color?.lg || color?.md || color?.sm || color?.xs,
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: size?.xl || size?.lg || size?.md || size?.sm || size?.xs,
        fontWeight: weight?.xl || weight?.lg || weight?.md || weight?.sm || weight?.xs,
        textDecoration:
          decoration?.xl ||
          decoration?.lg ||
          decoration?.md ||
          decoration?.sm ||
          decoration?.xs,
        textAlign: align?.xl || align?.lg || align?.md || align?.sm || align?.xs,
        textTransform:
          transform?.xl ||
          transform?.lg ||
          transform?.md ||
          transform?.sm ||
          transform?.xs,
        letterSpacing:
          letterSpacing?.xl ||
          letterSpacing?.lg ||
          letterSpacing?.md ||
          letterSpacing?.sm ||
          letterSpacing?.xs,
        lineHeight:
          lineHeight?.xl ||
          lineHeight?.lg ||
          lineHeight?.md ||
          lineHeight?.sm ||
          lineHeight?.xs,
        color: color?.xl || color?.lg || color?.md || color?.sm || color?.xs,
      },
    }
  })

  return (<El inlist={restProps} style={style}>{children}</El>)
}

export default Text