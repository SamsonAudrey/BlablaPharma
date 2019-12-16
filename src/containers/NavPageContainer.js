import { connect } from "react-redux";
import NavigationPage from "../Pages/NavigationPage";

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

const Nav = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationPage);

export default Nav;
