import React from 'react'
const cx = require('classnames')

const Divider = ({ className }) => (
  <hr className={cx('border-gray-100 border m-0', className)} />
)

export default Divider
