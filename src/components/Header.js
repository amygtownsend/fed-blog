import React from 'react'
import { HeaderContext } from './HeaderContext'
const classNames = require('classnames')

const Header = ({ index }) => {
  const headerClasses = classNames('p-24 h-auto md:h-678 mb-0 md:-mb-48', {
    'bg-green-200': index % 2 === 0,
    'bg-blue-200': index % 2 !== 0
  })

  return (
    <HeaderContext.Consumer>
      {value => (
        <header className={value.colorBg ? headerClasses : 'p-24'}>
          {/* Add blog post image */}
          <img
            src={value.logo}
            alt="Aspiring Writers Alley logo"
            className="m-auto block pb-30"
          />
        </header>
      )}
    </HeaderContext.Consumer>
  )
}

export default Header
