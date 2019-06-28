import React, { useState, useEffect } from 'react'
import * as Markdown from 'react-markdown'
import Header from './Header'
import PublishDate from './PublishDate'
import logoWhite from '../img/logos/logo-white.png'
import Paragraph from './markdown/Paragraph'
import Heading from './markdown/Heading'

const FullPost = ({ client, postId, location }) => {
  const [fields, setFields] = useState('')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const fetchPosts = async () =>
      await client.getEntries({
        content_type: 'blogPost',
        'sys.id': postId,
        select: [
          'sys.id',
          'fields.title',
          'fields.publishDate',
          'fields.author',
          'fields.content',
          'fields.category'
        ].join(',')
      })
    fetchPosts()
      .then(r => {
        return r.items[0]
      })
      .then(r => {
        setFields(r.fields)
        setLoaded(true)
      })
  }, [client, postId])

  const checkExcerpt = () => {
    if (location.state) {
      return location.state.index
    } else {
      return 0
    }
  }

  const content = () => {
    return (
      <>
        <Header index={checkExcerpt()} logo={logoWhite} colorBg={true} />
        <main className="max-w-85vw lg:max-w-950 m-auto">
          <div className="bg-white text-center py-30">
            <h1 className="text-48 lg:text-100 font-extralight leading-snug uppercase mb-48 px-22">
              {fields.title}
            </h1>
            <hr className="border-gray-100 border m-0" />
            <div className="leading-tight my-30">
              <span className="font-medium text-18 text-purple block">
                {fields.name}
              </span>
              <PublishDate date={fields.publishDate} />
            </div>
            <hr className="border-gray-100 border m-0" />
          </div>
          <Markdown
            source={fields.content}
            className="text-left mt-30"
            renderers={{ paragraph: Paragraph, heading: Heading }}
          />
        </main>
      </>
    )
  }

  return loaded ? content() : null
}

export default FullPost
