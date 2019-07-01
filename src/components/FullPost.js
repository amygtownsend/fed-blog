import React, { useState, useEffect } from 'react'
import * as Markdown from 'react-markdown'
import Logo from './Logo'
import PublishDate from './PublishDate'
import logoWhite from '../img/logos/logo-white.png'
import Paragraph from './markdown/Paragraph'
import Heading from './markdown/Heading'
import Divider from './Divider'
const cx = require('classnames')

const FullPost = ({ client, postId, location }) => {
  const [fields, setFields] = useState('')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const fetchPosts = () =>
      client.getEntries({
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

  // Checks for Link state from Excerpt for bg color style
  const checkForExcerptIndex = () => {
    if (location.state) {
      return location.state.index
    } else {
      return 0
    }
  }

  // checkForExcerptIndex returns either Excerpt index for bg color style or 0 which defaults to green
  const headerClasses = cx('pt-10 h-auto md:h-678 mb-0 md:-mb-48', {
    'bg-green-200': checkForExcerptIndex() % 2 === 0,
    'bg-blue-200': checkForExcerptIndex() % 2 !== 0
  })

  const content = () => {
    return (
      <>
        <header className={headerClasses}>
          {/* Add blog post image */}
          <Logo logoVariant={logoWhite} />
        </header>
        <main className="max-w-85vw lg:max-w-950 m-auto">
          <div className="bg-white text-center py-30">
            <h1 className="text-48 lg:text-100 font-extralight leading-snug uppercase mb-48 px-22">
              {fields.title}
            </h1>
            <Divider />
            <div className="leading-tight my-30">
              <span className="font-medium text-18 text-purple block">
                {fields.author.fields.name}
              </span>
              <PublishDate date={fields.publishDate} />
            </div>
            <Divider />
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
