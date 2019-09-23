import * as colorsThemes from './themes/colors'

export const getTheme = selectedTheme => {
  return theme(selectedTheme)
}

export const theme = theme => ({
  spaces: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xg: '40px'
  },
  fonts: {
    primary: 'Open Sans, sans-serif',
    secondary: 'Bangers',
    baseSize: 14,
    fontSize: size => `${size / this.baseSize}rem`,
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700
  },
  colors: colorsThemes[theme],
  icons: {}
})

export const helpers = {}
