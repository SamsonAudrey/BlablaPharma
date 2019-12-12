import { connect } from "react-redux";
import RegisterPage from "../Pages/RegisterPage";

const mapStateToProps = state => {
  return { test: "tt" };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    reset: () => dispatch({ type: "RESET" })
  };
};

const Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);

export default Register;
