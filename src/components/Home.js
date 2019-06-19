import React from 'react'
import Header from './Header'
import Selector from './Selector'
import PostList from './PostList'
import Pagination from './Pagination'

const Home = ({ client }) => (
  <>
    <Header />
    <main>
      <Selector />
      <hr className="border-gray-100 border m-0 mx-30" />
      <PostList client={client} />
      <hr className="border-gray-100 border m-0 mx-30" />
      <Pagination />
    </main>
  </>
)

export default Home
