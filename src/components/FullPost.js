import React from 'react'

const FullPost = ({
  location: {
    state: {
      excerptData: { key, author, title, body, date, month, day, year }
    }
  }
}) => (
  // @TODO Style full post page
  <div key={key} className="text-center">
    <h1 className="text-36">{title}</h1>
    <span className="text-18 block">{author}</span>
    <time dateTime={date}>
      {month} {day}, {year}
    </time>
    <p className="text-left">{body}</p>
  </div>
)

export default FullPost
