import React, { useState, useEffect } from 'react'
import * as Markdown from 'react-markdown'
import Header from './Header'
import ThemeContext from './ThemeContext'
import logoWhite from '../img/logos/logo-white.png'

const Paragraph = ({ children }) => (
  <p className="leading-loose text-17 my-22">{children}</p>
)

const Heading = ({ children }) => (
  <h2 className="font-regular text-22 my-36">{children}</h2>
)

const FullPost = ({
  client,
  location: {
    state: {
      excerptData: { id, title, publishDate, name, month, day, year }
    }
  }
}) => {
  const [content, setContent] = useState('')

  useEffect(() => {
    const fetchPosts = () =>
      client.getEntries({
        content_type: 'blogPost',
        'sys.id': id,
        select: 'fields.content'
      })
    fetchPosts()
      .then(r => {
        return r.items[0]
      })
      .then(r => {
        return r.fields
      })
      .then(r => {
        setContent(r.content)
      })
  }, [client, id])

  return (
    <>
      <ThemeContext.Provider value={logoWhite}>
        <Header />
      </ThemeContext.Provider>
      <div key={id} className="text-center">
        <h1 className="text-100 font-extralight leading-snug uppercase mt-30 mb-48">
          {title}
        </h1>
        <hr className="border-gray-100 border m-0 mx-30" />
        <div className="leading-tight my-30">
          <span className="font-medium text-18 text-purple block">{name}</span>
          <time className="font-medium text-18" dateTime={publishDate}>
            {month} {day}, {year}
          </time>
        </div>
        <hr className="border-gray-100 border m-0 mx-30" />
        <Markdown
          source={content}
          className="text-left mt-60 mx-30"
          renderers={{ paragraph: Paragraph, heading: Heading }}
        />
      </div>
    </>
  )
}

export default FullPost
