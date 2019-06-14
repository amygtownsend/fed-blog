import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import json from '../data/blog-posts.json'
const classNames = require('classnames')

const Excerpts = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(json)
  }, [])

  const renderExcerpt = ({
    index,
    key,
    picture,
    author,
    title,
    snippet,
    date
  }) => {
    const d = new Date({ date }.date)
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]

    const cardClasses = classNames(
      'group flex items-start p-30 my-30 hover:text-white rounded-8',
      {
        'hover:bg-green-200': index % 2 === 0,
        'hover:bg-blue-200': index % 2 !== 0
      }
    )

    const titleClasses = classNames(
      'group-hover:text-white text-36 leading-tight capitalize',
      {
        'text-green-200': index % 2 === 0,
        'text-blue-200': index % 2 !== 0
      }
    )

    return (
      <Link key={key} to={key}>
        <article className={cardClasses}>
          <img src={picture} alt="" />
          <div className="ml-30">
            <h2 className={titleClasses}>{title}</h2>
            <div className="flex text-18 my-8">
              <span className="font-semibold">{author}</span>
              <span className="px-8 text-gray-100 group-hover:text-white">
                |
              </span>
              <time dateTime={date} className="font-semibold">
                {months[d.getMonth()]} {d.getDay()}, {d.getFullYear()}
              </time>
            </div>
            <p className="leading-relaxed group-hover:text-white">{snippet}</p>
          </div>
        </article>
      </Link>
    )
  }

  return <div className="flex-col">{data.map(renderExcerpt)}</div>
}

export default Excerpts
