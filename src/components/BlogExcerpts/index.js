import React, { Component } from 'react';
import BlogExcerpt from '../BlogExcerpt';

class BlogExcerpts extends Component {
  json = require('../../data/blog-posts.json');
  state = {
    data: [],
  }

  componentDidMount() {
    this.setState({ 
      data: this.json.slice()
     })
  }

  renderExcerpt = ({ index, picture, author, title, body, date }) => {
    return (
      <BlogExcerpt key={index} picture={picture} author={author} title={title} body={body} date={date}/>
    )
  }

  render() {
    return (
      <div>
        {this.state.data.map(this.renderExcerpt)}
      </div>
    )
  }
}

export default BlogExcerpts;