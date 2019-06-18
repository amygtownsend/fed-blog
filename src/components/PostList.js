import React from 'react'
import { DataContext } from '../App'
import Excerpts from '../components/Excerpts'

const PostList = () => (
  <DataContext.Consumer>
    {value => <Excerpts data={value} />}
  </DataContext.Consumer>
)

export default PostList
