import React from 'react'
import logoColor from '../img/logos/logo-color.png'
import logoWhite from '../img/logos/logo-white.png'

export const themes = {
  color: {
    logo: logoColor,
    colorBg: false
  },
  white: {
    logo: logoWhite,
    colorBg: true
  }
}

export const HeaderContext = React.createContext(themes.color)
