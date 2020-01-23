import React, { Component } from 'react';
import BlogListContainer from '../containers/Blog/BlogListContainer';
import SearchBarBlog from '../containers/Blog/BlogSearchBarContainer';

class Blog extends Component {
  render() {
    return (
      <>
        <SearchBarBlog />
        <BlogListContainer />
      </>
    );
  }
}

export default Blog;
