import React from 'react'
import { Link } from '@reach/router'
const classNames = require('classnames')

const Excerpts = ({ data }) => {
  const renderExcerpt = ({
    index,
    key,
    picture,
    author,
    title,
    snippet,
    body,
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

    const month = months[d.getMonth()]
    const day = d.getDay()
    const year = d.getFullYear()

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
      <Link
        key={key}
        to={`/blog/${key}`}
        state={{
          excerptData: { key, author, title, body, date, month, day, year }
        }}
      >
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
                {month} {day}, {year}
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
