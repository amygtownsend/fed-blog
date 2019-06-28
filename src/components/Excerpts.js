import React from 'react'
import { Link } from '@reach/router'
import PublishDate from './PublishDate'
import * as Markdown from 'react-markdown'
const classNames = require('classnames')

const Excerpts = ({
  id,
  index,
  title,
  publishDate,
  author: {
    fields: { name }
  },
  imageLarge: {
    fields: {
      file: { url }
    }
  },
  snippet,
  limit
}) => {
  const cardClasses = classNames(
    'group flex flex-col md:flex-row items-start p-30 my-30 hover:text-white focus:text-white rounded-8',
    {
      'hover:bg-green-200 focus:bg-green-200': index % 2 === 0,
      'hover:bg-blue-200 focus:bg-blue-200': index % 2 !== 0
    }
  )

  const imgClasses = classNames('w-full md:w-200 md:h-200 flex-shrink-0', {
    'bg-green-200': index % 2 === 0,
    'bg-blue-200': index % 2 !== 0
  })

  const titleClasses = classNames(
    'group-hover:text-white group-focus:text-white text-36 leading-tight capitalize',
    {
      'text-green-200': index % 2 === 0,
      'text-blue-200': index % 2 !== 0
    }
  )

  const snipper = limit
    ? snippet
        .split(' ')
        .splice(0, limit)
        .join(' ')
        .concat('...')
    : snippet

  return (
    <Link key={id} to={`/blog/${id}`} state={{ index }}>
      <article className={cardClasses}>
        <div className={imgClasses}>
          <img
            className="object-cover opacity-50 w-full h-full"
            style={{ mixBlendMode: 'multiply' }}
            src={url}
            alt=""
          />
        </div>
        <div className="mt-22 md:mt-0 md:ml-30">
          <h2 className={titleClasses}>{title}</h2>
          <div className="flex text-18 my-8">
            <span className="font-medium">{name}</span>
            <span className="px-8 text-gray-100 group-hover:text-white group-focus:text-white">
              |
            </span>
            <PublishDate date={publishDate} />
          </div>
          <Markdown
            source={snipper}
            className="text-15 text-gray-200 leading-relaxed group-hover:text-white group-focus:text-white"
          />
        </div>
      </article>
    </Link>
  )
}

export default Excerpts
