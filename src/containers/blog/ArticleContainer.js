import { connect } from 'react-redux';
import { blogDislike, blogLike } from '../../actions/blog/blogLikeAction';
import BlogListItems from '../../components/blog/BlogListItems';
import { blogSearch } from '../../actions/blog/blogSearchAction';


const mapStateToProps = (state) => ({
  isConnected: state.connection.isConnected
});

const mapDispatchToProps = (dispatch) => ({
  onLike: (articleId) => {
    dispatch(blogLike(articleId));
  },
  onDislike: (articleId) => {
    dispatch(blogDislike(articleId));
  },
  onSearch: (text) => {
    dispatch(blogSearch(text));
  },
});

const Article = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogListItems);

export default Article;
