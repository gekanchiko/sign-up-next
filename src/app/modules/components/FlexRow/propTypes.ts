type DirectionVariant = 'row' | 'column'
type JustifyVariant = 'start' | 'center' | 'end' | 'space-between' | 'space-around'
type AlignVariant = 'start' | 'center' | 'end' | 'baseline'
type PositionVariant = 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky' | 'unset' | 'initial'

export type WidthType =
  {
    xs?: string | number,
    sm?: string | number,
    md?: string | number,
    lg?: string | number,
    xl?: string | number,
  }

export type HeightType =
  {
    xs?: string | number,
    sm?: string | number,
    md?: string | number,
    lg?: string | number,
    xl?: string | number,
  }

export type DirectionType =
  {
    xs: DirectionVariant,
    sm?: DirectionVariant,
    md?: DirectionVariant,
    lg?: DirectionVariant,
    xl?: DirectionVariant,
  }

export type JustifyType = {
  xs: JustifyVariant,
  sm?: JustifyVariant,
  md?: JustifyVariant,
  lg?: JustifyVariant,
  xl?: JustifyVariant,
}

export type AlignType = {
  xs: AlignVariant,
  sm?: AlignVariant,
  md?: AlignVariant,
  lg?: AlignVariant,
  xl?: AlignVariant,
}

export type PaddingType = {
  xs: string | number,
  sm?: string | number,
  md?: string | number,
  lg?: string | number,
  xl?: string | number,
}

export type MarginType = {
  xs: string | number,
  sm?: string | number,
  md?: string | number,
  lg?: string | number,
  xl?: string | number,
}

export type BackgroundType = {
  xs: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string,
}

export type PositionType = {
  xs?: PositionVariant,
  sm?: PositionVariant,
  md?: PositionVariant,
  lg?: PositionVariant,
  xl?: PositionVariant,
}