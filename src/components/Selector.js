import React from 'react'
import arrowDown from '../img/icons/arrow-down.svg'

const Selector = () => (
  <div className="flex items-baseline font-medium justify-end mr-30 my-16">
    <label htmlFor="category">Category</label>
    {/* @TODO Add functionality to category selector */}
    <select
      id="category"
      name="category"
      className="font-medium ml-8 border-gray-100 border bg-no-repeat bg-right-8 bg-white w-200 pt-6 px-12 appearance-none"
      style={{ backgroundImage: `url(${arrowDown})` }}
    >
      <option value="all">All</option>
      <option value="category1">Category 1</option>
      <option value="category2">Category 2</option>
      <option value="category3">Category 3</option>
      <option value="category4">Category 4</option>
    </select>
  </div>
)

export default Selector
