import { connect } from 'react-redux';
import BlogList from '../../components/Blog/BlogList';
import { createLoadingSelector } from '../../utils/loadingSelector';
import { blogSearch } from '../../actions/blog/blogSearchAction';

const loadingSelector = createLoadingSelector(['BLOG_SEARCH']);

const mapStateToProps = (state) =>
  // console.log('BLOOOOOOGGGGGG');
  // console.log(state);
  ({
    blog: state.blog,
    isFetching: loadingSelector(state)
  });

const mapDispatchToProps = (dispatch) => ({
  onSearch: (text) => {
    dispatch(blogSearch(text));
  }
});

const Blog = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList);

export default Blog;
