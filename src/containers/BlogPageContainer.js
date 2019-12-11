import { connect } from "react-redux";
import BlogPage from "../Pages/BlogPage";

const mapStateToProps = state => {
  return { test : 'tt'}
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' })
  }
}

const Blog = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(BlogPage);

  export default Blog;
