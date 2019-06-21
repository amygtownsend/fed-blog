import React from 'react'
import Excerpts from '../components/Excerpts'

const PostList = ({ posts }) => (
  <div className="flex-col">
    {posts.map(({ fields, sys: { id } }, i) => (
      <Excerpts key={id} index={i} id={id} limit={53} {...fields} />
    ))}
  </div>
)

export default PostList
