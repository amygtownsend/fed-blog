import React, { useState, useEffect } from 'react'
import Home from './Home'
import * as contentful from 'contentful'

const Data = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const client = contentful.createClient({
      space: '8qjtyzvbt0sy',
      accessToken: 'lh2dblbuxtyNoEin-8Sz0UWY5vQnk_a96fdeHl2vAxw'
    })
    const fetchPosts = () =>
      client.getEntries({
        content_type: 'blogPost'
      })
    fetchPosts().then(response => {
      setPosts(response.items)
    })
  }, [])

  return <Home data={posts} />
}

export default Data
