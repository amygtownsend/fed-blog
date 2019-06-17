import React from 'react'
import { Router } from '@reach/router'
import Home from './components/Home'
import FullPost from './components/FullPost'
import json from './data/blog-posts.json'

const DataContext = React.createContext(json)

const App = () => (
  <div className="max-w-950 m-auto my-24">
    <Router>
      <Home path="/" />
      <FullPost path="/blog/:postId" />
    </Router>
  </div>
)

export { App, DataContext }
