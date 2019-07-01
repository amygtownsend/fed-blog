import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import Selector from './Selector'
import Excerpt from '../components/Excerpt'
import Pagination from './Pagination'
import Divider from './Divider'
import logoColor from '../img/logos/logo-color.png'

const Home = ({ client }) => {
  const [posts, setPosts] = useState([])
  const [categoryId, setCategoryId] = useState('')
  const [totalPosts, setTotalPosts] = useState(0)
  const [postSkipCount, setPostSkipCount] = useState(0)
  const MAX_POSTS_PER_VIEW = 5
  const [postViewCount, setPostViewCount] = useState(MAX_POSTS_PER_VIEW)

  const useSelector = e => {
    setPostSkipCount(0)
    setPostViewCount(MAX_POSTS_PER_VIEW)
    setCategoryId(e.target.value)
  }

  useEffect(() => {
    const fetchPosts = () =>
      client.getEntries({
        content_type: 'blogPost',
        select: [
          'sys.id',
          'fields.title',
          'fields.publishDate',
          'fields.author',
          'fields.content',
          'fields.imageLarge',
          'fields.snippet',
          'fields.category'
        ].join(','),
        order: '-fields.publishDate',
        'fields.category.sys.id': categoryId,
        limit: MAX_POSTS_PER_VIEW,
        skip: postSkipCount
      })
    fetchPosts().then(r => {
      setTotalPosts(r.total)
      setPosts(r.items)
    })
  }, [client, postSkipCount, categoryId])

  return (
    <div className="max-w-85vw lg:max-w-994 m-auto">
      <header className="pt-10 pb-24">
        {/* Add blog post image */}
        <Logo logoVariant={logoColor} />
      </header>
      <main>
        <Selector
          client={client}
          categoryId={categoryId}
          setCategoryId={useSelector}
        />
        <div className="mx-30">
          <Divider />
        </div>
        <div className="flex-col">
          {posts.map(({ fields, sys: { id } }, i) => (
            // Each excerpt limited to 53 words, per design
            <Excerpt key={id} index={i} id={id} limit={53} {...fields} />
          ))}
        </div>
        <div className="mx-30">
          <Divider />
        </div>
        <Pagination
          totalPosts={totalPosts}
          maxPostsPerView={MAX_POSTS_PER_VIEW}
          postSkipCount={postSkipCount}
          postViewCount={postViewCount}
          setPostSkipCount={setPostSkipCount}
          setPostViewCount={setPostViewCount}
        />
      </main>
    </div>
  )
}

export default Home
