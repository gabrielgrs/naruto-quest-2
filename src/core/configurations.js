import * as colorsThemes from './themes/colors'

const getThemeByVilage = village => {
  // if (village === 'Leaf') return colorsThemes.leaf
  // if (village === 'Cloud') return colorsThemes.cloud
  // if (village === 'Mist') return colorsThemes.mist
  // if (village === 'Rock') return colorsThemes.rock
  // if (village === 'Sand') return colorsThemes.sand
  // if (village === 'Sound') return colorsThemes.sound

  return colorsThemes.main
}

export const theme = characterVillage => ({
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
  // colors: getColors(theme),
  colors: getThemeByVilage(characterVillage),
  icons: {}
})

export const helpers = {}
