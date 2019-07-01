import React from 'react'

const Button = ({ disabled, onClick, children }) => (
  <button
    className="btn flex items-center"
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
