import React from 'react'
import Excerpts from '../components/Excerpts'

const PostList = ({ data }) => (
  <div className="flex-col">
    {data.map(({ fields }, i) => (
      <Excerpts key={i} index={i} limit={53} {...fields} />
    ))}
  </div>
)

export default PostList
