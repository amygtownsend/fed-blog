import React, { useState, useEffect } from 'react'
import Header from './Header'
import Selector from './Selector'
import Excerpts from '../components/Excerpts'
import Pagination from './Pagination'
import logoColor from '../img/logos/logo-color.png'

const Home = ({ client }) => {
  const [posts, setPosts] = useState([])
  const [categoryId, setCategoryId] = useState('')
  const [total, setTotal] = useState(0)
  const [skip, setSkip] = useState(0)
  const LIMIT = 5
  const [count, setCount] = useState(LIMIT)

  const useSelector = e => {
    setSkip(0)
    setCount(LIMIT)
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
        limit: LIMIT,
        skip: skip
      })
    fetchPosts().then(r => {
      setTotal(r.total)
      setPosts(r.items)
    })
  }, [client, skip, categoryId])

  return (
    <div className="max-w-85vw lg:max-w-994 m-auto">
      <Header logo={logoColor} colorBg={false} />
      <main>
        <Selector
          client={client}
          categoryId={categoryId}
          setCategoryId={useSelector}
        />
        <hr className="border-gray-100 border m-0 mx-22" />
        <div className="flex-col">
          {posts.map(({ fields, sys: { id } }, i) => (
            <Excerpts key={id} index={i} id={id} limit={53} {...fields} />
          ))}
        </div>
        <hr className="border-gray-100 border m-0 mx-22" />
        <Pagination
          total={total}
          skip={skip}
          setSkip={setSkip}
          count={count}
          setCount={setCount}
          limit={LIMIT}
        />
      </main>
    </div>
  )
}

export default Home
