import React, { useState, useEffect } from 'react'
import arrowDown from '../img/icons/arrow-down.svg'

const Selector = ({ client, categoryId, setCategoryId }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = () =>
      client.getEntries({
        content_type: 'category',
        select: 'sys.id,fields'
      })
    fetchCategories().then(r => {
      setCategories(r.items)
    })
  }, [client])

  return (
    <div className="flex items-baseline font-medium justify-end mr-30 my-16">
      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        value={categoryId}
        onChange={setCategoryId}
        className="font-medium ml-8 border-gray-100 border bg-no-repeat bg-right-8 bg-white w-200 pt-6 px-12 appearance-none"
        style={{ backgroundImage: `url(${arrowDown})` }}
      >
        <option value="">All</option>
        {categories.map(({ fields: { name }, sys: { id } }) => {
          return (
            <option key={id} value={id}>
              {name}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Selector
