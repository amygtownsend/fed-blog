import React from 'react'
import { Router } from '@reach/router'
import Home from './components/Home'
import FullPost from './components/FullPost'
import * as contentful from 'contentful'

const client = contentful.createClient({
  space: '8qjtyzvbt0sy',
  accessToken: 'lh2dblbuxtyNoEin-8Sz0UWY5vQnk_a96fdeHl2vAxw'
})

const App = () => (
  <Router>
    <Home path="/" client={client} />
    <FullPost path="/blog/:postId" client={client} />
  </Router>
)

export default App
