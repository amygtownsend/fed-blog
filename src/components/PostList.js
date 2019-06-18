import React, { useState, useEffect } from 'react'
import Excerpts from '../components/Excerpts'

const PostList = ({ client }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = () =>
      client.getEntries({
        content_type: 'blogPost',
        select:
          'sys.id,fields.title,fields.publishDate,fields.author,fields.content,fields.image,fields.snippet'
      })
    fetchPosts().then(response => {
      setPosts(response.items)
    })
  }, [client])

  return (
    <div className="flex-col">
      {posts.map(({ fields, sys: { id } }, i) => (
        <Excerpts key={id} index={i} id={id} limit={53} {...fields} />
      ))}
    </div>
  )
}

export default PostList
