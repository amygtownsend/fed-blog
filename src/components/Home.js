import React, { useState, useEffect } from 'react'
import Header from './Header'
import Selector from './Selector'
import PostList from './PostList'
import Pagination from './Pagination'
import logoColor from '../img/logos/logo-color.png'

const Home = ({ client }) => {
  const [posts, setPosts] = useState([])
  const [skip, setSkip] = useState(0)

  const onChange = newSkip => {
    setSkip(newSkip)
  }

  useEffect(() => {
    const fetchPosts = () =>
      client.getEntries({
        content_type: 'blogPost',
        select:
          'sys.id,fields.title,fields.publishDate,fields.author,fields.content,fields.image,fields.snippet',
        order: '-fields.publishDate',
        limit: 5,
        skip: skip
      })
    fetchPosts().then(response => {
      setPosts(response.items)
    })
  }, [client, skip])

  return (
    <div className="max-w-85vw lg:max-w-994 m-auto">
      <Header logo={logoColor} colorBg={false} />
      <main>
        <Selector />
        <hr className="border-gray-100 border m-0 mx-22" />
        <PostList posts={posts} />
        <hr className="border-gray-100 border m-0 mx-22" />
        <Pagination currentSkip={skip} onPageChange={onChange} />
      </main>
    </div>
  )
}

export default Home
