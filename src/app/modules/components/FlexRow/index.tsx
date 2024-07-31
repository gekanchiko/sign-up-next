import { ReactNode, forwardRef, SyntheticEvent, ForwardedRef } from 'react'
import { styled } from '@mui/joy/styles'

import {
  WidthType,
  DirectionType,
  JustifyType,
  AlignType,
  PaddingType,
  MarginType,
  HeightType,
  BackgroundType,
  PositionType
} from './propTypes'

import './styles.css'
/**
 * const theme = createTheme({
 *   breakpoints: {
 *     values: {
 *       xs: 0,
 *       sm: 600,
 *       md: 900,
 *       lg: 1200,
 *       xl: 1536,
 *     },
 *   },
 * });
 */

type FlexRowProps = {
  children: ReactNode,
  style?: object,
  w?: WidthType,
  h?: HeightType,
  direction?: DirectionType,
  justify?: JustifyType,
  align?: AlignType,
  // Margin
  p?: PaddingType,
  pt?: PaddingType,
  pr?: PaddingType,
  pb?: PaddingType,
  pl?: PaddingType,
  // Margin
  m?: MarginType,
  mt?: MarginType,
  mr?: MarginType,
  mb?: MarginType,
  ml?: MarginType,

  background?: BackgroundType,
  position?: PositionType,

  onClick?: (event: SyntheticEvent) => void
};

