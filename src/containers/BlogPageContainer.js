import { connect } from "react-redux";
import BlogPage from "../Pages/BlogPage";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {};
};

const Blog = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPage);

export default Blog;
