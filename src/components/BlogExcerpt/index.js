import React, { useState, useEffect } from 'react'
import json from '../../data/blog-posts.json'

const BlogExcerpt = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(json)
  }, [])

  const renderExcerpts = ({ author, title, body, date }) => {
    return (
      <div>
        <h1 className="text-36">{title}</h1>
        <h2 className="text-18">{author}</h2>
        <h2 className="text-18">{date}</h2>
        <p>{body}</p>
      </div>
    )
  }

  return (
    <div>
      {data
        .filter(d => d.key === '5d025bd152930e417680eb2b')
        .map(renderExcerpts)}
    </div>
    // @TODO Replace hard coded key value with key value in URL
  )
}

export default BlogExcerpt
