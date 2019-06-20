import React from 'react'
const classNames = require('classnames')

const Header = ({ index, logo, colorBg }) => {
  const headerClasses = classNames('p-24 h-auto md:h-678 mb-0 md:-mb-48', {
    'bg-green-200': index % 2 === 0,
    'bg-blue-200': index % 2 !== 0
  })

  return (
    <header className={colorBg ? headerClasses : 'p-24'}>
      {/* Add blog post image */}
      <img
        src={logo}
        alt="Aspiring Writers Alley logo"
        className="m-auto block pb-30"
      />
    </header>
  )
}

export default Header
