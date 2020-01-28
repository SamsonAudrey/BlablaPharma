import React, { Component } from 'react';
import BlogListContainer from '../../containers/blog/BlogListContainer';
import SearchBarBlog from '../../containers/blog/BlogSearchBarContainer';

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
