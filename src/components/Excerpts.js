import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import json from '../data/blog-posts.json'
import logoColor from '../img/logos/logo-color.png'
import arrowLeft from '../img/icons/arrow-lf.png'
import arrowRight from '../img/icons/arrow-rt.png'
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
              <span className="font-medium">{author}</span>
              <span className="px-8 text-gray-100 group-hover:text-white">
                |
              </span>
              <time dateTime={date} className="font-medium">
                {months[d.getMonth()]} {d.getDay()}, {d.getFullYear()}
              </time>
            </div>
            <p className="leading-relaxed group-hover:text-white">{snippet}</p>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <div>
      <img
        src={logoColor}
        alt="Aspiring Writers Alley logo"
        className="m-auto block mb-30"
      />
      <hr className="border-gray-100 border m-0 mx-30" />
      <div className="flex-col">{data.map(renderExcerpt)}</div>
      <hr className="border-gray-100 border m-0 mx-30" />
      <div className="flex justify-between m-30">
        <div className="flex items-center">
          <img src={arrowLeft} alt="previous blog posts" className="mr-8" />
          <button className="btn">Prev</button>
        </div>
        <div className="flex items-center">
          <button className="btn">Next</button>
          <img src={arrowRight} alt="next blog posts" className="ml-8" />
        </div>
      </div>
    </div>
  )
}

export default Excerpts
