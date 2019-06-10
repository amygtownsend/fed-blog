import React from 'react';
import './styles.css';

function BlogExcerpt({ picture, author, title, body, date }) {
  return (
    <div>
      <img src={picture} alt="pic"/>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <h3>{date}</h3>
      <p>{body}</p>
    </div>
  )
}

export default BlogExcerpt;