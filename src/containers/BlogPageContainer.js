import { connect } from 'react-redux';
import BlogPage from '../Pages/BlogPage';

const mapStateToProps = (state) => ({ test: 'tt' });

const mapDispatchToProps = (dispatch) => ({
  // dispatching plain actions
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
  reset: () => dispatch({ type: 'RESET' })
});

const Blog = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPage);

export default Blog;
