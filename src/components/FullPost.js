import React, { useState, useEffect } from 'react'
import json from '../data/blog-posts.json'

// @TODO Create a context instead of importing and mapping json data twice and creating Date twice

const FullPost = props => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(json)
  }, [])

  const renderPost = ({ key, author, title, body, date }) => {
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

    // @TODO Style the full post page

    return (
      <div key={key} className="text-center">
        <h1 className="text-36">{title}</h1>
        <span className="text-18 block">{author}</span>
        <time dateTime={date}>
          {months[d.getMonth()]} {d.getDay()}, {d.getFullYear()}
        </time>
        <p className="text-left">{body}</p>
      </div>
    )
  }

  return (
    <div>{data.filter(d => '/' + d.key === props.uri).map(renderPost)}</div>
  )
}

export default FullPost
