import React from 'react'
import { ReactComponent as ArrowLeft } from '../img/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../img/icons/arrow-right.svg'

const Pagination = () => (
  <div className="flex justify-between m-30">
    {/* @TODO Add functionality to previous and next buttons */}
    <div className="flex items-center">
      <ArrowLeft alt="previous blog posts" className="mr-8" />
      <button className="btn">Prev</button>
    </div>
    <div className="flex items-center">
      <button className="btn">Next</button>
      <ArrowRight alt="next blog posts" className="ml-8" />
    </div>
  </div>
)

export default Pagination
