import React, { useState } from 'react'
import { ReactComponent as ArrowLeft } from '../img/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../img/icons/arrow-right.svg'
const classNames = require('classnames')

const Pagination = ({ total, currentSkip, onPageChange }) => {
  const [count, setCount] = useState(5)
  const next = () => {
    onPageChange(currentSkip + 5)
    setCount(count + 5)
  }
  const prev = () => {
    onPageChange(currentSkip - 5)
    setCount(count - 5)
  }

  const prevDisabled = currentSkip === 0
  const nextDisabled = count >= total

  const prevClasses = classNames('btn flex items-center', {
    'btn-disabled': prevDisabled
  })

  const nextClasses = classNames('btn flex items-center', {
    'btn-disabled': nextDisabled
  })

  return (
    <div className="flex justify-between m-30">
      <button
        className={prevClasses}
        disabled={prevDisabled}
        onClick={!prevDisabled ? prev : () => {}}
      >
        <ArrowLeft alt="previous blog posts" className="mr-8" />
        <div>Prev</div>
      </button>
      <button
        className={nextClasses}
        disabled={nextDisabled}
        onClick={!nextDisabled ? next : () => {}}
      >
        <div>Next</div>
        <ArrowRight alt="next blog posts" className="ml-8" />
      </button>
    </div>
  )
}
export default Pagination
