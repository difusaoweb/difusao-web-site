import { theme } from './theme'

export const valuesGlobal = {
  fontFamily: theme.fonts.roboto,
  fontFamilyHeading: theme.fonts.barlowCondensed,
  fontSize: 12,
  fontSizeDesktop: 16,
  fontSizeH1: 50,
  fontSizeH1Desktop: 80,
  fontSizeH2: 30,
  fontSizeH2Desktop: 40,
  fontSizeH3: 20,
  fontSizeH3Desktop: 32,
  fontWeight: 400,
  fontWeightHeading: 500,
  primaryColor: '#ef6f05',
  secondaryColor: '#3a3a3a',
  whiteColor: '#fff',
  typographyDefaultColor: '#495159',
  floatButtonBackgroundColor: '#25d366',
  floatButtonBackgroundColorHover: '#128c7e'
}

export const styles = {
  h1: {
    marginBottom: 45,
    fontFamily: valuesGlobal.fontFamilyHeading,
    fontSize: valuesGlobal.fontSizeH1,
    fontWeight: valuesGlobal.fontWeightHeading,
    color: valuesGlobal.whiteColor
  },
  a: {
    color: theme.colors.primary,
    textTransform: 'none',
    textDecoration: 'none',
    fontSize: valuesGlobal.fontSize,
    fontWeight: valuesGlobal.fontWeight
  }
}
