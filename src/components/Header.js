import React from 'react'
import { HeaderContext } from './HeaderContext'
const classNames = require('classnames')

const Header = ({ index }) => {
  const headerClasses = classNames('py-24 h-678 -mb-48', {
    'bg-green-200': index % 2 === 0,
    'bg-blue-200': index % 2 !== 0
  })

  return (
    <HeaderContext.Consumer>
      {value => (
        <header className={value.colorBg ? headerClasses : 'py-24'}>
          {/* Add blog post image */}
          <img
            src={value.logo}
            alt="Aspiring Writers Alley logo"
            className="m-auto block mb-30"
          />
        </header>
      )}
    </HeaderContext.Consumer>
  )
}

export default Header
