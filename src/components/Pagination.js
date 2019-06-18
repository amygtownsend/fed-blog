import React from 'react'
import arrowLeft from '../img/icons/arrow-lf.png'
import arrowRight from '../img/icons/arrow-rt.png'

const Pagination = () => (
  <div className="flex justify-between m-30">
    {/* @TODO Add functionality to previous and next buttons */}
    <div className="flex items-center">
      <img src={arrowLeft} alt="previous blog posts" className="mr-8" />
      <button className="btn">Prev</button>
    </div>
    <div className="flex items-center">
      <button className="btn">Next</button>
      <img src={arrowRight} alt="next blog posts" className="ml-8" />
    </div>
  </div>
)

export default Pagination
