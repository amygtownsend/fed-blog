import React, { Component } from 'react';
import BlogExcerpt from '../BlogExcerpt';
import blogPostData from "../../data/blog-posts.js";
import './styles.css';

class BlogExcerpts extends Component {
  constructor(props) {
    super(props);
    this.fullData = blogPostData;
    this.state = {
      data: this.fullData.slice(),
    }
  }

  createExcerpt = ({ key, picture, author, title, body, date }) => {
    return (
      <BlogExcerpt key={key} picture={picture} author={author} title={title} body={body} date={date}/>
    )
  }

  createExcerpts = (data) => {
    const post = {
      key: "",
      picture: "",
      author: "",
      title: "",
      body: "",
      date: ""
    }
    let { key, picture, author, title, body, date } = post;
    let excerpts = [];
    data.forEach((r) => {
      key = r.index;
      picture = r.picture;
      author = r.author;
      title = r.title;
      body = r.body;
      date = r.date;
      excerpts.push(this.createExcerpt({ key, picture, author, title, body, date }));
    })
    return excerpts;
  }

  render() {
    return (
      <div>
        {this.createExcerpts(this.state.data)}
      </div>
    )
  }
}

export default BlogExcerpts;