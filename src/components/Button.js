import React from 'react'
const cx = require('classnames')

const Button = ({ children, className, ...props }) => (
  <button className={cx('btn', className)} {...props}>
    {children}
  </button>
)

export default Button
