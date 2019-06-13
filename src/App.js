import React, { useState, useEffect } from 'react'
import { Router, Link } from '@reach/router'
import BlogExcerpt from './components/BlogExcerpt'
import json from './data/blog-posts.json'

const App = () => (
  <div className="text-center">
    <Router>
      <Home path="/" />
      <BlogExcerpt path=":key" />
    </Router>
  </div>
)

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(json)
  }, [])

  const renderExcerpt = ({ key, picture, author, title, body, date }) => {
    return (
      <div>
        <img src={picture} alt="" />
        <Link to={key}>{title}</Link>
        <h3 className="text-green">{author}</h3>
        <h3>{date}</h3>
        <p>{body}</p>
      </div>
    )
  }

  return <div>{data.map(renderExcerpt)}</div>
}

export default App
