import React, { useState, useEffect } from 'react'
import Header from './Header'
import Selector from './Selector'
import Excerpts from '../components/Excerpts'
import Pagination from './Pagination'
import logoColor from '../img/logos/logo-color.png'

const Home = ({ client }) => {
  const [posts, setPosts] = useState([])
  const [value, setValue] = useState('all')
  const [total, setTotal] = useState(0)
  const [skip, setSkip] = useState(0)
  const LIMIT = 5

  const usePagination = newSkip => {
    setSkip(newSkip)
  }

  const useSelector = e => {
    setValue(e.target.value)
  }

  useEffect(() => {
    const fetchPosts = () =>
      client.getEntries({
        content_type: 'blogPost',
        select:
          'sys.id,fields.title,fields.publishDate,fields.author,fields.content,fields.image,fields.snippet,fields.category',
        order: '-fields.publishDate',
        limit: LIMIT,
        skip: skip
      })
    fetchPosts().then(r => {
      setTotal(r.total)
      const filteredPosts = r.items.filter(({ fields: { category } }) => {
        let arr = []
        category.map(({ sys: { id } }) => arr.push(id))
        return arr.includes(value) || value === 'all'
      })
      setPosts(filteredPosts)
    })
  }, [client, skip, value])

  return (
    <div className="max-w-85vw lg:max-w-994 m-auto">
      <Header logo={logoColor} colorBg={false} />
      <main>
        <Selector client={client} value={value} setValue={useSelector} />
        <hr className="border-gray-100 border m-0 mx-22" />
        <div className="flex-col">
          {posts.map(({ fields, sys: { id } }, i) => (
            <Excerpts key={id} index={i} id={id} limit={53} {...fields} />
          ))}
        </div>
        <hr className="border-gray-100 border m-0 mx-22" />
        <Pagination
          total={total}
          currentSkip={skip}
          limit={LIMIT}
          setSkip={usePagination}
        />
      </main>
    </div>
  )
}

export default Home
