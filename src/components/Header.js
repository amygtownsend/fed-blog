import React from 'react'
import ThemeContext from './ThemeContext'

const Header = () => (
  <header>
    <ThemeContext.Consumer>
      {value => (
        <img
          src={value}
          alt="Aspiring Writers Alley logo"
          className="m-auto block mb-30"
        />
      )}
    </ThemeContext.Consumer>
  </header>
)

export default Header
