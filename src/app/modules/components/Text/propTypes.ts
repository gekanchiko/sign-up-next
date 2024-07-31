type AlignVariant = 'start' | 'end' | 'center'
type LineHeightVariant = 'normal' | 'unset' | 'initial' | 'revert'
type WeightVariant = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'normal'
type DecorationVariant = 'unset' | 'line-through' | 'overline' | 'underline'
type TransformationVariant = 'capitalize' | 'lowercase' | 'uppercase' | 'unset' | 'none'

export type SizeType = {
  xs: string | number,
  sm?: string | number,
  md?: string | number,
  lg?: string | number,
  xl?: string | number,
}

export type AlignType = {
  xs: AlignVariant,
  sm?: AlignVariant,
  md?: AlignVariant,
  lg?: AlignVariant,
  xl?: AlignVariant,
}

export type LineHeightType = {
  xs: LineHeightVariant,
  sm?: LineHeightVariant,
  md?: LineHeightVariant,
  lg?: LineHeightVariant,
  xl?: LineHeightVariant,
}

export type LetterSpacingType = {
  xs: number | string,
  sm?: number | string,
  md?: number | string,
  lg?: number | string,
  xl?: number | string,
}

export type WeightType = {
  xs: WeightVariant,
  sm?: WeightVariant,
  md?: WeightVariant,
  lg?: WeightVariant,
  xl?: WeightVariant,
}

export type DecorationType = {
  xs: DecorationVariant,
  sm?: DecorationVariant,
  md?: DecorationVariant,
  lg?: DecorationVariant,
  xl?: DecorationVariant,
}

export type TransformationType = {
  xs: TransformationVariant,
  sm?: TransformationVariant,
  md?: TransformationVariant,
  lg?: TransformationVariant,
  xl?: TransformationVariant,
}

export type ColorType = {
  xs: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string,
}

