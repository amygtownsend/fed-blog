import React from 'react'
import { Router } from '@reach/router'
import Excerpts from './components/Excerpts'
import FullPost from './components/FullPost'

const App = () => (
  <div className="max-w-950 m-auto">
    <Router>
      <Excerpts path="/" />
      <FullPost path=":key" />
    </Router>
  </div>
)

export default App
