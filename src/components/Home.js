import React from 'react'
import Header from './Header'
import Selector from './Selector'
import PostList from './PostList'
import Pagination from './Pagination'

const Home = ({ data }) => (
  <div>
    <Header />
    <main>
      <Selector />
      <hr className="border-gray-100 border m-0 mx-30" />
      <PostList data={data} />
      <hr className="border-gray-100 border m-0 mx-30" />
      <Pagination />
    </main>
  </div>
)

export default Home
