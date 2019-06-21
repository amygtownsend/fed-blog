import React from 'react'
import { ReactComponent as ArrowLeft } from '../img/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../img/icons/arrow-right.svg'

const Pagination = ({ currentSkip, onPageChange }) => {
  const next = () => {
    onPageChange(currentSkip + 5)
  }
  const prev = () => {
    onPageChange(currentSkip - 5)
  }

  return (
    <div className="flex justify-between m-30">
      <button className="btn flex items-center" onClick={prev()}>
        <ArrowLeft alt="previous blog posts" className="mr-8" />
        <div>Prev</div>
      </button>
      <button className="btn flex items-center" onClick={next()}>
        <div>Next</div>
        <ArrowRight alt="next blog posts" className="ml-8" />
      </button>
    </div>
  )
}
export default Pagination
