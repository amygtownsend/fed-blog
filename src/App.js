import React from 'react'
import { Router } from '@reach/router'
import Data from './components/Data'
import FullPost from './components/FullPost'

const App = () => (
  <div className="max-w-950 m-auto my-24">
    <Router>
      <Data path="/" />
      <FullPost path="/blog/:postId" />
    </Router>
  </div>
)

export default App
