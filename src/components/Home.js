import React from 'react'
import Header from './Header'
import Selector from './Selector'
import PostList from './PostList'
import Pagination from './Pagination'
import logoColor from '../img/logos/logo-color.png'

const Home = ({ client }) => (
  <div className="max-w-85vw lg:max-w-994 m-auto">
    <Header logo={logoColor} colorBg={false} />
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
