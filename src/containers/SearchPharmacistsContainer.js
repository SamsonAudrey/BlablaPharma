import { connect } from "react-redux";
import SearchPharmacistsPage from "../Pages/SearchPharmacistsPage";

const mapStateToProps = state => {
  return { test: "t" };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    reset: () => dispatch({ type: "RESET" })
  };
};

const SearchPharmacists = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPharmacistsPage);

export default SearchPharmacists;
