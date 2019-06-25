import React from 'react'
import { ReactComponent as ArrowLeft } from '../img/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../img/icons/arrow-right.svg'

const Pagination = ({ total, skip, setSkip, count, setCount, limit }) => {
  const next = () => {
    setSkip(skip + limit)
    setCount(count + limit)
  }
  const prev = () => {
    setSkip(skip - limit)
    setCount(count - limit)
  }

  return (
    <div className="flex justify-between m-30">
      <button
        className="btn flex items-center"
        disabled={skip === 0}
        onClick={prev}
      >
        <ArrowLeft aria-hidden="true" className="mr-8" />
        <span>Prev</span>
      </button>
      <button
        className="btn flex items-center"
        disabled={count >= total}
        onClick={next}
      >
        <span>Next</span>
        <ArrowRight aria-hidden="true" className="ml-8" />
      </button>
    </div>
  )
}
export default Pagination
