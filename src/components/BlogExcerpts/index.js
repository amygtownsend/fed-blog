import React, { useState, useEffect } from 'react';
import json from '../../data/blog-posts.json';
import BlogExcerpt from '../BlogExcerpt';

const BlogExcerpts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(json.slice());
  }, []);

  const renderExcerpt = ({ index, picture, author, title, body, date }) => {
    return (
      <BlogExcerpt
        key={index}
        picture={picture}
        author={author}
        title={title}
        body={body}
        date={date}
      />
    );
  };

  return <div>{data.map(renderExcerpt)}</div>;
};

export default BlogExcerpts;
