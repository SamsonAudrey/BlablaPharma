import { connect } from 'react-redux';
import BlogSearchBar from '../../components/Blog/BlogSearchBar';
import { blogSearch, updateSearchTextBlog } from '../../actions/blog/blogSearchAction';

const mapStateToProps = (state) => ({
  text: state.searchBlog.text
});

const mapDispatchToProps = (dispatch) => ({
  onTextUpdate: (text) => {
    dispatch(updateSearchTextBlog(text));
  },
  onSearch: (text) => {
    dispatch(blogSearch(text));
  }
});

const SearchBarBlog = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogSearchBar);

export default SearchBarBlog;
