import React, { Component } from 'react';
import BlogExcerpt from '../BlogExcerpt';
import blogPostData from "../../data/blog-posts.js";

class BlogExcerpts extends Component {
  fullData = blogPostData;
  state = {
    data: [],
  }

  componentDidMount() {
    this.setState({ 
      data: this.fullData.slice()
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