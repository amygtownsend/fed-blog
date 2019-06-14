import React, { useState, useEffect } from 'react'
import { Router, Link } from '@reach/router'
import BlogExcerpt from './components/BlogExcerpt'
import json from './data/blog-posts.json'

const App = () => (
  <div className="max-w-950 m-auto">
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

  const renderExcerpt = ({ key, picture, author, title, snippet, date }) => {
    return (
      <Link to={key}>
        <article className="group flex items-start p-30 my-30 hover:bg-green-200 hover:text-white rounded-8">
          <img className="flex-shrink-0" src={picture} alt="" />
          <div className="mx-30">
            <h2 className="text-green-200 group-hover:text-white text-36 leading-tight capitalize">
              {title}
            </h2>
            <div className="flex text-18 my-8">
              <h3 className="mr-8">{author}</h3>
              <span className="text-gray-100 group-hover:text-white">|</span>
              <h3 className="ml-8">{date}</h3>
            </div>
            <p className="leading-relaxed group-hover:text-white">{snippet}</p>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <div className="flex-col max-w-950 mr-auto">{data.map(renderExcerpt)}</div>
  )
}

export default App