const Div = styled('div')(
  ({ theme, inlist }) => {
    const {
      w,
      justify,
      align,
      p,
      pt,
      pr,
      pb,
      pl,
      m,
      mt,
      mr,
      mb,
      ml,
      direction,
      h,
      background,
      position
    }: FlexRowProps = inlist

    return {
      display: 'flex',
      boxSizing: 'border-box',
      [theme.breakpoints.up('xs')]: {
        width: w?.xs,
        height: h?.xs,
        flexDirection: direction?.xs,
        justifyContent: justify?.xs,
        alignItems: align?.xs,
        padding: p?.xs,
        ...(!p ? {
          paddingTop: pt?.xs,
          paddingInlineEnd: pr?.xs,
          paddingBottom: pb?.xs,
          paddingInlineStart: pl?.xs,
        } : {}),
        margin: m?.xs,
        ...(!m ? {
          marginTop: mt?.xs,
          marginInlineEnd: mr?.xs,
          marginBottom: mb?.xs,
          marginInlineStart: ml?.xs,
        } : {}),
        background: background?.xs,
        position: position?.xs,
      },
      [theme.breakpoints.up('sm')]: {
        width: w?.sm || w?.xs,
        height: h?.sm || h?.xs,
        flexDirection: direction?.sm || direction?.xs,
        justifyContent: justify?.sm || justify?.xs,
        alignItems: align?.sm || align?.xs,
        padding: p?.sm || p?.xs,
        ...(!p ? {
          paddingTop: pt?.sm || pt?.xs,
          paddingInlineEnd: pr?.sm || pr?.xs,
          paddingBottom: pb?.sm || pb?.xs,
          paddingInlineStart: pl?.sm || pl?.xs,
        } : {}),
        margin: m?.sm || m?.xs,
        ...(!m ? {
          marginTop: mt?.sm || mt?.xs,
          marginInlineEnd: mr?.sm || mr?.xs,
          marginBottom: mb?.sm || mb?.xs,
          marginInlineStart: ml?.sm || ml?.xs,
        } : {}),
        background: background?.sm || background?.xs,
        position: position?.sm || position?.xs,
      },
      [theme.breakpoints.up('md')]: {
        width: w?.md || w?.sm || w?.xs,
        height: h?.md || h?.sm || h?.xs,
        flexDirection: direction?.md || direction?.sm || direction?.xs,
        justifyContent: justify?.md || justify?.sm || justify?.xs,
        alignItems: align?.md || align?.sm || align?.xs,
        padding: p?.md || p?.sm || p?.xs,
        ...(!p ? {
          paddingTop: pt?.md || pt?.sm || pt?.xs,
          paddingInlineEnd: pr?.md || pr?.sm || pr?.xs,
          paddingBottom: pb?.md || pb?.sm || pb?.xs,
          paddingInlineStart: pl?.md || pl?.sm || pl?.xs,
        } : {}),
        margin: m?.md || m?.sm || m?.xs,
        ...(!m ? {
          marginTop: mt?.md || mt?.sm || mt?.xs,
          marginInlineEnd: mr?.md || mr?.sm || mr?.xs,
          marginBottom: mb?.md || mb?.sm || mb?.xs,
          marginInlineStart: ml?.md || ml?.sm || ml?.xs,
        } : {}),
        background: background?.md || background?.sm || background?.xs,
        position: position?.md || position?.sm || position?.xs,
      },
      [theme.breakpoints.up('lg')]: {
        width: w?.lg || w?.md || w?.sm || w?.xs,
        height: h?.lg || h?.md || h?.sm || h?.xs,
        flexDirection: direction?.lg || direction?.md || direction?.sm || direction?.xs,
        justifyContent: justify?.lg || justify?.md || justify?.sm || justify?.xs,
        alignItems: align?.lg || align?.md || align?.sm || align?.xs,
        padding: p?.lg || p?.md || p?.sm || p?.xs,
        ...(!p ? {
          paddingTop: pt?.lg || pt?.md || pt?.sm || pt?.xs,
          paddingInlineEnd: pr?.lg || pr?.md || pr?.sm || pr?.xs,
          paddingBottom: pb?.lg || pb?.md || pb?.sm || pb?.xs,
          paddingInlineStart: pl?.lg || pl?.md || pl?.sm || pl?.xs,
        } : {}),
        margin: m?.lg || m?.md || m?.sm || m?.xs,
        ...(!m ? {
          marginTop: mt?.lg || mt?.md || mt?.sm || mt?.xs,
          marginInlineEnd: mr?.lg || mr?.md || mr?.sm || mr?.xs,
          marginBottom: mb?.lg || mb?.md || mb?.sm || mb?.xs,
          marginInlineStart: ml?.lg || ml?.md || ml?.sm || ml?.xs,
        } : {}),
        background: background?.lg || background?.md || background?.sm || background?.xs,
        position: position?.lg || position?.md || position?.sm || position?.xs,
      },
      [theme.breakpoints.up('xl')]: {
        width: w?.xl || w?.lg || w?.md || w?.sm || w?.xs,
        height: h?.xl || h?.lg || h?.md || h?.sm || h?.xs,
        flexDirection: direction?.xl || direction?.lg || direction?.md || direction?.sm || direction?.xs,
        justifyContent: justify?.xl || justify?.lg || justify?.md || justify?.sm || justify?.xs,
        alignItems: align?.xl || align?.lg || align?.md || align?.sm || align?.xs,
        padding: p?.xl || p?.lg || p?.md || p?.sm || p?.xs,
        ...(!p ? {
          paddingTop: pt?.xl || pt?.lg || pt?.md || pt?.sm || pt?.xs,
          paddingInlineEnd: pr?.xl || pr?.lg || pr?.md || pr?.sm || pr?.xs,
          paddingBottom: pb?.xl || pb?.lg || pb?.md || pb?.sm || pb?.xs,
          paddingInlineStart: pl?.xl || pl?.lg || pl?.md || pl?.sm || pl?.xs,
        } : {}),
        margin: m?.xl || m?.lg || m?.md || m?.sm || m?.xs,
        ...(!m ? {
          marginTop: mt?.xl || mt?.lg || mt?.md || mt?.sm || mt?.xs,
          marginInlineEnd: mr?.xl || mr?.lg || mr?.md || mr?.sm || mr?.xs,
          marginBottom: mb?.xl || mb?.lg || mb?.md || mb?.sm || mb?.xs,
          marginInlineStart: ml?.xl || ml?.lg || ml?.md || ml?.sm || ml?.xs,
        } : {}),
        background: background?.xl || background?.lg || background?.md || background?.sm || background?.xs,
        position: position?.xl || position?.lg || position?.md || position?.sm || position?.xs,
      },
    }
  }
)

type Ref = HTMLButtonElement

// eslint-disable-next-line react/display-name
const FlexRow = forwardRef<Ref, FlexRowProps>(
  (props: FlexRowProps, ref: ForwardedRef<HTMLButtonElement> | undefined) => {
    const {
      children,
      onClick,
      style = {},
      w = { xs: '100%', },
      h = { xs: 'auto', },
      direction = { xs: 'row', },
      justify = { xs: 'center', },
      align = { xs: 'center', },
      // Padding
      pt = { xs: 'unset', },
      pr = { xs: 'unset', },
      pb = { xs: 'unset', },
      pl = { xs: 'unset', },
      // Margin
      mt = { xs: 'unset', },
      mr = { xs: 'unset', },
      mb = { xs: 'unset', },
      ml = { xs: 'unset', },

      background = { xs: 'none', },
      position = { xs: 'unset', },
      ...rest
    } = props

    return (
      <Div
      // @ts-ignore
        ref={ref}
        inlist={{
          ...rest,
          w,
          h,
          direction,
          justify,
          align,
          pt,
          pr,
          pb,
          pl,
          mt,
          mr,
          mb,
          ml,
          background,
          position
        }}
        style={style}
        onClick={onClick}
      >{children}</Div>
    )
  })

export default FlexRow