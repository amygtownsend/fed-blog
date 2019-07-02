import React from 'react'
import cx from 'classnames'

const Button = ({ children, className, ...props }) => (
  <button className={cx('btn', className)} {...props}>
    {children}
  </button>
)

export default Button
