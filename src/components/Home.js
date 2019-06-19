import React from 'react'
import Header from './Header'
import Selector from './Selector'
import PostList from './PostList'
import Pagination from './Pagination'

const Home = ({ client }) => (
  <div className="max-w-994 m-auto">
    <Header />
    <main>
      <Selector />
      <hr className="border-gray-100 border m-0 mx-22" />
      <PostList client={client} />
      <hr className="border-gray-100 border m-0 mx-22" />
      <Pagination />
    </main>
  </div>
)

export default Home
